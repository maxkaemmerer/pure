import { describe, expect, it } from "vitest";
import { none } from "../../../../src/runtime/effect/none";

describe("runtime/effect/none", () => {
  it("should be none effect", () => {
    const effect = none();

    expect(effect.name).toEqual("none");
    expect(effect.meta).toEqual(null);
    expect(effect.effectType()).toEqual(null);
  });
});
