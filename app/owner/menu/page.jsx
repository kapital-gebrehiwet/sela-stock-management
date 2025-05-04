'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MenuManagement() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [menuItems, setMenuItems] = useState([]); // DB items
  const [localItems, setLocalItems] = useState([]); // Local batch
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'food',
    price: '',
    image: null,
    imagePreview: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated' && session.user.role !== 'owner') {
      router.push('/');
    } else {
      fetchMenuItems();
    }
  }, [status, session, router]);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('/api/menu');
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await response.json();
      setMenuItems(Array.isArray(data) ? data : []);
    } catch (error) {
      setError('Failed to fetch menu items');
      setMenuItems([]);
    }
  };

  const handleAddLocal = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price || !formData.image) {
      setError('All fields including image are required.');
      return;
    }
    setLocalItems([
      ...localItems,
      {
        ...formData,
        id: Date.now().toString(),
        imagePreview: formData.imagePreview,
      },
    ]);
    setFormData({ name: '', category: 'food', price: '', image: null, imagePreview: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
    setError('');
  };

  const handleRemoveLocal = (id) => {
    setLocalItems(localItems.filter((item) => item.id !== id));
  };

  const handleFinishMenu = async () => {
    setLoading(true);
    setError('');
    try {
      // Prepare items for batch API: convert File to base64
      const itemsToSend = await Promise.all(
        localItems.map(async (item) => {
          let imageDataUrl = '';
          if (item.image) {
            imageDataUrl = item.imagePreview;
          }
          return {
            name: item.name,
            category: item.category,
            price: item.price,
            image: item.image ? { name: item.image.name } : null,
            imageDataUrl,
          };
        })
      );
      const response = await fetch('/api/menu/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemsToSend),
      });
      if (!response.ok) throw new Error('Failed to save menu items');
      setLocalItems([]);
      await fetchMenuItems();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    // Dynamically import both libraries
    const jsPDFModule = await import('jspdf');
    const autoTable = (await import('jspdf-autotable')).default;
    const doc = new jsPDFModule.default();

    doc.text('Menu', 14, 16);
    const tableData = [
      ...localItems.map((item) => [item.name, item.category, item.price]),
      ...menuItems.map((item) => [item.name, item.category, item.price]),
    ];
    autoTable(doc, {
      head: [['Name', 'Category', 'Price']],
      body: tableData,
      startY: 22,
    });
    doc.save('menu.pdf');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (ev) => setFormData((prev) => ({ ...prev, imagePreview: ev.target.result }));
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, image: null, imagePreview: '' }));
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Menu Management</h1>
        <button
          onClick={handleExportPDF}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Export to PDF
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleAddLocal} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
            {formData.imagePreview && (
              <img src={formData.imagePreview} alt="Preview" className="mt-2 h-24 object-contain" />
            )}
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Item
          </button>
        </div>
      </form>

      {/* Local Items Table */}
      {localItems.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Items to be added</h2>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Category</th>
                <th className="border px-2 py-1">Price</th>
                <th className="border px-2 py-1">Image</th>
                <th className="border px-2 py-1">Remove</th>
              </tr>
            </thead>
            <tbody>
              {localItems.map((item) => (
                <tr key={item.id}>
                  <td className="border px-2 py-1">{item.name}</td>
                  <td className="border px-2 py-1 capitalize">{item.category}</td>
                  <td className="border px-2 py-1">{item.price} BIRR</td>
                  <td className="border px-2 py-1">
                    {item.imagePreview && (
                      <img src={item.imagePreview} alt="Preview" className="h-12 object-contain" />
                    )}
                  </td>
                  <td className="border px-2 py-1">
                    <button
                      onClick={() => handleRemoveLocal(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleFinishMenu}
            disabled={loading}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Finish Menu
          </button>
        </div>
      )}

      {/* Saved Items Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Current Menu</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Category</th>
              <th className="border px-2 py-1">Price</th>
              <th className="border px-2 py-1">Image</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-2 py-1">{item.name}</td>
                <td className="border px-2 py-1 capitalize">{item.category}</td>
                <td className="border px-2 py-1">{item.price.toFixed(2)} BIRR</td>
                <td className="border px-2 py-1">
                  <Image
                    src={item.image && item.image.startsWith('/') ? item.image : '/default-menu-image.png'}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 