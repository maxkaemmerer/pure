import { describe, expect, it, test } from "vitest";
import { clone } from "@kaumlaut/pure/clone";

describe("clone", () => {
  it("should clone recursively", () => {
    const objectValue = {
      nested: {
        a: 1,
      },
      b: [2],
      c: "3",
    };
    expect(clone(objectValue)).not.toBe(objectValue);
    expect(clone(objectValue.nested)).not.toBe(objectValue.nested);
    expect(clone(objectValue.b)).not.toBe(objectValue.b);
    expect(clone(objectValue)).toEqual(objectValue);
  });

  it("should clone objects", () => {
    const objectValue = {
      a: 1,
      b: 2,
      c: "3",
    };
    expect(clone(objectValue)).not.toBe(objectValue);
    expect(clone(objectValue)).toEqual(objectValue);
  });

  it("should clone arrays", () => {
    const arrayValue = [3, 2, 1];
    expect(clone(arrayValue)).not.toBe(arrayValue);
    expect(clone(arrayValue)).toEqual(arrayValue);
  });

  test.each(["a-string", 3, true, null])(
    "should just return primitives",
    (value) => {
      expect(clone(value)).toEqual(value);
      expect(clone(value)).toBe(value);
    },
  );
});
