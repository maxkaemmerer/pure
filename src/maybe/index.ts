/**
 * Provides types representing the Maybe concept as well as functions to work with it.
 * @module maybe
 */
import { err, ok, Result } from "@kaumlaut/pure/result";
import * as ErrorAwareGuard from "@kaumlaut/pure/error-aware-guard";
import * as Guard from "@kaumlaut/pure/guard";

/**
 * Represents a Maybe containing a value.
 * @example
 * ```ts
 * if (isJust(maybe)) {
 *  // the isJust guard tells typescript that maybe has a value of type number
 *  console.log("Something here: " + maybe.value)
 * }
 * ```
 */
export type Just<T> = {
  type: "maybe-just";
  value: T;
};

/**
 * Represents a Maybe not containing a value.
 * @example 
  if (isNothing(maybe)) {
      // no value property exists on maybe
      console.log("Nothing here")
  }
 */
export type Nothing = {
  type: "maybe-nothing";
};

/**
 * Represents the Maybe type.
 */
export type Maybe<T> = Just<T> | Nothing;

/**
 * Creates a maybe not containing a value. (Nothing)
 */
export function nothing(): Nothing {
  return {
    type: "maybe-nothing",
  };
}

/**
 * Creates a maybe containing a value. (Just)
 */
export function just<T>(value: T): Just<T> {
  return {
    type: "maybe-just",
    value,
  };
}

/**
 * A Guard confirming that the given maybe value is a Nothing.
 */
export function isNothing<T>(maybe: Maybe<T>): maybe is Nothing {
  return maybe.type === "maybe-nothing";
}

/**
 * A Guard confirming that the given maybe value is a Just.
 */
export function isJust<T>(maybe: Maybe<T>): maybe is Just<T> {
  return maybe.type === "maybe-just" && "value" in maybe;
}

/**
 * A Guard confirming that the given value is a Maybe.
 */
export function isMaybe<T>(value: unknown): value is Maybe<T> {
  return Guard.isObjectWithKey("type")(value) && (value.type === "maybe-just" || value.type === "maybe-nothing");
}

/**
 * Applies the func function to the value if the given Maybe is a Just and returns it wrapped in a Just. Otherwise returns the given Maybe.
 */
export function map<T, R>(
  func: (value: T) => R,
): (maybe: Maybe<T>) => Maybe<R> {
  return (maybe: Maybe<T>) => {
    if (isJust(maybe)) {
      return just(func(maybe.value));
    }

    return maybe;
  };
}

/**
 * Converts the given Maybe into a Nothing if it is Just but does not pass the given function.
 */
export function filter<T>(
  func: (value: T) => boolean,
): (maybe: Maybe<T>) => Maybe<T> {
  return (maybe: Maybe<T>) => {
    if (!isJust(maybe)) {
      return maybe;
    }

    if (func(maybe.value)) {
      return maybe;
    }

    return nothing();
  };
}

/**
 * Unwraps a Maybe, returning the value if it is a Just or the default value if it is a Nothing.
 */
export function withDefault<T>(defaultValue: T): (maybe: Maybe<T>) => T {
  return (maybe: Maybe<T>) => {
    if (isJust(maybe)) {
      return maybe.value;
    }

    return defaultValue;
  };
}

/**
 * Converts the given Maybe to a Result.
 * A Nothing becomes an Err with the given error.
 * A Just becomes an Ok with the contained value.
 */
export function toResult<T, E>(error: E): (maybe: Maybe<T>) => Result<T, E> {
  return (maybe: Maybe<T>) => (isJust(maybe) ? ok(maybe.value) : err(error));
}

/**
 * Creates a Just if the Guard passes for the given value. Otherwise Creates a Nothing.
 */
export function maybeByGuard<T>(
  guard: Guard.Guard<T>,
): (value: unknown) => Maybe<T> {
  return (value: unknown) => {
    return guard(value) ? just(value) : nothing();
  };
}

/**
 * Creates a Just if the ErrorAwareGuard passes for the given value. Otherwise Creates a Nothing.
 */
export function maybeByErrorAwareGuard<T>(
  guard: ErrorAwareGuard.ErrorAwareGuard<T>,
): (value: unknown) => Maybe<T> {
  return (value: unknown) => {
    const result = guard(value);

    if (result.success === true) {
      return just(result.value);
    }

    return nothing();
  };
}

/**
 * Maps the a value contained within a Just using the given function without wrapping it in another Just.
 * Returns the given Maybe if it is a Nothing.
 */
export function mapToMaybe<T, R>(
  func: (value: T) => Maybe<R>,
): (maybe: Maybe<T>) => Maybe<R> {
  return (maybe: Maybe<T>) => {
    if (isJust(maybe)) {
      return func(maybe.value);
    }

    return maybe;
  };
}

/**
 * Runs the given function with the contained value if maybe is Just<T>
 * If an error occurs it returns Nothing.
 * Otherwise it returns the mapped value inside a Just<R>.
 */
export function tryMap<T, R>(
  func: (value: T) => R,
): (maybe: Maybe<T>) => Maybe<R> {
  return (maybe: Maybe<T>) => {
    if (isJust(maybe)) {
      try {
        return just(func(maybe.value));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return nothing();
      }
    }

    return maybe;
  };
}

/**
 * Returns true if both values are either Just with matching predicate return values
 * Or if both values are Nothing
 */
export function eqBy<T, T2>(
  by: (value: T) => T2,
): (a: Maybe<T>, b: Maybe<T>) => boolean {
  return (a: Maybe<T>, b: Maybe<T>) => {
    if (isJust(a) && isJust(b)) {
      return by(a.value) === by(b.value);
    }

    return isNothing(a) && isNothing(b);
  };
}

/**
 * Returns true if both values are Nothing
 */
export function bothNothing<T>(a: Maybe<T>, b: Maybe<T>): boolean {
  return isNothing(a) && isNothing(b);
}

/**
 * Creates a Maybe<T> from a list and an index. Just if the key exists, Nothing if it doesn't
 */
export function fromListAndIndex<T>(index: number, list: T[]): Maybe<T> {
  return index in list ? just(list[index]) : nothing();
}

/**
 * Combines two Maybe<T>. If both are Just<T> the combine function is used
 * Otherwise Either a single Just is returned directly
 * Or Nothing is retured if both are Nothing
 */
export function concat<T>(combine: (aValue: T, bValue: T) => T) {
  return (a: Maybe<T>) => (b: Maybe<T>) => {
    if (isJust(a) && isJust(b)) {
      return just(combine(a.value, b.value));
    }

    return isJust(a) ? a : b;
  };
}
