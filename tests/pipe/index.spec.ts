import { describe, it, expect } from "vitest";
import { put } from "../../src/pipe/index";
import { asInt } from "../../src/parse";
import { toMaybe } from "../../src/result";
import { withDefault } from "../../src/maybe";

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
});
