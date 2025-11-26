/**
 * Represents a function pipeline
 */
export type Pipe<IT> = {
  into: <RT>(func: (input: IT) => RT) => Pipe<RT>;
  out: () => IT;
};

/**
 * Creates a Pipe that allows you to chain multiple functions using into.
 * Is meant to make larger functions more readable.
 * @example
*   const output = put("3")
      .into(asInt)
      .into(toMaybe)
      .into(withDefault(0))
      .into((input) => input * 3.14)
      .into((input) => input.toPrecision());
 */
export function put<IT>(data: IT): Pipe<IT> {
  return {
    into: <RT>(func: (input: IT) => RT): Pipe<RT> => {
      return put(func(data));
    },
    out: () => data,
  };
}

/**
 * Combines two single argument functions to create a new one. Passing the output of f1 to f2 as input.
 */
export function compose<T1, T2, R>(
  f1: (value: T1) => T2,
  f2: (value: T2) => R,
): (value: T1) => R {
  return (value) => f2(f1(value));
}
