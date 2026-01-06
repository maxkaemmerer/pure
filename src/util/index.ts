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
