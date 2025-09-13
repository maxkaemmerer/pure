/**
 * Provides easily composable generic type guards
 * @module guard
 */
import { asFloat, asInt } from "@kaumlaut/pure/parse";
import { isOk } from "@kaumlaut/pure/result";

/**
 * Represents a type guard
 */
export type Guard<T> = (value: unknown) => value is T;

/**
 * Confirms that the given value passes all guards.
 */
export function isAll<T>(guards: Guard<T>[]): (value: unknown) => value is T {
  return (value: unknown): value is T => guards.every((guard) => guard(value));
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
export function isListOf<T>(guard: Guard<T>): (value: unknown) => value is T[] {
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
