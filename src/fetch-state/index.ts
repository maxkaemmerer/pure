/**
 * Provides types and functions to represent fetch request states
 * @module fetch-state
 */
import * as Guard from "@kaumlaut/pure/guard";
import * as ErrorAwareGuard from "@kaumlaut/pure/error-aware-guard";
import { just, Maybe, nothing } from "../maybe";

/**
 * Represents a failed fetch request
 */
export type Failed = {
  errors: Readonly<string[]>;
  type: "Failed";
};

/**
 * Represents a fetch request that has not been executed
 */
export type None = {
  type: "None";
};

/**
 * Represents a fetch request that is currently still running
 */
export type Loading = {
  type: "Loading";
};

/**
 * Represents a fetch request that succeeded
 */
export type Success<T> = {
  data: Readonly<T>;
  type: "Success";
};
/**
 * Represents all possible states of a fetch request
 */
export type FetchState<T> = Failed | None | Loading | Success<T>;
/**
 * Checks whether or not the fetch state is Loading via a type guard
 */
export function isLoading<T>(state: FetchState<T>): state is Loading {
  return state.type === "Loading";
}
/**
 * Checks whether or not the fetch state is Failed via a type guard
 */
export function isFailed<T>(state: FetchState<T>): state is Failed {
  return state.type === "Failed";
}
/**
 * Checks whether or not the fetch state is None via a type guard
 */
export function isNone<T>(state: FetchState<T>): state is None {
  return state.type === "None";
}
/**
 * Checks whether or not the fetch state is Success via a type guard
 */
export function isSuccess<T>(state: FetchState<T>): state is Success<T> {
  return state.type === "Success";
}
/**
 * Creates a fetch state of type Failed
 */
export function fail(first: string, ...errors: string[]): Failed {
  return {
    type: "Failed",
    errors: [first, ...errors],
  };
}
/**
 * Creates a fetch state of type Loading
 */
export function load(): Loading {
  return {
    type: "Loading",
  };
}
/**
 * Creates a fetch state of type None
 */
export function none(): None {
  return {
    type: "None",
  };
}
/**
 * Creates a fetch state of type Success<T>.
 * Generally attempt or attemptErrorAware should be used instead.
 */
export function succeed<T>(data: T): Success<T> {
  return {
    type: "Success",
    data,
  };
}
/**
 * Attempts to create a fetch state of type Success if the given guard passes.
 * Otherwise creates a fetch state of type Failed with the provided error.
 * @example
const value = attempt(isString, "Not a String")(3);
if(isSuccess(value)){
  console.log(value.data)
} else if (isFailed(value)){
  console.error(value.error)
}
 */
export function attempt<T>(
  guard: Guard.Guard<T>,
  firstError: string = "Guard did not pass. Ensure the attempted data has the correct type",
  ...errors: string[]
): (data: unknown) => Success<T> | Failed {
  return (data: unknown) => {
    if (guard(data)) {
      return {
        type: "Success",
        data,
      };
    }

    return {
      type: "Failed",
      errors: [firstError, ...errors],
    };
  };
}

/**
 * Attempts to create a fetch state of type Success if the given guard passes.
 * Otherwise creates a fetch state of type Failed with the errors from the ErrorAwareGuard.
 * @example
const value = attemptErrorAware(isString)(3);
if(isSuccess(value)){
  console.log(value.data)
} else if (isFailed(value)){
  console.error(value.error)
}
 */
export function attemptErrorAware<T>(
  guard: ErrorAwareGuard.ErrorAwareGuard<T>,
): (data: unknown) => Success<T> | Failed {
  return (data: unknown) => {
    const result = guard(data);
    if (result.success === true) {
      return {
        type: "Success",
        data: result.value,
      };
    }

    return {
      type: "Failed",
      errors: result.errors,
    };
  };
}

/**
 * A Utility function that allows to map the Failed fetch state to any other fetch state.
 * The mapper function is only called if the given fetch state is Failed.
 * @example
const value = attempt(isString, "Not a String")(3);
const mappedValue = mapFailed<string>(state => state.error.includes("404") ? fail("Not Found") : state)(value)
if(isSuccess(mappedValue)){
  console.log(mappedValue.data)
} else if (isFailed(mappedValue)){
  console.error(mappedValue.error)
}
 */
export function mapFailed<T, T2 = T>(
  mapper: (state: Failed) => FetchState<T2>,
): (state: FetchState<T>) => FetchState<T | T2> {
  return (state: FetchState<T>) => {
    if (isFailed(state)) {
      return mapper(state);
    }

    return state;
  };
}
/**
 * A Utility function that allows to map the Success fetch state to any other fetch state.
 * The mapper function is only called if the given fetch state is Success.
 */
export function mapSuccess<T, T2 = T>(
  mapper: (state: Success<T>) => FetchState<T2>,
): (state: FetchState<T>) => FetchState<T | T2> {
  return (state: FetchState<T>) => {
    if (isSuccess(state)) {
      return mapper(state);
    }

    return state;
  };
}

/**
 * Converts a Success<T> into a Success<T2> using the given mapping function.
 * Does nothing if the FetchState is not Success.
 */
export function mapSuccessData<T, T2 = T>(
  map: (state: T) => T2,
): (state: FetchState<T>) => FetchState<T2> {
  return (state) => {
    if (isSuccess(state)) {
      return succeed(map(state.data));
    }

    return state;
  };
}
/**
 * Checks whether or not the fetch state is Failed and contains an errors that passes the matcher.
 */
export function containsError<T>(
  matcher: (error: string) => boolean,
): (state: FetchState<T>) => boolean {
  return (state) => {
    if (isFailed(state)) {
      return state.errors.some(matcher);
    }

    return false;
  };
}

/**
 * Converts a Success<T> Fetch State to Just<T> and any other Fetch State to Nothing.
 */
export function fetchStateToMaybe<T>(fetchState: FetchState<T>): Maybe<T> {
  if (isSuccess(fetchState)) {
    return just(fetchState.data);
  }

  return nothing();
}
