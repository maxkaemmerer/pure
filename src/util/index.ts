/**
 * Returns the given value.
 */
export function id<T>(value: T): T {
  return value;
}

/**
 * Checks if the given searchString is included in the value.
 * Easier to use for composition purposes than value.includes(x).
 */
export function includes(searchString: string): (value: string) => boolean {
  return (value: string) => value.includes(searchString);
}
