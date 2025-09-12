/**
 * Provides value cloning capabilities
 * @module clone
 */

/**
 * Defines the Cloneable type
 */
export type Cloneable =
  | string
  | number
  | boolean
  | null
  | Cloneable[]
  | { [key: string]: Cloneable };

/**
 * Recursively clones values to prevent changing of the original value.
 */
export function clone<T extends Cloneable>(value: T): T {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => clone(item)) as T;
  }

  const clonedObj: Cloneable = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      // @ts-expect-error all good
      clonedObj[key] = clone(value[key]);
    }
  }

  return clonedObj as T;
}
