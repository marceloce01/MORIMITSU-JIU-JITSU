
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ResetPasswordCode
 * 
 */
export type ResetPasswordCode = $Result.DefaultSelection<Prisma.$ResetPasswordCodePayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model StudentClass
 * 
 */
export type StudentClass = $Result.DefaultSelection<Prisma.$StudentClassPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model StudentPresence
 * 
 */
export type StudentPresence = $Result.DefaultSelection<Prisma.$StudentPresencePayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Belt: {
  WHITE: 'WHITE',
  GRAY_WHITE: 'GRAY_WHITE',
  GRAY: 'GRAY',
  GRAY_BLACK: 'GRAY_BLACK',
  YELLOW_WHITE: 'YELLOW_WHITE',
  YELLOW: 'YELLOW',
  YELLOW_BLACK: 'YELLOW_BLACK',
  ORANGE_WHITE: 'ORANGE_WHITE',
  ORANGE: 'ORANGE',
  ORANGE_BLACK: 'ORANGE_BLACK',
  GREEN_WHITE: 'GREEN_WHITE',
  GREEN: 'GREEN',
  GREEN_BLACK: 'GREEN_BLACK',
  BLUE: 'BLUE',
  PURPLE: 'PURPLE',
  BROWN: 'BROWN',
  BLACK: 'BLACK',
  RED: 'RED'
};

export type Belt = (typeof Belt)[keyof typeof Belt]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Belt = $Enums.Belt

export const Belt: typeof $Enums.Belt

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resetPasswordCode`: Exposes CRUD operations for the **ResetPasswordCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetPasswordCodes
    * const resetPasswordCodes = await prisma.resetPasswordCode.findMany()
    * ```
    */
  get resetPasswordCode(): Prisma.ResetPasswordCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentClass`: Exposes CRUD operations for the **StudentClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentClasses
    * const studentClasses = await prisma.studentClass.findMany()
    * ```
    */
  get studentClass(): Prisma.StudentClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentPresence`: Exposes CRUD operations for the **StudentPresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentPresences
    * const studentPresences = await prisma.studentPresence.findMany()
    * ```
    */
  get studentPresence(): Prisma.StudentPresenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    ResetPasswordCode: 'ResetPasswordCode',
    Student: 'Student',
    Class: 'Class',
    StudentClass: 'StudentClass',
    Classroom: 'Classroom',
    StudentPresence: 'StudentPresence',
    Config: 'Config'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resetPasswordCode" | "student" | "class" | "studentClass" | "classroom" | "studentPresence" | "config"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      ResetPasswordCode: {
        payload: Prisma.$ResetPasswordCodePayload<ExtArgs>
        fields: Prisma.ResetPasswordCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetPasswordCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetPasswordCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          findFirst: {
            args: Prisma.ResetPasswordCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetPasswordCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          findMany: {
            args: Prisma.ResetPasswordCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>[]
          }
          create: {
            args: Prisma.ResetPasswordCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          createMany: {
            args: Prisma.ResetPasswordCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetPasswordCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>[]
          }
          delete: {
            args: Prisma.ResetPasswordCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          update: {
            args: Prisma.ResetPasswordCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          deleteMany: {
            args: Prisma.ResetPasswordCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetPasswordCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResetPasswordCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>[]
          }
          upsert: {
            args: Prisma.ResetPasswordCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordCodePayload>
          }
          aggregate: {
            args: Prisma.ResetPasswordCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetPasswordCode>
          }
          groupBy: {
            args: Prisma.ResetPasswordCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetPasswordCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordCodeCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      StudentClass: {
        payload: Prisma.$StudentClassPayload<ExtArgs>
        fields: Prisma.StudentClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          findFirst: {
            args: Prisma.StudentClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          findMany: {
            args: Prisma.StudentClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>[]
          }
          create: {
            args: Prisma.StudentClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          createMany: {
            args: Prisma.StudentClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>[]
          }
          delete: {
            args: Prisma.StudentClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          update: {
            args: Prisma.StudentClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          deleteMany: {
            args: Prisma.StudentClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>[]
          }
          upsert: {
            args: Prisma.StudentClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentClassPayload>
          }
          aggregate: {
            args: Prisma.StudentClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentClass>
          }
          groupBy: {
            args: Prisma.StudentClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentClassCountArgs<ExtArgs>
            result: $Utils.Optional<StudentClassCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      StudentPresence: {
        payload: Prisma.$StudentPresencePayload<ExtArgs>
        fields: Prisma.StudentPresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentPresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentPresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          findFirst: {
            args: Prisma.StudentPresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentPresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          findMany: {
            args: Prisma.StudentPresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>[]
          }
          create: {
            args: Prisma.StudentPresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          createMany: {
            args: Prisma.StudentPresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentPresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>[]
          }
          delete: {
            args: Prisma.StudentPresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          update: {
            args: Prisma.StudentPresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          deleteMany: {
            args: Prisma.StudentPresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentPresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentPresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>[]
          }
          upsert: {
            args: Prisma.StudentPresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPresencePayload>
          }
          aggregate: {
            args: Prisma.StudentPresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentPresence>
          }
          groupBy: {
            args: Prisma.StudentPresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentPresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentPresenceCountArgs<ExtArgs>
            result: $Utils.Optional<StudentPresenceCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    user?: UserOmit
    resetPasswordCode?: ResetPasswordCodeOmit
    student?: StudentOmit
    class?: ClassOmit
    studentClass?: StudentClassOmit
    classroom?: ClassroomOmit
    studentPresence?: StudentPresenceOmit
    config?: ConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    resetPassword: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resetPassword?: boolean | UserCountOutputTypeCountResetPasswordArgs
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
  export type UserCountOutputTypeCountResetPasswordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordCodeWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    classes: number
    presences: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | StudentCountOutputTypeCountClassesArgs
    presences?: boolean | StudentCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentClassWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPresenceWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentClassWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    presences: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presences?: boolean | ClassroomCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomCountOutputType
     */
    select?: ClassroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPresenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPassword?: boolean | User$resetPasswordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resetPassword?: boolean | User$resetPasswordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resetPassword: Prisma.$ResetPasswordCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      role: $Enums.Role
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
    resetPassword<T extends User$resetPasswordArgs<ExtArgs> = {}>(args?: Subset<T, User$resetPasswordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.resetPassword
   */
  export type User$resetPasswordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    where?: ResetPasswordCodeWhereInput
    orderBy?: ResetPasswordCodeOrderByWithRelationInput | ResetPasswordCodeOrderByWithRelationInput[]
    cursor?: ResetPasswordCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResetPasswordCodeScalarFieldEnum | ResetPasswordCodeScalarFieldEnum[]
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
   * Model ResetPasswordCode
   */

  export type AggregateResetPasswordCode = {
    _count: ResetPasswordCodeCountAggregateOutputType | null
    _min: ResetPasswordCodeMinAggregateOutputType | null
    _max: ResetPasswordCodeMaxAggregateOutputType | null
  }

  export type ResetPasswordCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type ResetPasswordCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
    userId: string | null
  }

  export type ResetPasswordCodeCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ResetPasswordCodeMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type ResetPasswordCodeMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
  }

  export type ResetPasswordCodeCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ResetPasswordCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswordCode to aggregate.
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordCodes to fetch.
     */
    orderBy?: ResetPasswordCodeOrderByWithRelationInput | ResetPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetPasswordCodes
    **/
    _count?: true | ResetPasswordCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetPasswordCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetPasswordCodeMaxAggregateInputType
  }

  export type GetResetPasswordCodeAggregateType<T extends ResetPasswordCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateResetPasswordCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetPasswordCode[P]>
      : GetScalarType<T[P], AggregateResetPasswordCode[P]>
  }




  export type ResetPasswordCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordCodeWhereInput
    orderBy?: ResetPasswordCodeOrderByWithAggregationInput | ResetPasswordCodeOrderByWithAggregationInput[]
    by: ResetPasswordCodeScalarFieldEnum[] | ResetPasswordCodeScalarFieldEnum
    having?: ResetPasswordCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetPasswordCodeCountAggregateInputType | true
    _min?: ResetPasswordCodeMinAggregateInputType
    _max?: ResetPasswordCodeMaxAggregateInputType
  }

  export type ResetPasswordCodeGroupByOutputType = {
    id: string
    code: string
    expiresAt: Date
    createdAt: Date
    userId: string
    _count: ResetPasswordCodeCountAggregateOutputType | null
    _min: ResetPasswordCodeMinAggregateOutputType | null
    _max: ResetPasswordCodeMaxAggregateOutputType | null
  }

  type GetResetPasswordCodeGroupByPayload<T extends ResetPasswordCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetPasswordCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetPasswordCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetPasswordCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ResetPasswordCodeGroupByOutputType[P]>
        }
      >
    >


  export type ResetPasswordCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordCode"]>

  export type ResetPasswordCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordCode"]>

  export type ResetPasswordCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordCode"]>

  export type ResetPasswordCodeSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ResetPasswordCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiresAt" | "createdAt" | "userId", ExtArgs["result"]["resetPasswordCode"]>
  export type ResetPasswordCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResetPasswordCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResetPasswordCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResetPasswordCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetPasswordCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      expiresAt: Date
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["resetPasswordCode"]>
    composites: {}
  }

  type ResetPasswordCodeGetPayload<S extends boolean | null | undefined | ResetPasswordCodeDefaultArgs> = $Result.GetResult<Prisma.$ResetPasswordCodePayload, S>

  type ResetPasswordCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResetPasswordCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResetPasswordCodeCountAggregateInputType | true
    }

  export interface ResetPasswordCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetPasswordCode'], meta: { name: 'ResetPasswordCode' } }
    /**
     * Find zero or one ResetPasswordCode that matches the filter.
     * @param {ResetPasswordCodeFindUniqueArgs} args - Arguments to find a ResetPasswordCode
     * @example
     * // Get one ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetPasswordCodeFindUniqueArgs>(args: SelectSubset<T, ResetPasswordCodeFindUniqueArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResetPasswordCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResetPasswordCodeFindUniqueOrThrowArgs} args - Arguments to find a ResetPasswordCode
     * @example
     * // Get one ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetPasswordCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetPasswordCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetPasswordCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeFindFirstArgs} args - Arguments to find a ResetPasswordCode
     * @example
     * // Get one ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetPasswordCodeFindFirstArgs>(args?: SelectSubset<T, ResetPasswordCodeFindFirstArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetPasswordCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeFindFirstOrThrowArgs} args - Arguments to find a ResetPasswordCode
     * @example
     * // Get one ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetPasswordCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetPasswordCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResetPasswordCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetPasswordCodes
     * const resetPasswordCodes = await prisma.resetPasswordCode.findMany()
     * 
     * // Get first 10 ResetPasswordCodes
     * const resetPasswordCodes = await prisma.resetPasswordCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetPasswordCodeWithIdOnly = await prisma.resetPasswordCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetPasswordCodeFindManyArgs>(args?: SelectSubset<T, ResetPasswordCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResetPasswordCode.
     * @param {ResetPasswordCodeCreateArgs} args - Arguments to create a ResetPasswordCode.
     * @example
     * // Create one ResetPasswordCode
     * const ResetPasswordCode = await prisma.resetPasswordCode.create({
     *   data: {
     *     // ... data to create a ResetPasswordCode
     *   }
     * })
     * 
     */
    create<T extends ResetPasswordCodeCreateArgs>(args: SelectSubset<T, ResetPasswordCodeCreateArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResetPasswordCodes.
     * @param {ResetPasswordCodeCreateManyArgs} args - Arguments to create many ResetPasswordCodes.
     * @example
     * // Create many ResetPasswordCodes
     * const resetPasswordCode = await prisma.resetPasswordCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetPasswordCodeCreateManyArgs>(args?: SelectSubset<T, ResetPasswordCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetPasswordCodes and returns the data saved in the database.
     * @param {ResetPasswordCodeCreateManyAndReturnArgs} args - Arguments to create many ResetPasswordCodes.
     * @example
     * // Create many ResetPasswordCodes
     * const resetPasswordCode = await prisma.resetPasswordCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetPasswordCodes and only return the `id`
     * const resetPasswordCodeWithIdOnly = await prisma.resetPasswordCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetPasswordCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetPasswordCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResetPasswordCode.
     * @param {ResetPasswordCodeDeleteArgs} args - Arguments to delete one ResetPasswordCode.
     * @example
     * // Delete one ResetPasswordCode
     * const ResetPasswordCode = await prisma.resetPasswordCode.delete({
     *   where: {
     *     // ... filter to delete one ResetPasswordCode
     *   }
     * })
     * 
     */
    delete<T extends ResetPasswordCodeDeleteArgs>(args: SelectSubset<T, ResetPasswordCodeDeleteArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResetPasswordCode.
     * @param {ResetPasswordCodeUpdateArgs} args - Arguments to update one ResetPasswordCode.
     * @example
     * // Update one ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetPasswordCodeUpdateArgs>(args: SelectSubset<T, ResetPasswordCodeUpdateArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResetPasswordCodes.
     * @param {ResetPasswordCodeDeleteManyArgs} args - Arguments to filter ResetPasswordCodes to delete.
     * @example
     * // Delete a few ResetPasswordCodes
     * const { count } = await prisma.resetPasswordCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetPasswordCodeDeleteManyArgs>(args?: SelectSubset<T, ResetPasswordCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetPasswordCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetPasswordCodes
     * const resetPasswordCode = await prisma.resetPasswordCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetPasswordCodeUpdateManyArgs>(args: SelectSubset<T, ResetPasswordCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetPasswordCodes and returns the data updated in the database.
     * @param {ResetPasswordCodeUpdateManyAndReturnArgs} args - Arguments to update many ResetPasswordCodes.
     * @example
     * // Update many ResetPasswordCodes
     * const resetPasswordCode = await prisma.resetPasswordCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResetPasswordCodes and only return the `id`
     * const resetPasswordCodeWithIdOnly = await prisma.resetPasswordCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResetPasswordCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResetPasswordCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResetPasswordCode.
     * @param {ResetPasswordCodeUpsertArgs} args - Arguments to update or create a ResetPasswordCode.
     * @example
     * // Update or create a ResetPasswordCode
     * const resetPasswordCode = await prisma.resetPasswordCode.upsert({
     *   create: {
     *     // ... data to create a ResetPasswordCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetPasswordCode we want to update
     *   }
     * })
     */
    upsert<T extends ResetPasswordCodeUpsertArgs>(args: SelectSubset<T, ResetPasswordCodeUpsertArgs<ExtArgs>>): Prisma__ResetPasswordCodeClient<$Result.GetResult<Prisma.$ResetPasswordCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResetPasswordCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeCountArgs} args - Arguments to filter ResetPasswordCodes to count.
     * @example
     * // Count the number of ResetPasswordCodes
     * const count = await prisma.resetPasswordCode.count({
     *   where: {
     *     // ... the filter for the ResetPasswordCodes we want to count
     *   }
     * })
    **/
    count<T extends ResetPasswordCodeCountArgs>(
      args?: Subset<T, ResetPasswordCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetPasswordCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetPasswordCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResetPasswordCodeAggregateArgs>(args: Subset<T, ResetPasswordCodeAggregateArgs>): Prisma.PrismaPromise<GetResetPasswordCodeAggregateType<T>>

    /**
     * Group by ResetPasswordCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordCodeGroupByArgs} args - Group by arguments.
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
      T extends ResetPasswordCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetPasswordCodeGroupByArgs['orderBy'] }
        : { orderBy?: ResetPasswordCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResetPasswordCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetPasswordCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetPasswordCode model
   */
  readonly fields: ResetPasswordCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetPasswordCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetPasswordCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ResetPasswordCode model
   */
  interface ResetPasswordCodeFieldRefs {
    readonly id: FieldRef<"ResetPasswordCode", 'String'>
    readonly code: FieldRef<"ResetPasswordCode", 'String'>
    readonly expiresAt: FieldRef<"ResetPasswordCode", 'DateTime'>
    readonly createdAt: FieldRef<"ResetPasswordCode", 'DateTime'>
    readonly userId: FieldRef<"ResetPasswordCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResetPasswordCode findUnique
   */
  export type ResetPasswordCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordCode to fetch.
     */
    where: ResetPasswordCodeWhereUniqueInput
  }

  /**
   * ResetPasswordCode findUniqueOrThrow
   */
  export type ResetPasswordCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordCode to fetch.
     */
    where: ResetPasswordCodeWhereUniqueInput
  }

  /**
   * ResetPasswordCode findFirst
   */
  export type ResetPasswordCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordCode to fetch.
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordCodes to fetch.
     */
    orderBy?: ResetPasswordCodeOrderByWithRelationInput | ResetPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswordCodes.
     */
    cursor?: ResetPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswordCodes.
     */
    distinct?: ResetPasswordCodeScalarFieldEnum | ResetPasswordCodeScalarFieldEnum[]
  }

  /**
   * ResetPasswordCode findFirstOrThrow
   */
  export type ResetPasswordCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordCode to fetch.
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordCodes to fetch.
     */
    orderBy?: ResetPasswordCodeOrderByWithRelationInput | ResetPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswordCodes.
     */
    cursor?: ResetPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswordCodes.
     */
    distinct?: ResetPasswordCodeScalarFieldEnum | ResetPasswordCodeScalarFieldEnum[]
  }

  /**
   * ResetPasswordCode findMany
   */
  export type ResetPasswordCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordCodes to fetch.
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordCodes to fetch.
     */
    orderBy?: ResetPasswordCodeOrderByWithRelationInput | ResetPasswordCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetPasswordCodes.
     */
    cursor?: ResetPasswordCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordCodes.
     */
    skip?: number
    distinct?: ResetPasswordCodeScalarFieldEnum | ResetPasswordCodeScalarFieldEnum[]
  }

  /**
   * ResetPasswordCode create
   */
  export type ResetPasswordCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ResetPasswordCode.
     */
    data: XOR<ResetPasswordCodeCreateInput, ResetPasswordCodeUncheckedCreateInput>
  }

  /**
   * ResetPasswordCode createMany
   */
  export type ResetPasswordCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetPasswordCodes.
     */
    data: ResetPasswordCodeCreateManyInput | ResetPasswordCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetPasswordCode createManyAndReturn
   */
  export type ResetPasswordCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ResetPasswordCodes.
     */
    data: ResetPasswordCodeCreateManyInput | ResetPasswordCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetPasswordCode update
   */
  export type ResetPasswordCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ResetPasswordCode.
     */
    data: XOR<ResetPasswordCodeUpdateInput, ResetPasswordCodeUncheckedUpdateInput>
    /**
     * Choose, which ResetPasswordCode to update.
     */
    where: ResetPasswordCodeWhereUniqueInput
  }

  /**
   * ResetPasswordCode updateMany
   */
  export type ResetPasswordCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetPasswordCodes.
     */
    data: XOR<ResetPasswordCodeUpdateManyMutationInput, ResetPasswordCodeUncheckedUpdateManyInput>
    /**
     * Filter which ResetPasswordCodes to update
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * Limit how many ResetPasswordCodes to update.
     */
    limit?: number
  }

  /**
   * ResetPasswordCode updateManyAndReturn
   */
  export type ResetPasswordCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * The data used to update ResetPasswordCodes.
     */
    data: XOR<ResetPasswordCodeUpdateManyMutationInput, ResetPasswordCodeUncheckedUpdateManyInput>
    /**
     * Filter which ResetPasswordCodes to update
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * Limit how many ResetPasswordCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetPasswordCode upsert
   */
  export type ResetPasswordCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ResetPasswordCode to update in case it exists.
     */
    where: ResetPasswordCodeWhereUniqueInput
    /**
     * In case the ResetPasswordCode found by the `where` argument doesn't exist, create a new ResetPasswordCode with this data.
     */
    create: XOR<ResetPasswordCodeCreateInput, ResetPasswordCodeUncheckedCreateInput>
    /**
     * In case the ResetPasswordCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetPasswordCodeUpdateInput, ResetPasswordCodeUncheckedUpdateInput>
  }

  /**
   * ResetPasswordCode delete
   */
  export type ResetPasswordCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
    /**
     * Filter which ResetPasswordCode to delete.
     */
    where: ResetPasswordCodeWhereUniqueInput
  }

  /**
   * ResetPasswordCode deleteMany
   */
  export type ResetPasswordCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswordCodes to delete
     */
    where?: ResetPasswordCodeWhereInput
    /**
     * Limit how many ResetPasswordCodes to delete.
     */
    limit?: number
  }

  /**
   * ResetPasswordCode without action
   */
  export type ResetPasswordCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordCode
     */
    select?: ResetPasswordCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordCode
     */
    omit?: ResetPasswordCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordCodeInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    enrollment: number | null
    current_frequency: number | null
    grade: number | null
    total_frequency: number | null
    number: number | null
  }

  export type StudentSumAggregateOutputType = {
    enrollment: number | null
    current_frequency: number | null
    grade: number | null
    total_frequency: number | null
    number: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    cpf: string | null
    gender: $Enums.Gender | null
    birth_date: Date | null
    enrollment: number | null
    current_frequency: number | null
    belt: $Enums.Belt | null
    grade: number | null
    role: $Enums.Role | null
    guardian_phone: string | null
    total_frequency: number | null
    city: string | null
    street: string | null
    district: string | null
    number: number | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    cpf: string | null
    gender: $Enums.Gender | null
    birth_date: Date | null
    enrollment: number | null
    current_frequency: number | null
    belt: $Enums.Belt | null
    grade: number | null
    role: $Enums.Role | null
    guardian_phone: string | null
    total_frequency: number | null
    city: string | null
    street: string | null
    district: string | null
    number: number | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    cpf: number
    gender: number
    birth_date: number
    enrollment: number
    current_frequency: number
    belt: number
    grade: number
    role: number
    guardian_phone: number
    total_frequency: number
    city: number
    street: number
    district: number
    number: number
    complement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    enrollment?: true
    current_frequency?: true
    grade?: true
    total_frequency?: true
    number?: true
  }

  export type StudentSumAggregateInputType = {
    enrollment?: true
    current_frequency?: true
    grade?: true
    total_frequency?: true
    number?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cpf?: true
    gender?: true
    birth_date?: true
    enrollment?: true
    current_frequency?: true
    belt?: true
    grade?: true
    role?: true
    guardian_phone?: true
    total_frequency?: true
    city?: true
    street?: true
    district?: true
    number?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cpf?: true
    gender?: true
    birth_date?: true
    enrollment?: true
    current_frequency?: true
    belt?: true
    grade?: true
    role?: true
    guardian_phone?: true
    total_frequency?: true
    city?: true
    street?: true
    district?: true
    number?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cpf?: true
    gender?: true
    birth_date?: true
    enrollment?: true
    current_frequency?: true
    belt?: true
    grade?: true
    role?: true
    guardian_phone?: true
    total_frequency?: true
    city?: true
    street?: true
    district?: true
    number?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date
    enrollment: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role: $Enums.Role
    guardian_phone: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cpf?: boolean
    gender?: boolean
    birth_date?: boolean
    enrollment?: boolean
    current_frequency?: boolean
    belt?: boolean
    grade?: boolean
    role?: boolean
    guardian_phone?: boolean
    total_frequency?: boolean
    city?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classes?: boolean | Student$classesArgs<ExtArgs>
    presences?: boolean | Student$presencesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cpf?: boolean
    gender?: boolean
    birth_date?: boolean
    enrollment?: boolean
    current_frequency?: boolean
    belt?: boolean
    grade?: boolean
    role?: boolean
    guardian_phone?: boolean
    total_frequency?: boolean
    city?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cpf?: boolean
    gender?: boolean
    birth_date?: boolean
    enrollment?: boolean
    current_frequency?: boolean
    belt?: boolean
    grade?: boolean
    role?: boolean
    guardian_phone?: boolean
    total_frequency?: boolean
    city?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cpf?: boolean
    gender?: boolean
    birth_date?: boolean
    enrollment?: boolean
    current_frequency?: boolean
    belt?: boolean
    grade?: boolean
    role?: boolean
    guardian_phone?: boolean
    total_frequency?: boolean
    city?: boolean
    street?: boolean
    district?: boolean
    number?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "cpf" | "gender" | "birth_date" | "enrollment" | "current_frequency" | "belt" | "grade" | "role" | "guardian_phone" | "total_frequency" | "city" | "street" | "district" | "number" | "complement" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Student$classesArgs<ExtArgs>
    presences?: boolean | Student$presencesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      classes: Prisma.$StudentClassPayload<ExtArgs>[]
      presences: Prisma.$StudentPresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string
      cpf: string
      gender: $Enums.Gender
      birth_date: Date
      enrollment: number | null
      current_frequency: number
      belt: $Enums.Belt
      grade: number
      role: $Enums.Role
      guardian_phone: string | null
      total_frequency: number
      city: string
      street: string
      district: string
      number: number
      complement: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Student$classesArgs<ExtArgs> = {}>(args?: Subset<T, Student$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends Student$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Student$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly cpf: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly birth_date: FieldRef<"Student", 'DateTime'>
    readonly enrollment: FieldRef<"Student", 'Int'>
    readonly current_frequency: FieldRef<"Student", 'Int'>
    readonly belt: FieldRef<"Student", 'Belt'>
    readonly grade: FieldRef<"Student", 'Int'>
    readonly role: FieldRef<"Student", 'Role'>
    readonly guardian_phone: FieldRef<"Student", 'String'>
    readonly total_frequency: FieldRef<"Student", 'Int'>
    readonly city: FieldRef<"Student", 'String'>
    readonly street: FieldRef<"Student", 'String'>
    readonly district: FieldRef<"Student", 'String'>
    readonly number: FieldRef<"Student", 'Int'>
    readonly complement: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.classes
   */
  export type Student$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    where?: StudentClassWhereInput
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    cursor?: StudentClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentClassScalarFieldEnum | StudentClassScalarFieldEnum[]
  }

  /**
   * Student.presences
   */
  export type Student$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    where?: StudentPresenceWhereInput
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    cursor?: StudentPresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentPresenceScalarFieldEnum | StudentPresenceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    name: string | null
    local: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    name: string | null
    local: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    teacher_id: number
    name: number
    local: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    teacher_id?: true
    name?: true
    local?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    name?: true
    local?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    teacher_id?: true
    name?: true
    local?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    teacher_id: string
    name: string
    local: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    name?: boolean
    local?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    name?: boolean
    local?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    name?: boolean
    local?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    name?: boolean
    local?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "name" | "local" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      students: Prisma.$StudentClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacher_id: string
      name: string
      local: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly teacher_id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly local: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    where?: StudentClassWhereInput
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    cursor?: StudentClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentClassScalarFieldEnum | StudentClassScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model StudentClass
   */

  export type AggregateStudentClass = {
    _count: StudentClassCountAggregateOutputType | null
    _min: StudentClassMinAggregateOutputType | null
    _max: StudentClassMaxAggregateOutputType | null
  }

  export type StudentClassMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    class_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentClassMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    class_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentClassCountAggregateOutputType = {
    id: number
    student_id: number
    class_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentClassMinAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentClassMaxAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentClassCountAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentClass to aggregate.
     */
    where?: StudentClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentClasses to fetch.
     */
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentClasses
    **/
    _count?: true | StudentClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentClassMaxAggregateInputType
  }

  export type GetStudentClassAggregateType<T extends StudentClassAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentClass[P]>
      : GetScalarType<T[P], AggregateStudentClass[P]>
  }




  export type StudentClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentClassWhereInput
    orderBy?: StudentClassOrderByWithAggregationInput | StudentClassOrderByWithAggregationInput[]
    by: StudentClassScalarFieldEnum[] | StudentClassScalarFieldEnum
    having?: StudentClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentClassCountAggregateInputType | true
    _min?: StudentClassMinAggregateInputType
    _max?: StudentClassMaxAggregateInputType
  }

  export type StudentClassGroupByOutputType = {
    id: string
    student_id: string
    class_id: string
    createdAt: Date
    updatedAt: Date
    _count: StudentClassCountAggregateOutputType | null
    _min: StudentClassMinAggregateOutputType | null
    _max: StudentClassMaxAggregateOutputType | null
  }

  type GetStudentClassGroupByPayload<T extends StudentClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentClassGroupByOutputType[P]>
            : GetScalarType<T[P], StudentClassGroupByOutputType[P]>
        }
      >
    >


  export type StudentClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentClass"]>

  export type StudentClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentClass"]>

  export type StudentClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentClass"]>

  export type StudentClassSelectScalar = {
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "class_id" | "createdAt" | "updatedAt", ExtArgs["result"]["studentClass"]>
  export type StudentClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentClass"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      class_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentClass"]>
    composites: {}
  }

  type StudentClassGetPayload<S extends boolean | null | undefined | StudentClassDefaultArgs> = $Result.GetResult<Prisma.$StudentClassPayload, S>

  type StudentClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentClassCountAggregateInputType | true
    }

  export interface StudentClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentClass'], meta: { name: 'StudentClass' } }
    /**
     * Find zero or one StudentClass that matches the filter.
     * @param {StudentClassFindUniqueArgs} args - Arguments to find a StudentClass
     * @example
     * // Get one StudentClass
     * const studentClass = await prisma.studentClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentClassFindUniqueArgs>(args: SelectSubset<T, StudentClassFindUniqueArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentClassFindUniqueOrThrowArgs} args - Arguments to find a StudentClass
     * @example
     * // Get one StudentClass
     * const studentClass = await prisma.studentClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentClassFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassFindFirstArgs} args - Arguments to find a StudentClass
     * @example
     * // Get one StudentClass
     * const studentClass = await prisma.studentClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentClassFindFirstArgs>(args?: SelectSubset<T, StudentClassFindFirstArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassFindFirstOrThrowArgs} args - Arguments to find a StudentClass
     * @example
     * // Get one StudentClass
     * const studentClass = await prisma.studentClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentClassFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentClasses
     * const studentClasses = await prisma.studentClass.findMany()
     * 
     * // Get first 10 StudentClasses
     * const studentClasses = await prisma.studentClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentClassWithIdOnly = await prisma.studentClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentClassFindManyArgs>(args?: SelectSubset<T, StudentClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentClass.
     * @param {StudentClassCreateArgs} args - Arguments to create a StudentClass.
     * @example
     * // Create one StudentClass
     * const StudentClass = await prisma.studentClass.create({
     *   data: {
     *     // ... data to create a StudentClass
     *   }
     * })
     * 
     */
    create<T extends StudentClassCreateArgs>(args: SelectSubset<T, StudentClassCreateArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentClasses.
     * @param {StudentClassCreateManyArgs} args - Arguments to create many StudentClasses.
     * @example
     * // Create many StudentClasses
     * const studentClass = await prisma.studentClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentClassCreateManyArgs>(args?: SelectSubset<T, StudentClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentClasses and returns the data saved in the database.
     * @param {StudentClassCreateManyAndReturnArgs} args - Arguments to create many StudentClasses.
     * @example
     * // Create many StudentClasses
     * const studentClass = await prisma.studentClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentClasses and only return the `id`
     * const studentClassWithIdOnly = await prisma.studentClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentClassCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentClass.
     * @param {StudentClassDeleteArgs} args - Arguments to delete one StudentClass.
     * @example
     * // Delete one StudentClass
     * const StudentClass = await prisma.studentClass.delete({
     *   where: {
     *     // ... filter to delete one StudentClass
     *   }
     * })
     * 
     */
    delete<T extends StudentClassDeleteArgs>(args: SelectSubset<T, StudentClassDeleteArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentClass.
     * @param {StudentClassUpdateArgs} args - Arguments to update one StudentClass.
     * @example
     * // Update one StudentClass
     * const studentClass = await prisma.studentClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentClassUpdateArgs>(args: SelectSubset<T, StudentClassUpdateArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentClasses.
     * @param {StudentClassDeleteManyArgs} args - Arguments to filter StudentClasses to delete.
     * @example
     * // Delete a few StudentClasses
     * const { count } = await prisma.studentClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentClassDeleteManyArgs>(args?: SelectSubset<T, StudentClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentClasses
     * const studentClass = await prisma.studentClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentClassUpdateManyArgs>(args: SelectSubset<T, StudentClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentClasses and returns the data updated in the database.
     * @param {StudentClassUpdateManyAndReturnArgs} args - Arguments to update many StudentClasses.
     * @example
     * // Update many StudentClasses
     * const studentClass = await prisma.studentClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentClasses and only return the `id`
     * const studentClassWithIdOnly = await prisma.studentClass.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentClassUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentClass.
     * @param {StudentClassUpsertArgs} args - Arguments to update or create a StudentClass.
     * @example
     * // Update or create a StudentClass
     * const studentClass = await prisma.studentClass.upsert({
     *   create: {
     *     // ... data to create a StudentClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentClass we want to update
     *   }
     * })
     */
    upsert<T extends StudentClassUpsertArgs>(args: SelectSubset<T, StudentClassUpsertArgs<ExtArgs>>): Prisma__StudentClassClient<$Result.GetResult<Prisma.$StudentClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassCountArgs} args - Arguments to filter StudentClasses to count.
     * @example
     * // Count the number of StudentClasses
     * const count = await prisma.studentClass.count({
     *   where: {
     *     // ... the filter for the StudentClasses we want to count
     *   }
     * })
    **/
    count<T extends StudentClassCountArgs>(
      args?: Subset<T, StudentClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentClassAggregateArgs>(args: Subset<T, StudentClassAggregateArgs>): Prisma.PrismaPromise<GetStudentClassAggregateType<T>>

    /**
     * Group by StudentClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentClassGroupByArgs} args - Group by arguments.
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
      T extends StudentClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentClassGroupByArgs['orderBy'] }
        : { orderBy?: StudentClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentClass model
   */
  readonly fields: StudentClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentClass model
   */
  interface StudentClassFieldRefs {
    readonly id: FieldRef<"StudentClass", 'String'>
    readonly student_id: FieldRef<"StudentClass", 'String'>
    readonly class_id: FieldRef<"StudentClass", 'String'>
    readonly createdAt: FieldRef<"StudentClass", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentClass", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentClass findUnique
   */
  export type StudentClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentClass to fetch.
     */
    where: StudentClassWhereUniqueInput
  }

  /**
   * StudentClass findUniqueOrThrow
   */
  export type StudentClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentClass to fetch.
     */
    where: StudentClassWhereUniqueInput
  }

  /**
   * StudentClass findFirst
   */
  export type StudentClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentClass to fetch.
     */
    where?: StudentClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentClasses to fetch.
     */
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentClasses.
     */
    cursor?: StudentClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentClasses.
     */
    distinct?: StudentClassScalarFieldEnum | StudentClassScalarFieldEnum[]
  }

  /**
   * StudentClass findFirstOrThrow
   */
  export type StudentClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentClass to fetch.
     */
    where?: StudentClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentClasses to fetch.
     */
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentClasses.
     */
    cursor?: StudentClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentClasses.
     */
    distinct?: StudentClassScalarFieldEnum | StudentClassScalarFieldEnum[]
  }

  /**
   * StudentClass findMany
   */
  export type StudentClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter, which StudentClasses to fetch.
     */
    where?: StudentClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentClasses to fetch.
     */
    orderBy?: StudentClassOrderByWithRelationInput | StudentClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentClasses.
     */
    cursor?: StudentClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentClasses.
     */
    skip?: number
    distinct?: StudentClassScalarFieldEnum | StudentClassScalarFieldEnum[]
  }

  /**
   * StudentClass create
   */
  export type StudentClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentClass.
     */
    data: XOR<StudentClassCreateInput, StudentClassUncheckedCreateInput>
  }

  /**
   * StudentClass createMany
   */
  export type StudentClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentClasses.
     */
    data: StudentClassCreateManyInput | StudentClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentClass createManyAndReturn
   */
  export type StudentClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * The data used to create many StudentClasses.
     */
    data: StudentClassCreateManyInput | StudentClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentClass update
   */
  export type StudentClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentClass.
     */
    data: XOR<StudentClassUpdateInput, StudentClassUncheckedUpdateInput>
    /**
     * Choose, which StudentClass to update.
     */
    where: StudentClassWhereUniqueInput
  }

  /**
   * StudentClass updateMany
   */
  export type StudentClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentClasses.
     */
    data: XOR<StudentClassUpdateManyMutationInput, StudentClassUncheckedUpdateManyInput>
    /**
     * Filter which StudentClasses to update
     */
    where?: StudentClassWhereInput
    /**
     * Limit how many StudentClasses to update.
     */
    limit?: number
  }

  /**
   * StudentClass updateManyAndReturn
   */
  export type StudentClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * The data used to update StudentClasses.
     */
    data: XOR<StudentClassUpdateManyMutationInput, StudentClassUncheckedUpdateManyInput>
    /**
     * Filter which StudentClasses to update
     */
    where?: StudentClassWhereInput
    /**
     * Limit how many StudentClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentClass upsert
   */
  export type StudentClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentClass to update in case it exists.
     */
    where: StudentClassWhereUniqueInput
    /**
     * In case the StudentClass found by the `where` argument doesn't exist, create a new StudentClass with this data.
     */
    create: XOR<StudentClassCreateInput, StudentClassUncheckedCreateInput>
    /**
     * In case the StudentClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentClassUpdateInput, StudentClassUncheckedUpdateInput>
  }

  /**
   * StudentClass delete
   */
  export type StudentClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
    /**
     * Filter which StudentClass to delete.
     */
    where: StudentClassWhereUniqueInput
  }

  /**
   * StudentClass deleteMany
   */
  export type StudentClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentClasses to delete
     */
    where?: StudentClassWhereInput
    /**
     * Limit how many StudentClasses to delete.
     */
    limit?: number
  }

  /**
   * StudentClass without action
   */
  export type StudentClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentClass
     */
    select?: StudentClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentClass
     */
    omit?: StudentClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentClassInclude<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    class_id: string | null
    classroom_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: string | null
    teacher_id: string | null
    class_id: string | null
    classroom_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    teacher_id: number
    class_id: number
    classroom_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassroomMinAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    classroom_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    classroom_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    classroom_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: string
    teacher_id: string
    class_id: string
    classroom_date: Date
    createdAt: Date
    updatedAt: Date
    _count: ClassroomCountAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    classroom_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    presences?: boolean | Classroom$presencesArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    classroom_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    classroom_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    classroom_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "class_id" | "classroom_date" | "createdAt" | "updatedAt", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presences?: boolean | Classroom$presencesArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      presences: Prisma.$StudentPresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacher_id: string
      class_id: string
      classroom_date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
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
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presences<T extends Classroom$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'String'>
    readonly teacher_id: FieldRef<"Classroom", 'String'>
    readonly class_id: FieldRef<"Classroom", 'String'>
    readonly classroom_date: FieldRef<"Classroom", 'DateTime'>
    readonly createdAt: FieldRef<"Classroom", 'DateTime'>
    readonly updatedAt: FieldRef<"Classroom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom.presences
   */
  export type Classroom$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    where?: StudentPresenceWhereInput
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    cursor?: StudentPresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentPresenceScalarFieldEnum | StudentPresenceScalarFieldEnum[]
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model StudentPresence
   */

  export type AggregateStudentPresence = {
    _count: StudentPresenceCountAggregateOutputType | null
    _min: StudentPresenceMinAggregateOutputType | null
    _max: StudentPresenceMaxAggregateOutputType | null
  }

  export type StudentPresenceMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    classroom_id: string | null
    presence: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPresenceMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    classroom_id: string | null
    presence: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPresenceCountAggregateOutputType = {
    id: number
    student_id: number
    classroom_id: number
    presence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentPresenceMinAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPresenceMaxAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPresenceCountAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    presence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentPresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPresence to aggregate.
     */
    where?: StudentPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPresences to fetch.
     */
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentPresences
    **/
    _count?: true | StudentPresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentPresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentPresenceMaxAggregateInputType
  }

  export type GetStudentPresenceAggregateType<T extends StudentPresenceAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentPresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentPresence[P]>
      : GetScalarType<T[P], AggregateStudentPresence[P]>
  }




  export type StudentPresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPresenceWhereInput
    orderBy?: StudentPresenceOrderByWithAggregationInput | StudentPresenceOrderByWithAggregationInput[]
    by: StudentPresenceScalarFieldEnum[] | StudentPresenceScalarFieldEnum
    having?: StudentPresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentPresenceCountAggregateInputType | true
    _min?: StudentPresenceMinAggregateInputType
    _max?: StudentPresenceMaxAggregateInputType
  }

  export type StudentPresenceGroupByOutputType = {
    id: string
    student_id: string
    classroom_id: string
    presence: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentPresenceCountAggregateOutputType | null
    _min: StudentPresenceMinAggregateOutputType | null
    _max: StudentPresenceMaxAggregateOutputType | null
  }

  type GetStudentPresenceGroupByPayload<T extends StudentPresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentPresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentPresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentPresenceGroupByOutputType[P]>
            : GetScalarType<T[P], StudentPresenceGroupByOutputType[P]>
        }
      >
    >


  export type StudentPresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPresence"]>

  export type StudentPresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPresence"]>

  export type StudentPresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPresence"]>

  export type StudentPresenceSelectScalar = {
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    presence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentPresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "classroom_id" | "presence" | "createdAt" | "updatedAt", ExtArgs["result"]["studentPresence"]>
  export type StudentPresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type StudentPresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }
  export type StudentPresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $StudentPresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentPresence"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      classroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      classroom_id: string
      presence: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentPresence"]>
    composites: {}
  }

  type StudentPresenceGetPayload<S extends boolean | null | undefined | StudentPresenceDefaultArgs> = $Result.GetResult<Prisma.$StudentPresencePayload, S>

  type StudentPresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentPresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentPresenceCountAggregateInputType | true
    }

  export interface StudentPresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentPresence'], meta: { name: 'StudentPresence' } }
    /**
     * Find zero or one StudentPresence that matches the filter.
     * @param {StudentPresenceFindUniqueArgs} args - Arguments to find a StudentPresence
     * @example
     * // Get one StudentPresence
     * const studentPresence = await prisma.studentPresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentPresenceFindUniqueArgs>(args: SelectSubset<T, StudentPresenceFindUniqueArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentPresence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentPresenceFindUniqueOrThrowArgs} args - Arguments to find a StudentPresence
     * @example
     * // Get one StudentPresence
     * const studentPresence = await prisma.studentPresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentPresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentPresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentPresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceFindFirstArgs} args - Arguments to find a StudentPresence
     * @example
     * // Get one StudentPresence
     * const studentPresence = await prisma.studentPresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentPresenceFindFirstArgs>(args?: SelectSubset<T, StudentPresenceFindFirstArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentPresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceFindFirstOrThrowArgs} args - Arguments to find a StudentPresence
     * @example
     * // Get one StudentPresence
     * const studentPresence = await prisma.studentPresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentPresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentPresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentPresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentPresences
     * const studentPresences = await prisma.studentPresence.findMany()
     * 
     * // Get first 10 StudentPresences
     * const studentPresences = await prisma.studentPresence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentPresenceWithIdOnly = await prisma.studentPresence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentPresenceFindManyArgs>(args?: SelectSubset<T, StudentPresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentPresence.
     * @param {StudentPresenceCreateArgs} args - Arguments to create a StudentPresence.
     * @example
     * // Create one StudentPresence
     * const StudentPresence = await prisma.studentPresence.create({
     *   data: {
     *     // ... data to create a StudentPresence
     *   }
     * })
     * 
     */
    create<T extends StudentPresenceCreateArgs>(args: SelectSubset<T, StudentPresenceCreateArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentPresences.
     * @param {StudentPresenceCreateManyArgs} args - Arguments to create many StudentPresences.
     * @example
     * // Create many StudentPresences
     * const studentPresence = await prisma.studentPresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentPresenceCreateManyArgs>(args?: SelectSubset<T, StudentPresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentPresences and returns the data saved in the database.
     * @param {StudentPresenceCreateManyAndReturnArgs} args - Arguments to create many StudentPresences.
     * @example
     * // Create many StudentPresences
     * const studentPresence = await prisma.studentPresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentPresences and only return the `id`
     * const studentPresenceWithIdOnly = await prisma.studentPresence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentPresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentPresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentPresence.
     * @param {StudentPresenceDeleteArgs} args - Arguments to delete one StudentPresence.
     * @example
     * // Delete one StudentPresence
     * const StudentPresence = await prisma.studentPresence.delete({
     *   where: {
     *     // ... filter to delete one StudentPresence
     *   }
     * })
     * 
     */
    delete<T extends StudentPresenceDeleteArgs>(args: SelectSubset<T, StudentPresenceDeleteArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentPresence.
     * @param {StudentPresenceUpdateArgs} args - Arguments to update one StudentPresence.
     * @example
     * // Update one StudentPresence
     * const studentPresence = await prisma.studentPresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentPresenceUpdateArgs>(args: SelectSubset<T, StudentPresenceUpdateArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentPresences.
     * @param {StudentPresenceDeleteManyArgs} args - Arguments to filter StudentPresences to delete.
     * @example
     * // Delete a few StudentPresences
     * const { count } = await prisma.studentPresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentPresenceDeleteManyArgs>(args?: SelectSubset<T, StudentPresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentPresences
     * const studentPresence = await prisma.studentPresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentPresenceUpdateManyArgs>(args: SelectSubset<T, StudentPresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPresences and returns the data updated in the database.
     * @param {StudentPresenceUpdateManyAndReturnArgs} args - Arguments to update many StudentPresences.
     * @example
     * // Update many StudentPresences
     * const studentPresence = await prisma.studentPresence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentPresences and only return the `id`
     * const studentPresenceWithIdOnly = await prisma.studentPresence.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentPresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentPresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentPresence.
     * @param {StudentPresenceUpsertArgs} args - Arguments to update or create a StudentPresence.
     * @example
     * // Update or create a StudentPresence
     * const studentPresence = await prisma.studentPresence.upsert({
     *   create: {
     *     // ... data to create a StudentPresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentPresence we want to update
     *   }
     * })
     */
    upsert<T extends StudentPresenceUpsertArgs>(args: SelectSubset<T, StudentPresenceUpsertArgs<ExtArgs>>): Prisma__StudentPresenceClient<$Result.GetResult<Prisma.$StudentPresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceCountArgs} args - Arguments to filter StudentPresences to count.
     * @example
     * // Count the number of StudentPresences
     * const count = await prisma.studentPresence.count({
     *   where: {
     *     // ... the filter for the StudentPresences we want to count
     *   }
     * })
    **/
    count<T extends StudentPresenceCountArgs>(
      args?: Subset<T, StudentPresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentPresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentPresenceAggregateArgs>(args: Subset<T, StudentPresenceAggregateArgs>): Prisma.PrismaPromise<GetStudentPresenceAggregateType<T>>

    /**
     * Group by StudentPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPresenceGroupByArgs} args - Group by arguments.
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
      T extends StudentPresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentPresenceGroupByArgs['orderBy'] }
        : { orderBy?: StudentPresenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentPresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentPresence model
   */
  readonly fields: StudentPresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentPresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentPresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentPresence model
   */
  interface StudentPresenceFieldRefs {
    readonly id: FieldRef<"StudentPresence", 'String'>
    readonly student_id: FieldRef<"StudentPresence", 'String'>
    readonly classroom_id: FieldRef<"StudentPresence", 'String'>
    readonly presence: FieldRef<"StudentPresence", 'Boolean'>
    readonly createdAt: FieldRef<"StudentPresence", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentPresence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentPresence findUnique
   */
  export type StudentPresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter, which StudentPresence to fetch.
     */
    where: StudentPresenceWhereUniqueInput
  }

  /**
   * StudentPresence findUniqueOrThrow
   */
  export type StudentPresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter, which StudentPresence to fetch.
     */
    where: StudentPresenceWhereUniqueInput
  }

  /**
   * StudentPresence findFirst
   */
  export type StudentPresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter, which StudentPresence to fetch.
     */
    where?: StudentPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPresences to fetch.
     */
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPresences.
     */
    cursor?: StudentPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPresences.
     */
    distinct?: StudentPresenceScalarFieldEnum | StudentPresenceScalarFieldEnum[]
  }

  /**
   * StudentPresence findFirstOrThrow
   */
  export type StudentPresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter, which StudentPresence to fetch.
     */
    where?: StudentPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPresences to fetch.
     */
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPresences.
     */
    cursor?: StudentPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPresences.
     */
    distinct?: StudentPresenceScalarFieldEnum | StudentPresenceScalarFieldEnum[]
  }

  /**
   * StudentPresence findMany
   */
  export type StudentPresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter, which StudentPresences to fetch.
     */
    where?: StudentPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPresences to fetch.
     */
    orderBy?: StudentPresenceOrderByWithRelationInput | StudentPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentPresences.
     */
    cursor?: StudentPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPresences.
     */
    skip?: number
    distinct?: StudentPresenceScalarFieldEnum | StudentPresenceScalarFieldEnum[]
  }

  /**
   * StudentPresence create
   */
  export type StudentPresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentPresence.
     */
    data: XOR<StudentPresenceCreateInput, StudentPresenceUncheckedCreateInput>
  }

  /**
   * StudentPresence createMany
   */
  export type StudentPresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentPresences.
     */
    data: StudentPresenceCreateManyInput | StudentPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentPresence createManyAndReturn
   */
  export type StudentPresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * The data used to create many StudentPresences.
     */
    data: StudentPresenceCreateManyInput | StudentPresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentPresence update
   */
  export type StudentPresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentPresence.
     */
    data: XOR<StudentPresenceUpdateInput, StudentPresenceUncheckedUpdateInput>
    /**
     * Choose, which StudentPresence to update.
     */
    where: StudentPresenceWhereUniqueInput
  }

  /**
   * StudentPresence updateMany
   */
  export type StudentPresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentPresences.
     */
    data: XOR<StudentPresenceUpdateManyMutationInput, StudentPresenceUncheckedUpdateManyInput>
    /**
     * Filter which StudentPresences to update
     */
    where?: StudentPresenceWhereInput
    /**
     * Limit how many StudentPresences to update.
     */
    limit?: number
  }

  /**
   * StudentPresence updateManyAndReturn
   */
  export type StudentPresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * The data used to update StudentPresences.
     */
    data: XOR<StudentPresenceUpdateManyMutationInput, StudentPresenceUncheckedUpdateManyInput>
    /**
     * Filter which StudentPresences to update
     */
    where?: StudentPresenceWhereInput
    /**
     * Limit how many StudentPresences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentPresence upsert
   */
  export type StudentPresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentPresence to update in case it exists.
     */
    where: StudentPresenceWhereUniqueInput
    /**
     * In case the StudentPresence found by the `where` argument doesn't exist, create a new StudentPresence with this data.
     */
    create: XOR<StudentPresenceCreateInput, StudentPresenceUncheckedCreateInput>
    /**
     * In case the StudentPresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentPresenceUpdateInput, StudentPresenceUncheckedUpdateInput>
  }

  /**
   * StudentPresence delete
   */
  export type StudentPresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
    /**
     * Filter which StudentPresence to delete.
     */
    where: StudentPresenceWhereUniqueInput
  }

  /**
   * StudentPresence deleteMany
   */
  export type StudentPresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPresences to delete
     */
    where?: StudentPresenceWhereInput
    /**
     * Limit how many StudentPresences to delete.
     */
    limit?: number
  }

  /**
   * StudentPresence without action
   */
  export type StudentPresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPresence
     */
    select?: StudentPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPresence
     */
    omit?: StudentPresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPresenceInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigAvgAggregateOutputType = {
    min_age: number | null
    max_age: number | null
    max_frequency: number | null
  }

  export type ConfigSumAggregateOutputType = {
    min_age: number | null
    max_age: number | null
    max_frequency: number | null
  }

  export type ConfigMinAggregateOutputType = {
    id: string | null
    min_age: number | null
    max_age: number | null
    min_belt: $Enums.Belt | null
    max_belt: $Enums.Belt | null
    max_frequency: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: string | null
    min_age: number | null
    max_age: number | null
    min_belt: $Enums.Belt | null
    max_belt: $Enums.Belt | null
    max_frequency: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    min_age: number
    max_age: number
    min_belt: number
    max_belt: number
    max_frequency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfigAvgAggregateInputType = {
    min_age?: true
    max_age?: true
    max_frequency?: true
  }

  export type ConfigSumAggregateInputType = {
    min_age?: true
    max_age?: true
    max_frequency?: true
  }

  export type ConfigMinAggregateInputType = {
    id?: true
    min_age?: true
    max_age?: true
    min_belt?: true
    max_belt?: true
    max_frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    min_age?: true
    max_age?: true
    min_belt?: true
    max_belt?: true
    max_frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    min_age?: true
    max_age?: true
    min_belt?: true
    max_belt?: true
    max_frequency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _avg?: ConfigAvgAggregateInputType
    _sum?: ConfigSumAggregateInputType
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: string
    min_age: number
    max_age: number | null
    min_belt: $Enums.Belt
    max_belt: $Enums.Belt | null
    max_frequency: number
    createdAt: Date
    updatedAt: Date
    _count: ConfigCountAggregateOutputType | null
    _avg: ConfigAvgAggregateOutputType | null
    _sum: ConfigSumAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_age?: boolean
    max_age?: boolean
    min_belt?: boolean
    max_belt?: boolean
    max_frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_age?: boolean
    max_age?: boolean
    min_belt?: boolean
    max_belt?: boolean
    max_frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    min_age?: boolean
    max_age?: boolean
    min_belt?: boolean
    max_belt?: boolean
    max_frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectScalar = {
    id?: boolean
    min_age?: boolean
    max_age?: boolean
    min_belt?: boolean
    max_belt?: boolean
    max_frequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "min_age" | "max_age" | "min_belt" | "max_belt" | "max_frequency" | "createdAt" | "updatedAt", ExtArgs["result"]["config"]>

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      min_age: number
      max_age: number | null
      min_belt: $Enums.Belt
      max_belt: $Enums.Belt | null
      max_frequency: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {ConfigCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs and returns the data updated in the database.
     * @param {ConfigUpdateManyAndReturnArgs} args - Arguments to update many Configs.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'String'>
    readonly min_age: FieldRef<"Config", 'Int'>
    readonly max_age: FieldRef<"Config", 'Int'>
    readonly min_belt: FieldRef<"Config", 'Belt'>
    readonly max_belt: FieldRef<"Config", 'Belt'>
    readonly max_frequency: FieldRef<"Config", 'Int'>
    readonly createdAt: FieldRef<"Config", 'DateTime'>
    readonly updatedAt: FieldRef<"Config", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config createManyAndReturn
   */
  export type ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config updateManyAndReturn
   */
  export type ConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResetPasswordCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ResetPasswordCodeScalarFieldEnum = (typeof ResetPasswordCodeScalarFieldEnum)[keyof typeof ResetPasswordCodeScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    cpf: 'cpf',
    gender: 'gender',
    birth_date: 'birth_date',
    enrollment: 'enrollment',
    current_frequency: 'current_frequency',
    belt: 'belt',
    grade: 'grade',
    role: 'role',
    guardian_phone: 'guardian_phone',
    total_frequency: 'total_frequency',
    city: 'city',
    street: 'street',
    district: 'district',
    number: 'number',
    complement: 'complement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    name: 'name',
    local: 'local',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const StudentClassScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    class_id: 'class_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentClassScalarFieldEnum = (typeof StudentClassScalarFieldEnum)[keyof typeof StudentClassScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    class_id: 'class_id',
    classroom_date: 'classroom_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const StudentPresenceScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    classroom_id: 'classroom_id',
    presence: 'presence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentPresenceScalarFieldEnum = (typeof StudentPresenceScalarFieldEnum)[keyof typeof StudentPresenceScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    min_age: 'min_age',
    max_age: 'max_age',
    min_belt: 'min_belt',
    max_belt: 'max_belt',
    max_frequency: 'max_frequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Belt'
   */
  export type EnumBeltFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Belt'>
    


  /**
   * Reference to a field of type 'Belt[]'
   */
  export type ListEnumBeltFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Belt[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPassword?: ResetPasswordCodeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPassword?: ResetPasswordCodeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPassword?: ResetPasswordCodeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResetPasswordCodeWhereInput = {
    AND?: ResetPasswordCodeWhereInput | ResetPasswordCodeWhereInput[]
    OR?: ResetPasswordCodeWhereInput[]
    NOT?: ResetPasswordCodeWhereInput | ResetPasswordCodeWhereInput[]
    id?: StringFilter<"ResetPasswordCode"> | string
    code?: StringFilter<"ResetPasswordCode"> | string
    expiresAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    createdAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    userId?: StringFilter<"ResetPasswordCode"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResetPasswordCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResetPasswordCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ResetPasswordCodeWhereInput | ResetPasswordCodeWhereInput[]
    OR?: ResetPasswordCodeWhereInput[]
    NOT?: ResetPasswordCodeWhereInput | ResetPasswordCodeWhereInput[]
    expiresAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    createdAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    userId?: StringFilter<"ResetPasswordCode"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type ResetPasswordCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ResetPasswordCodeCountOrderByAggregateInput
    _max?: ResetPasswordCodeMaxOrderByAggregateInput
    _min?: ResetPasswordCodeMinOrderByAggregateInput
  }

  export type ResetPasswordCodeScalarWhereWithAggregatesInput = {
    AND?: ResetPasswordCodeScalarWhereWithAggregatesInput | ResetPasswordCodeScalarWhereWithAggregatesInput[]
    OR?: ResetPasswordCodeScalarWhereWithAggregatesInput[]
    NOT?: ResetPasswordCodeScalarWhereWithAggregatesInput | ResetPasswordCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResetPasswordCode"> | string
    code?: StringWithAggregatesFilter<"ResetPasswordCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ResetPasswordCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ResetPasswordCode"> | Date | string
    userId?: StringWithAggregatesFilter<"ResetPasswordCode"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    cpf?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    birth_date?: DateTimeFilter<"Student"> | Date | string
    enrollment?: IntNullableFilter<"Student"> | number | null
    current_frequency?: IntFilter<"Student"> | number
    belt?: EnumBeltFilter<"Student"> | $Enums.Belt
    grade?: IntFilter<"Student"> | number
    role?: EnumRoleFilter<"Student"> | $Enums.Role
    guardian_phone?: StringNullableFilter<"Student"> | string | null
    total_frequency?: IntFilter<"Student"> | number
    city?: StringFilter<"Student"> | string
    street?: StringFilter<"Student"> | string
    district?: StringFilter<"Student"> | string
    number?: IntFilter<"Student"> | number
    complement?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    classes?: StudentClassListRelationFilter
    presences?: StudentPresenceListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    enrollment?: SortOrderInput | SortOrder
    current_frequency?: SortOrder
    belt?: SortOrder
    grade?: SortOrder
    role?: SortOrder
    guardian_phone?: SortOrderInput | SortOrder
    total_frequency?: SortOrder
    city?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classes?: StudentClassOrderByRelationAggregateInput
    presences?: StudentPresenceOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    enrollment?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    birth_date?: DateTimeFilter<"Student"> | Date | string
    current_frequency?: IntFilter<"Student"> | number
    belt?: EnumBeltFilter<"Student"> | $Enums.Belt
    grade?: IntFilter<"Student"> | number
    role?: EnumRoleFilter<"Student"> | $Enums.Role
    guardian_phone?: StringNullableFilter<"Student"> | string | null
    total_frequency?: IntFilter<"Student"> | number
    city?: StringFilter<"Student"> | string
    street?: StringFilter<"Student"> | string
    district?: StringFilter<"Student"> | string
    number?: IntFilter<"Student"> | number
    complement?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    classes?: StudentClassListRelationFilter
    presences?: StudentPresenceListRelationFilter
  }, "id" | "email" | "cpf" | "enrollment">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    enrollment?: SortOrderInput | SortOrder
    current_frequency?: SortOrder
    belt?: SortOrder
    grade?: SortOrder
    role?: SortOrder
    guardian_phone?: SortOrderInput | SortOrder
    total_frequency?: SortOrder
    city?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    cpf?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    birth_date?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    enrollment?: IntNullableWithAggregatesFilter<"Student"> | number | null
    current_frequency?: IntWithAggregatesFilter<"Student"> | number
    belt?: EnumBeltWithAggregatesFilter<"Student"> | $Enums.Belt
    grade?: IntWithAggregatesFilter<"Student"> | number
    role?: EnumRoleWithAggregatesFilter<"Student"> | $Enums.Role
    guardian_phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    total_frequency?: IntWithAggregatesFilter<"Student"> | number
    city?: StringWithAggregatesFilter<"Student"> | string
    street?: StringWithAggregatesFilter<"Student"> | string
    district?: StringWithAggregatesFilter<"Student"> | string
    number?: IntWithAggregatesFilter<"Student"> | number
    complement?: StringNullableWithAggregatesFilter<"Student"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    teacher_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    local?: StringNullableFilter<"Class"> | string | null
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    students?: StudentClassListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    name?: SortOrder
    local?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentClassOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    teacher_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    local?: StringNullableFilter<"Class"> | string | null
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    students?: StudentClassListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    name?: SortOrder
    local?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    teacher_id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    local?: StringNullableWithAggregatesFilter<"Class"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type StudentClassWhereInput = {
    AND?: StudentClassWhereInput | StudentClassWhereInput[]
    OR?: StudentClassWhereInput[]
    NOT?: StudentClassWhereInput | StudentClassWhereInput[]
    id?: StringFilter<"StudentClass"> | string
    student_id?: StringFilter<"StudentClass"> | string
    class_id?: StringFilter<"StudentClass"> | string
    createdAt?: DateTimeFilter<"StudentClass"> | Date | string
    updatedAt?: DateTimeFilter<"StudentClass"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentClassOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type StudentClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentClassWhereInput | StudentClassWhereInput[]
    OR?: StudentClassWhereInput[]
    NOT?: StudentClassWhereInput | StudentClassWhereInput[]
    student_id?: StringFilter<"StudentClass"> | string
    class_id?: StringFilter<"StudentClass"> | string
    createdAt?: DateTimeFilter<"StudentClass"> | Date | string
    updatedAt?: DateTimeFilter<"StudentClass"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type StudentClassOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentClassCountOrderByAggregateInput
    _max?: StudentClassMaxOrderByAggregateInput
    _min?: StudentClassMinOrderByAggregateInput
  }

  export type StudentClassScalarWhereWithAggregatesInput = {
    AND?: StudentClassScalarWhereWithAggregatesInput | StudentClassScalarWhereWithAggregatesInput[]
    OR?: StudentClassScalarWhereWithAggregatesInput[]
    NOT?: StudentClassScalarWhereWithAggregatesInput | StudentClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentClass"> | string
    student_id?: StringWithAggregatesFilter<"StudentClass"> | string
    class_id?: StringWithAggregatesFilter<"StudentClass"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentClass"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentClass"> | Date | string
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: StringFilter<"Classroom"> | string
    teacher_id?: StringFilter<"Classroom"> | string
    class_id?: StringFilter<"Classroom"> | string
    classroom_date?: DateTimeFilter<"Classroom"> | Date | string
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    presences?: StudentPresenceListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    classroom_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    presences?: StudentPresenceOrderByRelationAggregateInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    teacher_id?: StringFilter<"Classroom"> | string
    class_id?: StringFilter<"Classroom"> | string
    classroom_date?: DateTimeFilter<"Classroom"> | Date | string
    createdAt?: DateTimeFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeFilter<"Classroom"> | Date | string
    presences?: StudentPresenceListRelationFilter
  }, "id">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    classroom_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classroom"> | string
    teacher_id?: StringWithAggregatesFilter<"Classroom"> | string
    class_id?: StringWithAggregatesFilter<"Classroom"> | string
    classroom_date?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Classroom"> | Date | string
  }

  export type StudentPresenceWhereInput = {
    AND?: StudentPresenceWhereInput | StudentPresenceWhereInput[]
    OR?: StudentPresenceWhereInput[]
    NOT?: StudentPresenceWhereInput | StudentPresenceWhereInput[]
    id?: StringFilter<"StudentPresence"> | string
    student_id?: StringFilter<"StudentPresence"> | string
    classroom_id?: StringFilter<"StudentPresence"> | string
    presence?: BoolFilter<"StudentPresence"> | boolean
    createdAt?: DateTimeFilter<"StudentPresence"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPresence"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type StudentPresenceOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    classroom?: ClassroomOrderByWithRelationInput
  }

  export type StudentPresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    student_id_classroom_id?: StudentPresenceStudent_idClassroom_idCompoundUniqueInput
    AND?: StudentPresenceWhereInput | StudentPresenceWhereInput[]
    OR?: StudentPresenceWhereInput[]
    NOT?: StudentPresenceWhereInput | StudentPresenceWhereInput[]
    student_id?: StringFilter<"StudentPresence"> | string
    classroom_id?: StringFilter<"StudentPresence"> | string
    presence?: BoolFilter<"StudentPresence"> | boolean
    createdAt?: DateTimeFilter<"StudentPresence"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPresence"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id" | "student_id_classroom_id">

  export type StudentPresenceOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentPresenceCountOrderByAggregateInput
    _max?: StudentPresenceMaxOrderByAggregateInput
    _min?: StudentPresenceMinOrderByAggregateInput
  }

  export type StudentPresenceScalarWhereWithAggregatesInput = {
    AND?: StudentPresenceScalarWhereWithAggregatesInput | StudentPresenceScalarWhereWithAggregatesInput[]
    OR?: StudentPresenceScalarWhereWithAggregatesInput[]
    NOT?: StudentPresenceScalarWhereWithAggregatesInput | StudentPresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentPresence"> | string
    student_id?: StringWithAggregatesFilter<"StudentPresence"> | string
    classroom_id?: StringWithAggregatesFilter<"StudentPresence"> | string
    presence?: BoolWithAggregatesFilter<"StudentPresence"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentPresence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentPresence"> | Date | string
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: StringFilter<"Config"> | string
    min_age?: IntFilter<"Config"> | number
    max_age?: IntNullableFilter<"Config"> | number | null
    min_belt?: EnumBeltFilter<"Config"> | $Enums.Belt
    max_belt?: EnumBeltNullableFilter<"Config"> | $Enums.Belt | null
    max_frequency?: IntFilter<"Config"> | number
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeFilter<"Config"> | Date | string
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrderInput | SortOrder
    min_belt?: SortOrder
    max_belt?: SortOrderInput | SortOrder
    max_frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    min_age?: IntFilter<"Config"> | number
    max_age?: IntNullableFilter<"Config"> | number | null
    min_belt?: EnumBeltFilter<"Config"> | $Enums.Belt
    max_belt?: EnumBeltNullableFilter<"Config"> | $Enums.Belt | null
    max_frequency?: IntFilter<"Config"> | number
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeFilter<"Config"> | Date | string
  }, "id">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrderInput | SortOrder
    min_belt?: SortOrder
    max_belt?: SortOrderInput | SortOrder
    max_frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _avg?: ConfigAvgOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
    _sum?: ConfigSumOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Config"> | string
    min_age?: IntWithAggregatesFilter<"Config"> | number
    max_age?: IntNullableWithAggregatesFilter<"Config"> | number | null
    min_belt?: EnumBeltWithAggregatesFilter<"Config"> | $Enums.Belt
    max_belt?: EnumBeltNullableWithAggregatesFilter<"Config"> | $Enums.Belt | null
    max_frequency?: IntWithAggregatesFilter<"Config"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Config"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Config"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPassword?: ResetPasswordCodeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPassword?: ResetPasswordCodeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: ResetPasswordCodeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPassword?: ResetPasswordCodeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutResetPasswordInput
  }

  export type ResetPasswordCodeUncheckedCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type ResetPasswordCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResetPasswordNestedInput
  }

  export type ResetPasswordCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ResetPasswordCodeCreateManyInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
    userId: string
  }

  export type ResetPasswordCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: StudentClassCreateNestedManyWithoutStudentInput
    presences?: StudentPresenceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: StudentClassUncheckedCreateNestedManyWithoutStudentInput
    presences?: StudentPresenceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: StudentClassUpdateManyWithoutStudentNestedInput
    presences?: StudentPresenceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: StudentClassUncheckedUpdateManyWithoutStudentNestedInput
    presences?: StudentPresenceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    teacher_id: string
    name: string
    local?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentClassCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    teacher_id: string
    name: string
    local?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentClassUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentClassUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentClassUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    teacher_id: string
    name: string
    local?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutStudentsInput
    student: StudentCreateNestedOneWithoutClassesInput
  }

  export type StudentClassUncheckedCreateInput = {
    id?: string
    student_id: string
    class_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    student?: StudentUpdateOneRequiredWithoutClassesNestedInput
  }

  export type StudentClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassCreateManyInput = {
    id?: string
    student_id: string
    class_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomCreateInput = {
    id?: string
    teacher_id: string
    class_id: string
    classroom_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: StudentPresenceCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: string
    teacher_id: string
    class_id: string
    classroom_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: StudentPresenceUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: StudentPresenceUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: StudentPresenceUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: string
    teacher_id: string
    class_id: string
    classroom_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceCreateInput = {
    id?: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPresencesInput
    classroom: ClassroomCreateNestedOneWithoutPresencesInput
  }

  export type StudentPresenceUncheckedCreateInput = {
    id?: string
    student_id: string
    classroom_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPresencesNestedInput
    classroom?: ClassroomUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type StudentPresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    classroom_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceCreateManyInput = {
    id?: string
    student_id: string
    classroom_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    classroom_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateInput = {
    id?: string
    min_age: number
    max_age?: number | null
    min_belt: $Enums.Belt
    max_belt?: $Enums.Belt | null
    max_frequency: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUncheckedCreateInput = {
    id?: string
    min_age: number
    max_age?: number | null
    min_belt: $Enums.Belt
    max_belt?: $Enums.Belt | null
    max_frequency: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: NullableIntFieldUpdateOperationsInput | number | null
    min_belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    max_belt?: NullableEnumBeltFieldUpdateOperationsInput | $Enums.Belt | null
    max_frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: NullableIntFieldUpdateOperationsInput | number | null
    min_belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    max_belt?: NullableEnumBeltFieldUpdateOperationsInput | $Enums.Belt | null
    max_frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateManyInput = {
    id?: string
    min_age: number
    max_age?: number | null
    min_belt: $Enums.Belt
    max_belt?: $Enums.Belt | null
    max_frequency: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: NullableIntFieldUpdateOperationsInput | number | null
    min_belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    max_belt?: NullableEnumBeltFieldUpdateOperationsInput | $Enums.Belt | null
    max_frequency?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: NullableIntFieldUpdateOperationsInput | number | null
    min_belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    max_belt?: NullableEnumBeltFieldUpdateOperationsInput | $Enums.Belt | null
    max_frequency?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ResetPasswordCodeListRelationFilter = {
    every?: ResetPasswordCodeWhereInput
    some?: ResetPasswordCodeWhereInput
    none?: ResetPasswordCodeWhereInput
  }

  export type ResetPasswordCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResetPasswordCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ResetPasswordCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ResetPasswordCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type EnumBeltFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel>
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    not?: NestedEnumBeltFilter<$PrismaModel> | $Enums.Belt
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

  export type StudentClassListRelationFilter = {
    every?: StudentClassWhereInput
    some?: StudentClassWhereInput
    none?: StudentClassWhereInput
  }

  export type StudentPresenceListRelationFilter = {
    every?: StudentPresenceWhereInput
    some?: StudentPresenceWhereInput
    none?: StudentPresenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentPresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    enrollment?: SortOrder
    current_frequency?: SortOrder
    belt?: SortOrder
    grade?: SortOrder
    role?: SortOrder
    guardian_phone?: SortOrder
    total_frequency?: SortOrder
    city?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    enrollment?: SortOrder
    current_frequency?: SortOrder
    grade?: SortOrder
    total_frequency?: SortOrder
    number?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    enrollment?: SortOrder
    current_frequency?: SortOrder
    belt?: SortOrder
    grade?: SortOrder
    role?: SortOrder
    guardian_phone?: SortOrder
    total_frequency?: SortOrder
    city?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    enrollment?: SortOrder
    current_frequency?: SortOrder
    belt?: SortOrder
    grade?: SortOrder
    role?: SortOrder
    guardian_phone?: SortOrder
    total_frequency?: SortOrder
    city?: SortOrder
    street?: SortOrder
    district?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    enrollment?: SortOrder
    current_frequency?: SortOrder
    grade?: SortOrder
    total_frequency?: SortOrder
    number?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type EnumBeltWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel>
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    not?: NestedEnumBeltWithAggregatesFilter<$PrismaModel> | $Enums.Belt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBeltFilter<$PrismaModel>
    _max?: NestedEnumBeltFilter<$PrismaModel>
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

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    name?: SortOrder
    local?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    name?: SortOrder
    local?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    name?: SortOrder
    local?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentClassCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentClassMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentClassMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    classroom_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    classroom_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    classroom_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type StudentPresenceStudent_idClassroom_idCompoundUniqueInput = {
    student_id: string
    classroom_id: string
  }

  export type StudentPresenceCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPresenceMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    presence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBeltNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel> | null
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBeltNullableFilter<$PrismaModel> | $Enums.Belt | null
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    min_belt?: SortOrder
    max_belt?: SortOrder
    max_frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigAvgOrderByAggregateInput = {
    min_age?: SortOrder
    max_age?: SortOrder
    max_frequency?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    min_belt?: SortOrder
    max_belt?: SortOrder
    max_frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    min_belt?: SortOrder
    max_belt?: SortOrder
    max_frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigSumOrderByAggregateInput = {
    min_age?: SortOrder
    max_age?: SortOrder
    max_frequency?: SortOrder
  }

  export type EnumBeltNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel> | null
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBeltNullableWithAggregatesFilter<$PrismaModel> | $Enums.Belt | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBeltNullableFilter<$PrismaModel>
    _max?: NestedEnumBeltNullableFilter<$PrismaModel>
  }

  export type ResetPasswordCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput> | ResetPasswordCodeCreateWithoutUserInput[] | ResetPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordCodeCreateOrConnectWithoutUserInput | ResetPasswordCodeCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordCodeCreateManyUserInputEnvelope
    connect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
  }

  export type ResetPasswordCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput> | ResetPasswordCodeCreateWithoutUserInput[] | ResetPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordCodeCreateOrConnectWithoutUserInput | ResetPasswordCodeCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordCodeCreateManyUserInputEnvelope
    connect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResetPasswordCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput> | ResetPasswordCodeCreateWithoutUserInput[] | ResetPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordCodeCreateOrConnectWithoutUserInput | ResetPasswordCodeCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordCodeUpsertWithWhereUniqueWithoutUserInput | ResetPasswordCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordCodeCreateManyUserInputEnvelope
    set?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    disconnect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    delete?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    connect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    update?: ResetPasswordCodeUpdateWithWhereUniqueWithoutUserInput | ResetPasswordCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordCodeUpdateManyWithWhereWithoutUserInput | ResetPasswordCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordCodeScalarWhereInput | ResetPasswordCodeScalarWhereInput[]
  }

  export type ResetPasswordCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput> | ResetPasswordCodeCreateWithoutUserInput[] | ResetPasswordCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordCodeCreateOrConnectWithoutUserInput | ResetPasswordCodeCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordCodeUpsertWithWhereUniqueWithoutUserInput | ResetPasswordCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordCodeCreateManyUserInputEnvelope
    set?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    disconnect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    delete?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    connect?: ResetPasswordCodeWhereUniqueInput | ResetPasswordCodeWhereUniqueInput[]
    update?: ResetPasswordCodeUpdateWithWhereUniqueWithoutUserInput | ResetPasswordCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordCodeUpdateManyWithWhereWithoutUserInput | ResetPasswordCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordCodeScalarWhereInput | ResetPasswordCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResetPasswordInput = {
    create?: XOR<UserCreateWithoutResetPasswordInput, UserUncheckedCreateWithoutResetPasswordInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResetPasswordNestedInput = {
    create?: XOR<UserCreateWithoutResetPasswordInput, UserUncheckedCreateWithoutResetPasswordInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordInput
    upsert?: UserUpsertWithoutResetPasswordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResetPasswordInput, UserUpdateWithoutResetPasswordInput>, UserUncheckedUpdateWithoutResetPasswordInput>
  }

  export type StudentClassCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput> | StudentClassCreateWithoutStudentInput[] | StudentClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutStudentInput | StudentClassCreateOrConnectWithoutStudentInput[]
    createMany?: StudentClassCreateManyStudentInputEnvelope
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
  }

  export type StudentPresenceCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput> | StudentPresenceCreateWithoutStudentInput[] | StudentPresenceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutStudentInput | StudentPresenceCreateOrConnectWithoutStudentInput[]
    createMany?: StudentPresenceCreateManyStudentInputEnvelope
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
  }

  export type StudentClassUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput> | StudentClassCreateWithoutStudentInput[] | StudentClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutStudentInput | StudentClassCreateOrConnectWithoutStudentInput[]
    createMany?: StudentClassCreateManyStudentInputEnvelope
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
  }

  export type StudentPresenceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput> | StudentPresenceCreateWithoutStudentInput[] | StudentPresenceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutStudentInput | StudentPresenceCreateOrConnectWithoutStudentInput[]
    createMany?: StudentPresenceCreateManyStudentInputEnvelope
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBeltFieldUpdateOperationsInput = {
    set?: $Enums.Belt
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentClassUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput> | StudentClassCreateWithoutStudentInput[] | StudentClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutStudentInput | StudentClassCreateOrConnectWithoutStudentInput[]
    upsert?: StudentClassUpsertWithWhereUniqueWithoutStudentInput | StudentClassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentClassCreateManyStudentInputEnvelope
    set?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    disconnect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    delete?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    update?: StudentClassUpdateWithWhereUniqueWithoutStudentInput | StudentClassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentClassUpdateManyWithWhereWithoutStudentInput | StudentClassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
  }

  export type StudentPresenceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput> | StudentPresenceCreateWithoutStudentInput[] | StudentPresenceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutStudentInput | StudentPresenceCreateOrConnectWithoutStudentInput[]
    upsert?: StudentPresenceUpsertWithWhereUniqueWithoutStudentInput | StudentPresenceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentPresenceCreateManyStudentInputEnvelope
    set?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    disconnect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    delete?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    update?: StudentPresenceUpdateWithWhereUniqueWithoutStudentInput | StudentPresenceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentPresenceUpdateManyWithWhereWithoutStudentInput | StudentPresenceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
  }

  export type StudentClassUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput> | StudentClassCreateWithoutStudentInput[] | StudentClassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutStudentInput | StudentClassCreateOrConnectWithoutStudentInput[]
    upsert?: StudentClassUpsertWithWhereUniqueWithoutStudentInput | StudentClassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentClassCreateManyStudentInputEnvelope
    set?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    disconnect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    delete?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    update?: StudentClassUpdateWithWhereUniqueWithoutStudentInput | StudentClassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentClassUpdateManyWithWhereWithoutStudentInput | StudentClassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
  }

  export type StudentPresenceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput> | StudentPresenceCreateWithoutStudentInput[] | StudentPresenceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutStudentInput | StudentPresenceCreateOrConnectWithoutStudentInput[]
    upsert?: StudentPresenceUpsertWithWhereUniqueWithoutStudentInput | StudentPresenceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentPresenceCreateManyStudentInputEnvelope
    set?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    disconnect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    delete?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    update?: StudentPresenceUpdateWithWhereUniqueWithoutStudentInput | StudentPresenceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentPresenceUpdateManyWithWhereWithoutStudentInput | StudentPresenceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
  }

  export type StudentClassCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput> | StudentClassCreateWithoutClassInput[] | StudentClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutClassInput | StudentClassCreateOrConnectWithoutClassInput[]
    createMany?: StudentClassCreateManyClassInputEnvelope
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
  }

  export type StudentClassUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput> | StudentClassCreateWithoutClassInput[] | StudentClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutClassInput | StudentClassCreateOrConnectWithoutClassInput[]
    createMany?: StudentClassCreateManyClassInputEnvelope
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
  }

  export type StudentClassUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput> | StudentClassCreateWithoutClassInput[] | StudentClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutClassInput | StudentClassCreateOrConnectWithoutClassInput[]
    upsert?: StudentClassUpsertWithWhereUniqueWithoutClassInput | StudentClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentClassCreateManyClassInputEnvelope
    set?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    disconnect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    delete?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    update?: StudentClassUpdateWithWhereUniqueWithoutClassInput | StudentClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentClassUpdateManyWithWhereWithoutClassInput | StudentClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
  }

  export type StudentClassUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput> | StudentClassCreateWithoutClassInput[] | StudentClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentClassCreateOrConnectWithoutClassInput | StudentClassCreateOrConnectWithoutClassInput[]
    upsert?: StudentClassUpsertWithWhereUniqueWithoutClassInput | StudentClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentClassCreateManyClassInputEnvelope
    set?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    disconnect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    delete?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    connect?: StudentClassWhereUniqueInput | StudentClassWhereUniqueInput[]
    update?: StudentClassUpdateWithWhereUniqueWithoutClassInput | StudentClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentClassUpdateManyWithWhereWithoutClassInput | StudentClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutClassesInput = {
    create?: XOR<StudentCreateWithoutClassesInput, StudentUncheckedCreateWithoutClassesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassesInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<StudentCreateWithoutClassesInput, StudentUncheckedCreateWithoutClassesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClassesInput
    upsert?: StudentUpsertWithoutClassesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutClassesInput, StudentUpdateWithoutClassesInput>, StudentUncheckedUpdateWithoutClassesInput>
  }

  export type StudentPresenceCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput> | StudentPresenceCreateWithoutClassroomInput[] | StudentPresenceUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutClassroomInput | StudentPresenceCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentPresenceCreateManyClassroomInputEnvelope
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
  }

  export type StudentPresenceUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput> | StudentPresenceCreateWithoutClassroomInput[] | StudentPresenceUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutClassroomInput | StudentPresenceCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentPresenceCreateManyClassroomInputEnvelope
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
  }

  export type StudentPresenceUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput> | StudentPresenceCreateWithoutClassroomInput[] | StudentPresenceUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutClassroomInput | StudentPresenceCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentPresenceUpsertWithWhereUniqueWithoutClassroomInput | StudentPresenceUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentPresenceCreateManyClassroomInputEnvelope
    set?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    disconnect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    delete?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    update?: StudentPresenceUpdateWithWhereUniqueWithoutClassroomInput | StudentPresenceUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentPresenceUpdateManyWithWhereWithoutClassroomInput | StudentPresenceUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
  }

  export type StudentPresenceUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput> | StudentPresenceCreateWithoutClassroomInput[] | StudentPresenceUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentPresenceCreateOrConnectWithoutClassroomInput | StudentPresenceCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentPresenceUpsertWithWhereUniqueWithoutClassroomInput | StudentPresenceUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentPresenceCreateManyClassroomInputEnvelope
    set?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    disconnect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    delete?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    connect?: StudentPresenceWhereUniqueInput | StudentPresenceWhereUniqueInput[]
    update?: StudentPresenceUpdateWithWhereUniqueWithoutClassroomInput | StudentPresenceUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentPresenceUpdateManyWithWhereWithoutClassroomInput | StudentPresenceUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutPresencesInput = {
    create?: XOR<StudentCreateWithoutPresencesInput, StudentUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPresencesInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassroomCreateNestedOneWithoutPresencesInput = {
    create?: XOR<ClassroomCreateWithoutPresencesInput, ClassroomUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutPresencesInput
    connect?: ClassroomWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<StudentCreateWithoutPresencesInput, StudentUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPresencesInput
    upsert?: StudentUpsertWithoutPresencesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPresencesInput, StudentUpdateWithoutPresencesInput>, StudentUncheckedUpdateWithoutPresencesInput>
  }

  export type ClassroomUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<ClassroomCreateWithoutPresencesInput, ClassroomUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutPresencesInput
    upsert?: ClassroomUpsertWithoutPresencesInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutPresencesInput, ClassroomUpdateWithoutPresencesInput>, ClassroomUncheckedUpdateWithoutPresencesInput>
  }

  export type NullableEnumBeltFieldUpdateOperationsInput = {
    set?: $Enums.Belt | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumBeltFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel>
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    not?: NestedEnumBeltFilter<$PrismaModel> | $Enums.Belt
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumBeltWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel>
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel>
    not?: NestedEnumBeltWithAggregatesFilter<$PrismaModel> | $Enums.Belt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBeltFilter<$PrismaModel>
    _max?: NestedEnumBeltFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBeltNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel> | null
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBeltNullableFilter<$PrismaModel> | $Enums.Belt | null
  }

  export type NestedEnumBeltNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Belt | EnumBeltFieldRefInput<$PrismaModel> | null
    in?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Belt[] | ListEnumBeltFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBeltNullableWithAggregatesFilter<$PrismaModel> | $Enums.Belt | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBeltNullableFilter<$PrismaModel>
    _max?: NestedEnumBeltNullableFilter<$PrismaModel>
  }

  export type ResetPasswordCodeCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetPasswordCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetPasswordCodeCreateOrConnectWithoutUserInput = {
    where: ResetPasswordCodeWhereUniqueInput
    create: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordCodeCreateManyUserInputEnvelope = {
    data: ResetPasswordCodeCreateManyUserInput | ResetPasswordCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResetPasswordCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordCodeWhereUniqueInput
    update: XOR<ResetPasswordCodeUpdateWithoutUserInput, ResetPasswordCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ResetPasswordCodeCreateWithoutUserInput, ResetPasswordCodeUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordCodeWhereUniqueInput
    data: XOR<ResetPasswordCodeUpdateWithoutUserInput, ResetPasswordCodeUncheckedUpdateWithoutUserInput>
  }

  export type ResetPasswordCodeUpdateManyWithWhereWithoutUserInput = {
    where: ResetPasswordCodeScalarWhereInput
    data: XOR<ResetPasswordCodeUpdateManyMutationInput, ResetPasswordCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResetPasswordCodeScalarWhereInput = {
    AND?: ResetPasswordCodeScalarWhereInput | ResetPasswordCodeScalarWhereInput[]
    OR?: ResetPasswordCodeScalarWhereInput[]
    NOT?: ResetPasswordCodeScalarWhereInput | ResetPasswordCodeScalarWhereInput[]
    id?: StringFilter<"ResetPasswordCode"> | string
    code?: StringFilter<"ResetPasswordCode"> | string
    expiresAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    createdAt?: DateTimeFilter<"ResetPasswordCode"> | Date | string
    userId?: StringFilter<"ResetPasswordCode"> | string
  }

  export type UserCreateWithoutResetPasswordInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutResetPasswordInput = {
    id?: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResetPasswordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResetPasswordInput, UserUncheckedCreateWithoutResetPasswordInput>
  }

  export type UserUpsertWithoutResetPasswordInput = {
    update: XOR<UserUpdateWithoutResetPasswordInput, UserUncheckedUpdateWithoutResetPasswordInput>
    create: XOR<UserCreateWithoutResetPasswordInput, UserUncheckedCreateWithoutResetPasswordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResetPasswordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResetPasswordInput, UserUncheckedUpdateWithoutResetPasswordInput>
  }

  export type UserUpdateWithoutResetPasswordInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutResetPasswordInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentClassUncheckedCreateWithoutStudentInput = {
    id?: string
    class_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassCreateOrConnectWithoutStudentInput = {
    where: StudentClassWhereUniqueInput
    create: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput>
  }

  export type StudentClassCreateManyStudentInputEnvelope = {
    data: StudentClassCreateManyStudentInput | StudentClassCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentPresenceCreateWithoutStudentInput = {
    id?: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classroom: ClassroomCreateNestedOneWithoutPresencesInput
  }

  export type StudentPresenceUncheckedCreateWithoutStudentInput = {
    id?: string
    classroom_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceCreateOrConnectWithoutStudentInput = {
    where: StudentPresenceWhereUniqueInput
    create: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput>
  }

  export type StudentPresenceCreateManyStudentInputEnvelope = {
    data: StudentPresenceCreateManyStudentInput | StudentPresenceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentClassUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentClassWhereUniqueInput
    update: XOR<StudentClassUpdateWithoutStudentInput, StudentClassUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentClassCreateWithoutStudentInput, StudentClassUncheckedCreateWithoutStudentInput>
  }

  export type StudentClassUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentClassWhereUniqueInput
    data: XOR<StudentClassUpdateWithoutStudentInput, StudentClassUncheckedUpdateWithoutStudentInput>
  }

  export type StudentClassUpdateManyWithWhereWithoutStudentInput = {
    where: StudentClassScalarWhereInput
    data: XOR<StudentClassUpdateManyMutationInput, StudentClassUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentClassScalarWhereInput = {
    AND?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
    OR?: StudentClassScalarWhereInput[]
    NOT?: StudentClassScalarWhereInput | StudentClassScalarWhereInput[]
    id?: StringFilter<"StudentClass"> | string
    student_id?: StringFilter<"StudentClass"> | string
    class_id?: StringFilter<"StudentClass"> | string
    createdAt?: DateTimeFilter<"StudentClass"> | Date | string
    updatedAt?: DateTimeFilter<"StudentClass"> | Date | string
  }

  export type StudentPresenceUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentPresenceWhereUniqueInput
    update: XOR<StudentPresenceUpdateWithoutStudentInput, StudentPresenceUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentPresenceCreateWithoutStudentInput, StudentPresenceUncheckedCreateWithoutStudentInput>
  }

  export type StudentPresenceUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentPresenceWhereUniqueInput
    data: XOR<StudentPresenceUpdateWithoutStudentInput, StudentPresenceUncheckedUpdateWithoutStudentInput>
  }

  export type StudentPresenceUpdateManyWithWhereWithoutStudentInput = {
    where: StudentPresenceScalarWhereInput
    data: XOR<StudentPresenceUpdateManyMutationInput, StudentPresenceUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentPresenceScalarWhereInput = {
    AND?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
    OR?: StudentPresenceScalarWhereInput[]
    NOT?: StudentPresenceScalarWhereInput | StudentPresenceScalarWhereInput[]
    id?: StringFilter<"StudentPresence"> | string
    student_id?: StringFilter<"StudentPresence"> | string
    classroom_id?: StringFilter<"StudentPresence"> | string
    presence?: BoolFilter<"StudentPresence"> | boolean
    createdAt?: DateTimeFilter<"StudentPresence"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPresence"> | Date | string
  }

  export type StudentClassCreateWithoutClassInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutClassesInput
  }

  export type StudentClassUncheckedCreateWithoutClassInput = {
    id?: string
    student_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassCreateOrConnectWithoutClassInput = {
    where: StudentClassWhereUniqueInput
    create: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput>
  }

  export type StudentClassCreateManyClassInputEnvelope = {
    data: StudentClassCreateManyClassInput | StudentClassCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentClassUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentClassWhereUniqueInput
    update: XOR<StudentClassUpdateWithoutClassInput, StudentClassUncheckedUpdateWithoutClassInput>
    create: XOR<StudentClassCreateWithoutClassInput, StudentClassUncheckedCreateWithoutClassInput>
  }

  export type StudentClassUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentClassWhereUniqueInput
    data: XOR<StudentClassUpdateWithoutClassInput, StudentClassUncheckedUpdateWithoutClassInput>
  }

  export type StudentClassUpdateManyWithWhereWithoutClassInput = {
    where: StudentClassScalarWhereInput
    data: XOR<StudentClassUpdateManyMutationInput, StudentClassUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    teacher_id: string
    name: string
    local?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    teacher_id: string
    name: string
    local?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type StudentCreateWithoutClassesInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: StudentPresenceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: StudentPresenceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassesInput, StudentUncheckedCreateWithoutClassesInput>
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithoutClassesInput = {
    update: XOR<StudentUpdateWithoutClassesInput, StudentUncheckedUpdateWithoutClassesInput>
    create: XOR<StudentCreateWithoutClassesInput, StudentUncheckedCreateWithoutClassesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutClassesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutClassesInput, StudentUncheckedUpdateWithoutClassesInput>
  }

  export type StudentUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: StudentPresenceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: StudentPresenceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentPresenceCreateWithoutClassroomInput = {
    id?: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPresencesInput
  }

  export type StudentPresenceUncheckedCreateWithoutClassroomInput = {
    id?: string
    student_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceCreateOrConnectWithoutClassroomInput = {
    where: StudentPresenceWhereUniqueInput
    create: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput>
  }

  export type StudentPresenceCreateManyClassroomInputEnvelope = {
    data: StudentPresenceCreateManyClassroomInput | StudentPresenceCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type StudentPresenceUpsertWithWhereUniqueWithoutClassroomInput = {
    where: StudentPresenceWhereUniqueInput
    update: XOR<StudentPresenceUpdateWithoutClassroomInput, StudentPresenceUncheckedUpdateWithoutClassroomInput>
    create: XOR<StudentPresenceCreateWithoutClassroomInput, StudentPresenceUncheckedCreateWithoutClassroomInput>
  }

  export type StudentPresenceUpdateWithWhereUniqueWithoutClassroomInput = {
    where: StudentPresenceWhereUniqueInput
    data: XOR<StudentPresenceUpdateWithoutClassroomInput, StudentPresenceUncheckedUpdateWithoutClassroomInput>
  }

  export type StudentPresenceUpdateManyWithWhereWithoutClassroomInput = {
    where: StudentPresenceScalarWhereInput
    data: XOR<StudentPresenceUpdateManyMutationInput, StudentPresenceUncheckedUpdateManyWithoutClassroomInput>
  }

  export type StudentCreateWithoutPresencesInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: StudentClassCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPresencesInput = {
    id?: string
    name: string
    phone: string
    email: string
    cpf: string
    gender: $Enums.Gender
    birth_date: Date | string
    enrollment?: number | null
    current_frequency: number
    belt: $Enums.Belt
    grade: number
    role?: $Enums.Role
    guardian_phone?: string | null
    total_frequency: number
    city: string
    street: string
    district: string
    number: number
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: StudentClassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPresencesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPresencesInput, StudentUncheckedCreateWithoutPresencesInput>
  }

  export type ClassroomCreateWithoutPresencesInput = {
    id?: string
    teacher_id: string
    class_id: string
    classroom_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomUncheckedCreateWithoutPresencesInput = {
    id?: string
    teacher_id: string
    class_id: string
    classroom_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassroomCreateOrConnectWithoutPresencesInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutPresencesInput, ClassroomUncheckedCreateWithoutPresencesInput>
  }

  export type StudentUpsertWithoutPresencesInput = {
    update: XOR<StudentUpdateWithoutPresencesInput, StudentUncheckedUpdateWithoutPresencesInput>
    create: XOR<StudentCreateWithoutPresencesInput, StudentUncheckedCreateWithoutPresencesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPresencesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPresencesInput, StudentUncheckedUpdateWithoutPresencesInput>
  }

  export type StudentUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: StudentClassUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    current_frequency?: IntFieldUpdateOperationsInput | number
    belt?: EnumBeltFieldUpdateOperationsInput | $Enums.Belt
    grade?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    guardian_phone?: NullableStringFieldUpdateOperationsInput | string | null
    total_frequency?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: StudentClassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassroomUpsertWithoutPresencesInput = {
    update: XOR<ClassroomUpdateWithoutPresencesInput, ClassroomUncheckedUpdateWithoutPresencesInput>
    create: XOR<ClassroomCreateWithoutPresencesInput, ClassroomUncheckedCreateWithoutPresencesInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutPresencesInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutPresencesInput, ClassroomUncheckedUpdateWithoutPresencesInput>
  }

  export type ClassroomUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    classroom_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordCodeCreateManyUserInput = {
    id?: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ResetPasswordCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordCodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassCreateManyStudentInput = {
    id?: string
    class_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceCreateManyStudentInput = {
    id?: string
    classroom_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentClassUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type StudentPresenceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroom_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    classroom_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassCreateManyClassInput = {
    id?: string
    student_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentClassUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutClassesNestedInput
  }

  export type StudentClassUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentClassUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceCreateManyClassroomInput = {
    id?: string
    student_id: string
    presence: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPresenceUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type StudentPresenceUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPresenceUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    presence?: BoolFieldUpdateOperationsInput | boolean
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