import { describe, expect, test, it } from "vitest";
import {
  coerceOptionalFieldsAsMaybe,
  coerceOptionalFieldsAsMaybeByGuard,
  field,
  id,
  left,
  right,
} from "@kaumlaut/pure/util";
import { just, nothing } from "../../dist/maybe";
import { isNumber, isString } from "../../dist/error-aware-guard";

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

  it("should return left", () => {
    expect(left(1)(2)).toEqual(1);
    expect(left(2)(1)).toEqual(2);
  });

  it("should return right", () => {
    expect(right(1)(2)).toEqual(2);
    expect(right(2)(1)).toEqual(1);
  });

  it("make optional fields maybe", () => {
    type MyTestType = {
      a: number;
      b: string;
    };
    expect(
      coerceOptionalFieldsAsMaybe<MyTestType>({}, ["a", "b"]),
    ).to.deep.equal({
      a: nothing(),
      b: nothing(),
    });
    expect(
      coerceOptionalFieldsAsMaybe<MyTestType>({ a: 3 }, ["a", "b"]),
    ).to.deep.equal({
      a: just(3),
      b: nothing(),
    });
    expect(
      coerceOptionalFieldsAsMaybe<MyTestType>({ a: undefined }, ["a", "b"]),
    ).to.deep.equal({
      a: nothing(),
      b: nothing(),
    });
    expect(
      coerceOptionalFieldsAsMaybeByGuard<MyTestType>(
        { a: 1 },
        { a: isNumber, b: isString },
      ),
    ).to.deep.equal({
      a: just(1),
      b: nothing(),
    });
    expect(
      coerceOptionalFieldsAsMaybeByGuard<MyTestType>(
        { a: "" },
        { a: isNumber, b: isString },
      ),
    ).to.deep.equal({
      a: nothing(),
      b: nothing(),
    });
  });
});
