import { describe, expect, test, it } from "vitest";
import { field, id } from "@kaumlaut/pure/util";

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

  it("should return field value", () => {
    type Test = {
      a: number;
      b: string;
      c: null;
      d: {
        e: number;
      };
    };
    const object: Test = {
      a: 3,
      b: "bla",
      c: null,
      d: {
        e: 4,
      },
    };

    expect(field<Test>("a")(object)).toEqual(3);
    expect(field<Test>("b")(object)).toEqual("bla");
    expect(field<Test>("c")(object)).toEqual(null);
    expect(field<Test>("d")(object)).toEqual({
      e: 4,
    });
  });
});
