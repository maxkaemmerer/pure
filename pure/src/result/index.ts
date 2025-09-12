import { just, Maybe, nothing } from "@kaumlaut/pure/maybe";

/**
 * Represents the Result of an action that succeeded and contains a corresponding value.
 */
export type Ok<T> = {
  type: "ok-result";
  value: T;
};

/**
 * Represents the Result of an action that failed and contains a corresponding error.
 */
export type Err<T> = {
  type: "error-result";
  error: T;
};

/**
 * Represents the Result of an action that can fail.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * A Guard conforming that the given Result is of type Ok.
 */
export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
  return result.type === "ok-result";
}

/**
 * A Guard conforming that the given Result is of type Err.
 */
export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
  return result.type === "error-result";
}

/**
 * Creates a Result of type Ok containg the given value.
 */
export function ok<T>(value: T): Ok<T> {
  return {
    type: "ok-result",
    value,
  };
}

/**
 * Creates a Result of type Err containg the given error.
 */
export function err<E>(error: E): Err<E> {
  return {
    type: "error-result",
    error,
  };
}

/**
 * When Result is Ok: Applies the func function to the contained value and wraps it in Ok again.
 * When Result is Err: Returns the given Result.
 */
export function map<T, E, R>(
  func: (value: T) => R,
): (result: Result<T, E>) => Result<R, E> {
  return (result: Result<T, E>) => {
    if (isOk(result)) {
      return ok(func(result.value));
    }

    return result;
  };
}

/**
 * When Result is Ok: Returns the given Result.
 * When Result is Err: Applies the func function to the contained error and wraps it in Err again.
 */
export function mapErr<T, E, R>(
  func: (value: E) => R,
): (result: Result<T, E>) => Result<T, R> {
  return (result: Result<T, E>) => {
    if (isErr(result)) {
      return err(func(result.error));
    }

    return result;
  };
}

/**
 * Unwrap a result to either its contained value or the default value.
 * When Result is Ok: Returns the nested value.
 * When Result is Err: Returns the given default value.
 */
export function withDefault<T, E>(
  defaultValue: T,
): (result: Result<T, E>) => T {
  return (result: Result<T, E>) => {
    if (isErr(result)) {
      return defaultValue;
    }

    return result.value;
  };
}

/**
 * Converts the given Result to a Maybe
 * When Result is Ok: Returns a Just containing the value.
 * When Result is Err: Returns a Nothing.
 */
export function toMaybe<T, E>(result: Result<T, E>): Maybe<T> {
  return isOk(result) ? just(result.value) : nothing();
}
