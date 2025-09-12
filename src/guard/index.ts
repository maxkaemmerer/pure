/**
 * Provides easily composable generic type guards
 * @module guard
 */
import { asFloat, asInt } from "@kaumlaut/pure/parse";
import { isOk } from "@kaumlaut/pure/result";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Guard {
  /**
   * Represents a type guard
   */
  export type Guard<T> = (value: unknown) => value is T;

  /**
   * Confirms that the given value passes all guards.
   */
  export function isAll<T>(guards: Guard<T>[]): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      guards.every((guard) => guard(value));
  }

  /**
   * Confirms that the given value passes both guards.
   */
  export function isBoth<T>(
    a: Guard<T>,
    b: Guard<T>,
  ): (value: unknown) => value is T {
    return (value: unknown): value is T => a(value) && b(value);
  }

  /**
   * Confirms that the value is a string.
   */
  export function isString<T extends string>(value: unknown): value is T {
    return typeof value === "string";
  }
  /**
   * Confirms that the value is a non-empty string.
   */
  export function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.length > 0;
  }

  /**
   * Confirms that the value is a string with specified length.
   */
  export function isStringOfLength(
    length: number,
  ): (value: unknown) => value is string {
    return (value: unknown): value is string =>
      isString(value) && value.length === length;
  }

  /**
   * Confirms that the value is an object.
   */
  export function isObject(value: unknown): value is object {
    return typeof value === "object";
  }
  /**
   * Confirms that the value is a number.
   */
  export function isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  /**
   * Confirms that the value is an integer.
   */
  export function isInt(value: unknown): value is number {
    return (
      isNumber(value) &&
      !numberIncludesCommaSeparator(value) &&
      isOk(asInt(value.toString()))
    );
  }

  /**
   * Confirms that the value is a floating point number.
   */
  export function isFloat(value: unknown): value is number {
    return (
      isNumber(value) &&
      numberIncludesCommaSeparator(value) &&
      isOk(asFloat(value.toString()))
    );
  }

  function numberIncludesCommaSeparator(value: number) {
    return `${value}`.includes(".");
  }

  /**
   * Confirms that the value is an object containing the specified key.
   */
  export function isObjectWithKey<T extends object>(
    key: keyof T,
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      typeof value === "object" && key in value;
  }

  /**
   * Confirms that the value is an object containing the specified keys.
   */
  export function isObjectWithKeys<T extends object>(
    keys: (keyof T)[],
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      typeof value === "object" && keys.every((key) => key in value);
  }

  /**
   * Confirms that the value is an object whose key value pairs match the corresponding type guards.
   * Calls console.debug with an error message to improve debugging when a large type does not match.
   */
  export function isObjectWithKeysMatchingGuard<T extends object>(guards: {
    [K in keyof T]: Guard<T[K]>;
  }): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      typeof value === "object" &&
      Object.keys(guards).filter((key) => {
        const result = key in value && guards[key](value[key]);
        if (!result) {
          console.debug(
            `Guard not matched for object. Value of key ${key} did not pass the guard.`,
          );
        }
        return result;
      }).length === Object.keys(guards).length;
  }

  /**
   * Confirms the value exactly matched the given string.
   */
  export function isExactString<T extends string>(
    expectedString: string,
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      isString<T>(value) && value === expectedString;
  }

  /**
   * Confirms the value is one of the given valid values.
   */
  export function isOneStringOf<T extends string>(
    validValues: string[],
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      isString(value) && validValues.includes(value);
  }

  /**
   * Always passes.
   */
  export function isAlways<T>(value: unknown): value is T {
    return true;
  }

  /**
   * Never passes.
   */
  export function isNever<T>(value: unknown): value is T {
    return false;
  }

  /**
   * Confirms the value is a boolean.
   */
  export function isBool(value: unknown): value is boolean {
    return typeof value === "boolean";
  }

  /**
   * Confirms the value is null.
   */
  export function isNull(value: unknown): value is null {
    return value === null;
  }

  /**
   * Confirms the value is a list of items that all pass the given guard.
   * Calls console.debug with an error message to improve debugging when a large type does not match.
   */
  export function isListOf<T>(
    guard: Guard<T>,
  ): (value: unknown) => value is T[] {
    return (value: unknown): value is T[] =>
      Array.isArray(value) &&
      value.filter((item, index) => {
        const result = guard(item);
        if (!result) {
          console.debug(`Guard not matched for item ${index} of list.`);
        }
        return result;
      }).length === value.length;
  }

  /**
   * Confirms the value passes at least one of the given Guards.
   */
  export function isOneOf<T1, T2>(
    a: Guard<T1>,
    b: Guard<T2>,
  ): (value: unknown) => value is T1 | T2 {
    return (value: unknown): value is T1 | T2 => a(value) || b(value);
  }

  /**
   * Confirms the value is either null or passes the given Guard.
   */
  export function isNullOr<T>(
    guard: Guard<T>,
  ): (value: unknown) => value is T | null {
    return isOneOf(isNull, guard);
  }

  /**
   * Confirms the value is an object where every value matches the given guard.
   * Calls console.debug with an error message to improve debugging when a large type does not match.
   */
  export function isObjectWithAllKeysMatchingGuard<
    B,
    T extends { [key: string]: B },
  >(guard: Guard<B>): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      typeof value === "object" &&
      Object.keys(value).filter((key) => {
        const result = key in value && guard(value[key]);
        if (!result) {
          console.debug(
            `Guard not matched for object. Value of key ${key} did not pass the guard.`,
          );
        }
        return result;
      }).length === Object.keys(value).length;
  }

  /**
   * Confirms the value is a string and matches the given regular expression.
   */
  export function isStringWithPattern(pattern: RegExp): Guard<string> {
    return (value: unknown): value is string =>
      isString(value) && pattern.test(value);
  }

  /**
   * Confirms the value is undefined.
   */
  export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
  }

  /**
   * Confirms the value is a list with atleast one item and all items match the given guard.
   */
  export function isNonEmptyListOf<T>(
    guard: Guard<T>,
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      isListOf(guard)(value) && value.length > 0;
  }

  /**
   * Confirms the value is number between min and max inclusive.
   * Meaning if the value equals min or max the guard passes.
   */
  export function isNumberBetweenInclusive<T>(
    min: number,
    max: number,
  ): (value: unknown) => value is T {
    return (value: unknown): value is T =>
      isNumber(value) && value >= min && value <= max;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ErrorAwareGuard {
  export type SuccessResult<T> = { readonly success: true; readonly value: T };
  export type ErrorResult = {
    readonly success: false;
    readonly errors: string[];
  };
  export type ValidationResult<T> = SuccessResult<T> | ErrorResult;

  export type ErrorAwareGuard<T> = (value: unknown) => ValidationResult<T>;

  export function fail(...errors: string[]): ErrorResult {
    return {
      success: false,
      errors: [...errors],
    };
  }

  export function pass<T>(value: T): SuccessResult<T> {
    return {
      success: true,
      value,
    };
  }
  export function prefixErrors<T>(
    value: ValidationResult<T>,
    prefix: string,
  ): ValidationResult<T> {
    if (value.success === true) {
      return value;
    }

    return {
      success: false,
      errors: value.errors.map((it) => `${prefix} (${it})`),
    };
  }

  export function combineResultsAll<T>(
    ...results: ValidationResult<T>[]
  ): ValidationResult<T> {
    const successResult = results.find<SuccessResult<T>>(
      (it: ValidationResult<T>): it is SuccessResult<T> => it.success,
    );
    if (
      successResult &&
      successResult.success &&
      results.every((it) => it.success)
    ) {
      return pass(successResult.value);
    }

    return fail(
      ...results.reduce(
        (all, result) => [
          ...all,
          ...(result.success === true ? [] : result.errors),
        ],
        [],
      ),
    );
  }

  export function combineTwoResultsAnd<T1, T2>(
    a: ValidationResult<T1>,
    b: ValidationResult<T2>,
  ): ValidationResult<T1 & T2> {
    if (a.success === true && b.success === true) {
      return a as unknown as ValidationResult<T1 & T2>;
    }

    return fail(
      ...[a, b].reduce(
        (all, result) => [
          ...all,
          ...(result.success === true ? [] : result.errors),
        ],
        [],
      ),
    );
  }

  export function combineTwoResultsOneOf<T1, T2>(
    a: ValidationResult<T1>,
    b: ValidationResult<T2>,
  ): ValidationResult<T1 | T2> {
    if (a.success === true) {
      return a;
    }

    if (b.success === true) {
      return b;
    }

    return fail(
      ...[a, b].reduce(
        (all, result: ValidationResult<T2 | T2>) => [
          ...all,
          ...(result.success === true ? [] : result.errors),
        ],
        [],
      ),
    );
  }

  export function combineResultsOneOf<T>(
    ...results: ValidationResult<T>[]
  ): ValidationResult<T> {
    const successResult = results.find<SuccessResult<T>>(
      (it: ValidationResult<T>): it is SuccessResult<T> => it.success,
    );
    if (successResult.success) {
      return pass(successResult.value);
    }

    return fail(
      ...results.reduce(
        (all, result) => [
          ...all,
          ...(result.success === true ? [] : result.errors),
        ],
        [],
      ),
    );
  }

  export function fromGuard<T>(
    guard: Guard.Guard<T>,
    createErrors: (value: unknown) => string[],
  ): ErrorAwareGuard<T> {
    return (value: unknown) => {
      if (guard(value)) {
        return {
          success: true,
          value,
        };
      }

      return {
        success: false,
        errors: createErrors(value),
      };
    };
  }

  export function tryGuardIf<T, T2 extends T = T>(
    predicateGuard: ErrorAwareGuard<T>,
    check: (value: T) => value is T2,
    createErrors: (value: T) => string[],
  ): ErrorAwareGuard<T2> {
    return (value: unknown) => {
      const predicateResult = predicateGuard(value);
      if (predicateResult.success === true) {
        if (check(predicateResult.value)) {
          return pass(predicateResult.value);
        }
        return fail(...createErrors(predicateResult.value));
      }
      return predicateResult;
    };
  }

  export function isBoth<T1, T2>(
    a: ErrorAwareGuard<T1>,
    b: ErrorAwareGuard<T2>,
  ): ErrorAwareGuard<T1 & T2> {
    return (value: unknown) => {
      const resultA = a(value);
      const resultB = b(value);
      return combineTwoResultsAnd(resultA, resultB);
    };
  }

  export function isAll<T>(guards: ErrorAwareGuard<T>[]): ErrorAwareGuard<T> {
    return (value: unknown) => {
      return combineResultsAll(...guards.map((it) => it(value)));
    };
  }
  export function isOneOf<T1, T2>(
    a: ErrorAwareGuard<T1>,
    b: ErrorAwareGuard<T2>,
  ): ErrorAwareGuard<T1 | T2> {
    return (value: unknown) => {
      const resultA = prefixErrors(a(value), "A");
      const resultB = prefixErrors(b(value), "B");
      const combinedResult = combineTwoResultsOneOf(resultA, resultB);

      if (combinedResult.success === true) {
        return pass(combinedResult.value);
      }

      return fail("Neither A nor B passed", ...combinedResult.errors);
    };
  }

  export function isListOf<I, T extends I[]>(
    guard: ErrorAwareGuard<I>,
  ): ErrorAwareGuard<T> {
    return (value: unknown) => {
      if (!Array.isArray(value)) {
        return fail("Not a list");
      }

      if (value.length === 0) {
        return pass<T>([] as T);
      }

      const results = value.map((value, index) =>
        prefixErrors(guard(value), `Item with index ${index} failed with`),
      );

      const successResult = results.find<SuccessResult<I>>(
        (it: ValidationResult<I>): it is SuccessResult<I> => it.success,
      );

      if (successResult) {
        return pass<T>(
          // @ts-expect-error no issue
          results
            .filter<
              SuccessResult<I>
            >((it): it is SuccessResult<I> => it.success)
            .map((it) => it.value),
        );
      }

      return combineResultsAll(
        fail("Not all items passed the Guard"),
        ...results.filter<ErrorResult>((it): it is ErrorResult => !it.success),
      );
    };
  }

  export const isNumber = fromGuard(Guard.isNumber, () => ["Not a number"]);
  export const isString = <T extends string>(value: unknown) =>
    fromGuard(Guard.isString<T>, () => ["Not a string"])(value);
  export const isExactString = <T extends string>(expectedString: T) =>
    tryGuardIf(isString<T>, Guard.isExactString<T>(expectedString), () => [
      `Not the exact string "${expectedString}"`,
    ]);
  export const isBool = fromGuard(Guard.isBool, () => ["Not a boolean"]);
  export const isFloat = fromGuard(Guard.isFloat, () => [
    "Not a floating point number",
  ]);
  export const isInt = fromGuard(Guard.isInt, () => ["Not an integer"]);
  export const isNull = fromGuard(Guard.isNull, () => ["Not null"]);
  export const isUndefined = fromGuard(Guard.isUndefined, () => [
    "Not undefined",
  ]);
  export const isObject = fromGuard(Guard.isObject, () => ["Not an object"]);
  export const isAlways = fromGuard(Guard.isAlways, () => []);
  export const isNever = fromGuard(Guard.isNever, () => ["Never passes"]);
  export const isNonEmptyString = tryGuardIf(
    isString,
    (value): value is string => value.length > 0,
    () => ["Is empty"],
  );
  export const isStringOfLength = (length: number) =>
    tryGuardIf(
      isString,
      (value): value is string => value.length === length,
      (value) => [
        `String length was ${value.length} instead of expected ${length}`,
      ],
    );
  export const isStringWithPattern = (pattern: RegExp) =>
    tryGuardIf(
      isString,
      (value): value is string => pattern.test(value),
      (value) => [`String ${value} did not match pattern ${pattern.source}`],
    );
  export const isNonEmptyListOf = <I, T extends I[]>(
    guard: ErrorAwareGuard<I>,
  ) =>
    tryGuardIf(
      isListOf(guard),
      (value): value is T => value.length > 0,
      () => ["Not enough items"],
    );
  export const isNumberBetweenInclusive = (min: number, max: number) =>
    tryGuardIf(
      isNumber,
      (value): value is number => value >= min && value <= max,
      (value) => [`${value} is not between ${min} and ${max} (inclusively)`],
    );
  export const isNullOr = <T>(guard: ErrorAwareGuard<T>) =>
    isOneOf(isNull, guard);
  export const isOneStringOf = <T extends string>(validValues: T[]) =>
    tryGuardIf(
      isString<T>,
      (value): value is T => validValues.includes(value),
      (value) => [`String ${value} is not one of ${validValues.join("|")}`],
    );

  /**
   * Confirms that the value is an object containing the specified key.
   */
  export function isObjectWithKey<T extends object, K extends keyof T>(
    key: K,
  ): ErrorAwareGuard<T> {
    return tryGuardIf(
      isObject,
      (value: object): value is T => key in value,
      () => [`Object does not have key ${key.toString()}`],
    );
  }

  /**
   * Confirms that the value is an object containing the specified key the value matching the given guard.
   */
  export function isObjectWithKeyMatchingGuard<
    T extends object,
    K extends keyof T,
  >(key: K, guard: ErrorAwareGuard<T[K]>): ErrorAwareGuard<T> {
    return tryGuardIf(
      isObjectWithKey<T, K>(key),
      (value: T): value is T => guard(value[key]).success,
      (value) =>
        prefixErrors(
          guard(value),
          `Key ${key.toString()} of object did not pass guard`,
          // @ts-expect-error no issue
        ).errors || [],
    );
  }

  /**
   * Confirms that the value is an object containing the specified keys.
   */
  export function isObjectWithKeys<T extends object, K extends keyof T>(
    keys: K[],
  ): ErrorAwareGuard<T> {
    return isAll(keys.map(isObjectWithKey<T, K>));
  }

  export function isObjectWithKeysMatchingGuard<
    T extends object,
    K extends keyof T,
  >(guards: {
    [K in keyof T]: ErrorAwareGuard<T[K]>;
  }): ErrorAwareGuard<T> {
    return isAll(
      // @ts-expect-error not error just a bad type system
      Object.entries(guards).map(([key, guard]: [K, ErrorAwareGuard<T[K]>]) => {
        return isObjectWithKeyMatchingGuard<T, K>(key, guard);
      }),
    );
  }

  /**
   * Confirms the value is an object where every value matches the given guard.
   * Calls console.debug with an error message to improve debugging when a large type does not match.
   */
  export function isObjectWithAllKeysMatchingGuard<
    T extends object,
    K extends keyof T,
  >(guard: ErrorAwareGuard<T[K]>): ErrorAwareGuard<T> {
    return (value) =>
      isAll(
        // @ts-expect-error not error just a bad type system
        Object.keys(value).map((key: K) => {
          return isObjectWithKeyMatchingGuard<T, K>(key, guard);
        }),
      )(value);
  }
}
