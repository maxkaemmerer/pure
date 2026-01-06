import { describe, expect, it, beforeEach, vi } from "vitest";

import * as Guard from "@kaumlaut/pure/guard";

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
    describe("isObject", () => {
      it("should pass for object", () => {
        expect(Guard.isObject({ a: 3 })).toEqual(true);
      });
      it("should not pass for null", () => {
        expect(Guard.isObject(null)).toEqual(false);
      });
      it("should not pass for function", () => {
        expect(Guard.isObject(() => {})).toEqual(false);
      });
      it("should not pass for array", () => {
        expect(Guard.isObject([])).toEqual(false);
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
    describe("isEmptyList", () => {
      it("should check correctly", () => {
        expect(Guard.isEmptyList([])).toEqual(true);
        expect(Guard.isEmptyList([1])).toEqual(false);
        expect(Guard.isEmptyList(undefined)).toEqual(false);
        expect(Guard.isEmptyList({})).toEqual(false);
        expect(Guard.isEmptyList(1)).toEqual(false);
        expect(Guard.isEmptyList("abc")).toEqual(false);
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
});
