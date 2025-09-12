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
