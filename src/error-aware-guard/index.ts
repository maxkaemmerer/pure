/**
 * Provides easily composable generic type guards that track errors
 * @module error-aware-guard
 */
import * as Guard from "@kaumlaut/pure/guard";

/**
 * Represents a successful ErrorAwareGuard, containing the value
 */
export type SuccessResult<T> = { readonly success: true; readonly value: T };

/**
 * Represents a failed ErrorAwareGuard, containing errors
 */
export type ErrorResult = {
  readonly success: false;
  readonly errors: string[];
};

/**
 * Represents the result of a ErrorAwareGuard
 */
export type ValidationResult<T> = SuccessResult<T> | ErrorResult;

/**
 * Represents a function that returns a wrapped value on success or a wrapped error on failure
 */
export type ErrorAwareGuard<T> = (value: unknown) => ValidationResult<T>;

/**
 * Creates an ErrorResult with the given errors
 */
export function fail(...errors: string[]): ErrorResult {
  return {
    success: false,
    errors: [...errors],
  };
}

/**
 * Creates an SuccessResult<T> with the given value
 */
export function pass<T>(value: T): SuccessResult<T> {
  return {
    success: true,
    value,
  };
}

/**
 * Takes a ValidationResult<T> and if it is an ErrorResult, prefixes every error with the given prefix.
 */
export function prefixErrors<T>(
  value: ValidationResult<T>,
  prefix: string,
): ValidationResult<T> {
  if (value.success === true) {
    return value;
  }

  return {
    success: false,
    errors: value.errors.map((it) => `${prefix}${it}`),
  };
}

/**
 * Converts an ErrorAwareGuard<T> to a Guard<T>
 */
export function toGuard<T>(guard: ErrorAwareGuard<T>): Guard.Guard<T> {
  return (value: unknown): value is T => guard(value).success;
}

/**
 * Evaluates an ErrorAwareGuard<T> for given value
 */
export function check<T>(
  value: unknown,
  guard: ErrorAwareGuard<T>,
): value is T {
  return guard(value).success;
}

/**
 * Combines a list of results. Returning a SuccessResult<T> if all of them are SucessResult<T>
 * or returns an ErrorResult with combined errors if any of them are ErrorResult.
 */
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

/**
 * Combines two results. Returning a SuccessResult<T> if both of them are SucessResult<T>
 * or returns an ErrorResult with combined errors if one is an ErrorResult.
 */
export function combineTwoResultsAnd<T1, T2>(
  a: ValidationResult<T1>,
  b: ValidationResult<T2>,
): ValidationResult<T1 & T2> {
  if (a.success === true && b.success === true) {
    return a as unknown as ValidationResult<T1 & T2>;
  }

  return fail(
    ...[a, b].reduce(
      (all, result: ErrorResult) => [...all, ...result.errors],
      [],
    ),
  );
}

/**
 * Combines two results. Returning a SuccessResult<T> if either of them are SucessResult<T>
 * or returns an ErrorResult with combined errors if both are an ErrorResult.
 */
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
      (all, result: ValidationResult<T1 | T2>) => [
        ...all,
        ...(result.success === true ? [] : result.errors),
      ],
      [],
    ),
  );
}

/**
 * Combines a list of results. Returning a SuccessResult<T> if either of them are SucessResult<T>
 * or returns an ErrorResult with combined errors if all are an ErrorResult.
 */
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

/**
 * Converts a Guard<T> to an ErrorAwareGuard<T> with provided error factory function
 */
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

/**
 * First applies the predicateGuard and if it is a SuccessResult<T> passes the value to check.
 * If check returns true it creates SuccessResult<T>.
 * Otherwise an ErrorResult is created, containing the errors created by the error factory function.
 */
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

/**
 * Confirms that the given value passes both guards.
 */
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

/**
 * Confirms that the given value passes all guards.
 */
export function isAll<T>(guards: ErrorAwareGuard<T>[]): ErrorAwareGuard<T> {
  return (value: unknown) => {
    return combineResultsAll(...guards.map((it) => it(value)));
  };
}

/**
 * Confirms the value passes at least one of the given Guards.
 */
export function isOneOf<T1, T2>(
  a: ErrorAwareGuard<T1>,
  b: ErrorAwareGuard<T2>,
): ErrorAwareGuard<T1 | T2> {
  return (value: unknown) => {
    const resultA = prefixErrors(a(value), "(A) ");
    const resultB = prefixErrors(b(value), "(B) ");
    const combinedResult = combineTwoResultsOneOf(resultA, resultB);

    if (combinedResult.success === true) {
      return pass(combinedResult.value);
    }

    return fail("Neither A nor B passed", ...combinedResult.errors);
  };
}

/**
 * Confirms the value is a list of items that all pass the given guard.
 */
export function isListOf<I>(guard: ErrorAwareGuard<I>): ErrorAwareGuard<I[]> {
  return (value: unknown) => {
    if (!Array.isArray(value)) {
      return fail("Not a list");
    }

    if (value.length === 0) {
      return pass<I[]>([] as I[]);
    }

    const results = value.map((value, index) =>
      prefixErrors(guard(value), `[${index}] `),
    );

    if (results.every((it) => it.success)) {
      return pass(value as I[]);
    }

    return combineResultsAll(
      fail("Not all items passed the Guard"),
      ...results.filter<ErrorResult>((it): it is ErrorResult => !it.success),
    );
  };
}

/**
 * Confirms that the value is a number.
 */
export const isNumber = fromGuard(Guard.isNumber, () => ["Not a number"]);

/**
 * Confirms that the value is a string.
 */
export const isString = <T extends string>(value: unknown) =>
  fromGuard(Guard.isString<T>, () => ["Not a string"])(value);

/**
 * Confirms that the value is an exact string.
 */
export const isExactString = <T extends string>(expectedString: T) =>
  tryGuardIf(isString<T>, Guard.isExactString<T>(expectedString), () => [
    `Not the exact string "${expectedString}"`,
  ]);

/**
 * Confirms that the value is a boolean.
 */
export const isBool = fromGuard(Guard.isBool, () => ["Not a boolean"]);

/**
 * Confirms that the value is a float.
 */
export const isFloat = fromGuard(Guard.isFloat, () => [
  "Not a floating point number",
]);

/**
 * Confirms that the value is an interger.
 */
export const isInt = fromGuard(Guard.isInt, () => ["Not an integer"]);

/**
 * Confirms that the value is null.
 */
export const isNull = fromGuard(Guard.isNull, () => ["Not null"]);

/**
 * Confirms that the value is undefined.
 */
export const isUndefined = fromGuard(Guard.isUndefined, () => [
  "Not undefined",
]);

/**
 * Confirms that the value is an object.
 */
export const isObject = fromGuard(Guard.isObject, () => ["Not an object"]);

/**
 * Always passes.
 */
export const isAlways = fromGuard(Guard.isAlways, () => []);

/**
 * Never passes.
 */
export const isNever = fromGuard(Guard.isNever, () => ["Never passes"]);

/**
 * Confirms that the value is a non-empty string.
 */
export const isNonEmptyString = tryGuardIf(
  isString,
  (value): value is string => value.length > 0,
  () => ["Is empty"],
);

/**
 * Confirms that the value is a string with specified length.
 */
export const isStringOfLength = (length: number) =>
  tryGuardIf(
    isString,
    (value): value is string => value.length === length,
    (value) => [
      `String length was ${value.length} instead of expected ${length}`,
    ],
  );

/**
 * Confirms the value is a string and matches the given regular expression.
 */
export const isStringWithPattern = (pattern: RegExp) =>
  tryGuardIf(
    isString,
    (value): value is string => pattern.test(value),
    (value) => [`String ${value} did not match pattern ${pattern.source}`],
  );

/**
 * Confirms the value is a list with atleast one item and all items match the given guard.
 */
export const isNonEmptyListOf = <I>(guard: ErrorAwareGuard<I>) =>
  tryGuardIf(
    isListOf(guard),
    (value): value is I[] => value.length > 0,
    () => ["Not enough items"],
  );

/**
 * Confirms the value is number between min and max inclusive.
 * Meaning if the value equals min or max the guard passes.
 */
export const isNumberBetweenInclusive = (min: number, max: number) =>
  tryGuardIf(
    isNumber,
    (value): value is number => value >= min && value <= max,
    (value) => [`${value} is not between ${min} and ${max} (inclusively)`],
  );

/**
 * Confirms the value is either null or passes the given Guard.
 */
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
export function isObjectWithKey<T extends object>(
  key: keyof T,
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
export function isObjectWithKeyMatchingGuard<T extends object>(
  key: keyof T,
  guard: ErrorAwareGuard<T[keyof T]>,
): ErrorAwareGuard<T> {
  return (value: unknown): ValidationResult<T> => {
    const isObjectWithKeyResult = isObjectWithKey<T>(key)(value);
    if (isObjectWithKeyResult.success === false) {
      return isObjectWithKeyResult;
    }

    const keyValueResult = guard(value[key]);

    if (keyValueResult.success === true) {
      return pass(isObjectWithKeyResult.value);
    }

    return prefixErrors(keyValueResult, `[${key.toString()}] `);
  };
}

/**
 * Confirms that the value is an object containing the specified keys.
 */
export function isObjectWithKeys<T extends object>(
  keys: (keyof T)[],
): ErrorAwareGuard<T> {
  return isAll(keys.map(isObjectWithKey<T>));
}

/**
 * Confirms that the value is an object whose key value pairs match the corresponding type guards.
 */
export function isObjectWithKeysMatchingGuard<T extends object>(guards: {
  [K in keyof T]: ErrorAwareGuard<T[K]>;
}): ErrorAwareGuard<T> {
  return isAll(
    Object.entries(guards).map(([key, guard]) => {
      return isObjectWithKeyMatchingGuard<T>(
        key as keyof T,
        guard as ErrorAwareGuard<T[keyof T]>,
      );
    }),
  );
}

/**
 * Confirms the value is an object where every value matches the given guard.
 */
export function isObjectWithAllKeysMatchingGuard<T extends object>(
  guard: ErrorAwareGuard<T[keyof T]>,
): ErrorAwareGuard<T> {
  return (value) => {
    const isObjectResult = isObject(value);
    if (isObjectResult.success === false) {
      return isObjectResult;
    }
    return isAll(
      // @ts-expect-error not error just a bad type system
      Object.keys(value).map((key: K) => {
        return isObjectWithKeyMatchingGuard<T>(key, guard);
      }),
    )(value);
  };
}

/**
 * Given an object of error to Guard pairs, maps the given value to a key if the matching Guard passes.
 * If no guard passes the default error is returned.
 * If multiple guards pass, the first error will be returned.
 * @example
 * errorByGuard(
    {
        "Some validation error": isSomeValidationError,
        "Some Io Error": isIoError,
    },
    "Default Error",
    // returns "Some validation error" if the given error passes the isSomeValidationError Guard
    // returns "Some Io Error" if the given error passes the isIoError Guard
    // returns "Default Error" if none of the Guards pass
)(error)
 */
export function errorByGuard<T extends object>(
  guards: {
    [K in keyof T]: ErrorAwareGuard<T[K]>;
  },
  defaultError: string,
): (value: unknown) => keyof T | string {
  return (value: unknown) => {
    for (const [key, guard] of Object.entries(guards)) {
      const result = (guard as ErrorAwareGuard<T[keyof T]>)(value);

      if (result.success) {
        return key as keyof T;
      }
    }

    return defaultError;
  };
}

/**
 * Will execute the function if ValidationResult is successful
 */
export function peek<T>(
  result: ValidationResult<T>,
  applyFunction: (value: T) => void,
) {
  if (result.success) {
    applyFunction(result.value);
  }
}

/**
 * Will return the result of the function if ValidationResult is success
 * Otherwise will return defaultValue
 */
export function mapWithDefault<T, T2>(
  result: ValidationResult<T>,
  mapFunction: (value: T) => T2,
  defaultValue: T2,
): T2 {
  if (result.success) {
    return mapFunction(result.value);
  }

  return defaultValue;
}
