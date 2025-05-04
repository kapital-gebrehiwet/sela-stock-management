
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model MonthSelection
 * 
 */
export type MonthSelection = $Result.DefaultSelection<Prisma.$MonthSelectionPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>
/**
 * Model StockEntry
 * 
 */
export type StockEntry = $Result.DefaultSelection<Prisma.$StockEntryPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model OwnerFund
 * 
 */
export type OwnerFund = $Result.DefaultSelection<Prisma.$OwnerFundPayload>
/**
 * Model ManagerExpense
 * 
 */
export type ManagerExpense = $Result.DefaultSelection<Prisma.$ManagerExpensePayload>
/**
 * Model SalesReport
 * 
 */
export type SalesReport = $Result.DefaultSelection<Prisma.$SalesReportPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthSelection`: Exposes CRUD operations for the **MonthSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthSelections
    * const monthSelections = await prisma.monthSelection.findMany()
    * ```
    */
  get monthSelection(): Prisma.MonthSelectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockEntry`: Exposes CRUD operations for the **StockEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockEntries
    * const stockEntries = await prisma.stockEntry.findMany()
    * ```
    */
  get stockEntry(): Prisma.StockEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownerFund`: Exposes CRUD operations for the **OwnerFund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnerFunds
    * const ownerFunds = await prisma.ownerFund.findMany()
    * ```
    */
  get ownerFund(): Prisma.OwnerFundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managerExpense`: Exposes CRUD operations for the **ManagerExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagerExpenses
    * const managerExpenses = await prisma.managerExpense.findMany()
    * ```
    */
  get managerExpense(): Prisma.ManagerExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesReport`: Exposes CRUD operations for the **SalesReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesReports
    * const salesReports = await prisma.salesReport.findMany()
    * ```
    */
  get salesReport(): Prisma.SalesReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    MonthSelection: 'MonthSelection',
    DailyReport: 'DailyReport',
    StockEntry: 'StockEntry',
    Staff: 'Staff',
    OwnerFund: 'OwnerFund',
    ManagerExpense: 'ManagerExpense',
    SalesReport: 'SalesReport',
    MenuItem: 'MenuItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "monthSelection" | "dailyReport" | "stockEntry" | "staff" | "ownerFund" | "managerExpense" | "salesReport" | "menuItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      MonthSelection: {
        payload: Prisma.$MonthSelectionPayload<ExtArgs>
        fields: Prisma.MonthSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          findFirst: {
            args: Prisma.MonthSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          findMany: {
            args: Prisma.MonthSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>[]
          }
          create: {
            args: Prisma.MonthSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          createMany: {
            args: Prisma.MonthSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>[]
          }
          delete: {
            args: Prisma.MonthSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          update: {
            args: Prisma.MonthSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          deleteMany: {
            args: Prisma.MonthSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthSelectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>[]
          }
          upsert: {
            args: Prisma.MonthSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthSelectionPayload>
          }
          aggregate: {
            args: Prisma.MonthSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthSelection>
          }
          groupBy: {
            args: Prisma.MonthSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<MonthSelectionCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
      StockEntry: {
        payload: Prisma.$StockEntryPayload<ExtArgs>
        fields: Prisma.StockEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findFirst: {
            args: Prisma.StockEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findMany: {
            args: Prisma.StockEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          create: {
            args: Prisma.StockEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          createMany: {
            args: Prisma.StockEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          delete: {
            args: Prisma.StockEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          update: {
            args: Prisma.StockEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          deleteMany: {
            args: Prisma.StockEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          upsert: {
            args: Prisma.StockEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          aggregate: {
            args: Prisma.StockEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockEntry>
          }
          groupBy: {
            args: Prisma.StockEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockEntryCountArgs<ExtArgs>
            result: $Utils.Optional<StockEntryCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      OwnerFund: {
        payload: Prisma.$OwnerFundPayload<ExtArgs>
        fields: Prisma.OwnerFundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          findFirst: {
            args: Prisma.OwnerFundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          findMany: {
            args: Prisma.OwnerFundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>[]
          }
          create: {
            args: Prisma.OwnerFundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          createMany: {
            args: Prisma.OwnerFundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerFundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>[]
          }
          delete: {
            args: Prisma.OwnerFundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          update: {
            args: Prisma.OwnerFundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          deleteMany: {
            args: Prisma.OwnerFundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerFundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerFundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>[]
          }
          upsert: {
            args: Prisma.OwnerFundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerFundPayload>
          }
          aggregate: {
            args: Prisma.OwnerFundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnerFund>
          }
          groupBy: {
            args: Prisma.OwnerFundGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerFundGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerFundCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerFundCountAggregateOutputType> | number
          }
        }
      }
      ManagerExpense: {
        payload: Prisma.$ManagerExpensePayload<ExtArgs>
        fields: Prisma.ManagerExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          findFirst: {
            args: Prisma.ManagerExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          findMany: {
            args: Prisma.ManagerExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>[]
          }
          create: {
            args: Prisma.ManagerExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          createMany: {
            args: Prisma.ManagerExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>[]
          }
          delete: {
            args: Prisma.ManagerExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          update: {
            args: Prisma.ManagerExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          deleteMany: {
            args: Prisma.ManagerExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>[]
          }
          upsert: {
            args: Prisma.ManagerExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerExpensePayload>
          }
          aggregate: {
            args: Prisma.ManagerExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagerExpense>
          }
          groupBy: {
            args: Prisma.ManagerExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerExpenseCountAggregateOutputType> | number
          }
        }
      }
      SalesReport: {
        payload: Prisma.$SalesReportPayload<ExtArgs>
        fields: Prisma.SalesReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          findFirst: {
            args: Prisma.SalesReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          findMany: {
            args: Prisma.SalesReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>[]
          }
          create: {
            args: Prisma.SalesReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          createMany: {
            args: Prisma.SalesReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>[]
          }
          delete: {
            args: Prisma.SalesReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          update: {
            args: Prisma.SalesReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          deleteMany: {
            args: Prisma.SalesReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>[]
          }
          upsert: {
            args: Prisma.SalesReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          aggregate: {
            args: Prisma.SalesReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesReport>
          }
          groupBy: {
            args: Prisma.SalesReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesReportCountArgs<ExtArgs>
            result: $Utils.Optional<SalesReportCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    monthSelection?: MonthSelectionOmit
    dailyReport?: DailyReportOmit
    stockEntry?: StockEntryOmit
    staff?: StaffOmit
    ownerFund?: OwnerFundOmit
    managerExpense?: ManagerExpenseOmit
    salesReport?: SalesReportOmit
    menuItem?: MenuItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    monthSelections: number
    dailyReports: number
    stockEntries: number
    staff: number
    ownerFunds: number
    managerExpenses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    monthSelections?: boolean | UserCountOutputTypeCountMonthSelectionsArgs
    dailyReports?: boolean | UserCountOutputTypeCountDailyReportsArgs
    stockEntries?: boolean | UserCountOutputTypeCountStockEntriesArgs
    staff?: boolean | UserCountOutputTypeCountStaffArgs
    ownerFunds?: boolean | UserCountOutputTypeCountOwnerFundsArgs
    managerExpenses?: boolean | UserCountOutputTypeCountManagerExpensesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonthSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthSelectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerFundWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagerExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    monthlyFee: number | null
  }

  export type UserSumAggregateOutputType = {
    monthlyFee: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    isOwner: boolean | null
    country: string | null
    monthlyFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    isOwner: boolean | null
    country: string | null
    monthlyFee: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    isOwner: number
    country: number
    monthlyFee: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    monthlyFee?: true
  }

  export type UserSumAggregateInputType = {
    monthlyFee?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isOwner?: true
    country?: true
    monthlyFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isOwner?: true
    country?: true
    monthlyFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isOwner?: true
    country?: true
    monthlyFee?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string
    isOwner: boolean
    country: string | null
    monthlyFee: number | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isOwner?: boolean
    country?: boolean
    monthlyFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    monthSelections?: boolean | User$monthSelectionsArgs<ExtArgs>
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    stockEntries?: boolean | User$stockEntriesArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    ownerFunds?: boolean | User$ownerFundsArgs<ExtArgs>
    managerExpenses?: boolean | User$managerExpensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isOwner?: boolean
    country?: boolean
    monthlyFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isOwner?: boolean
    country?: boolean
    monthlyFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isOwner?: boolean
    country?: boolean
    monthlyFee?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "isOwner" | "country" | "monthlyFee" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    monthSelections?: boolean | User$monthSelectionsArgs<ExtArgs>
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    stockEntries?: boolean | User$stockEntriesArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    ownerFunds?: boolean | User$ownerFundsArgs<ExtArgs>
    managerExpenses?: boolean | User$managerExpensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      monthSelections: Prisma.$MonthSelectionPayload<ExtArgs>[]
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
      stockEntries: Prisma.$StockEntryPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
      ownerFunds: Prisma.$OwnerFundPayload<ExtArgs>[]
      managerExpenses: Prisma.$ManagerExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string
      isOwner: boolean
      country: string | null
      monthlyFee: number | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthSelections<T extends User$monthSelectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$monthSelectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyReports<T extends User$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockEntries<T extends User$stockEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$stockEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownerFunds<T extends User$ownerFundsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownerFundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managerExpenses<T extends User$managerExpensesArgs<ExtArgs> = {}>(args?: Subset<T, User$managerExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isOwner: FieldRef<"User", 'Boolean'>
    readonly country: FieldRef<"User", 'String'>
    readonly monthlyFee: FieldRef<"User", 'Float'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.monthSelections
   */
  export type User$monthSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    where?: MonthSelectionWhereInput
    orderBy?: MonthSelectionOrderByWithRelationInput | MonthSelectionOrderByWithRelationInput[]
    cursor?: MonthSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthSelectionScalarFieldEnum | MonthSelectionScalarFieldEnum[]
  }

  /**
   * User.dailyReports
   */
  export type User$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * User.stockEntries
   */
  export type User$stockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    cursor?: StockEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * User.ownerFunds
   */
  export type User$ownerFundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    where?: OwnerFundWhereInput
    orderBy?: OwnerFundOrderByWithRelationInput | OwnerFundOrderByWithRelationInput[]
    cursor?: OwnerFundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnerFundScalarFieldEnum | OwnerFundScalarFieldEnum[]
  }

  /**
   * User.managerExpenses
   */
  export type User$managerExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    where?: ManagerExpenseWhereInput
    orderBy?: ManagerExpenseOrderByWithRelationInput | ManagerExpenseOrderByWithRelationInput[]
    cursor?: ManagerExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagerExpenseScalarFieldEnum | ManagerExpenseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model MonthSelection
   */

  export type AggregateMonthSelection = {
    _count: MonthSelectionCountAggregateOutputType | null
    _avg: MonthSelectionAvgAggregateOutputType | null
    _sum: MonthSelectionSumAggregateOutputType | null
    _min: MonthSelectionMinAggregateOutputType | null
    _max: MonthSelectionMaxAggregateOutputType | null
  }

  export type MonthSelectionAvgAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type MonthSelectionSumAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type MonthSelectionMinAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type MonthSelectionMaxAggregateOutputType = {
    id: string | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type MonthSelectionCountAggregateOutputType = {
    id: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type MonthSelectionAvgAggregateInputType = {
    month?: true
    year?: true
  }

  export type MonthSelectionSumAggregateInputType = {
    month?: true
    year?: true
  }

  export type MonthSelectionMinAggregateInputType = {
    id?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type MonthSelectionMaxAggregateInputType = {
    id?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type MonthSelectionCountAggregateInputType = {
    id?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type MonthSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthSelection to aggregate.
     */
    where?: MonthSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthSelections to fetch.
     */
    orderBy?: MonthSelectionOrderByWithRelationInput | MonthSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthSelections
    **/
    _count?: true | MonthSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthSelectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthSelectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthSelectionMaxAggregateInputType
  }

  export type GetMonthSelectionAggregateType<T extends MonthSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthSelection[P]>
      : GetScalarType<T[P], AggregateMonthSelection[P]>
  }




  export type MonthSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthSelectionWhereInput
    orderBy?: MonthSelectionOrderByWithAggregationInput | MonthSelectionOrderByWithAggregationInput[]
    by: MonthSelectionScalarFieldEnum[] | MonthSelectionScalarFieldEnum
    having?: MonthSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthSelectionCountAggregateInputType | true
    _avg?: MonthSelectionAvgAggregateInputType
    _sum?: MonthSelectionSumAggregateInputType
    _min?: MonthSelectionMinAggregateInputType
    _max?: MonthSelectionMaxAggregateInputType
  }

  export type MonthSelectionGroupByOutputType = {
    id: string
    month: number
    year: number
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: MonthSelectionCountAggregateOutputType | null
    _avg: MonthSelectionAvgAggregateOutputType | null
    _sum: MonthSelectionSumAggregateOutputType | null
    _min: MonthSelectionMinAggregateOutputType | null
    _max: MonthSelectionMaxAggregateOutputType | null
  }

  type GetMonthSelectionGroupByPayload<T extends MonthSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], MonthSelectionGroupByOutputType[P]>
        }
      >
    >


  export type MonthSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthSelection"]>

  export type MonthSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthSelection"]>

  export type MonthSelectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthSelection"]>

  export type MonthSelectionSelectScalar = {
    id?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type MonthSelectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "month" | "year" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["monthSelection"]>
  export type MonthSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MonthSelectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MonthSelectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MonthSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthSelection"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: number
      year: number
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["monthSelection"]>
    composites: {}
  }

  type MonthSelectionGetPayload<S extends boolean | null | undefined | MonthSelectionDefaultArgs> = $Result.GetResult<Prisma.$MonthSelectionPayload, S>

  type MonthSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthSelectionCountAggregateInputType | true
    }

  export interface MonthSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthSelection'], meta: { name: 'MonthSelection' } }
    /**
     * Find zero or one MonthSelection that matches the filter.
     * @param {MonthSelectionFindUniqueArgs} args - Arguments to find a MonthSelection
     * @example
     * // Get one MonthSelection
     * const monthSelection = await prisma.monthSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthSelectionFindUniqueArgs>(args: SelectSubset<T, MonthSelectionFindUniqueArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthSelection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthSelectionFindUniqueOrThrowArgs} args - Arguments to find a MonthSelection
     * @example
     * // Get one MonthSelection
     * const monthSelection = await prisma.monthSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionFindFirstArgs} args - Arguments to find a MonthSelection
     * @example
     * // Get one MonthSelection
     * const monthSelection = await prisma.monthSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthSelectionFindFirstArgs>(args?: SelectSubset<T, MonthSelectionFindFirstArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionFindFirstOrThrowArgs} args - Arguments to find a MonthSelection
     * @example
     * // Get one MonthSelection
     * const monthSelection = await prisma.monthSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthSelections
     * const monthSelections = await prisma.monthSelection.findMany()
     * 
     * // Get first 10 MonthSelections
     * const monthSelections = await prisma.monthSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthSelectionWithIdOnly = await prisma.monthSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthSelectionFindManyArgs>(args?: SelectSubset<T, MonthSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthSelection.
     * @param {MonthSelectionCreateArgs} args - Arguments to create a MonthSelection.
     * @example
     * // Create one MonthSelection
     * const MonthSelection = await prisma.monthSelection.create({
     *   data: {
     *     // ... data to create a MonthSelection
     *   }
     * })
     * 
     */
    create<T extends MonthSelectionCreateArgs>(args: SelectSubset<T, MonthSelectionCreateArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthSelections.
     * @param {MonthSelectionCreateManyArgs} args - Arguments to create many MonthSelections.
     * @example
     * // Create many MonthSelections
     * const monthSelection = await prisma.monthSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthSelectionCreateManyArgs>(args?: SelectSubset<T, MonthSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthSelections and returns the data saved in the database.
     * @param {MonthSelectionCreateManyAndReturnArgs} args - Arguments to create many MonthSelections.
     * @example
     * // Create many MonthSelections
     * const monthSelection = await prisma.monthSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthSelections and only return the `id`
     * const monthSelectionWithIdOnly = await prisma.monthSelection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthSelection.
     * @param {MonthSelectionDeleteArgs} args - Arguments to delete one MonthSelection.
     * @example
     * // Delete one MonthSelection
     * const MonthSelection = await prisma.monthSelection.delete({
     *   where: {
     *     // ... filter to delete one MonthSelection
     *   }
     * })
     * 
     */
    delete<T extends MonthSelectionDeleteArgs>(args: SelectSubset<T, MonthSelectionDeleteArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthSelection.
     * @param {MonthSelectionUpdateArgs} args - Arguments to update one MonthSelection.
     * @example
     * // Update one MonthSelection
     * const monthSelection = await prisma.monthSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthSelectionUpdateArgs>(args: SelectSubset<T, MonthSelectionUpdateArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthSelections.
     * @param {MonthSelectionDeleteManyArgs} args - Arguments to filter MonthSelections to delete.
     * @example
     * // Delete a few MonthSelections
     * const { count } = await prisma.monthSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthSelectionDeleteManyArgs>(args?: SelectSubset<T, MonthSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthSelections
     * const monthSelection = await prisma.monthSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthSelectionUpdateManyArgs>(args: SelectSubset<T, MonthSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthSelections and returns the data updated in the database.
     * @param {MonthSelectionUpdateManyAndReturnArgs} args - Arguments to update many MonthSelections.
     * @example
     * // Update many MonthSelections
     * const monthSelection = await prisma.monthSelection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthSelections and only return the `id`
     * const monthSelectionWithIdOnly = await prisma.monthSelection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthSelectionUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthSelectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthSelection.
     * @param {MonthSelectionUpsertArgs} args - Arguments to update or create a MonthSelection.
     * @example
     * // Update or create a MonthSelection
     * const monthSelection = await prisma.monthSelection.upsert({
     *   create: {
     *     // ... data to create a MonthSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthSelection we want to update
     *   }
     * })
     */
    upsert<T extends MonthSelectionUpsertArgs>(args: SelectSubset<T, MonthSelectionUpsertArgs<ExtArgs>>): Prisma__MonthSelectionClient<$Result.GetResult<Prisma.$MonthSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionCountArgs} args - Arguments to filter MonthSelections to count.
     * @example
     * // Count the number of MonthSelections
     * const count = await prisma.monthSelection.count({
     *   where: {
     *     // ... the filter for the MonthSelections we want to count
     *   }
     * })
    **/
    count<T extends MonthSelectionCountArgs>(
      args?: Subset<T, MonthSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthSelectionAggregateArgs>(args: Subset<T, MonthSelectionAggregateArgs>): Prisma.PrismaPromise<GetMonthSelectionAggregateType<T>>

    /**
     * Group by MonthSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthSelectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthSelectionGroupByArgs['orderBy'] }
        : { orderBy?: MonthSelectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthSelection model
   */
  readonly fields: MonthSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthSelection model
   */
  interface MonthSelectionFieldRefs {
    readonly id: FieldRef<"MonthSelection", 'String'>
    readonly month: FieldRef<"MonthSelection", 'Int'>
    readonly year: FieldRef<"MonthSelection", 'Int'>
    readonly createdAt: FieldRef<"MonthSelection", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthSelection", 'DateTime'>
    readonly createdById: FieldRef<"MonthSelection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonthSelection findUnique
   */
  export type MonthSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MonthSelection to fetch.
     */
    where: MonthSelectionWhereUniqueInput
  }

  /**
   * MonthSelection findUniqueOrThrow
   */
  export type MonthSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MonthSelection to fetch.
     */
    where: MonthSelectionWhereUniqueInput
  }

  /**
   * MonthSelection findFirst
   */
  export type MonthSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MonthSelection to fetch.
     */
    where?: MonthSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthSelections to fetch.
     */
    orderBy?: MonthSelectionOrderByWithRelationInput | MonthSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthSelections.
     */
    cursor?: MonthSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthSelections.
     */
    distinct?: MonthSelectionScalarFieldEnum | MonthSelectionScalarFieldEnum[]
  }

  /**
   * MonthSelection findFirstOrThrow
   */
  export type MonthSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MonthSelection to fetch.
     */
    where?: MonthSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthSelections to fetch.
     */
    orderBy?: MonthSelectionOrderByWithRelationInput | MonthSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthSelections.
     */
    cursor?: MonthSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthSelections.
     */
    distinct?: MonthSelectionScalarFieldEnum | MonthSelectionScalarFieldEnum[]
  }

  /**
   * MonthSelection findMany
   */
  export type MonthSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MonthSelections to fetch.
     */
    where?: MonthSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthSelections to fetch.
     */
    orderBy?: MonthSelectionOrderByWithRelationInput | MonthSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthSelections.
     */
    cursor?: MonthSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthSelections.
     */
    skip?: number
    distinct?: MonthSelectionScalarFieldEnum | MonthSelectionScalarFieldEnum[]
  }

  /**
   * MonthSelection create
   */
  export type MonthSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthSelection.
     */
    data: XOR<MonthSelectionCreateInput, MonthSelectionUncheckedCreateInput>
  }

  /**
   * MonthSelection createMany
   */
  export type MonthSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthSelections.
     */
    data: MonthSelectionCreateManyInput | MonthSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthSelection createManyAndReturn
   */
  export type MonthSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * The data used to create many MonthSelections.
     */
    data: MonthSelectionCreateManyInput | MonthSelectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthSelection update
   */
  export type MonthSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthSelection.
     */
    data: XOR<MonthSelectionUpdateInput, MonthSelectionUncheckedUpdateInput>
    /**
     * Choose, which MonthSelection to update.
     */
    where: MonthSelectionWhereUniqueInput
  }

  /**
   * MonthSelection updateMany
   */
  export type MonthSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthSelections.
     */
    data: XOR<MonthSelectionUpdateManyMutationInput, MonthSelectionUncheckedUpdateManyInput>
    /**
     * Filter which MonthSelections to update
     */
    where?: MonthSelectionWhereInput
    /**
     * Limit how many MonthSelections to update.
     */
    limit?: number
  }

  /**
   * MonthSelection updateManyAndReturn
   */
  export type MonthSelectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * The data used to update MonthSelections.
     */
    data: XOR<MonthSelectionUpdateManyMutationInput, MonthSelectionUncheckedUpdateManyInput>
    /**
     * Filter which MonthSelections to update
     */
    where?: MonthSelectionWhereInput
    /**
     * Limit how many MonthSelections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthSelection upsert
   */
  export type MonthSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthSelection to update in case it exists.
     */
    where: MonthSelectionWhereUniqueInput
    /**
     * In case the MonthSelection found by the `where` argument doesn't exist, create a new MonthSelection with this data.
     */
    create: XOR<MonthSelectionCreateInput, MonthSelectionUncheckedCreateInput>
    /**
     * In case the MonthSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthSelectionUpdateInput, MonthSelectionUncheckedUpdateInput>
  }

  /**
   * MonthSelection delete
   */
  export type MonthSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
    /**
     * Filter which MonthSelection to delete.
     */
    where: MonthSelectionWhereUniqueInput
  }

  /**
   * MonthSelection deleteMany
   */
  export type MonthSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthSelections to delete
     */
    where?: MonthSelectionWhereInput
    /**
     * Limit how many MonthSelections to delete.
     */
    limit?: number
  }

  /**
   * MonthSelection without action
   */
  export type MonthSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthSelection
     */
    select?: MonthSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthSelection
     */
    omit?: MonthSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthSelectionInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    sales: number | null
    credit: number | null
    expenses: number | null
  }

  export type DailyReportSumAggregateOutputType = {
    sales: number | null
    credit: number | null
    expenses: number | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: string | null
    date: Date | null
    sales: number | null
    credit: number | null
    expenses: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    sales: number | null
    credit: number | null
    expenses: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    date: number
    sales: number
    credit: number
    expenses: number
    notes: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    sales?: true
    credit?: true
    expenses?: true
  }

  export type DailyReportSumAggregateInputType = {
    sales?: true
    credit?: true
    expenses?: true
  }

  export type DailyReportMinAggregateInputType = {
    id?: true
    date?: true
    sales?: true
    credit?: true
    expenses?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    date?: true
    sales?: true
    credit?: true
    expenses?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    date?: true
    sales?: true
    credit?: true
    expenses?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: string
    date: Date
    sales: number
    credit: number
    expenses: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    sales?: boolean
    credit?: boolean
    expenses?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    sales?: boolean
    credit?: boolean
    expenses?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    sales?: boolean
    credit?: boolean
    expenses?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectScalar = {
    id?: boolean
    date?: boolean
    sales?: boolean
    credit?: boolean
    expenses?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type DailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "sales" | "credit" | "expenses" | "notes" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["dailyReport"]>
  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      sales: number
      credit: number
      expenses: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReports and returns the data saved in the database.
     * @param {DailyReportCreateManyAndReturnArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports and returns the data updated in the database.
     * @param {DailyReportUpdateManyAndReturnArgs} args - Arguments to update many DailyReports.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReport model
   */
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'String'>
    readonly date: FieldRef<"DailyReport", 'DateTime'>
    readonly sales: FieldRef<"DailyReport", 'Float'>
    readonly credit: FieldRef<"DailyReport", 'Float'>
    readonly expenses: FieldRef<"DailyReport", 'Float'>
    readonly notes: FieldRef<"DailyReport", 'String'>
    readonly createdAt: FieldRef<"DailyReport", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyReport", 'DateTime'>
    readonly createdById: FieldRef<"DailyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport createManyAndReturn
   */
  export type DailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport updateManyAndReturn
   */
  export type DailyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to delete.
     */
    limit?: number
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Model StockEntry
   */

  export type AggregateStockEntry = {
    _count: StockEntryCountAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  export type StockEntryMinAggregateOutputType = {
    id: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type StockEntryMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type StockEntryCountAggregateOutputType = {
    id: number
    date: number
    items: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type StockEntryMinAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type StockEntryMaxAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type StockEntryCountAggregateInputType = {
    id?: true
    date?: true
    items?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type StockEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntry to aggregate.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockEntries
    **/
    _count?: true | StockEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockEntryMaxAggregateInputType
  }

  export type GetStockEntryAggregateType<T extends StockEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateStockEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockEntry[P]>
      : GetScalarType<T[P], AggregateStockEntry[P]>
  }




  export type StockEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithAggregationInput | StockEntryOrderByWithAggregationInput[]
    by: StockEntryScalarFieldEnum[] | StockEntryScalarFieldEnum
    having?: StockEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockEntryCountAggregateInputType | true
    _min?: StockEntryMinAggregateInputType
    _max?: StockEntryMaxAggregateInputType
  }

  export type StockEntryGroupByOutputType = {
    id: string
    date: Date
    items: JsonValue
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: StockEntryCountAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  type GetStockEntryGroupByPayload<T extends StockEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
            : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
        }
      >
    >


  export type StockEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectScalar = {
    id?: boolean
    date?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type StockEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "items" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["stockEntry"]>
  export type StockEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StockEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StockEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StockEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockEntry"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      items: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["stockEntry"]>
    composites: {}
  }

  type StockEntryGetPayload<S extends boolean | null | undefined | StockEntryDefaultArgs> = $Result.GetResult<Prisma.$StockEntryPayload, S>

  type StockEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockEntryCountAggregateInputType | true
    }

  export interface StockEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockEntry'], meta: { name: 'StockEntry' } }
    /**
     * Find zero or one StockEntry that matches the filter.
     * @param {StockEntryFindUniqueArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockEntryFindUniqueArgs>(args: SelectSubset<T, StockEntryFindUniqueArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockEntryFindUniqueOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, StockEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockEntryFindFirstArgs>(args?: SelectSubset<T, StockEntryFindFirstArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, StockEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockEntries
     * const stockEntries = await prisma.stockEntry.findMany()
     * 
     * // Get first 10 StockEntries
     * const stockEntries = await prisma.stockEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockEntryFindManyArgs>(args?: SelectSubset<T, StockEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockEntry.
     * @param {StockEntryCreateArgs} args - Arguments to create a StockEntry.
     * @example
     * // Create one StockEntry
     * const StockEntry = await prisma.stockEntry.create({
     *   data: {
     *     // ... data to create a StockEntry
     *   }
     * })
     * 
     */
    create<T extends StockEntryCreateArgs>(args: SelectSubset<T, StockEntryCreateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockEntries.
     * @param {StockEntryCreateManyArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockEntryCreateManyArgs>(args?: SelectSubset<T, StockEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockEntries and returns the data saved in the database.
     * @param {StockEntryCreateManyAndReturnArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockEntries and only return the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, StockEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockEntry.
     * @param {StockEntryDeleteArgs} args - Arguments to delete one StockEntry.
     * @example
     * // Delete one StockEntry
     * const StockEntry = await prisma.stockEntry.delete({
     *   where: {
     *     // ... filter to delete one StockEntry
     *   }
     * })
     * 
     */
    delete<T extends StockEntryDeleteArgs>(args: SelectSubset<T, StockEntryDeleteArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockEntry.
     * @param {StockEntryUpdateArgs} args - Arguments to update one StockEntry.
     * @example
     * // Update one StockEntry
     * const stockEntry = await prisma.stockEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockEntryUpdateArgs>(args: SelectSubset<T, StockEntryUpdateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockEntries.
     * @param {StockEntryDeleteManyArgs} args - Arguments to filter StockEntries to delete.
     * @example
     * // Delete a few StockEntries
     * const { count } = await prisma.stockEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockEntryDeleteManyArgs>(args?: SelectSubset<T, StockEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockEntries
     * const stockEntry = await prisma.stockEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockEntryUpdateManyArgs>(args: SelectSubset<T, StockEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockEntries and returns the data updated in the database.
     * @param {StockEntryUpdateManyAndReturnArgs} args - Arguments to update many StockEntries.
     * @example
     * // Update many StockEntries
     * const stockEntry = await prisma.stockEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockEntries and only return the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, StockEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockEntry.
     * @param {StockEntryUpsertArgs} args - Arguments to update or create a StockEntry.
     * @example
     * // Update or create a StockEntry
     * const stockEntry = await prisma.stockEntry.upsert({
     *   create: {
     *     // ... data to create a StockEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockEntry we want to update
     *   }
     * })
     */
    upsert<T extends StockEntryUpsertArgs>(args: SelectSubset<T, StockEntryUpsertArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryCountArgs} args - Arguments to filter StockEntries to count.
     * @example
     * // Count the number of StockEntries
     * const count = await prisma.stockEntry.count({
     *   where: {
     *     // ... the filter for the StockEntries we want to count
     *   }
     * })
    **/
    count<T extends StockEntryCountArgs>(
      args?: Subset<T, StockEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockEntryAggregateArgs>(args: Subset<T, StockEntryAggregateArgs>): Prisma.PrismaPromise<GetStockEntryAggregateType<T>>

    /**
     * Group by StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockEntryGroupByArgs['orderBy'] }
        : { orderBy?: StockEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockEntry model
   */
  readonly fields: StockEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockEntry model
   */
  interface StockEntryFieldRefs {
    readonly id: FieldRef<"StockEntry", 'String'>
    readonly date: FieldRef<"StockEntry", 'DateTime'>
    readonly items: FieldRef<"StockEntry", 'Json'>
    readonly createdAt: FieldRef<"StockEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"StockEntry", 'DateTime'>
    readonly createdById: FieldRef<"StockEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockEntry findUnique
   */
  export type StockEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findUniqueOrThrow
   */
  export type StockEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findFirst
   */
  export type StockEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findFirstOrThrow
   */
  export type StockEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findMany
   */
  export type StockEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntries to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry create
   */
  export type StockEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a StockEntry.
     */
    data: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
  }

  /**
   * StockEntry createMany
   */
  export type StockEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockEntry createManyAndReturn
   */
  export type StockEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockEntry update
   */
  export type StockEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a StockEntry.
     */
    data: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
    /**
     * Choose, which StockEntry to update.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry updateMany
   */
  export type StockEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockEntries.
     */
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyInput>
    /**
     * Filter which StockEntries to update
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to update.
     */
    limit?: number
  }

  /**
   * StockEntry updateManyAndReturn
   */
  export type StockEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * The data used to update StockEntries.
     */
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyInput>
    /**
     * Filter which StockEntries to update
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockEntry upsert
   */
  export type StockEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the StockEntry to update in case it exists.
     */
    where: StockEntryWhereUniqueInput
    /**
     * In case the StockEntry found by the `where` argument doesn't exist, create a new StockEntry with this data.
     */
    create: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
    /**
     * In case the StockEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
  }

  /**
   * StockEntry delete
   */
  export type StockEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter which StockEntry to delete.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry deleteMany
   */
  export type StockEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntries to delete
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to delete.
     */
    limit?: number
  }

  /**
   * StockEntry without action
   */
  export type StockEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    monthlyFee: number | null
  }

  export type StaffSumAggregateOutputType = {
    monthlyFee: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    country: string | null
    monthlyFee: number | null
    role: string | null
    status: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    country: string | null
    monthlyFee: number | null
    role: string | null
    status: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    email: number
    country: number
    monthlyFee: number
    role: number
    status: number
    image: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    monthlyFee?: true
  }

  export type StaffSumAggregateInputType = {
    monthlyFee?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    country?: true
    monthlyFee?: true
    role?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    country?: true
    monthlyFee?: true
    role?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    country?: true
    monthlyFee?: true
    role?: true
    status?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role: string
    status: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    country?: boolean
    monthlyFee?: boolean
    role?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    country?: boolean
    monthlyFee?: boolean
    role?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    country?: boolean
    monthlyFee?: boolean
    role?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    country?: boolean
    monthlyFee?: boolean
    role?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "country" | "monthlyFee" | "role" | "status" | "image" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      country: string
      monthlyFee: number
      role: string
      status: string
      image: string | null
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly country: FieldRef<"Staff", 'String'>
    readonly monthlyFee: FieldRef<"Staff", 'Float'>
    readonly role: FieldRef<"Staff", 'String'>
    readonly status: FieldRef<"Staff", 'String'>
    readonly image: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
    readonly createdById: FieldRef<"Staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model OwnerFund
   */

  export type AggregateOwnerFund = {
    _count: OwnerFundCountAggregateOutputType | null
    _avg: OwnerFundAvgAggregateOutputType | null
    _sum: OwnerFundSumAggregateOutputType | null
    _min: OwnerFundMinAggregateOutputType | null
    _max: OwnerFundMaxAggregateOutputType | null
  }

  export type OwnerFundAvgAggregateOutputType = {
    amount: number | null
  }

  export type OwnerFundSumAggregateOutputType = {
    amount: number | null
  }

  export type OwnerFundMinAggregateOutputType = {
    id: string | null
    amount: number | null
    purpose: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OwnerFundMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    purpose: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type OwnerFundCountAggregateOutputType = {
    id: number
    amount: number
    purpose: number
    receipt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OwnerFundAvgAggregateInputType = {
    amount?: true
  }

  export type OwnerFundSumAggregateInputType = {
    amount?: true
  }

  export type OwnerFundMinAggregateInputType = {
    id?: true
    amount?: true
    purpose?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OwnerFundMaxAggregateInputType = {
    id?: true
    amount?: true
    purpose?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OwnerFundCountAggregateInputType = {
    id?: true
    amount?: true
    purpose?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OwnerFundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerFund to aggregate.
     */
    where?: OwnerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerFunds to fetch.
     */
    orderBy?: OwnerFundOrderByWithRelationInput | OwnerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnerFunds
    **/
    _count?: true | OwnerFundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerFundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerFundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerFundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerFundMaxAggregateInputType
  }

  export type GetOwnerFundAggregateType<T extends OwnerFundAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnerFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnerFund[P]>
      : GetScalarType<T[P], AggregateOwnerFund[P]>
  }




  export type OwnerFundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerFundWhereInput
    orderBy?: OwnerFundOrderByWithAggregationInput | OwnerFundOrderByWithAggregationInput[]
    by: OwnerFundScalarFieldEnum[] | OwnerFundScalarFieldEnum
    having?: OwnerFundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerFundCountAggregateInputType | true
    _avg?: OwnerFundAvgAggregateInputType
    _sum?: OwnerFundSumAggregateInputType
    _min?: OwnerFundMinAggregateInputType
    _max?: OwnerFundMaxAggregateInputType
  }

  export type OwnerFundGroupByOutputType = {
    id: string
    amount: number
    purpose: string
    receipt: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: OwnerFundCountAggregateOutputType | null
    _avg: OwnerFundAvgAggregateOutputType | null
    _sum: OwnerFundSumAggregateOutputType | null
    _min: OwnerFundMinAggregateOutputType | null
    _max: OwnerFundMaxAggregateOutputType | null
  }

  type GetOwnerFundGroupByPayload<T extends OwnerFundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerFundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerFundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerFundGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerFundGroupByOutputType[P]>
        }
      >
    >


  export type OwnerFundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    purpose?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerFund"]>

  export type OwnerFundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    purpose?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerFund"]>

  export type OwnerFundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    purpose?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerFund"]>

  export type OwnerFundSelectScalar = {
    id?: boolean
    amount?: boolean
    purpose?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OwnerFundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "purpose" | "receipt" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["ownerFund"]>
  export type OwnerFundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OwnerFundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OwnerFundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OwnerFundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnerFund"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      purpose: string
      receipt: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["ownerFund"]>
    composites: {}
  }

  type OwnerFundGetPayload<S extends boolean | null | undefined | OwnerFundDefaultArgs> = $Result.GetResult<Prisma.$OwnerFundPayload, S>

  type OwnerFundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerFundCountAggregateInputType | true
    }

  export interface OwnerFundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnerFund'], meta: { name: 'OwnerFund' } }
    /**
     * Find zero or one OwnerFund that matches the filter.
     * @param {OwnerFundFindUniqueArgs} args - Arguments to find a OwnerFund
     * @example
     * // Get one OwnerFund
     * const ownerFund = await prisma.ownerFund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFundFindUniqueArgs>(args: SelectSubset<T, OwnerFundFindUniqueArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnerFund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFundFindUniqueOrThrowArgs} args - Arguments to find a OwnerFund
     * @example
     * // Get one OwnerFund
     * const ownerFund = await prisma.ownerFund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFundFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerFund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundFindFirstArgs} args - Arguments to find a OwnerFund
     * @example
     * // Get one OwnerFund
     * const ownerFund = await prisma.ownerFund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFundFindFirstArgs>(args?: SelectSubset<T, OwnerFundFindFirstArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerFund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundFindFirstOrThrowArgs} args - Arguments to find a OwnerFund
     * @example
     * // Get one OwnerFund
     * const ownerFund = await prisma.ownerFund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFundFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFundFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnerFunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnerFunds
     * const ownerFunds = await prisma.ownerFund.findMany()
     * 
     * // Get first 10 OwnerFunds
     * const ownerFunds = await prisma.ownerFund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerFundWithIdOnly = await prisma.ownerFund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFundFindManyArgs>(args?: SelectSubset<T, OwnerFundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnerFund.
     * @param {OwnerFundCreateArgs} args - Arguments to create a OwnerFund.
     * @example
     * // Create one OwnerFund
     * const OwnerFund = await prisma.ownerFund.create({
     *   data: {
     *     // ... data to create a OwnerFund
     *   }
     * })
     * 
     */
    create<T extends OwnerFundCreateArgs>(args: SelectSubset<T, OwnerFundCreateArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnerFunds.
     * @param {OwnerFundCreateManyArgs} args - Arguments to create many OwnerFunds.
     * @example
     * // Create many OwnerFunds
     * const ownerFund = await prisma.ownerFund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerFundCreateManyArgs>(args?: SelectSubset<T, OwnerFundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnerFunds and returns the data saved in the database.
     * @param {OwnerFundCreateManyAndReturnArgs} args - Arguments to create many OwnerFunds.
     * @example
     * // Create many OwnerFunds
     * const ownerFund = await prisma.ownerFund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnerFunds and only return the `id`
     * const ownerFundWithIdOnly = await prisma.ownerFund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerFundCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerFundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnerFund.
     * @param {OwnerFundDeleteArgs} args - Arguments to delete one OwnerFund.
     * @example
     * // Delete one OwnerFund
     * const OwnerFund = await prisma.ownerFund.delete({
     *   where: {
     *     // ... filter to delete one OwnerFund
     *   }
     * })
     * 
     */
    delete<T extends OwnerFundDeleteArgs>(args: SelectSubset<T, OwnerFundDeleteArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnerFund.
     * @param {OwnerFundUpdateArgs} args - Arguments to update one OwnerFund.
     * @example
     * // Update one OwnerFund
     * const ownerFund = await prisma.ownerFund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerFundUpdateArgs>(args: SelectSubset<T, OwnerFundUpdateArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnerFunds.
     * @param {OwnerFundDeleteManyArgs} args - Arguments to filter OwnerFunds to delete.
     * @example
     * // Delete a few OwnerFunds
     * const { count } = await prisma.ownerFund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerFundDeleteManyArgs>(args?: SelectSubset<T, OwnerFundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnerFunds
     * const ownerFund = await prisma.ownerFund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerFundUpdateManyArgs>(args: SelectSubset<T, OwnerFundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerFunds and returns the data updated in the database.
     * @param {OwnerFundUpdateManyAndReturnArgs} args - Arguments to update many OwnerFunds.
     * @example
     * // Update many OwnerFunds
     * const ownerFund = await prisma.ownerFund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnerFunds and only return the `id`
     * const ownerFundWithIdOnly = await prisma.ownerFund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerFundUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerFundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnerFund.
     * @param {OwnerFundUpsertArgs} args - Arguments to update or create a OwnerFund.
     * @example
     * // Update or create a OwnerFund
     * const ownerFund = await prisma.ownerFund.upsert({
     *   create: {
     *     // ... data to create a OwnerFund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnerFund we want to update
     *   }
     * })
     */
    upsert<T extends OwnerFundUpsertArgs>(args: SelectSubset<T, OwnerFundUpsertArgs<ExtArgs>>): Prisma__OwnerFundClient<$Result.GetResult<Prisma.$OwnerFundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnerFunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundCountArgs} args - Arguments to filter OwnerFunds to count.
     * @example
     * // Count the number of OwnerFunds
     * const count = await prisma.ownerFund.count({
     *   where: {
     *     // ... the filter for the OwnerFunds we want to count
     *   }
     * })
    **/
    count<T extends OwnerFundCountArgs>(
      args?: Subset<T, OwnerFundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerFundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnerFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerFundAggregateArgs>(args: Subset<T, OwnerFundAggregateArgs>): Prisma.PrismaPromise<GetOwnerFundAggregateType<T>>

    /**
     * Group by OwnerFund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerFundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerFundGroupByArgs['orderBy'] }
        : { orderBy?: OwnerFundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerFundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnerFund model
   */
  readonly fields: OwnerFundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnerFund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerFundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OwnerFund model
   */
  interface OwnerFundFieldRefs {
    readonly id: FieldRef<"OwnerFund", 'String'>
    readonly amount: FieldRef<"OwnerFund", 'Float'>
    readonly purpose: FieldRef<"OwnerFund", 'String'>
    readonly receipt: FieldRef<"OwnerFund", 'String'>
    readonly createdAt: FieldRef<"OwnerFund", 'DateTime'>
    readonly updatedAt: FieldRef<"OwnerFund", 'DateTime'>
    readonly userId: FieldRef<"OwnerFund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OwnerFund findUnique
   */
  export type OwnerFundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter, which OwnerFund to fetch.
     */
    where: OwnerFundWhereUniqueInput
  }

  /**
   * OwnerFund findUniqueOrThrow
   */
  export type OwnerFundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter, which OwnerFund to fetch.
     */
    where: OwnerFundWhereUniqueInput
  }

  /**
   * OwnerFund findFirst
   */
  export type OwnerFundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter, which OwnerFund to fetch.
     */
    where?: OwnerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerFunds to fetch.
     */
    orderBy?: OwnerFundOrderByWithRelationInput | OwnerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerFunds.
     */
    cursor?: OwnerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerFunds.
     */
    distinct?: OwnerFundScalarFieldEnum | OwnerFundScalarFieldEnum[]
  }

  /**
   * OwnerFund findFirstOrThrow
   */
  export type OwnerFundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter, which OwnerFund to fetch.
     */
    where?: OwnerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerFunds to fetch.
     */
    orderBy?: OwnerFundOrderByWithRelationInput | OwnerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerFunds.
     */
    cursor?: OwnerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerFunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerFunds.
     */
    distinct?: OwnerFundScalarFieldEnum | OwnerFundScalarFieldEnum[]
  }

  /**
   * OwnerFund findMany
   */
  export type OwnerFundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter, which OwnerFunds to fetch.
     */
    where?: OwnerFundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerFunds to fetch.
     */
    orderBy?: OwnerFundOrderByWithRelationInput | OwnerFundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnerFunds.
     */
    cursor?: OwnerFundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerFunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerFunds.
     */
    skip?: number
    distinct?: OwnerFundScalarFieldEnum | OwnerFundScalarFieldEnum[]
  }

  /**
   * OwnerFund create
   */
  export type OwnerFundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnerFund.
     */
    data: XOR<OwnerFundCreateInput, OwnerFundUncheckedCreateInput>
  }

  /**
   * OwnerFund createMany
   */
  export type OwnerFundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnerFunds.
     */
    data: OwnerFundCreateManyInput | OwnerFundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerFund createManyAndReturn
   */
  export type OwnerFundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * The data used to create many OwnerFunds.
     */
    data: OwnerFundCreateManyInput | OwnerFundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerFund update
   */
  export type OwnerFundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnerFund.
     */
    data: XOR<OwnerFundUpdateInput, OwnerFundUncheckedUpdateInput>
    /**
     * Choose, which OwnerFund to update.
     */
    where: OwnerFundWhereUniqueInput
  }

  /**
   * OwnerFund updateMany
   */
  export type OwnerFundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnerFunds.
     */
    data: XOR<OwnerFundUpdateManyMutationInput, OwnerFundUncheckedUpdateManyInput>
    /**
     * Filter which OwnerFunds to update
     */
    where?: OwnerFundWhereInput
    /**
     * Limit how many OwnerFunds to update.
     */
    limit?: number
  }

  /**
   * OwnerFund updateManyAndReturn
   */
  export type OwnerFundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * The data used to update OwnerFunds.
     */
    data: XOR<OwnerFundUpdateManyMutationInput, OwnerFundUncheckedUpdateManyInput>
    /**
     * Filter which OwnerFunds to update
     */
    where?: OwnerFundWhereInput
    /**
     * Limit how many OwnerFunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerFund upsert
   */
  export type OwnerFundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnerFund to update in case it exists.
     */
    where: OwnerFundWhereUniqueInput
    /**
     * In case the OwnerFund found by the `where` argument doesn't exist, create a new OwnerFund with this data.
     */
    create: XOR<OwnerFundCreateInput, OwnerFundUncheckedCreateInput>
    /**
     * In case the OwnerFund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerFundUpdateInput, OwnerFundUncheckedUpdateInput>
  }

  /**
   * OwnerFund delete
   */
  export type OwnerFundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
    /**
     * Filter which OwnerFund to delete.
     */
    where: OwnerFundWhereUniqueInput
  }

  /**
   * OwnerFund deleteMany
   */
  export type OwnerFundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerFunds to delete
     */
    where?: OwnerFundWhereInput
    /**
     * Limit how many OwnerFunds to delete.
     */
    limit?: number
  }

  /**
   * OwnerFund without action
   */
  export type OwnerFundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerFund
     */
    select?: OwnerFundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerFund
     */
    omit?: OwnerFundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerFundInclude<ExtArgs> | null
  }


  /**
   * Model ManagerExpense
   */

  export type AggregateManagerExpense = {
    _count: ManagerExpenseCountAggregateOutputType | null
    _avg: ManagerExpenseAvgAggregateOutputType | null
    _sum: ManagerExpenseSumAggregateOutputType | null
    _min: ManagerExpenseMinAggregateOutputType | null
    _max: ManagerExpenseMaxAggregateOutputType | null
  }

  export type ManagerExpenseAvgAggregateOutputType = {
    amount: number | null
  }

  export type ManagerExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ManagerExpenseMinAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    managerId: string | null
  }

  export type ManagerExpenseMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    managerId: string | null
  }

  export type ManagerExpenseCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    receipt: number
    createdAt: number
    updatedAt: number
    managerId: number
    _all: number
  }


  export type ManagerExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ManagerExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ManagerExpenseMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    managerId?: true
  }

  export type ManagerExpenseMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    managerId?: true
  }

  export type ManagerExpenseCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    managerId?: true
    _all?: true
  }

  export type ManagerExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerExpense to aggregate.
     */
    where?: ManagerExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerExpenses to fetch.
     */
    orderBy?: ManagerExpenseOrderByWithRelationInput | ManagerExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagerExpenses
    **/
    _count?: true | ManagerExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerExpenseMaxAggregateInputType
  }

  export type GetManagerExpenseAggregateType<T extends ManagerExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateManagerExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagerExpense[P]>
      : GetScalarType<T[P], AggregateManagerExpense[P]>
  }




  export type ManagerExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerExpenseWhereInput
    orderBy?: ManagerExpenseOrderByWithAggregationInput | ManagerExpenseOrderByWithAggregationInput[]
    by: ManagerExpenseScalarFieldEnum[] | ManagerExpenseScalarFieldEnum
    having?: ManagerExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerExpenseCountAggregateInputType | true
    _avg?: ManagerExpenseAvgAggregateInputType
    _sum?: ManagerExpenseSumAggregateInputType
    _min?: ManagerExpenseMinAggregateInputType
    _max?: ManagerExpenseMaxAggregateInputType
  }

  export type ManagerExpenseGroupByOutputType = {
    id: string
    amount: number
    description: string
    receipt: string | null
    createdAt: Date
    updatedAt: Date
    managerId: string
    _count: ManagerExpenseCountAggregateOutputType | null
    _avg: ManagerExpenseAvgAggregateOutputType | null
    _sum: ManagerExpenseSumAggregateOutputType | null
    _min: ManagerExpenseMinAggregateOutputType | null
    _max: ManagerExpenseMaxAggregateOutputType | null
  }

  type GetManagerExpenseGroupByPayload<T extends ManagerExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ManagerExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managerId?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerExpense"]>

  export type ManagerExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managerId?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerExpense"]>

  export type ManagerExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managerId?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerExpense"]>

  export type ManagerExpenseSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    managerId?: boolean
  }

  export type ManagerExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "receipt" | "createdAt" | "updatedAt" | "managerId", ExtArgs["result"]["managerExpense"]>
  export type ManagerExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ManagerExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ManagerExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ManagerExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagerExpense"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      description: string
      receipt: string | null
      createdAt: Date
      updatedAt: Date
      managerId: string
    }, ExtArgs["result"]["managerExpense"]>
    composites: {}
  }

  type ManagerExpenseGetPayload<S extends boolean | null | undefined | ManagerExpenseDefaultArgs> = $Result.GetResult<Prisma.$ManagerExpensePayload, S>

  type ManagerExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerExpenseCountAggregateInputType | true
    }

  export interface ManagerExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagerExpense'], meta: { name: 'ManagerExpense' } }
    /**
     * Find zero or one ManagerExpense that matches the filter.
     * @param {ManagerExpenseFindUniqueArgs} args - Arguments to find a ManagerExpense
     * @example
     * // Get one ManagerExpense
     * const managerExpense = await prisma.managerExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerExpenseFindUniqueArgs>(args: SelectSubset<T, ManagerExpenseFindUniqueArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagerExpense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerExpenseFindUniqueOrThrowArgs} args - Arguments to find a ManagerExpense
     * @example
     * // Get one ManagerExpense
     * const managerExpense = await prisma.managerExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseFindFirstArgs} args - Arguments to find a ManagerExpense
     * @example
     * // Get one ManagerExpense
     * const managerExpense = await prisma.managerExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerExpenseFindFirstArgs>(args?: SelectSubset<T, ManagerExpenseFindFirstArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseFindFirstOrThrowArgs} args - Arguments to find a ManagerExpense
     * @example
     * // Get one ManagerExpense
     * const managerExpense = await prisma.managerExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagerExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagerExpenses
     * const managerExpenses = await prisma.managerExpense.findMany()
     * 
     * // Get first 10 ManagerExpenses
     * const managerExpenses = await prisma.managerExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerExpenseWithIdOnly = await prisma.managerExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerExpenseFindManyArgs>(args?: SelectSubset<T, ManagerExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagerExpense.
     * @param {ManagerExpenseCreateArgs} args - Arguments to create a ManagerExpense.
     * @example
     * // Create one ManagerExpense
     * const ManagerExpense = await prisma.managerExpense.create({
     *   data: {
     *     // ... data to create a ManagerExpense
     *   }
     * })
     * 
     */
    create<T extends ManagerExpenseCreateArgs>(args: SelectSubset<T, ManagerExpenseCreateArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagerExpenses.
     * @param {ManagerExpenseCreateManyArgs} args - Arguments to create many ManagerExpenses.
     * @example
     * // Create many ManagerExpenses
     * const managerExpense = await prisma.managerExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerExpenseCreateManyArgs>(args?: SelectSubset<T, ManagerExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManagerExpenses and returns the data saved in the database.
     * @param {ManagerExpenseCreateManyAndReturnArgs} args - Arguments to create many ManagerExpenses.
     * @example
     * // Create many ManagerExpenses
     * const managerExpense = await prisma.managerExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManagerExpenses and only return the `id`
     * const managerExpenseWithIdOnly = await prisma.managerExpense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManagerExpense.
     * @param {ManagerExpenseDeleteArgs} args - Arguments to delete one ManagerExpense.
     * @example
     * // Delete one ManagerExpense
     * const ManagerExpense = await prisma.managerExpense.delete({
     *   where: {
     *     // ... filter to delete one ManagerExpense
     *   }
     * })
     * 
     */
    delete<T extends ManagerExpenseDeleteArgs>(args: SelectSubset<T, ManagerExpenseDeleteArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagerExpense.
     * @param {ManagerExpenseUpdateArgs} args - Arguments to update one ManagerExpense.
     * @example
     * // Update one ManagerExpense
     * const managerExpense = await prisma.managerExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerExpenseUpdateArgs>(args: SelectSubset<T, ManagerExpenseUpdateArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagerExpenses.
     * @param {ManagerExpenseDeleteManyArgs} args - Arguments to filter ManagerExpenses to delete.
     * @example
     * // Delete a few ManagerExpenses
     * const { count } = await prisma.managerExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerExpenseDeleteManyArgs>(args?: SelectSubset<T, ManagerExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagerExpenses
     * const managerExpense = await prisma.managerExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerExpenseUpdateManyArgs>(args: SelectSubset<T, ManagerExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerExpenses and returns the data updated in the database.
     * @param {ManagerExpenseUpdateManyAndReturnArgs} args - Arguments to update many ManagerExpenses.
     * @example
     * // Update many ManagerExpenses
     * const managerExpense = await prisma.managerExpense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManagerExpenses and only return the `id`
     * const managerExpenseWithIdOnly = await prisma.managerExpense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagerExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManagerExpense.
     * @param {ManagerExpenseUpsertArgs} args - Arguments to update or create a ManagerExpense.
     * @example
     * // Update or create a ManagerExpense
     * const managerExpense = await prisma.managerExpense.upsert({
     *   create: {
     *     // ... data to create a ManagerExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagerExpense we want to update
     *   }
     * })
     */
    upsert<T extends ManagerExpenseUpsertArgs>(args: SelectSubset<T, ManagerExpenseUpsertArgs<ExtArgs>>): Prisma__ManagerExpenseClient<$Result.GetResult<Prisma.$ManagerExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagerExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseCountArgs} args - Arguments to filter ManagerExpenses to count.
     * @example
     * // Count the number of ManagerExpenses
     * const count = await prisma.managerExpense.count({
     *   where: {
     *     // ... the filter for the ManagerExpenses we want to count
     *   }
     * })
    **/
    count<T extends ManagerExpenseCountArgs>(
      args?: Subset<T, ManagerExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagerExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerExpenseAggregateArgs>(args: Subset<T, ManagerExpenseAggregateArgs>): Prisma.PrismaPromise<GetManagerExpenseAggregateType<T>>

    /**
     * Group by ManagerExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ManagerExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagerExpense model
   */
  readonly fields: ManagerExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagerExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagerExpense model
   */
  interface ManagerExpenseFieldRefs {
    readonly id: FieldRef<"ManagerExpense", 'String'>
    readonly amount: FieldRef<"ManagerExpense", 'Float'>
    readonly description: FieldRef<"ManagerExpense", 'String'>
    readonly receipt: FieldRef<"ManagerExpense", 'String'>
    readonly createdAt: FieldRef<"ManagerExpense", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagerExpense", 'DateTime'>
    readonly managerId: FieldRef<"ManagerExpense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ManagerExpense findUnique
   */
  export type ManagerExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerExpense to fetch.
     */
    where: ManagerExpenseWhereUniqueInput
  }

  /**
   * ManagerExpense findUniqueOrThrow
   */
  export type ManagerExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerExpense to fetch.
     */
    where: ManagerExpenseWhereUniqueInput
  }

  /**
   * ManagerExpense findFirst
   */
  export type ManagerExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerExpense to fetch.
     */
    where?: ManagerExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerExpenses to fetch.
     */
    orderBy?: ManagerExpenseOrderByWithRelationInput | ManagerExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerExpenses.
     */
    cursor?: ManagerExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerExpenses.
     */
    distinct?: ManagerExpenseScalarFieldEnum | ManagerExpenseScalarFieldEnum[]
  }

  /**
   * ManagerExpense findFirstOrThrow
   */
  export type ManagerExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerExpense to fetch.
     */
    where?: ManagerExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerExpenses to fetch.
     */
    orderBy?: ManagerExpenseOrderByWithRelationInput | ManagerExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerExpenses.
     */
    cursor?: ManagerExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerExpenses.
     */
    distinct?: ManagerExpenseScalarFieldEnum | ManagerExpenseScalarFieldEnum[]
  }

  /**
   * ManagerExpense findMany
   */
  export type ManagerExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerExpenses to fetch.
     */
    where?: ManagerExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerExpenses to fetch.
     */
    orderBy?: ManagerExpenseOrderByWithRelationInput | ManagerExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagerExpenses.
     */
    cursor?: ManagerExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerExpenses.
     */
    skip?: number
    distinct?: ManagerExpenseScalarFieldEnum | ManagerExpenseScalarFieldEnum[]
  }

  /**
   * ManagerExpense create
   */
  export type ManagerExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagerExpense.
     */
    data: XOR<ManagerExpenseCreateInput, ManagerExpenseUncheckedCreateInput>
  }

  /**
   * ManagerExpense createMany
   */
  export type ManagerExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagerExpenses.
     */
    data: ManagerExpenseCreateManyInput | ManagerExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagerExpense createManyAndReturn
   */
  export type ManagerExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many ManagerExpenses.
     */
    data: ManagerExpenseCreateManyInput | ManagerExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerExpense update
   */
  export type ManagerExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagerExpense.
     */
    data: XOR<ManagerExpenseUpdateInput, ManagerExpenseUncheckedUpdateInput>
    /**
     * Choose, which ManagerExpense to update.
     */
    where: ManagerExpenseWhereUniqueInput
  }

  /**
   * ManagerExpense updateMany
   */
  export type ManagerExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagerExpenses.
     */
    data: XOR<ManagerExpenseUpdateManyMutationInput, ManagerExpenseUncheckedUpdateManyInput>
    /**
     * Filter which ManagerExpenses to update
     */
    where?: ManagerExpenseWhereInput
    /**
     * Limit how many ManagerExpenses to update.
     */
    limit?: number
  }

  /**
   * ManagerExpense updateManyAndReturn
   */
  export type ManagerExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * The data used to update ManagerExpenses.
     */
    data: XOR<ManagerExpenseUpdateManyMutationInput, ManagerExpenseUncheckedUpdateManyInput>
    /**
     * Filter which ManagerExpenses to update
     */
    where?: ManagerExpenseWhereInput
    /**
     * Limit how many ManagerExpenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerExpense upsert
   */
  export type ManagerExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagerExpense to update in case it exists.
     */
    where: ManagerExpenseWhereUniqueInput
    /**
     * In case the ManagerExpense found by the `where` argument doesn't exist, create a new ManagerExpense with this data.
     */
    create: XOR<ManagerExpenseCreateInput, ManagerExpenseUncheckedCreateInput>
    /**
     * In case the ManagerExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerExpenseUpdateInput, ManagerExpenseUncheckedUpdateInput>
  }

  /**
   * ManagerExpense delete
   */
  export type ManagerExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
    /**
     * Filter which ManagerExpense to delete.
     */
    where: ManagerExpenseWhereUniqueInput
  }

  /**
   * ManagerExpense deleteMany
   */
  export type ManagerExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerExpenses to delete
     */
    where?: ManagerExpenseWhereInput
    /**
     * Limit how many ManagerExpenses to delete.
     */
    limit?: number
  }

  /**
   * ManagerExpense without action
   */
  export type ManagerExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerExpense
     */
    select?: ManagerExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerExpense
     */
    omit?: ManagerExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerExpenseInclude<ExtArgs> | null
  }


  /**
   * Model SalesReport
   */

  export type AggregateSalesReport = {
    _count: SalesReportCountAggregateOutputType | null
    _avg: SalesReportAvgAggregateOutputType | null
    _sum: SalesReportSumAggregateOutputType | null
    _min: SalesReportMinAggregateOutputType | null
    _max: SalesReportMaxAggregateOutputType | null
  }

  export type SalesReportAvgAggregateOutputType = {
    amount: number | null
    unitPrice: number | null
    totalPrice: number | null
    cashAmount: number | null
    transferAmount: number | null
  }

  export type SalesReportSumAggregateOutputType = {
    amount: number | null
    unitPrice: number | null
    totalPrice: number | null
    cashAmount: number | null
    transferAmount: number | null
  }

  export type SalesReportMinAggregateOutputType = {
    id: string | null
    itemName: string | null
    amount: number | null
    unitPrice: number | null
    totalPrice: number | null
    cashAmount: number | null
    transferAmount: number | null
    image: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesReportMaxAggregateOutputType = {
    id: string | null
    itemName: string | null
    amount: number | null
    unitPrice: number | null
    totalPrice: number | null
    cashAmount: number | null
    transferAmount: number | null
    image: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesReportCountAggregateOutputType = {
    id: number
    itemName: number
    amount: number
    unitPrice: number
    totalPrice: number
    cashAmount: number
    transferAmount: number
    image: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesReportAvgAggregateInputType = {
    amount?: true
    unitPrice?: true
    totalPrice?: true
    cashAmount?: true
    transferAmount?: true
  }

  export type SalesReportSumAggregateInputType = {
    amount?: true
    unitPrice?: true
    totalPrice?: true
    cashAmount?: true
    transferAmount?: true
  }

  export type SalesReportMinAggregateInputType = {
    id?: true
    itemName?: true
    amount?: true
    unitPrice?: true
    totalPrice?: true
    cashAmount?: true
    transferAmount?: true
    image?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesReportMaxAggregateInputType = {
    id?: true
    itemName?: true
    amount?: true
    unitPrice?: true
    totalPrice?: true
    cashAmount?: true
    transferAmount?: true
    image?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesReportCountAggregateInputType = {
    id?: true
    itemName?: true
    amount?: true
    unitPrice?: true
    totalPrice?: true
    cashAmount?: true
    transferAmount?: true
    image?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesReport to aggregate.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesReports
    **/
    _count?: true | SalesReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesReportMaxAggregateInputType
  }

  export type GetSalesReportAggregateType<T extends SalesReportAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesReport[P]>
      : GetScalarType<T[P], AggregateSalesReport[P]>
  }




  export type SalesReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesReportWhereInput
    orderBy?: SalesReportOrderByWithAggregationInput | SalesReportOrderByWithAggregationInput[]
    by: SalesReportScalarFieldEnum[] | SalesReportScalarFieldEnum
    having?: SalesReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesReportCountAggregateInputType | true
    _avg?: SalesReportAvgAggregateInputType
    _sum?: SalesReportSumAggregateInputType
    _min?: SalesReportMinAggregateInputType
    _max?: SalesReportMaxAggregateInputType
  }

  export type SalesReportGroupByOutputType = {
    id: string
    itemName: string
    amount: number
    unitPrice: number
    totalPrice: number
    cashAmount: number
    transferAmount: number
    image: string | null
    managerId: string
    createdAt: Date
    updatedAt: Date
    _count: SalesReportCountAggregateOutputType | null
    _avg: SalesReportAvgAggregateOutputType | null
    _sum: SalesReportSumAggregateOutputType | null
    _min: SalesReportMinAggregateOutputType | null
    _max: SalesReportMaxAggregateOutputType | null
  }

  type GetSalesReportGroupByPayload<T extends SalesReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesReportGroupByOutputType[P]>
            : GetScalarType<T[P], SalesReportGroupByOutputType[P]>
        }
      >
    >


  export type SalesReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    amount?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    cashAmount?: boolean
    transferAmount?: boolean
    image?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesReport"]>

  export type SalesReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    amount?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    cashAmount?: boolean
    transferAmount?: boolean
    image?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesReport"]>

  export type SalesReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    amount?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    cashAmount?: boolean
    transferAmount?: boolean
    image?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["salesReport"]>

  export type SalesReportSelectScalar = {
    id?: boolean
    itemName?: boolean
    amount?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    cashAmount?: boolean
    transferAmount?: boolean
    image?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemName" | "amount" | "unitPrice" | "totalPrice" | "cashAmount" | "transferAmount" | "image" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["salesReport"]>

  export type $SalesReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemName: string
      amount: number
      unitPrice: number
      totalPrice: number
      cashAmount: number
      transferAmount: number
      image: string | null
      managerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesReport"]>
    composites: {}
  }

  type SalesReportGetPayload<S extends boolean | null | undefined | SalesReportDefaultArgs> = $Result.GetResult<Prisma.$SalesReportPayload, S>

  type SalesReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesReportCountAggregateInputType | true
    }

  export interface SalesReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesReport'], meta: { name: 'SalesReport' } }
    /**
     * Find zero or one SalesReport that matches the filter.
     * @param {SalesReportFindUniqueArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesReportFindUniqueArgs>(args: SelectSubset<T, SalesReportFindUniqueArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesReportFindUniqueOrThrowArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesReportFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindFirstArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesReportFindFirstArgs>(args?: SelectSubset<T, SalesReportFindFirstArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindFirstOrThrowArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesReportFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesReports
     * const salesReports = await prisma.salesReport.findMany()
     * 
     * // Get first 10 SalesReports
     * const salesReports = await prisma.salesReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesReportWithIdOnly = await prisma.salesReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesReportFindManyArgs>(args?: SelectSubset<T, SalesReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesReport.
     * @param {SalesReportCreateArgs} args - Arguments to create a SalesReport.
     * @example
     * // Create one SalesReport
     * const SalesReport = await prisma.salesReport.create({
     *   data: {
     *     // ... data to create a SalesReport
     *   }
     * })
     * 
     */
    create<T extends SalesReportCreateArgs>(args: SelectSubset<T, SalesReportCreateArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesReports.
     * @param {SalesReportCreateManyArgs} args - Arguments to create many SalesReports.
     * @example
     * // Create many SalesReports
     * const salesReport = await prisma.salesReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesReportCreateManyArgs>(args?: SelectSubset<T, SalesReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesReports and returns the data saved in the database.
     * @param {SalesReportCreateManyAndReturnArgs} args - Arguments to create many SalesReports.
     * @example
     * // Create many SalesReports
     * const salesReport = await prisma.salesReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesReports and only return the `id`
     * const salesReportWithIdOnly = await prisma.salesReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesReportCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesReport.
     * @param {SalesReportDeleteArgs} args - Arguments to delete one SalesReport.
     * @example
     * // Delete one SalesReport
     * const SalesReport = await prisma.salesReport.delete({
     *   where: {
     *     // ... filter to delete one SalesReport
     *   }
     * })
     * 
     */
    delete<T extends SalesReportDeleteArgs>(args: SelectSubset<T, SalesReportDeleteArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesReport.
     * @param {SalesReportUpdateArgs} args - Arguments to update one SalesReport.
     * @example
     * // Update one SalesReport
     * const salesReport = await prisma.salesReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesReportUpdateArgs>(args: SelectSubset<T, SalesReportUpdateArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesReports.
     * @param {SalesReportDeleteManyArgs} args - Arguments to filter SalesReports to delete.
     * @example
     * // Delete a few SalesReports
     * const { count } = await prisma.salesReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesReportDeleteManyArgs>(args?: SelectSubset<T, SalesReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesReports
     * const salesReport = await prisma.salesReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesReportUpdateManyArgs>(args: SelectSubset<T, SalesReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesReports and returns the data updated in the database.
     * @param {SalesReportUpdateManyAndReturnArgs} args - Arguments to update many SalesReports.
     * @example
     * // Update many SalesReports
     * const salesReport = await prisma.salesReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesReports and only return the `id`
     * const salesReportWithIdOnly = await prisma.salesReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesReportUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesReport.
     * @param {SalesReportUpsertArgs} args - Arguments to update or create a SalesReport.
     * @example
     * // Update or create a SalesReport
     * const salesReport = await prisma.salesReport.upsert({
     *   create: {
     *     // ... data to create a SalesReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesReport we want to update
     *   }
     * })
     */
    upsert<T extends SalesReportUpsertArgs>(args: SelectSubset<T, SalesReportUpsertArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportCountArgs} args - Arguments to filter SalesReports to count.
     * @example
     * // Count the number of SalesReports
     * const count = await prisma.salesReport.count({
     *   where: {
     *     // ... the filter for the SalesReports we want to count
     *   }
     * })
    **/
    count<T extends SalesReportCountArgs>(
      args?: Subset<T, SalesReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesReportAggregateArgs>(args: Subset<T, SalesReportAggregateArgs>): Prisma.PrismaPromise<GetSalesReportAggregateType<T>>

    /**
     * Group by SalesReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesReportGroupByArgs['orderBy'] }
        : { orderBy?: SalesReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesReport model
   */
  readonly fields: SalesReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesReport model
   */
  interface SalesReportFieldRefs {
    readonly id: FieldRef<"SalesReport", 'String'>
    readonly itemName: FieldRef<"SalesReport", 'String'>
    readonly amount: FieldRef<"SalesReport", 'Int'>
    readonly unitPrice: FieldRef<"SalesReport", 'Float'>
    readonly totalPrice: FieldRef<"SalesReport", 'Float'>
    readonly cashAmount: FieldRef<"SalesReport", 'Float'>
    readonly transferAmount: FieldRef<"SalesReport", 'Float'>
    readonly image: FieldRef<"SalesReport", 'String'>
    readonly managerId: FieldRef<"SalesReport", 'String'>
    readonly createdAt: FieldRef<"SalesReport", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesReport findUnique
   */
  export type SalesReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport findUniqueOrThrow
   */
  export type SalesReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport findFirst
   */
  export type SalesReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesReports.
     */
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport findFirstOrThrow
   */
  export type SalesReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesReports.
     */
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport findMany
   */
  export type SalesReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter, which SalesReports to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport create
   */
  export type SalesReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * The data needed to create a SalesReport.
     */
    data: XOR<SalesReportCreateInput, SalesReportUncheckedCreateInput>
  }

  /**
   * SalesReport createMany
   */
  export type SalesReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesReports.
     */
    data: SalesReportCreateManyInput | SalesReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesReport createManyAndReturn
   */
  export type SalesReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * The data used to create many SalesReports.
     */
    data: SalesReportCreateManyInput | SalesReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesReport update
   */
  export type SalesReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * The data needed to update a SalesReport.
     */
    data: XOR<SalesReportUpdateInput, SalesReportUncheckedUpdateInput>
    /**
     * Choose, which SalesReport to update.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport updateMany
   */
  export type SalesReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesReports.
     */
    data: XOR<SalesReportUpdateManyMutationInput, SalesReportUncheckedUpdateManyInput>
    /**
     * Filter which SalesReports to update
     */
    where?: SalesReportWhereInput
    /**
     * Limit how many SalesReports to update.
     */
    limit?: number
  }

  /**
   * SalesReport updateManyAndReturn
   */
  export type SalesReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * The data used to update SalesReports.
     */
    data: XOR<SalesReportUpdateManyMutationInput, SalesReportUncheckedUpdateManyInput>
    /**
     * Filter which SalesReports to update
     */
    where?: SalesReportWhereInput
    /**
     * Limit how many SalesReports to update.
     */
    limit?: number
  }

  /**
   * SalesReport upsert
   */
  export type SalesReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * The filter to search for the SalesReport to update in case it exists.
     */
    where: SalesReportWhereUniqueInput
    /**
     * In case the SalesReport found by the `where` argument doesn't exist, create a new SalesReport with this data.
     */
    create: XOR<SalesReportCreateInput, SalesReportUncheckedCreateInput>
    /**
     * In case the SalesReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesReportUpdateInput, SalesReportUncheckedUpdateInput>
  }

  /**
   * SalesReport delete
   */
  export type SalesReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
    /**
     * Filter which SalesReport to delete.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport deleteMany
   */
  export type SalesReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesReports to delete
     */
    where?: SalesReportWhereInput
    /**
     * Limit how many SalesReports to delete.
     */
    limit?: number
  }

  /**
   * SalesReport without action
   */
  export type SalesReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesReport
     */
    omit?: SalesReportOmit<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    price: number | null
    image: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    price: number | null
    image: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    price: number
    image: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    image?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    image?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    price?: true
    image?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    name: string
    category: string
    price: number
    image: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "price" | "image" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      price: number
      image: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly category: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Float'>
    readonly image: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    isOwner: 'isOwner',
    country: 'country',
    monthlyFee: 'monthlyFee',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const MonthSelectionScalarFieldEnum: {
    id: 'id',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type MonthSelectionScalarFieldEnum = (typeof MonthSelectionScalarFieldEnum)[keyof typeof MonthSelectionScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    sales: 'sales',
    credit: 'credit',
    expenses: 'expenses',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const StockEntryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    items: 'items',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type StockEntryScalarFieldEnum = (typeof StockEntryScalarFieldEnum)[keyof typeof StockEntryScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    country: 'country',
    monthlyFee: 'monthlyFee',
    role: 'role',
    status: 'status',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const OwnerFundScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    purpose: 'purpose',
    receipt: 'receipt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OwnerFundScalarFieldEnum = (typeof OwnerFundScalarFieldEnum)[keyof typeof OwnerFundScalarFieldEnum]


  export const ManagerExpenseScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    receipt: 'receipt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    managerId: 'managerId'
  };

  export type ManagerExpenseScalarFieldEnum = (typeof ManagerExpenseScalarFieldEnum)[keyof typeof ManagerExpenseScalarFieldEnum]


  export const SalesReportScalarFieldEnum: {
    id: 'id',
    itemName: 'itemName',
    amount: 'amount',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    cashAmount: 'cashAmount',
    transferAmount: 'transferAmount',
    image: 'image',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesReportScalarFieldEnum = (typeof SalesReportScalarFieldEnum)[keyof typeof SalesReportScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    price: 'price',
    image: 'image',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isOwner?: BoolFilter<"User"> | boolean
    country?: StringNullableFilter<"User"> | string | null
    monthlyFee?: FloatNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    monthSelections?: MonthSelectionListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    stockEntries?: StockEntryListRelationFilter
    staff?: StaffListRelationFilter
    ownerFunds?: OwnerFundListRelationFilter
    managerExpenses?: ManagerExpenseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isOwner?: SortOrder
    country?: SortOrderInput | SortOrder
    monthlyFee?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    monthSelections?: MonthSelectionOrderByRelationAggregateInput
    dailyReports?: DailyReportOrderByRelationAggregateInput
    stockEntries?: StockEntryOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
    ownerFunds?: OwnerFundOrderByRelationAggregateInput
    managerExpenses?: ManagerExpenseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isOwner?: BoolFilter<"User"> | boolean
    country?: StringNullableFilter<"User"> | string | null
    monthlyFee?: FloatNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    monthSelections?: MonthSelectionListRelationFilter
    dailyReports?: DailyReportListRelationFilter
    stockEntries?: StockEntryListRelationFilter
    staff?: StaffListRelationFilter
    ownerFunds?: OwnerFundListRelationFilter
    managerExpenses?: ManagerExpenseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isOwner?: SortOrder
    country?: SortOrderInput | SortOrder
    monthlyFee?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isOwner?: BoolWithAggregatesFilter<"User"> | boolean
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    monthlyFee?: FloatNullableWithAggregatesFilter<"User"> | number | null
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type MonthSelectionWhereInput = {
    AND?: MonthSelectionWhereInput | MonthSelectionWhereInput[]
    OR?: MonthSelectionWhereInput[]
    NOT?: MonthSelectionWhereInput | MonthSelectionWhereInput[]
    id?: StringFilter<"MonthSelection"> | string
    month?: IntFilter<"MonthSelection"> | number
    year?: IntFilter<"MonthSelection"> | number
    createdAt?: DateTimeFilter<"MonthSelection"> | Date | string
    updatedAt?: DateTimeFilter<"MonthSelection"> | Date | string
    createdById?: StringFilter<"MonthSelection"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MonthSelectionOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type MonthSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthSelectionWhereInput | MonthSelectionWhereInput[]
    OR?: MonthSelectionWhereInput[]
    NOT?: MonthSelectionWhereInput | MonthSelectionWhereInput[]
    month?: IntFilter<"MonthSelection"> | number
    year?: IntFilter<"MonthSelection"> | number
    createdAt?: DateTimeFilter<"MonthSelection"> | Date | string
    updatedAt?: DateTimeFilter<"MonthSelection"> | Date | string
    createdById?: StringFilter<"MonthSelection"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MonthSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: MonthSelectionCountOrderByAggregateInput
    _avg?: MonthSelectionAvgOrderByAggregateInput
    _max?: MonthSelectionMaxOrderByAggregateInput
    _min?: MonthSelectionMinOrderByAggregateInput
    _sum?: MonthSelectionSumOrderByAggregateInput
  }

  export type MonthSelectionScalarWhereWithAggregatesInput = {
    AND?: MonthSelectionScalarWhereWithAggregatesInput | MonthSelectionScalarWhereWithAggregatesInput[]
    OR?: MonthSelectionScalarWhereWithAggregatesInput[]
    NOT?: MonthSelectionScalarWhereWithAggregatesInput | MonthSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthSelection"> | string
    month?: IntWithAggregatesFilter<"MonthSelection"> | number
    year?: IntWithAggregatesFilter<"MonthSelection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MonthSelection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthSelection"> | Date | string
    createdById?: StringWithAggregatesFilter<"MonthSelection"> | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    sales?: FloatFilter<"DailyReport"> | number
    credit?: FloatFilter<"DailyReport"> | number
    expenses?: FloatFilter<"DailyReport"> | number
    notes?: StringNullableFilter<"DailyReport"> | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    createdById?: StringFilter<"DailyReport"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    date?: DateTimeFilter<"DailyReport"> | Date | string
    sales?: FloatFilter<"DailyReport"> | number
    credit?: FloatFilter<"DailyReport"> | number
    expenses?: FloatFilter<"DailyReport"> | number
    notes?: StringNullableFilter<"DailyReport"> | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    createdById?: StringFilter<"DailyReport"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReport"> | string
    date?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    sales?: FloatWithAggregatesFilter<"DailyReport"> | number
    credit?: FloatWithAggregatesFilter<"DailyReport"> | number
    expenses?: FloatWithAggregatesFilter<"DailyReport"> | number
    notes?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    createdById?: StringWithAggregatesFilter<"DailyReport"> | string
  }

  export type StockEntryWhereInput = {
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    id?: StringFilter<"StockEntry"> | string
    date?: DateTimeFilter<"StockEntry"> | Date | string
    items?: JsonFilter<"StockEntry">
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    createdById?: StringFilter<"StockEntry"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StockEntryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type StockEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    date?: DateTimeFilter<"StockEntry"> | Date | string
    items?: JsonFilter<"StockEntry">
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    createdById?: StringFilter<"StockEntry"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StockEntryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: StockEntryCountOrderByAggregateInput
    _max?: StockEntryMaxOrderByAggregateInput
    _min?: StockEntryMinOrderByAggregateInput
  }

  export type StockEntryScalarWhereWithAggregatesInput = {
    AND?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    OR?: StockEntryScalarWhereWithAggregatesInput[]
    NOT?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockEntry"> | string
    date?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    items?: JsonWithAggregatesFilter<"StockEntry">
    createdAt?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    createdById?: StringWithAggregatesFilter<"StockEntry"> | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    country?: StringFilter<"Staff"> | string
    monthlyFee?: FloatFilter<"Staff"> | number
    role?: StringFilter<"Staff"> | string
    status?: StringFilter<"Staff"> | string
    image?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    createdById?: StringFilter<"Staff"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    role?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    name?: StringFilter<"Staff"> | string
    country?: StringFilter<"Staff"> | string
    monthlyFee?: FloatFilter<"Staff"> | number
    role?: StringFilter<"Staff"> | string
    status?: StringFilter<"Staff"> | string
    image?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    createdById?: StringFilter<"Staff"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    role?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    country?: StringWithAggregatesFilter<"Staff"> | string
    monthlyFee?: FloatWithAggregatesFilter<"Staff"> | number
    role?: StringWithAggregatesFilter<"Staff"> | string
    status?: StringWithAggregatesFilter<"Staff"> | string
    image?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    createdById?: StringWithAggregatesFilter<"Staff"> | string
  }

  export type OwnerFundWhereInput = {
    AND?: OwnerFundWhereInput | OwnerFundWhereInput[]
    OR?: OwnerFundWhereInput[]
    NOT?: OwnerFundWhereInput | OwnerFundWhereInput[]
    id?: StringFilter<"OwnerFund"> | string
    amount?: FloatFilter<"OwnerFund"> | number
    purpose?: StringFilter<"OwnerFund"> | string
    receipt?: StringFilter<"OwnerFund"> | string
    createdAt?: DateTimeFilter<"OwnerFund"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerFund"> | Date | string
    userId?: StringFilter<"OwnerFund"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OwnerFundOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OwnerFundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnerFundWhereInput | OwnerFundWhereInput[]
    OR?: OwnerFundWhereInput[]
    NOT?: OwnerFundWhereInput | OwnerFundWhereInput[]
    amount?: FloatFilter<"OwnerFund"> | number
    purpose?: StringFilter<"OwnerFund"> | string
    receipt?: StringFilter<"OwnerFund"> | string
    createdAt?: DateTimeFilter<"OwnerFund"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerFund"> | Date | string
    userId?: StringFilter<"OwnerFund"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OwnerFundOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OwnerFundCountOrderByAggregateInput
    _avg?: OwnerFundAvgOrderByAggregateInput
    _max?: OwnerFundMaxOrderByAggregateInput
    _min?: OwnerFundMinOrderByAggregateInput
    _sum?: OwnerFundSumOrderByAggregateInput
  }

  export type OwnerFundScalarWhereWithAggregatesInput = {
    AND?: OwnerFundScalarWhereWithAggregatesInput | OwnerFundScalarWhereWithAggregatesInput[]
    OR?: OwnerFundScalarWhereWithAggregatesInput[]
    NOT?: OwnerFundScalarWhereWithAggregatesInput | OwnerFundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OwnerFund"> | string
    amount?: FloatWithAggregatesFilter<"OwnerFund"> | number
    purpose?: StringWithAggregatesFilter<"OwnerFund"> | string
    receipt?: StringWithAggregatesFilter<"OwnerFund"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OwnerFund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OwnerFund"> | Date | string
    userId?: StringWithAggregatesFilter<"OwnerFund"> | string
  }

  export type ManagerExpenseWhereInput = {
    AND?: ManagerExpenseWhereInput | ManagerExpenseWhereInput[]
    OR?: ManagerExpenseWhereInput[]
    NOT?: ManagerExpenseWhereInput | ManagerExpenseWhereInput[]
    id?: StringFilter<"ManagerExpense"> | string
    amount?: FloatFilter<"ManagerExpense"> | number
    description?: StringFilter<"ManagerExpense"> | string
    receipt?: StringNullableFilter<"ManagerExpense"> | string | null
    createdAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    managerId?: StringFilter<"ManagerExpense"> | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ManagerExpenseOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managerId?: SortOrder
    manager?: UserOrderByWithRelationInput
  }

  export type ManagerExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManagerExpenseWhereInput | ManagerExpenseWhereInput[]
    OR?: ManagerExpenseWhereInput[]
    NOT?: ManagerExpenseWhereInput | ManagerExpenseWhereInput[]
    amount?: FloatFilter<"ManagerExpense"> | number
    description?: StringFilter<"ManagerExpense"> | string
    receipt?: StringNullableFilter<"ManagerExpense"> | string | null
    createdAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    managerId?: StringFilter<"ManagerExpense"> | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ManagerExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managerId?: SortOrder
    _count?: ManagerExpenseCountOrderByAggregateInput
    _avg?: ManagerExpenseAvgOrderByAggregateInput
    _max?: ManagerExpenseMaxOrderByAggregateInput
    _min?: ManagerExpenseMinOrderByAggregateInput
    _sum?: ManagerExpenseSumOrderByAggregateInput
  }

  export type ManagerExpenseScalarWhereWithAggregatesInput = {
    AND?: ManagerExpenseScalarWhereWithAggregatesInput | ManagerExpenseScalarWhereWithAggregatesInput[]
    OR?: ManagerExpenseScalarWhereWithAggregatesInput[]
    NOT?: ManagerExpenseScalarWhereWithAggregatesInput | ManagerExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagerExpense"> | string
    amount?: FloatWithAggregatesFilter<"ManagerExpense"> | number
    description?: StringWithAggregatesFilter<"ManagerExpense"> | string
    receipt?: StringNullableWithAggregatesFilter<"ManagerExpense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ManagerExpense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagerExpense"> | Date | string
    managerId?: StringWithAggregatesFilter<"ManagerExpense"> | string
  }

  export type SalesReportWhereInput = {
    AND?: SalesReportWhereInput | SalesReportWhereInput[]
    OR?: SalesReportWhereInput[]
    NOT?: SalesReportWhereInput | SalesReportWhereInput[]
    id?: StringFilter<"SalesReport"> | string
    itemName?: StringFilter<"SalesReport"> | string
    amount?: IntFilter<"SalesReport"> | number
    unitPrice?: FloatFilter<"SalesReport"> | number
    totalPrice?: FloatFilter<"SalesReport"> | number
    cashAmount?: FloatFilter<"SalesReport"> | number
    transferAmount?: FloatFilter<"SalesReport"> | number
    image?: StringNullableFilter<"SalesReport"> | string | null
    managerId?: StringFilter<"SalesReport"> | string
    createdAt?: DateTimeFilter<"SalesReport"> | Date | string
    updatedAt?: DateTimeFilter<"SalesReport"> | Date | string
  }

  export type SalesReportOrderByWithRelationInput = {
    id?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
    image?: SortOrderInput | SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesReportWhereInput | SalesReportWhereInput[]
    OR?: SalesReportWhereInput[]
    NOT?: SalesReportWhereInput | SalesReportWhereInput[]
    itemName?: StringFilter<"SalesReport"> | string
    amount?: IntFilter<"SalesReport"> | number
    unitPrice?: FloatFilter<"SalesReport"> | number
    totalPrice?: FloatFilter<"SalesReport"> | number
    cashAmount?: FloatFilter<"SalesReport"> | number
    transferAmount?: FloatFilter<"SalesReport"> | number
    image?: StringNullableFilter<"SalesReport"> | string | null
    managerId?: StringFilter<"SalesReport"> | string
    createdAt?: DateTimeFilter<"SalesReport"> | Date | string
    updatedAt?: DateTimeFilter<"SalesReport"> | Date | string
  }, "id">

  export type SalesReportOrderByWithAggregationInput = {
    id?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
    image?: SortOrderInput | SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesReportCountOrderByAggregateInput
    _avg?: SalesReportAvgOrderByAggregateInput
    _max?: SalesReportMaxOrderByAggregateInput
    _min?: SalesReportMinOrderByAggregateInput
    _sum?: SalesReportSumOrderByAggregateInput
  }

  export type SalesReportScalarWhereWithAggregatesInput = {
    AND?: SalesReportScalarWhereWithAggregatesInput | SalesReportScalarWhereWithAggregatesInput[]
    OR?: SalesReportScalarWhereWithAggregatesInput[]
    NOT?: SalesReportScalarWhereWithAggregatesInput | SalesReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesReport"> | string
    itemName?: StringWithAggregatesFilter<"SalesReport"> | string
    amount?: IntWithAggregatesFilter<"SalesReport"> | number
    unitPrice?: FloatWithAggregatesFilter<"SalesReport"> | number
    totalPrice?: FloatWithAggregatesFilter<"SalesReport"> | number
    cashAmount?: FloatWithAggregatesFilter<"SalesReport"> | number
    transferAmount?: FloatWithAggregatesFilter<"SalesReport"> | number
    image?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    managerId?: StringWithAggregatesFilter<"SalesReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesReport"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    category?: StringFilter<"MenuItem"> | string
    price?: FloatFilter<"MenuItem"> | number
    image?: StringNullableFilter<"MenuItem"> | string | null
    description?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    category?: StringFilter<"MenuItem"> | string
    price?: FloatFilter<"MenuItem"> | number
    image?: StringNullableFilter<"MenuItem"> | string | null
    description?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    category?: StringWithAggregatesFilter<"MenuItem"> | string
    price?: FloatWithAggregatesFilter<"MenuItem"> | number
    image?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthSelectionCreateInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutMonthSelectionsInput
  }

  export type MonthSelectionUncheckedCreateInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type MonthSelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutMonthSelectionsNestedInput
  }

  export type MonthSelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type MonthSelectionCreateManyInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type MonthSelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthSelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportCreateInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyReportUncheckedCreateInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type DailyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportCreateManyInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type DailyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryCreateInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutStockEntriesInput
  }

  export type StockEntryUncheckedCreateInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type StockEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutStockEntriesNestedInput
  }

  export type StockEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryCreateManyInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type StockEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateManyInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerFundCreateInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOwnerFundsInput
  }

  export type OwnerFundUncheckedCreateInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OwnerFundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOwnerFundsNestedInput
  }

  export type OwnerFundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerFundCreateManyInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OwnerFundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerFundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerExpenseCreateInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagerExpensesInput
  }

  export type ManagerExpenseUncheckedCreateInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId: string
  }

  export type ManagerExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerExpensesNestedInput
  }

  export type ManagerExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerExpenseCreateManyInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managerId: string
  }

  export type ManagerExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesReportCreateInput = {
    id?: string
    itemName: string
    amount: number
    unitPrice: number
    totalPrice: number
    cashAmount?: number
    transferAmount?: number
    image?: string | null
    managerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesReportUncheckedCreateInput = {
    id?: string
    itemName: string
    amount: number
    unitPrice: number
    totalPrice: number
    cashAmount?: number
    transferAmount?: number
    image?: string | null
    managerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    cashAmount?: FloatFieldUpdateOperationsInput | number
    transferAmount?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    cashAmount?: FloatFieldUpdateOperationsInput | number
    transferAmount?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportCreateManyInput = {
    id?: string
    itemName: string
    amount: number
    unitPrice: number
    totalPrice: number
    cashAmount?: number
    transferAmount?: number
    image?: string | null
    managerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    cashAmount?: FloatFieldUpdateOperationsInput | number
    transferAmount?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    cashAmount?: FloatFieldUpdateOperationsInput | number
    transferAmount?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    category: string
    price: number
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    price: number
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyInput = {
    id?: string
    name: string
    category: string
    price: number
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type MonthSelectionListRelationFilter = {
    every?: MonthSelectionWhereInput
    some?: MonthSelectionWhereInput
    none?: MonthSelectionWhereInput
  }

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type StockEntryListRelationFilter = {
    every?: StockEntryWhereInput
    some?: StockEntryWhereInput
    none?: StockEntryWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type OwnerFundListRelationFilter = {
    every?: OwnerFundWhereInput
    some?: OwnerFundWhereInput
    none?: OwnerFundWhereInput
  }

  export type ManagerExpenseListRelationFilter = {
    every?: ManagerExpenseWhereInput
    some?: ManagerExpenseWhereInput
    none?: ManagerExpenseWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerFundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isOwner?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    monthlyFee?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isOwner?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isOwner?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    monthlyFee?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MonthSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type MonthSelectionAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type MonthSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type MonthSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type MonthSelectionSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    sales?: SortOrder
    credit?: SortOrder
    expenses?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StockEntryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StockEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StockEntryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    role?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    monthlyFee?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    role?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    country?: SortOrder
    monthlyFee?: SortOrder
    role?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    monthlyFee?: SortOrder
  }

  export type OwnerFundCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OwnerFundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OwnerFundMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OwnerFundMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OwnerFundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ManagerExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managerId?: SortOrder
  }

  export type ManagerExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ManagerExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managerId?: SortOrder
  }

  export type ManagerExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    managerId?: SortOrder
  }

  export type ManagerExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalesReportCountOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
    image?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesReportAvgOrderByAggregateInput = {
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
  }

  export type SalesReportMaxOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
    image?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesReportMinOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
    image?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesReportSumOrderByAggregateInput = {
    amount?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    cashAmount?: SortOrder
    transferAmount?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MonthSelectionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput> | MonthSelectionCreateWithoutCreatedByInput[] | MonthSelectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MonthSelectionCreateOrConnectWithoutCreatedByInput | MonthSelectionCreateOrConnectWithoutCreatedByInput[]
    createMany?: MonthSelectionCreateManyCreatedByInputEnvelope
    connect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
  }

  export type DailyReportCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput> | DailyReportCreateWithoutCreatedByInput[] | DailyReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutCreatedByInput | DailyReportCreateOrConnectWithoutCreatedByInput[]
    createMany?: DailyReportCreateManyCreatedByInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type StockEntryCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput> | StockEntryCreateWithoutCreatedByInput[] | StockEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutCreatedByInput | StockEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: StockEntryCreateManyCreatedByInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput> | StaffCreateWithoutCreatedByInput[] | StaffUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedByInput | StaffCreateOrConnectWithoutCreatedByInput[]
    createMany?: StaffCreateManyCreatedByInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type OwnerFundCreateNestedManyWithoutUserInput = {
    create?: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput> | OwnerFundCreateWithoutUserInput[] | OwnerFundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OwnerFundCreateOrConnectWithoutUserInput | OwnerFundCreateOrConnectWithoutUserInput[]
    createMany?: OwnerFundCreateManyUserInputEnvelope
    connect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
  }

  export type ManagerExpenseCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput> | ManagerExpenseCreateWithoutManagerInput[] | ManagerExpenseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerExpenseCreateOrConnectWithoutManagerInput | ManagerExpenseCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerExpenseCreateManyManagerInputEnvelope
    connect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput> | MonthSelectionCreateWithoutCreatedByInput[] | MonthSelectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MonthSelectionCreateOrConnectWithoutCreatedByInput | MonthSelectionCreateOrConnectWithoutCreatedByInput[]
    createMany?: MonthSelectionCreateManyCreatedByInputEnvelope
    connect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput> | DailyReportCreateWithoutCreatedByInput[] | DailyReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutCreatedByInput | DailyReportCreateOrConnectWithoutCreatedByInput[]
    createMany?: DailyReportCreateManyCreatedByInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type StockEntryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput> | StockEntryCreateWithoutCreatedByInput[] | StockEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutCreatedByInput | StockEntryCreateOrConnectWithoutCreatedByInput[]
    createMany?: StockEntryCreateManyCreatedByInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput> | StaffCreateWithoutCreatedByInput[] | StaffUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedByInput | StaffCreateOrConnectWithoutCreatedByInput[]
    createMany?: StaffCreateManyCreatedByInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type OwnerFundUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput> | OwnerFundCreateWithoutUserInput[] | OwnerFundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OwnerFundCreateOrConnectWithoutUserInput | OwnerFundCreateOrConnectWithoutUserInput[]
    createMany?: OwnerFundCreateManyUserInputEnvelope
    connect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
  }

  export type ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput> | ManagerExpenseCreateWithoutManagerInput[] | ManagerExpenseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerExpenseCreateOrConnectWithoutManagerInput | ManagerExpenseCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerExpenseCreateManyManagerInputEnvelope
    connect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MonthSelectionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput> | MonthSelectionCreateWithoutCreatedByInput[] | MonthSelectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MonthSelectionCreateOrConnectWithoutCreatedByInput | MonthSelectionCreateOrConnectWithoutCreatedByInput[]
    upsert?: MonthSelectionUpsertWithWhereUniqueWithoutCreatedByInput | MonthSelectionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MonthSelectionCreateManyCreatedByInputEnvelope
    set?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    disconnect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    delete?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    connect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    update?: MonthSelectionUpdateWithWhereUniqueWithoutCreatedByInput | MonthSelectionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MonthSelectionUpdateManyWithWhereWithoutCreatedByInput | MonthSelectionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MonthSelectionScalarWhereInput | MonthSelectionScalarWhereInput[]
  }

  export type DailyReportUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput> | DailyReportCreateWithoutCreatedByInput[] | DailyReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutCreatedByInput | DailyReportCreateOrConnectWithoutCreatedByInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutCreatedByInput | DailyReportUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DailyReportCreateManyCreatedByInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutCreatedByInput | DailyReportUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutCreatedByInput | DailyReportUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type StockEntryUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput> | StockEntryCreateWithoutCreatedByInput[] | StockEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutCreatedByInput | StockEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutCreatedByInput | StockEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StockEntryCreateManyCreatedByInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutCreatedByInput | StockEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutCreatedByInput | StockEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput> | StaffCreateWithoutCreatedByInput[] | StaffUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedByInput | StaffCreateOrConnectWithoutCreatedByInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCreatedByInput | StaffUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StaffCreateManyCreatedByInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCreatedByInput | StaffUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCreatedByInput | StaffUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type OwnerFundUpdateManyWithoutUserNestedInput = {
    create?: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput> | OwnerFundCreateWithoutUserInput[] | OwnerFundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OwnerFundCreateOrConnectWithoutUserInput | OwnerFundCreateOrConnectWithoutUserInput[]
    upsert?: OwnerFundUpsertWithWhereUniqueWithoutUserInput | OwnerFundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OwnerFundCreateManyUserInputEnvelope
    set?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    disconnect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    delete?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    connect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    update?: OwnerFundUpdateWithWhereUniqueWithoutUserInput | OwnerFundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OwnerFundUpdateManyWithWhereWithoutUserInput | OwnerFundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OwnerFundScalarWhereInput | OwnerFundScalarWhereInput[]
  }

  export type ManagerExpenseUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput> | ManagerExpenseCreateWithoutManagerInput[] | ManagerExpenseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerExpenseCreateOrConnectWithoutManagerInput | ManagerExpenseCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerExpenseUpsertWithWhereUniqueWithoutManagerInput | ManagerExpenseUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerExpenseCreateManyManagerInputEnvelope
    set?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    disconnect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    delete?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    connect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    update?: ManagerExpenseUpdateWithWhereUniqueWithoutManagerInput | ManagerExpenseUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerExpenseUpdateManyWithWhereWithoutManagerInput | ManagerExpenseUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerExpenseScalarWhereInput | ManagerExpenseScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput> | MonthSelectionCreateWithoutCreatedByInput[] | MonthSelectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MonthSelectionCreateOrConnectWithoutCreatedByInput | MonthSelectionCreateOrConnectWithoutCreatedByInput[]
    upsert?: MonthSelectionUpsertWithWhereUniqueWithoutCreatedByInput | MonthSelectionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MonthSelectionCreateManyCreatedByInputEnvelope
    set?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    disconnect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    delete?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    connect?: MonthSelectionWhereUniqueInput | MonthSelectionWhereUniqueInput[]
    update?: MonthSelectionUpdateWithWhereUniqueWithoutCreatedByInput | MonthSelectionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MonthSelectionUpdateManyWithWhereWithoutCreatedByInput | MonthSelectionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MonthSelectionScalarWhereInput | MonthSelectionScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput> | DailyReportCreateWithoutCreatedByInput[] | DailyReportUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutCreatedByInput | DailyReportCreateOrConnectWithoutCreatedByInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutCreatedByInput | DailyReportUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DailyReportCreateManyCreatedByInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutCreatedByInput | DailyReportUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutCreatedByInput | DailyReportUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput> | StockEntryCreateWithoutCreatedByInput[] | StockEntryUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutCreatedByInput | StockEntryCreateOrConnectWithoutCreatedByInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutCreatedByInput | StockEntryUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StockEntryCreateManyCreatedByInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutCreatedByInput | StockEntryUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutCreatedByInput | StockEntryUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput> | StaffCreateWithoutCreatedByInput[] | StaffUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCreatedByInput | StaffCreateOrConnectWithoutCreatedByInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCreatedByInput | StaffUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: StaffCreateManyCreatedByInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCreatedByInput | StaffUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCreatedByInput | StaffUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type OwnerFundUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput> | OwnerFundCreateWithoutUserInput[] | OwnerFundUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OwnerFundCreateOrConnectWithoutUserInput | OwnerFundCreateOrConnectWithoutUserInput[]
    upsert?: OwnerFundUpsertWithWhereUniqueWithoutUserInput | OwnerFundUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OwnerFundCreateManyUserInputEnvelope
    set?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    disconnect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    delete?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    connect?: OwnerFundWhereUniqueInput | OwnerFundWhereUniqueInput[]
    update?: OwnerFundUpdateWithWhereUniqueWithoutUserInput | OwnerFundUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OwnerFundUpdateManyWithWhereWithoutUserInput | OwnerFundUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OwnerFundScalarWhereInput | OwnerFundScalarWhereInput[]
  }

  export type ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput> | ManagerExpenseCreateWithoutManagerInput[] | ManagerExpenseUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerExpenseCreateOrConnectWithoutManagerInput | ManagerExpenseCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerExpenseUpsertWithWhereUniqueWithoutManagerInput | ManagerExpenseUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerExpenseCreateManyManagerInputEnvelope
    set?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    disconnect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    delete?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    connect?: ManagerExpenseWhereUniqueInput | ManagerExpenseWhereUniqueInput[]
    update?: ManagerExpenseUpdateWithWhereUniqueWithoutManagerInput | ManagerExpenseUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerExpenseUpdateManyWithWhereWithoutManagerInput | ManagerExpenseUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerExpenseScalarWhereInput | ManagerExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMonthSelectionsInput = {
    create?: XOR<UserCreateWithoutMonthSelectionsInput, UserUncheckedCreateWithoutMonthSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthSelectionsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMonthSelectionsNestedInput = {
    create?: XOR<UserCreateWithoutMonthSelectionsInput, UserUncheckedCreateWithoutMonthSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthSelectionsInput
    upsert?: UserUpsertWithoutMonthSelectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonthSelectionsInput, UserUpdateWithoutMonthSelectionsInput>, UserUncheckedUpdateWithoutMonthSelectionsInput>
  }

  export type UserCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    upsert?: UserUpsertWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyReportsInput, UserUpdateWithoutDailyReportsInput>, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserCreateNestedOneWithoutStockEntriesInput = {
    create?: XOR<UserCreateWithoutStockEntriesInput, UserUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStockEntriesNestedInput = {
    create?: XOR<UserCreateWithoutStockEntriesInput, UserUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStockEntriesInput
    upsert?: UserUpsertWithoutStockEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStockEntriesInput, UserUpdateWithoutStockEntriesInput>, UserUncheckedUpdateWithoutStockEntriesInput>
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserCreateNestedOneWithoutOwnerFundsInput = {
    create?: XOR<UserCreateWithoutOwnerFundsInput, UserUncheckedCreateWithoutOwnerFundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnerFundsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOwnerFundsNestedInput = {
    create?: XOR<UserCreateWithoutOwnerFundsInput, UserUncheckedCreateWithoutOwnerFundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnerFundsInput
    upsert?: UserUpsertWithoutOwnerFundsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnerFundsInput, UserUpdateWithoutOwnerFundsInput>, UserUncheckedUpdateWithoutOwnerFundsInput>
  }

  export type UserCreateNestedOneWithoutManagerExpensesInput = {
    create?: XOR<UserCreateWithoutManagerExpensesInput, UserUncheckedCreateWithoutManagerExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutManagerExpensesNestedInput = {
    create?: XOR<UserCreateWithoutManagerExpensesInput, UserUncheckedCreateWithoutManagerExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerExpensesInput
    upsert?: UserUpsertWithoutManagerExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagerExpensesInput, UserUpdateWithoutManagerExpensesInput>, UserUncheckedUpdateWithoutManagerExpensesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonthSelectionCreateWithoutCreatedByInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthSelectionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthSelectionCreateOrConnectWithoutCreatedByInput = {
    where: MonthSelectionWhereUniqueInput
    create: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput>
  }

  export type MonthSelectionCreateManyCreatedByInputEnvelope = {
    data: MonthSelectionCreateManyCreatedByInput | MonthSelectionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUncheckedCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportCreateOrConnectWithoutCreatedByInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput>
  }

  export type DailyReportCreateManyCreatedByInputEnvelope = {
    data: DailyReportCreateManyCreatedByInput | DailyReportCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type StockEntryCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockEntryUncheckedCreateWithoutCreatedByInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockEntryCreateOrConnectWithoutCreatedByInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type StockEntryCreateManyCreatedByInputEnvelope = {
    data: StockEntryCreateManyCreatedByInput | StockEntryCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutCreatedByInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput>
  }

  export type StaffCreateManyCreatedByInputEnvelope = {
    data: StaffCreateManyCreatedByInput | StaffCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OwnerFundCreateWithoutUserInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerFundUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerFundCreateOrConnectWithoutUserInput = {
    where: OwnerFundWhereUniqueInput
    create: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput>
  }

  export type OwnerFundCreateManyUserInputEnvelope = {
    data: OwnerFundCreateManyUserInput | OwnerFundCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ManagerExpenseCreateWithoutManagerInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerExpenseUncheckedCreateWithoutManagerInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerExpenseCreateOrConnectWithoutManagerInput = {
    where: ManagerExpenseWhereUniqueInput
    create: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput>
  }

  export type ManagerExpenseCreateManyManagerInputEnvelope = {
    data: ManagerExpenseCreateManyManagerInput | ManagerExpenseCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type MonthSelectionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MonthSelectionWhereUniqueInput
    update: XOR<MonthSelectionUpdateWithoutCreatedByInput, MonthSelectionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MonthSelectionCreateWithoutCreatedByInput, MonthSelectionUncheckedCreateWithoutCreatedByInput>
  }

  export type MonthSelectionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MonthSelectionWhereUniqueInput
    data: XOR<MonthSelectionUpdateWithoutCreatedByInput, MonthSelectionUncheckedUpdateWithoutCreatedByInput>
  }

  export type MonthSelectionUpdateManyWithWhereWithoutCreatedByInput = {
    where: MonthSelectionScalarWhereInput
    data: XOR<MonthSelectionUpdateManyMutationInput, MonthSelectionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type MonthSelectionScalarWhereInput = {
    AND?: MonthSelectionScalarWhereInput | MonthSelectionScalarWhereInput[]
    OR?: MonthSelectionScalarWhereInput[]
    NOT?: MonthSelectionScalarWhereInput | MonthSelectionScalarWhereInput[]
    id?: StringFilter<"MonthSelection"> | string
    month?: IntFilter<"MonthSelection"> | number
    year?: IntFilter<"MonthSelection"> | number
    createdAt?: DateTimeFilter<"MonthSelection"> | Date | string
    updatedAt?: DateTimeFilter<"MonthSelection"> | Date | string
    createdById?: StringFilter<"MonthSelection"> | string
  }

  export type DailyReportUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutCreatedByInput, DailyReportUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DailyReportCreateWithoutCreatedByInput, DailyReportUncheckedCreateWithoutCreatedByInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutCreatedByInput, DailyReportUncheckedUpdateWithoutCreatedByInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutCreatedByInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    sales?: FloatFilter<"DailyReport"> | number
    credit?: FloatFilter<"DailyReport"> | number
    expenses?: FloatFilter<"DailyReport"> | number
    notes?: StringNullableFilter<"DailyReport"> | string | null
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
    createdById?: StringFilter<"DailyReport"> | string
  }

  export type StockEntryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: StockEntryWhereUniqueInput
    update: XOR<StockEntryUpdateWithoutCreatedByInput, StockEntryUncheckedUpdateWithoutCreatedByInput>
    create: XOR<StockEntryCreateWithoutCreatedByInput, StockEntryUncheckedCreateWithoutCreatedByInput>
  }

  export type StockEntryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: StockEntryWhereUniqueInput
    data: XOR<StockEntryUpdateWithoutCreatedByInput, StockEntryUncheckedUpdateWithoutCreatedByInput>
  }

  export type StockEntryUpdateManyWithWhereWithoutCreatedByInput = {
    where: StockEntryScalarWhereInput
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type StockEntryScalarWhereInput = {
    AND?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    OR?: StockEntryScalarWhereInput[]
    NOT?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    id?: StringFilter<"StockEntry"> | string
    date?: DateTimeFilter<"StockEntry"> | Date | string
    items?: JsonFilter<"StockEntry">
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    createdById?: StringFilter<"StockEntry"> | string
  }

  export type StaffUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutCreatedByInput, StaffUncheckedUpdateWithoutCreatedByInput>
    create: XOR<StaffCreateWithoutCreatedByInput, StaffUncheckedCreateWithoutCreatedByInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutCreatedByInput, StaffUncheckedUpdateWithoutCreatedByInput>
  }

  export type StaffUpdateManyWithWhereWithoutCreatedByInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    country?: StringFilter<"Staff"> | string
    monthlyFee?: FloatFilter<"Staff"> | number
    role?: StringFilter<"Staff"> | string
    status?: StringFilter<"Staff"> | string
    image?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    createdById?: StringFilter<"Staff"> | string
  }

  export type OwnerFundUpsertWithWhereUniqueWithoutUserInput = {
    where: OwnerFundWhereUniqueInput
    update: XOR<OwnerFundUpdateWithoutUserInput, OwnerFundUncheckedUpdateWithoutUserInput>
    create: XOR<OwnerFundCreateWithoutUserInput, OwnerFundUncheckedCreateWithoutUserInput>
  }

  export type OwnerFundUpdateWithWhereUniqueWithoutUserInput = {
    where: OwnerFundWhereUniqueInput
    data: XOR<OwnerFundUpdateWithoutUserInput, OwnerFundUncheckedUpdateWithoutUserInput>
  }

  export type OwnerFundUpdateManyWithWhereWithoutUserInput = {
    where: OwnerFundScalarWhereInput
    data: XOR<OwnerFundUpdateManyMutationInput, OwnerFundUncheckedUpdateManyWithoutUserInput>
  }

  export type OwnerFundScalarWhereInput = {
    AND?: OwnerFundScalarWhereInput | OwnerFundScalarWhereInput[]
    OR?: OwnerFundScalarWhereInput[]
    NOT?: OwnerFundScalarWhereInput | OwnerFundScalarWhereInput[]
    id?: StringFilter<"OwnerFund"> | string
    amount?: FloatFilter<"OwnerFund"> | number
    purpose?: StringFilter<"OwnerFund"> | string
    receipt?: StringFilter<"OwnerFund"> | string
    createdAt?: DateTimeFilter<"OwnerFund"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerFund"> | Date | string
    userId?: StringFilter<"OwnerFund"> | string
  }

  export type ManagerExpenseUpsertWithWhereUniqueWithoutManagerInput = {
    where: ManagerExpenseWhereUniqueInput
    update: XOR<ManagerExpenseUpdateWithoutManagerInput, ManagerExpenseUncheckedUpdateWithoutManagerInput>
    create: XOR<ManagerExpenseCreateWithoutManagerInput, ManagerExpenseUncheckedCreateWithoutManagerInput>
  }

  export type ManagerExpenseUpdateWithWhereUniqueWithoutManagerInput = {
    where: ManagerExpenseWhereUniqueInput
    data: XOR<ManagerExpenseUpdateWithoutManagerInput, ManagerExpenseUncheckedUpdateWithoutManagerInput>
  }

  export type ManagerExpenseUpdateManyWithWhereWithoutManagerInput = {
    where: ManagerExpenseScalarWhereInput
    data: XOR<ManagerExpenseUpdateManyMutationInput, ManagerExpenseUncheckedUpdateManyWithoutManagerInput>
  }

  export type ManagerExpenseScalarWhereInput = {
    AND?: ManagerExpenseScalarWhereInput | ManagerExpenseScalarWhereInput[]
    OR?: ManagerExpenseScalarWhereInput[]
    NOT?: ManagerExpenseScalarWhereInput | ManagerExpenseScalarWhereInput[]
    id?: StringFilter<"ManagerExpense"> | string
    amount?: FloatFilter<"ManagerExpense"> | number
    description?: StringFilter<"ManagerExpense"> | string
    receipt?: StringNullableFilter<"ManagerExpense"> | string | null
    createdAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerExpense"> | Date | string
    managerId?: StringFilter<"ManagerExpense"> | string
  }

  export type UserCreateWithoutMonthSelectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutMonthSelectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutMonthSelectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonthSelectionsInput, UserUncheckedCreateWithoutMonthSelectionsInput>
  }

  export type UserUpsertWithoutMonthSelectionsInput = {
    update: XOR<UserUpdateWithoutMonthSelectionsInput, UserUncheckedUpdateWithoutMonthSelectionsInput>
    create: XOR<UserCreateWithoutMonthSelectionsInput, UserUncheckedCreateWithoutMonthSelectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonthSelectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonthSelectionsInput, UserUncheckedUpdateWithoutMonthSelectionsInput>
  }

  export type UserUpdateWithoutMonthSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutMonthSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutDailyReportsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutDailyReportsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutDailyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
  }

  export type UserUpsertWithoutDailyReportsInput = {
    update: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutStockEntriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutStockEntriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutStockEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStockEntriesInput, UserUncheckedCreateWithoutStockEntriesInput>
  }

  export type UserUpsertWithoutStockEntriesInput = {
    update: XOR<UserUpdateWithoutStockEntriesInput, UserUncheckedUpdateWithoutStockEntriesInput>
    create: XOR<UserCreateWithoutStockEntriesInput, UserUncheckedCreateWithoutStockEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStockEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStockEntriesInput, UserUncheckedUpdateWithoutStockEntriesInput>
  }

  export type UserUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutOwnerFundsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    managerExpenses?: ManagerExpenseCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutOwnerFundsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    managerExpenses?: ManagerExpenseUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutOwnerFundsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnerFundsInput, UserUncheckedCreateWithoutOwnerFundsInput>
  }

  export type UserUpsertWithoutOwnerFundsInput = {
    update: XOR<UserUpdateWithoutOwnerFundsInput, UserUncheckedUpdateWithoutOwnerFundsInput>
    create: XOR<UserCreateWithoutOwnerFundsInput, UserUncheckedCreateWithoutOwnerFundsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnerFundsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnerFundsInput, UserUncheckedUpdateWithoutOwnerFundsInput>
  }

  export type UserUpdateWithoutOwnerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    managerExpenses?: ManagerExpenseUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnerFundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    managerExpenses?: ManagerExpenseUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateWithoutManagerExpensesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryCreateNestedManyWithoutCreatedByInput
    staff?: StaffCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerExpensesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    isOwner?: boolean
    country?: string | null
    monthlyFee?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    monthSelections?: MonthSelectionUncheckedCreateNestedManyWithoutCreatedByInput
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutCreatedByInput
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutCreatedByInput
    staff?: StaffUncheckedCreateNestedManyWithoutCreatedByInput
    ownerFunds?: OwnerFundUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerExpensesInput, UserUncheckedCreateWithoutManagerExpensesInput>
  }

  export type UserUpsertWithoutManagerExpensesInput = {
    update: XOR<UserUpdateWithoutManagerExpensesInput, UserUncheckedUpdateWithoutManagerExpensesInput>
    create: XOR<UserCreateWithoutManagerExpensesInput, UserUncheckedCreateWithoutManagerExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagerExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagerExpensesInput, UserUncheckedUpdateWithoutManagerExpensesInput>
  }

  export type UserUpdateWithoutManagerExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monthSelections?: MonthSelectionUncheckedUpdateManyWithoutCreatedByNestedInput
    dailyReports?: DailyReportUncheckedUpdateManyWithoutCreatedByNestedInput
    stockEntries?: StockEntryUncheckedUpdateManyWithoutCreatedByNestedInput
    staff?: StaffUncheckedUpdateManyWithoutCreatedByNestedInput
    ownerFunds?: OwnerFundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type MonthSelectionCreateManyCreatedByInput = {
    id?: string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportCreateManyCreatedByInput = {
    id?: string
    date: Date | string
    sales?: number
    credit?: number
    expenses?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockEntryCreateManyCreatedByInput = {
    id?: string
    date: Date | string
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateManyCreatedByInput = {
    id?: string
    name: string
    email: string
    country: string
    monthlyFee: number
    role?: string
    status?: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OwnerFundCreateManyUserInput = {
    id?: string
    amount: number
    purpose: string
    receipt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerExpenseCreateManyManagerInput = {
    id?: string
    amount: number
    description: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthSelectionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthSelectionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthSelectionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: FloatFieldUpdateOperationsInput | number
    credit?: FloatFieldUpdateOperationsInput | number
    expenses?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    monthlyFee?: FloatFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerFundUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerFundUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerFundUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    receipt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerExpenseUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerExpenseUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerExpenseUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}