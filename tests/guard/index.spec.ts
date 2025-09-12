import { describe, expect, it, beforeEach, vi } from "vitest";
import {
  isAll,
  isAlways,
  isBool,
  isExactString,
  isFloat,
  isInt,
  isListOf,
  isNull,
  isNumber,
  isObjectWithAllKeysMatchingGuard,
  isObjectWithKey,
  isObjectWithKeys,
  isObjectWithKeysMatchingGuard,
  isOneStringOf,
  isString,
  isStringOfLength,
  isStringWithPattern,
  isNever,
  isOneOf,
  isNullOr,
  isNonEmptyListOf,
  isUndefined,
  isNumberBetweenInclusive,
} from "../../src/guard";

beforeEach(() => {
  console.debug = vi.fn();
});

describe("guard", () => {
  describe("all", () => {
    it("should pass when all guards match", () => {
      expect(isAll([isNumber, isInt])(3)).toEqual(true);
    });
    it("should not pass when not all guards match", () => {
      expect(isAll([isString, isStringOfLength(3)])("a")).toEqual(false);
    });
    it("should not pass when no guards match", () => {
      expect(isAll([isString, isStringOfLength(3)])(3)).toEqual(false);
    });
  });
  describe("isString", () => {
    it("should pass for string", () => {
      expect(isString("3")).toEqual(true);
    });
    it("should not pass for integer", () => {
      expect(isString(3)).toEqual(false);
    });
  });
  describe("isStringOfLength", () => {
    it("should pass for string with correct length", () => {
      expect(isStringOfLength(3)("123")).toEqual(true);
    });
    it("should not pass for shorter string", () => {
      expect(isStringOfLength(3)("12")).toEqual(false);
    });
    it("should not pass for longer string", () => {
      expect(isStringOfLength(3)("1234")).toEqual(false);
    });
    it("should not pass for non string", () => {
      expect(isStringOfLength(3)(123)).toEqual(false);
    });
  });
  describe("isNumber", () => {
    it("should pass for int", () => {
      expect(isNumber(123)).toEqual(true);
    });
    it("should pass for float", () => {
      expect(isNumber(123.321)).toEqual(true);
    });
    it("should not pass for string ", () => {
      expect(isNumber("123")).toEqual(false);
    });
  });

  describe("isInt", () => {
    it("should pass for int", () => {
      expect(isInt(123)).toEqual(true);
    });
    it("should not pass for string ", () => {
      expect(isInt("123")).toEqual(false);
    });
    it("should not pass for float", () => {
      expect(isInt(123.321)).toEqual(false);
    });
  });
  describe("isFloat", () => {
    it("should pass for float", () => {
      expect(isFloat(123.12)).toEqual(true);
    });
    it("should not pass for string ", () => {
      expect(isFloat("123")).toEqual(false);
    });
    it("should not pass for int", () => {
      expect(isFloat(123)).toEqual(false);
    });
  });
  describe("isObjectWithKey", () => {
    it("should pass for object that has key", () => {
      expect(isObjectWithKey("a")({ a: 3 })).toEqual(true);
    });
    it("should not pass for object without key ", () => {
      expect(isObjectWithKey("a")({})).toEqual(false);
    });
    it("should not pass for non object", () => {
      expect(isObjectWithKey("a")(123)).toEqual(false);
    });
  });
  describe("isObjectWithKeys", () => {
    it("should pass for object that has all keys", () => {
      expect(isObjectWithKeys(["a", "b"])({ a: 3, b: 5 })).toEqual(true);
    });
    it("should not pass for object with some of the keys", () => {
      expect(isObjectWithKeys(["a", "b"])({ a: 3 })).toEqual(false);
    });
    it("should not pass for object without key", () => {
      expect(isObjectWithKeys(["a"])({})).toEqual(false);
    });
    it("should not pass for non object", () => {
      expect(isObjectWithKeys(["a"])(123)).toEqual(false);
    });
  });
  describe("isObjectWithKeysMatchingGuard", () => {
    it("should pass for object that has all keys matching", () => {
      expect(
        isObjectWithKeysMatchingGuard({ a: isInt, b: isInt })({ a: 3, b: 5 }),
      ).toEqual(true);
    });
    it("should not pass for object with some of the keys matching", () => {
      expect(
        isObjectWithKeysMatchingGuard({ a: isInt, b: isInt })({ a: 3, b: "5" }),
      ).toEqual(false);
      expect(console.debug).toHaveBeenNthCalledWith(
        1,
        "Guard not matched for object. Value of key b did not pass the guard.",
      );
    });
    it("should not pass for object with not all keys present", () => {
      expect(
        isObjectWithKeysMatchingGuard({ a: isInt, b: isInt })({ a: 3 }),
      ).toEqual(false);
    });
    it("should not pass for object without key", () => {
      expect(isObjectWithKeysMatchingGuard({ a: isInt, b: isInt })({})).toEqual(
        false,
      );
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
      expect(isObjectWithKeysMatchingGuard({ a: isInt })(123)).toEqual(false);
    });
  });
  describe("isExactString", () => {
    it("should pass for exact string", () => {
      expect(isExactString("a")("a")).toEqual(true);
    });
    it("should not pass for other string", () => {
      expect(isExactString("b")("a")).toEqual(false);
    });
    it("should not pass for other type", () => {
      expect(isExactString("a")({})).toEqual(false);
    });
  });
  describe("isOneStringOf", () => {
    it("should pass for exact string", () => {
      expect(isOneStringOf(["a"])("a")).toEqual(true);
      expect(isOneStringOf(["b", "a"])("a")).toEqual(true);
    });
    it("should not pass for other string", () => {
      expect(isOneStringOf(["b"])("a")).toEqual(false);
    });
    it("should not pass for other type", () => {
      expect(isOneStringOf(["b"])({})).toEqual(false);
    });
  });
  describe("always", () => {
    it("should always be true", () => {
      expect(isAlways(1)).toEqual(true);
      expect(isAlways(false)).toEqual(true);
      expect(isAlways(null)).toEqual(true);
      expect(isAlways(undefined)).toEqual(true);
      expect(isAlways("")).toEqual(true);
    });
  });
  describe("never", () => {
    it("should always be true", () => {
      expect(isNever(1)).toEqual(false);
      expect(isNever(false)).toEqual(false);
      expect(isNever(null)).toEqual(false);
      expect(isNever(undefined)).toEqual(false);
      expect(isNever("")).toEqual(false);
    });
  });
  describe("isBool", () => {
    it("should check for bool", () => {
      expect(isBool(1)).toEqual(false);
      expect(isBool(false)).toEqual(true);
      expect(isBool(true)).toEqual(true);
    });
  });
  describe("isNull", () => {
    it("should check for null", () => {
      expect(isNull(1)).toEqual(false);
      expect(isNull(null)).toEqual(true);
    });
  });
  describe("isNullOr", () => {
    it("should check for null or other", () => {
      expect(isNullOr(isString)(null)).toEqual(true);
      expect(isNullOr(isString)("a-string")).toEqual(true);
      expect(isNullOr(isString)(3)).toEqual(false);
    });
  });
  describe("isListOf", () => {
    it("should check for list of type", () => {
      expect(isListOf(isString)(["A", "B"])).toEqual(true);
      expect(isListOf(isString)([1, 2])).toEqual(false);
      expect(console.debug).toHaveBeenNthCalledWith(
        1,
        `Guard not matched for item 0 of list.`,
      );
      expect(console.debug).toHaveBeenNthCalledWith(
        2,
        `Guard not matched for item 1 of list.`,
      );
      expect(isListOf(isString)([])).toEqual(true);
      expect(isListOf(isString)([1, "A"])).toEqual(false);
      expect(console.debug).toHaveBeenNthCalledWith(
        3,
        `Guard not matched for item 0 of list.`,
      );
    });
  });
  describe("oneOf", () => {
    it("should check for one of", () => {
      expect(isOneOf(isString, isInt)(1)).toEqual(true);
      expect(isOneOf(isString, isInt)("11")).toEqual(true);
      expect(isOneOf(isString, isStringOfLength(3))("123")).toEqual(true);
      expect(isOneOf(isString, isInt)(null)).toEqual(false);
    });
  });
  describe("isStringWithPattern", () => {
    it("should check for pattern", () => {
      expect(isStringWithPattern(/\d/)(1)).toEqual(false);
      expect(isStringWithPattern(/\d/)("1")).toEqual(true);
      expect(isStringWithPattern(/\d/)("a")).toEqual(false);
    });
  });
  describe("isObjectWithAllKeysMatchingGuard", () => {
    it("should check for all keys of object", () => {
      expect(
        isObjectWithAllKeysMatchingGuard(isString)({
          a: 3,
          b: "d",
        }),
      ).toEqual(false);
      expect(console.debug).toHaveBeenNthCalledWith(
        1,
        `Guard not matched for object. Value of key a did not pass the guard.`,
      );
      expect(
        isObjectWithAllKeysMatchingGuard(isString)({
          a: "d",
          b: "d",
        }),
      ).toEqual(true);
      expect(
        isObjectWithAllKeysMatchingGuard(isString)({
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
      expect(isNonEmptyListOf(isString)([])).toEqual(false);
      expect(isNonEmptyListOf(isString)([3])).toEqual(false);
      expect(isNonEmptyListOf(isString)(["a-string"])).toEqual(true);
    });
  });
  describe("isUndefined", () => {
    it("should check for undefined", () => {
      expect(isUndefined(3)).toEqual(false);
      expect(isUndefined("a-string")).toEqual(false);
      expect(isUndefined(null)).toEqual(false);
      expect(isUndefined(undefined)).toEqual(true);
    });
  });
  describe("isNumberBetweenInclusive", () => {
    it("should check for number between min and max inclusive", () => {
      expect(isNumberBetweenInclusive(1, 6)(1)).toEqual(true);
      expect(isNumberBetweenInclusive(1, 6)(6)).toEqual(true);
      expect(isNumberBetweenInclusive(1, 6)(3)).toEqual(true);
      expect(isNumberBetweenInclusive(1, 6)(0)).toEqual(false);
      expect(isNumberBetweenInclusive(1, 6)(7)).toEqual(false);
    });
  });
});
