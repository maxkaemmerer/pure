export type Tuple<L, R> = {
  left: L;
  right: R;
};

/**
 * Creates a Tuple with the given left and right values and types
 */
export function tuple<L, R>(left: L): (right: R) => Tuple<L, R> {
  return (right: R) => ({
    left,
    right,
  });
}

/**
 * Creates a Tuple with the same type and value for both left and right
 */
export function same<T>(value: T): Tuple<T, T> {
  return {
    left: value,
    right: value,
  };
}

/**
 * Map the left value from type L to T using the given function
 */
export function mapLeft<L, R, T>(
  func: (value: L) => T,
): (value: Tuple<L, R>) => Tuple<T, R> {
  return (value: Tuple<L, R>) => tuple<T, R>(func(value.left))(value.right);
}

/**
 * Returns the left value
 */
export function left<L, R>(value: Tuple<L, R>): L {
  return value.left;
}

/**
 * Map the right value from type R to T using the given function
 */
export function mapRight<L, R, T>(
  func: (value: R) => T,
): (tuple: Tuple<L, R>) => Tuple<L, T> {
  return (value: Tuple<L, R>) => tuple<L, T>(value.left)(func(value.right));
}

/**
 * Returns the right value
 */
export function right<L, R>(value: Tuple<L, R>): R {
  return value.right;
}
