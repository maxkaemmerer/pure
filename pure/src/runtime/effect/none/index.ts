import { Effect, withName } from "@kaumlaut/pure/runtime/effect";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function none(): Effect<any> {
  return withName("none", () => {
    return null;
  });
}
