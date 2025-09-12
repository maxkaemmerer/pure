import { describe, expect, test } from "vitest";
import { id } from "@kaumlaut/pure/util";

describe("util", () => {
  test.each(
    // @ts-expect-error all good
    ["string"],
    [3],
    [{ a: 3 }],
    [[1, 2, 3]],
  )("should return passed value", (value: unknown) => {
    expect(id(value)).toEqual(value);
    expect(id(value)).toBe(value);
  });
});
