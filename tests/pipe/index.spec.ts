import { describe, it, expect } from "vitest";
import { compose, put } from "@kaumlaut/pure/pipe";
import { asInt } from "@kaumlaut/pure/parse";
import { toMaybe } from "@kaumlaut/pure/result";
import { withDefault } from "@kaumlaut/pure/maybe";

describe("pipe", () => {
  it("should chain multiple", () => {
    const output = put("3")
      .into(asInt)
      .into(toMaybe)
      .into(withDefault(0))
      .into((input) => input * 3.14)
      .into((input) => input.toPrecision());

    expect(output.out()).toEqual("9.42");
  });

  it("should directly output input when nothing is chained", () => {
    expect(put(3).out()).toEqual(3);
  });

  it("should combine functions", () => {
    const func = compose(
      (a: number) => a * a,
      (b: number) => b - 1,
    );
    expect(func(6)).toEqual(35);
    expect(func(1)).toEqual(0);
  });
});
