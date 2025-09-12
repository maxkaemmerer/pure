import { Guard } from "@kaumlaut/pure/guard";
import { ok, err } from "@kaumlaut/pure/result";
import {
  ReceiveEffectResult,
  Effect,
  withName,
} from "@kaumlaut/pure/runtime/effect";
import { Message } from "@kaumlaut/pure/runtime";

export type HttpError = {
  code: number;
  message: string;
};

export type MalformedPayloadError = {
  message: string;
};

export type FetchError = HttpError | MalformedPayloadError;

export function isNotFound(error: FetchError): boolean {
  return isHttp(error) && error.code === 404;
}

export function isHttp(error: FetchError): error is HttpError {
  return (
    Object.keys(error).includes("message") &&
    Object.keys(error).includes("code")
  );
}

export function isClient(error: FetchError): boolean {
  return isHttp(error) && error.code > 399 && error.code < 500;
}

export function isServer(error: FetchError): boolean {
  return isHttp(error) && error.code > 499;
}

export function fetchJson<T, M extends Message>(
  url: string,
  headers: [string, string][],
  method: string,
  guard: Guard<T>,
  receiver: ReceiveEffectResult<T, FetchError, M>,
): Effect<M> {
  return withName(
    "fetchJson",
    async () => {
      try {
        const result = await fetch(url, {
          method,
          headers,
        });
        if (result.status > 199 && result.status < 300) {
          const payload = await result.json();

          if (guard(payload)) {
            return receiver(ok(payload));
          } else {
            return receiver(
              err({
                message: "Malformed Payload. Your Guard does not pass.",
              }),
            );
          }
        }

        return receiver(
          err({
            code: result.status,
            message: await result.text(),
          }),
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e: unknown) {
        return receiver(
          err({
            message: "Malformed Payload. Invalid JSON.",
          }),
        );
      }
    },
    {
      url,
      headers,
      method,
    },
  );
}
