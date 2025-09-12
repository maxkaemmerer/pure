import { err, ok, type Result } from "@kaumlaut/pure/result";

/**
 * Attempts to parse a string as an interger. Returning ok if successful or err if not.
 */
export function asInt(value: string): Result<number, string> {
  const parsed = parseInt(value, 10);

  if (Number.isNaN(parsed)) {
    return err("Number is NaN");
  }

  return ok(parsed);
}

/**
 * Attempts to parse a string as an float. Returning ok if successful or err if not.
 */
export function asFloat(value: string): Result<number, string> {
  const parsed = parseFloat(value);

  if (Number.isNaN(parsed)) {
    return err("Number is NaN");
  }

  return ok(parsed);
}
