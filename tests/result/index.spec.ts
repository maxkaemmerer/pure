import { describe, it, expect } from "vitest";
import {
  err,
  isErr,
  isOk,
  map,
  mapErr,
  ok,
  toMaybe,
  withDefault,
} from "@kaumlaut/pure/result";

describe("result", () => {
  it("ok", () => {
    const result = ok(3);
    expect(isOk(result)).toEqual(true);
    expect(isErr(result)).toEqual(false);
    expect(result.type).toEqual("ok-result");
    expect(result.value).toEqual(3);
    expect(map(() => 5)(result).type).toEqual("ok-result");
    // @ts-expect-error all good
    expect(map(() => 5)(result).value).toEqual(5);
    expect(withDefault(10)(result)).toEqual(3);
    expect(mapErr(() => "another-error")(result).type).toEqual("ok-result");
    expect(toMaybe(result).type).toEqual("maybe-just");
  });

  it("err", () => {
    const result = err("some-error");
    expect(isOk(result)).toEqual(false);
    expect(isErr(result)).toEqual(true);
    expect(result.type).toEqual("error-result");
    expect(result.error).toEqual("some-error");
    expect(map(() => 5)(result).type).toEqual("error-result");
    // @ts-expect-error all good
    expect(map(() => 5)(result).error).toEqual("some-error");
    expect(withDefault(10)(result)).toEqual(10);
    // @ts-expect-error all good
    expect(mapErr(() => "another-error")(result).error).toEqual(
      "another-error",
    );
    expect(toMaybe(result).type).toEqual("maybe-nothing");
  });
});
