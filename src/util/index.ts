import { ErrorAwareGuard } from "../error-aware-guard";
import { just, Maybe, nothing } from "../maybe";

/**
 * Returns the given value.
 */
export function id<T>(value: T): T {
  return value;
}

/**
 * Returns the first (left) value passed
 */
export function left<L, R>(left: L): (right: R) => L | R {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (right: R) => left;
}

/**
 * Returns the second (right) value passed
 */
export function right<L, R>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  left: L,
): (right: R) => L | R {
  return (right: R) => right;
}

/**
 * Checks if the given searchString is included in the value.
 * Easier to use for composition purposes than value.includes(x).
 */
export function includes(searchString: string): (value: string) => boolean {
  return (value: string) => value.includes(searchString);
}

/**
 * Utility function that returns the value for the matching objects key
 * @example
 * field("name")({name: "Peter"})
 * // returns the string "Peter"
 */
export function field<T extends object>(
  key: keyof T,
): (value: T) => T[keyof T] {
  return (value) => value[key];
}

/**
 * Takes an object with partial keys of type T and a list of keys for the wanted object type T.
 * Returns a new object with all keys of T present. The values are Just if the key was present and includes the value, or nothing if the key was not present.
 */
export function coerceOptionalFieldsAsMaybe<T extends object>(
  value: Partial<T>,
  keys: (keyof T)[],
): { [Property in keyof T]: Maybe<T[keyof T]> } {
  return keys.reduce(
    (object, key: keyof T) => {
      object[key] = key in value ? just(value[key]) : nothing();
      return object;
    },
    {} as { [Property in keyof T]: Maybe<T[keyof T]> },
  );
}

/**
 * Takes an object with partial keys of type T and an object of ErrorAwareGuards used to validate T.
 * Returns a new object with all keys of T present. The values are Just with the value if the key was present and the value passed the corresponding ErrorAwareGuard or nothing if the key was not present.
 */
export function coerceOptionalFieldsAsMaybeByGuard<T extends object>(
  value: Partial<T>,
  guards: {
    [K in keyof T]: ErrorAwareGuard<T[K]>;
  },
): { [Property in keyof T]: Maybe<T[keyof T]> } {
  return Object.entries(guards).reduce(
    (object, [key, guard]) => {
      object[key] =
        key in value &&
        (guard as ErrorAwareGuard<T[keyof T]>)(value[key]).success
          ? just(value[key])
          : nothing();
      return object;
    },
    {} as { [Property in keyof T]: Maybe<T[keyof T]> },
  );
}
