/**
 * Provides easily composable generic type guards that track errors
 * @module error-aware-guard
 */
import * as Guard from "@kaumlaut/pure/guard";

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
          .filter<SuccessResult<I>>((it): it is SuccessResult<I> => it.success)
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
export const isNonEmptyListOf = <I, T extends I[]>(guard: ErrorAwareGuard<I>) =>
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
