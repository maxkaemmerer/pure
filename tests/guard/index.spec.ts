import { describe, expect, it, beforeEach, vi } from "vitest";

import { Guard, ErrorAwareGuard } from "@kaumlaut/pure/guard";

beforeEach(() => {
  console.debug = vi.fn();
});

describe("guard", () => {
  describe("Guard", () => {
    describe("all", () => {
      it("should pass when all guards match", () => {
        expect(Guard.isAll([Guard.isNumber, Guard.isInt])(3)).toEqual(true);
      });
      it("should not pass when not all guards match", () => {
        expect(
          Guard.isAll([Guard.isString, Guard.isStringOfLength(3)])("a"),
        ).toEqual(false);
      });
      it("should not pass when no guards match", () => {
        expect(
          Guard.isAll([Guard.isString, Guard.isStringOfLength(3)])(3),
        ).toEqual(false);
      });
    });
    describe("isString", () => {
      it("should pass for string", () => {
        expect(Guard.isString("3")).toEqual(true);
      });
      it("should not pass for integer", () => {
        expect(Guard.isString(3)).toEqual(false);
      });
    });
    describe("isStringOfLength", () => {
      it("should pass for string with correct length", () => {
        expect(Guard.isStringOfLength(3)("123")).toEqual(true);
      });
      it("should not pass for shorter string", () => {
        expect(Guard.isStringOfLength(3)("12")).toEqual(false);
      });
      it("should not pass for longer string", () => {
        expect(Guard.isStringOfLength(3)("1234")).toEqual(false);
      });
      it("should not pass for non string", () => {
        expect(Guard.isStringOfLength(3)(123)).toEqual(false);
      });
    });
    describe("isNumber", () => {
      it("should pass for int", () => {
        expect(Guard.isNumber(123)).toEqual(true);
      });
      it("should pass for float", () => {
        expect(Guard.isNumber(123.321)).toEqual(true);
      });
      it("should not pass for string ", () => {
        expect(Guard.isNumber("123")).toEqual(false);
      });
    });

    describe("isInt", () => {
      it("should pass for int", () => {
        expect(Guard.isInt(123)).toEqual(true);
      });
      it("should not pass for string ", () => {
        expect(Guard.isInt("123")).toEqual(false);
      });
      it("should not pass for float", () => {
        expect(Guard.isInt(123.321)).toEqual(false);
      });
    });
    describe("isFloat", () => {
      it("should pass for float", () => {
        expect(Guard.isFloat(123.12)).toEqual(true);
      });
      it("should not pass for string ", () => {
        expect(Guard.isFloat("123")).toEqual(false);
      });
      it("should not pass for int", () => {
        expect(Guard.isFloat(123)).toEqual(false);
      });
    });
    describe("isObjectWithKey", () => {
      it("should pass for object that has key", () => {
        expect(Guard.isObjectWithKey("a")({ a: 3 })).toEqual(true);
      });
      it("should not pass for object without key ", () => {
        expect(Guard.isObjectWithKey("a")({})).toEqual(false);
      });
      it("should not pass for non object", () => {
        expect(Guard.isObjectWithKey("a")(123)).toEqual(false);
      });
    });
    describe("isObjectWithKeys", () => {
      it("should pass for object that has all keys", () => {
        expect(Guard.isObjectWithKeys(["a", "b"])({ a: 3, b: 5 })).toEqual(
          true,
        );
      });
      it("should not pass for object with some of the keys", () => {
        expect(Guard.isObjectWithKeys(["a", "b"])({ a: 3 })).toEqual(false);
      });
      it("should not pass for object without key", () => {
        expect(Guard.isObjectWithKeys(["a"])({})).toEqual(false);
      });
      it("should not pass for non object", () => {
        expect(Guard.isObjectWithKeys(["a"])(123)).toEqual(false);
      });
    });
    describe("isObjectWithKeysMatchingGuard", () => {
      it("should pass for object that has all keys matching", () => {
        expect(
          Guard.isObjectWithKeysMatchingGuard({
            a: Guard.isInt,
            b: Guard.isInt,
          })({ a: 3, b: 5 }),
        ).toEqual(true);
      });
      it("should not pass for object with some of the keys matching", () => {
        expect(
          Guard.isObjectWithKeysMatchingGuard({
            a: Guard.isInt,
            b: Guard.isInt,
          })({ a: 3, b: "5" }),
        ).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          1,
          "Guard not matched for object. Value of key b did not pass the guard.",
        );
      });
      it("should not pass for object with not all keys present", () => {
        expect(
          Guard.isObjectWithKeysMatchingGuard({
            a: Guard.isInt,
            b: Guard.isInt,
          })({ a: 3 }),
        ).toEqual(false);
      });
      it("should not pass for object without key", () => {
        expect(
          Guard.isObjectWithKeysMatchingGuard({
            a: Guard.isInt,
            b: Guard.isInt,
          })({}),
        ).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          1,
          "Guard not matched for object. Value of key a did not pass the guard.",
        );
        expect(console.debug).toHaveBeenNthCalledWith(
          2,
          "Guard not matched for object. Value of key b did not pass the guard.",
        );
      });
      it("should not pass for non object", () => {
        expect(
          Guard.isObjectWithKeysMatchingGuard({ a: Guard.isInt })(123),
        ).toEqual(false);
      });
    });
    describe("isExactString", () => {
      it("should pass for exact string", () => {
        expect(Guard.isExactString("a")("a")).toEqual(true);
      });
      it("should not pass for other string", () => {
        expect(Guard.isExactString("b")("a")).toEqual(false);
      });
      it("should not pass for other type", () => {
        expect(Guard.isExactString("a")({})).toEqual(false);
      });
    });
    describe("isOneStringOf", () => {
      it("should pass for exact string", () => {
        expect(Guard.isOneStringOf(["a"])("a")).toEqual(true);
        expect(Guard.isOneStringOf(["b", "a"])("a")).toEqual(true);
      });
      it("should not pass for other string", () => {
        expect(Guard.isOneStringOf(["b"])("a")).toEqual(false);
      });
      it("should not pass for other type", () => {
        expect(Guard.isOneStringOf(["b"])({})).toEqual(false);
      });
    });
    describe("always", () => {
      it("should always be true", () => {
        expect(Guard.isAlways(1)).toEqual(true);
        expect(Guard.isAlways(false)).toEqual(true);
        expect(Guard.isAlways(null)).toEqual(true);
        expect(Guard.isAlways(undefined)).toEqual(true);
        expect(Guard.isAlways("")).toEqual(true);
      });
    });
    describe("never", () => {
      it("should always be false", () => {
        expect(Guard.isNever(1)).toEqual(false);
        expect(Guard.isNever(false)).toEqual(false);
        expect(Guard.isNever(null)).toEqual(false);
        expect(Guard.isNever(undefined)).toEqual(false);
        expect(Guard.isNever("")).toEqual(false);
      });
    });
    describe("isBool", () => {
      it("should check for bool", () => {
        expect(Guard.isBool(1)).toEqual(false);
        expect(Guard.isBool(false)).toEqual(true);
        expect(Guard.isBool(true)).toEqual(true);
      });
    });
    describe("isNull", () => {
      it("should check for null", () => {
        expect(Guard.isNull(1)).toEqual(false);
        expect(Guard.isNull(null)).toEqual(true);
      });
    });
    describe("isNullOr", () => {
      it("should check for null or other", () => {
        expect(Guard.isNullOr(Guard.isString)(null)).toEqual(true);
        expect(Guard.isNullOr(Guard.isString)("a-string")).toEqual(true);
        expect(Guard.isNullOr(Guard.isString)(3)).toEqual(false);
      });
    });
    describe("isListOf", () => {
      it("should check for list of type", () => {
        expect(Guard.isListOf(Guard.isString)(["A", "B"])).toEqual(true);
        expect(Guard.isListOf(Guard.isString)([1, 2])).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          1,
          `Guard not matched for item 0 of list.`,
        );
        expect(console.debug).toHaveBeenNthCalledWith(
          2,
          `Guard not matched for item 1 of list.`,
        );
        expect(Guard.isListOf(Guard.isString)([])).toEqual(true);
        expect(Guard.isListOf(Guard.isString)([1, "A"])).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          3,
          `Guard not matched for item 0 of list.`,
        );
      });
    });
    describe("oneOf", () => {
      it("should check for one of", () => {
        expect(Guard.isOneOf(Guard.isString, Guard.isInt)(1)).toEqual(true);
        expect(Guard.isOneOf(Guard.isString, Guard.isInt)("11")).toEqual(true);
        expect(
          Guard.isOneOf(Guard.isString, Guard.isStringOfLength(3))("123"),
        ).toEqual(true);
        expect(Guard.isOneOf(Guard.isString, Guard.isInt)(null)).toEqual(false);
      });
    });
    describe("isStringWithPattern", () => {
      it("should check for pattern", () => {
        expect(Guard.isStringWithPattern(/\d/)(1)).toEqual(false);
        expect(Guard.isStringWithPattern(/\d/)("1")).toEqual(true);
        expect(Guard.isStringWithPattern(/\d/)("a")).toEqual(false);
      });
    });
    describe("isObjectWithAllKeysMatchingGuard", () => {
      it("should check for all keys of object", () => {
        expect(
          Guard.isObjectWithAllKeysMatchingGuard(Guard.isString)({
            a: 3,
            b: "d",
          }),
        ).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          1,
          `Guard not matched for object. Value of key a did not pass the guard.`,
        );
        expect(
          Guard.isObjectWithAllKeysMatchingGuard(Guard.isString)({
            a: "d",
            b: "d",
          }),
        ).toEqual(true);
        expect(
          Guard.isObjectWithAllKeysMatchingGuard(Guard.isString)({
            a: 3,
            b: null,
          }),
        ).toEqual(false);
        expect(console.debug).toHaveBeenNthCalledWith(
          2,
          `Guard not matched for object. Value of key a did not pass the guard.`,
        );
        expect(console.debug).toHaveBeenNthCalledWith(
          3,
          `Guard not matched for object. Value of key b did not pass the guard.`,
        );
      });
    });
    describe("isNonEmptyList", () => {
      it("should check for non empty list", () => {
        expect(Guard.isNonEmptyListOf(Guard.isString)([])).toEqual(false);
        expect(Guard.isNonEmptyListOf(Guard.isString)([3])).toEqual(false);
        expect(Guard.isNonEmptyListOf(Guard.isString)(["a-string"])).toEqual(
          true,
        );
      });
    });
    describe("isUndefined", () => {
      it("should check for undefined", () => {
        expect(Guard.isUndefined(3)).toEqual(false);
        expect(Guard.isUndefined("a-string")).toEqual(false);
        expect(Guard.isUndefined(null)).toEqual(false);
        expect(Guard.isUndefined(undefined)).toEqual(true);
      });
    });
    describe("isNumberBetweenInclusive", () => {
      it("should check for number between min and max inclusive", () => {
        expect(Guard.isNumberBetweenInclusive(1, 6)(1)).toEqual(true);
        expect(Guard.isNumberBetweenInclusive(1, 6)(6)).toEqual(true);
        expect(Guard.isNumberBetweenInclusive(1, 6)(3)).toEqual(true);
        expect(Guard.isNumberBetweenInclusive(1, 6)(0)).toEqual(false);
        expect(Guard.isNumberBetweenInclusive(1, 6)(7)).toEqual(false);
      });
    });
  });

  describe("ErrorAwareGuard", () => {
    describe("all", () => {
      it("should pass when all guards match", () => {
        const result = ErrorAwareGuard.isAll([
          ErrorAwareGuard.isNumber,
          ErrorAwareGuard.isInt,
        ])(3);
        expect(result.success).toEqual(true);
        expect(result.value).toEqual(3);
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass when not all guards match", () => {
        const result = ErrorAwareGuard.isAll([
          ErrorAwareGuard.isString,
          ErrorAwareGuard.isStringOfLength(3),
        ])("a");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual([
          "String length was 1 instead of expected 3",
        ]);
      });
      it("should not pass when no guards match", () => {
        const result = ErrorAwareGuard.isAll([
          ErrorAwareGuard.isString,
          ErrorAwareGuard.isStringOfLength(3),
        ])(3);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a string", "Not a string"]);
      });
    });
    describe("isString", () => {
      it("should pass for string", () => {
        const result = ErrorAwareGuard.isString("3");
        expect(result.success).toEqual(true);
        expect(result.value).toEqual("3");
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for integer", () => {
        const result = ErrorAwareGuard.isString(3);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a string"]);
      });
    });
    describe("isStringOfLength", () => {
      it("should pass for string with correct length", () => {
        const result = ErrorAwareGuard.isStringOfLength(3)("123");
        expect(result.success).toEqual(true);
        expect(result.value).toEqual("123");
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for shorter string", () => {
        const result = ErrorAwareGuard.isStringOfLength(3)("12");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual([
          "String length was 2 instead of expected 3",
        ]);
      });
      it("should not pass for longer string", () => {
        const result = ErrorAwareGuard.isStringOfLength(3)("1234");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual([
          "String length was 4 instead of expected 3",
        ]);
      });
      it("should not pass for non string", () => {
        const result = ErrorAwareGuard.isStringOfLength(3)(123);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a string"]);
      });
    });
    describe("isNumber", () => {
      it("should pass for int", () => {
        const result = ErrorAwareGuard.isNumber(123);
        expect(result.success).toEqual(true);
        expect(result.value).toEqual(123);
        expect(result.errors).toEqual(undefined);
      });
      it("should pass for float", () => {
        const result = ErrorAwareGuard.isNumber(123.321);
        expect(result.success).toEqual(true);
        expect(result.value).toEqual(123.321);
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for string ", () => {
        const result = ErrorAwareGuard.isNumber("123");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a number"]);
      });
    });

    describe("isInt", () => {
      it("should pass for int", () => {
        const result = ErrorAwareGuard.isInt(123);
        expect(result.success).toEqual(true);
        expect(result.value).toEqual(123);
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for string ", () => {
        const result = ErrorAwareGuard.isInt("123");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not an integer"]);
      });
      it("should not pass for float", () => {
        const result = ErrorAwareGuard.isInt(123.321);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not an integer"]);
      });
    });
    describe("isFloat", () => {
      it("should pass for float", () => {
        const result = ErrorAwareGuard.isFloat(123.12);
        expect(result.success).toEqual(true);
        expect(result.value).toEqual(123.12);
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for string ", () => {
        const result = ErrorAwareGuard.isFloat("123");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a floating point number"]);
      });
      it("should not pass for int", () => {
        const result = ErrorAwareGuard.isFloat(123);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a floating point number"]);
      });
    });
    describe("isObjectWithKey", () => {
      it("should pass for object that has key", () => {
        const result = ErrorAwareGuard.isObjectWithKey<{ a: number }, "a">("a")(
          { a: 3 },
        );
        expect(result.success).toEqual(true);
        expect(result.value).toEqual({ a: 3 });
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for object without key ", () => {
        const result = ErrorAwareGuard.isObjectWithKey<{ a: number }, "a">("a")(
          {},
        );
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Object does not have key a"]);
      });
      it("should not pass for non object", () => {
        const result = ErrorAwareGuard.isObjectWithKey<{ a: number }, "a">("a")(
          123,
        );
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not an object"]);
      });
    });
    describe("isObjectWithKeys", () => {
      it("should pass for object that has all keys", () => {
        const result = ErrorAwareGuard.isObjectWithKeys<
          { a: number; b: number },
          "a" | "b"
        >(["a", "b"])({ a: 3, b: 5 });
        expect(result.success).toEqual(true);
        expect(result.value).toEqual({ a: 3, b: 5 });
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for object with some of the keys", () => {
        const result = ErrorAwareGuard.isObjectWithKeys<
          { a: number; b: number },
          "a" | "b"
        >(["a", "b"])({ a: 3 });
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Object does not have key b"]);
      });
      it("should not pass for object without key", () => {
        const result = ErrorAwareGuard.isObjectWithKeys<
          { a: number; b: number },
          "a"
        >(["a"])({});
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Object does not have key a"]);
      });
      it("should not pass for non object", () => {
        const result = ErrorAwareGuard.isObjectWithKeys<
          { a: number; b: number },
          "a"
        >(["a"])(123);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not an object"]);
      });
    });
    describe("isObjectWithKeysMatchingGuard", () => {
      it("should pass for object that has all keys matching", () => {
        const result = ErrorAwareGuard.isObjectWithKeysMatchingGuard({
          a: ErrorAwareGuard.isInt,
          b: ErrorAwareGuard.isInt,
        })({ a: 3, b: 5 });
        expect(result.success).toEqual(true);
        expect(result.value).toEqual({ a: 3, b: 5 });
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for object with some of the keys matching", () => {
        const result = ErrorAwareGuard.isObjectWithKeysMatchingGuard({
          a: ErrorAwareGuard.isInt,
          b: ErrorAwareGuard.isInt,
        })({ a: 3, b: "5" });
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual([
          "Key b of object did not pass guard (Not an integer)",
        ]);
      });
      it("should not pass for object with not all keys present", () => {
        const result = ErrorAwareGuard.isObjectWithKeysMatchingGuard({
          a: ErrorAwareGuard.isInt,
          b: ErrorAwareGuard.isInt,
        })({ a: 3 });
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Object does not have key b"]);
      });
      it("should not pass for object without key", () => {
        const result = ErrorAwareGuard.isObjectWithKeysMatchingGuard({
          a: ErrorAwareGuard.isInt,
          b: ErrorAwareGuard.isInt,
        })({});
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual([
          "Object does not have key a",
          "Object does not have key b",
        ]);
      });
      it("should not pass for non object", () => {
        const result = ErrorAwareGuard.isObjectWithKeysMatchingGuard({
          a: ErrorAwareGuard.isInt,
        })(123);
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not an object"]);
      });
    });
    describe("isExactString", () => {
      it("should pass for exact string", () => {
        const result = ErrorAwareGuard.isExactString("a")("a");
        expect(result.success).toEqual(true);
        expect(result.value).toEqual("a");
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for other string", () => {
        const result = ErrorAwareGuard.isExactString("b")("a");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(['Not the exact string "b"']);
      });
      it("should not pass for other type", () => {
        const result = ErrorAwareGuard.isExactString("b")({});
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a string"]);
      });
    });
    describe("isOneStringOf", () => {
      it("should pass for exact string", () => {
        const result = ErrorAwareGuard.isOneStringOf(["a"])("a");
        expect(result.success).toEqual(true);
        expect(result.value).toEqual("a");
        expect(result.errors).toEqual(undefined);
      });
      it("should not pass for other string", () => {
        const result = ErrorAwareGuard.isOneStringOf(["b"])("a");
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["String a is not one of b"]);
      });
      it("should not pass for other type", () => {
        const result = ErrorAwareGuard.isOneStringOf(["b"])({});
        expect(result.success).toEqual(false);
        expect(result.value).toEqual(undefined);
        expect(result.errors).toEqual(["Not a string"]);
      });
    });
    describe("always", () => {
      it("should always be true", () => {
        expect(ErrorAwareGuard.isAlways(1).success).toEqual(true);
        expect(ErrorAwareGuard.isAlways(false).success).toEqual(true);
        expect(ErrorAwareGuard.isAlways(null).success).toEqual(true);
        expect(ErrorAwareGuard.isAlways(undefined).success).toEqual(true);
        expect(ErrorAwareGuard.isAlways("").success).toEqual(true);
        expect(ErrorAwareGuard.isAlways("").value).toEqual("");
        expect(ErrorAwareGuard.isAlways("").errors).toEqual(undefined);
      });
    });
    describe("never", () => {
      it("should always be false", () => {
        expect(ErrorAwareGuard.isNever(1).success).toEqual(false);
        expect(ErrorAwareGuard.isNever(false).success).toEqual(false);
        expect(ErrorAwareGuard.isNever(null).success).toEqual(false);
        expect(ErrorAwareGuard.isNever(undefined).success).toEqual(false);
        expect(ErrorAwareGuard.isNever("").success).toEqual(false);
        expect(ErrorAwareGuard.isNever("").value).toEqual(undefined);
        expect(ErrorAwareGuard.isNever("").errors).toEqual(["Never passes"]);
      });
    });
    describe("isBool", () => {
      it("should check for bool", () => {
        const resultA = ErrorAwareGuard.isBool(1);
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual(["Not a boolean"]);
        const resultB = ErrorAwareGuard.isBool(false);
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual(false);
        expect(resultB.errors).toEqual(undefined);
        const resultC = ErrorAwareGuard.isBool(true);
        expect(resultC.success).toEqual(true);
        expect(resultC.value).toEqual(true);
        expect(resultC.errors).toEqual(undefined);
      });
    });
    describe("isNull", () => {
      it("should check for null", () => {
        const resultA = ErrorAwareGuard.isNull(1);
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual(["Not null"]);

        const resultB = ErrorAwareGuard.isNull(null);
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual(null);
        expect(resultB.errors).toEqual(undefined);
      });
    });
    describe("isNullOr", () => {
      it("should check for null or other", () => {
        const resultA = ErrorAwareGuard.isNullOr(ErrorAwareGuard.isString)(
          null,
        );
        expect(resultA.success).toEqual(true);
        expect(resultA.value).toEqual(null);
        expect(resultA.errors).toEqual(undefined);

        const resultB = ErrorAwareGuard.isNullOr(ErrorAwareGuard.isString)(
          "string",
        );
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual("string");
        expect(resultB.errors).toEqual(undefined);

        const resultC = ErrorAwareGuard.isNullOr(ErrorAwareGuard.isString)(3);
        expect(resultC.success).toEqual(false);
        expect(resultC.value).toEqual(undefined);
        expect(resultC.errors).toEqual([
          "Neither A nor B passed",
          "A (Not null)",
          "B (Not a string)",
        ]);
      });
    });
    describe("isListOf", () => {
      it("should check for list of type", () => {
        const resultA = ErrorAwareGuard.isListOf(ErrorAwareGuard.isString)([
          "A",
          "B",
        ]);
        expect(resultA.success).toEqual(true);
        expect(resultA.value).toEqual(["A", "B"]);
        expect(resultA.errors).toEqual(undefined);

        const resultB = ErrorAwareGuard.isListOf(ErrorAwareGuard.isString)([
          1, 2,
        ]);
        expect(resultB.success).toEqual(false);
        expect(resultB.value).toEqual(undefined);
        expect(resultB.errors).toEqual([
          "Not all items passed the Guard",
          "Item with index 0 failed with (Not a string)",
          "Item with index 1 failed with (Not a string)",
        ]);

        const resultC = ErrorAwareGuard.isListOf(ErrorAwareGuard.isString)([]);
        expect(resultC.success).toEqual(true);
        expect(resultC.value).toEqual([]);
        expect(resultC.errors).toEqual(undefined);
      });
    });
    describe("oneOf", () => {
      it("should check for one of", () => {
        const resultA = ErrorAwareGuard.isOneOf(
          ErrorAwareGuard.isString,
          ErrorAwareGuard.isInt,
        )(1);
        expect(resultA.success).toEqual(true);
        expect(resultA.value).toEqual(1);
        expect(resultA.errors).toEqual(undefined);

        const resultB = ErrorAwareGuard.isOneOf(
          ErrorAwareGuard.isString,
          ErrorAwareGuard.isStringOfLength(3),
        )("123");
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual("123");
        expect(resultB.errors).toEqual(undefined);

        const resultC = ErrorAwareGuard.isOneOf(
          ErrorAwareGuard.isString,
          ErrorAwareGuard.isInt,
        )(null);
        expect(resultC.success).toEqual(false);
        expect(resultC.value).toEqual(undefined);
        expect(resultC.errors).toEqual([
          "Neither A nor B passed",
          "A (Not a string)",
          "B (Not an integer)",
        ]);
      });
    });
    describe("isStringWithPattern", () => {
      it("should check for pattern", () => {
        const resultA = ErrorAwareGuard.isStringWithPattern(/\d/)("1");
        expect(resultA.success).toEqual(true);
        expect(resultA.value).toEqual("1");
        expect(resultA.errors).toEqual(undefined);

        const resultB = ErrorAwareGuard.isStringWithPattern(/\d/)(1);
        expect(resultB.success).toEqual(false);
        expect(resultB.value).toEqual(undefined);
        expect(resultB.errors).toEqual(["Not a string"]);

        const resultC = ErrorAwareGuard.isStringWithPattern(/\d/)("a");
        expect(resultC.success).toEqual(false);
        expect(resultC.value).toEqual(undefined);
        expect(resultC.errors).toEqual(["String a did not match pattern \\d"]);
      });
    });
    describe("isObjectWithAllKeysMatchingGuard", () => {
      it("should check for all keys of object", () => {
        const resultA = ErrorAwareGuard.isObjectWithAllKeysMatchingGuard(
          ErrorAwareGuard.isString,
        )({
          a: 3,
          b: "d",
        });
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual([
          "Key a of object did not pass guard (Not a string)",
        ]);

        const resultB = ErrorAwareGuard.isObjectWithAllKeysMatchingGuard(
          ErrorAwareGuard.isString,
        )({
          a: 3,
          b: null,
        });
        expect(resultB.success).toEqual(false);
        expect(resultB.value).toEqual(undefined);
        expect(resultB.errors).toEqual([
          "Key a of object did not pass guard (Not a string)",
          "Key b of object did not pass guard (Not a string)",
        ]);

        const resultC = ErrorAwareGuard.isObjectWithAllKeysMatchingGuard(
          ErrorAwareGuard.isString,
        )({
          a: "d",
          b: "d",
        });
        expect(resultC.success).toEqual(true);
        expect(resultC.value).toEqual({
          a: "d",
          b: "d",
        });
        expect(resultC.errors).toEqual(undefined);
      });
    });
    describe("isNonEmptyList", () => {
      it("should check for non empty list", () => {
        const resultA = ErrorAwareGuard.isNonEmptyListOf(
          ErrorAwareGuard.isString,
        )([]);
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual(["Not enough items"]);

        const resultB = ErrorAwareGuard.isNonEmptyListOf(
          ErrorAwareGuard.isString,
        )([3]);
        expect(resultB.success).toEqual(false);
        expect(resultB.value).toEqual(undefined);
        expect(resultB.errors).toEqual([
          "Not all items passed the Guard",
          "Item with index 0 failed with (Not a string)",
        ]);

        const resultC = ErrorAwareGuard.isNonEmptyListOf(
          ErrorAwareGuard.isString,
        )(["3"]);
        expect(resultC.success).toEqual(true);
        expect(resultC.value).toEqual(["3"]);
        expect(resultC.errors).toEqual(undefined);
      });
    });
    describe("isUndefined", () => {
      it("should check for undefined", () => {
        const resultA = ErrorAwareGuard.isUndefined(3);
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual(["Not undefined"]);

        const resultB = ErrorAwareGuard.isUndefined(undefined);
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual(undefined);
        expect(resultB.errors).toEqual(undefined);
      });
    });
    describe("isNumberBetweenInclusive", () => {
      it("should check for number between min and max inclusive", () => {
        const resultA = ErrorAwareGuard.isNumberBetweenInclusive(1, 6)(1);
        expect(resultA.success).toEqual(true);
        expect(resultA.value).toEqual(1);
        expect(resultA.errors).toEqual(undefined);

        const resultB = ErrorAwareGuard.isNumberBetweenInclusive(1, 6)(6);
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual(6);
        expect(resultB.errors).toEqual(undefined);

        const resultC = ErrorAwareGuard.isNumberBetweenInclusive(1, 6)(3);
        expect(resultC.success).toEqual(true);
        expect(resultC.value).toEqual(3);
        expect(resultC.errors).toEqual(undefined);

        const resultD = ErrorAwareGuard.isNumberBetweenInclusive(1, 6)(0);
        expect(resultD.success).toEqual(false);
        expect(resultD.value).toEqual(undefined);
        expect(resultD.errors).toEqual([
          "0 is not between 1 and 6 (inclusively)",
        ]);

        const resultE = ErrorAwareGuard.isNumberBetweenInclusive(1, 6)(7);
        expect(resultE.success).toEqual(false);
        expect(resultE.value).toEqual(undefined);
        expect(resultE.errors).toEqual([
          "7 is not between 1 and 6 (inclusively)",
        ]);
      });
    });
    describe("isNonEmptyString", () => {
      it("should check for non empty string", () => {
        const resultA = ErrorAwareGuard.isNonEmptyString("");
        expect(resultA.success).toEqual(false);
        expect(resultA.value).toEqual(undefined);
        expect(resultA.errors).toEqual(["Is empty"]);

        const resultB = ErrorAwareGuard.isNonEmptyString("123");
        expect(resultB.success).toEqual(true);
        expect(resultB.value).toEqual("123");
        expect(resultB.errors).toEqual(undefined);
      });
    });
  });
});
