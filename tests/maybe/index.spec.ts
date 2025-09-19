import { describe, it, expect, vi } from "vitest";
import {
  filter,
  isJust,
  isMaybe,
  isNothing,
  just,
  map,
  mapToMaybe,
  maybeByErrorAwareGuard,
  maybeByGuard,
  nothing,
  toResult,
  tryMap,
  withDefault,
  concat,
} from "@kaumlaut/pure/maybe";
import * as Guard from "@kaumlaut/pure/guard";
import * as ErrorAwareGuard from "@kaumlaut/pure/error-aware-guard";

describe("maybe", () => {
  describe("nothing", () => {
    it("should create nothing", () => {
      const nothingValue = nothing();
      expect(nothingValue.type).toEqual("maybe-nothing");
      expect(isNothing(nothingValue)).toEqual(true);
      expect(isJust(nothingValue)).toEqual(false);
      expect(isMaybe(nothingValue)).toEqual(true);
      expect(withDefault(3)(nothingValue)).toEqual(3);
      expect(map(() => 3)(nothingValue)).toBe(nothingValue);
      expect(map(() => 3)(nothingValue)).toEqual(nothingValue);
      expect(filter((v) => v === 3)(nothingValue)).toBe(nothingValue);
      expect(toResult("was nothing")(nothingValue).type).toEqual(
        "error-result",
      );
      // @ts-expect-error all good
      expect(toResult("was nothing")(nothingValue).error).toEqual(
        "was nothing",
      );
    });
  });

  describe("just", () => {
    it("should create just", () => {
      const justValue = just(3);
      expect(justValue.type).toEqual("maybe-just");
      expect(justValue.value).toEqual(3);
      expect(isNothing(justValue)).toEqual(false);
      expect(isJust(justValue)).toEqual(true);
      expect(isMaybe(justValue)).toEqual(true);
      expect(withDefault(5)(justValue)).toEqual(3);
      expect(map(() => 5)(justValue)).not.toBe(justValue);
      expect(map(() => 5)(justValue)).not.toEqual(justValue);
      // @ts-expect-error all good
      expect(map(() => 5)(justValue).value).toEqual(5);
      expect(filter((v) => v === 5)(justValue).type).toEqual("maybe-nothing");
      expect(filter((v) => v === 3)(justValue)).toBe(justValue);
      expect(toResult("was nothing")(justValue).type).toEqual("ok-result");
      // @ts-expect-error all good
      expect(toResult("was nothing")(justValue).value).toEqual(3);
    });
  });

  describe("maybe", () => {
    it("should create maybe by guard", () => {
      expect(maybeByGuard(Guard.isString)(3).type).toEqual("maybe-nothing");
      expect(maybeByGuard(Guard.isNumber)(3).type).toEqual("maybe-just");
      // @ts-expect-error all good
      expect(maybeByGuard(Guard.isNumber)(3).value).toEqual(3);
    });
    it("should create maybe by error aware guard", () => {
      expect(maybeByErrorAwareGuard(ErrorAwareGuard.isString)(3).type).toEqual(
        "maybe-nothing",
      );
      expect(maybeByErrorAwareGuard(ErrorAwareGuard.isNumber)(3).type).toEqual(
        "maybe-just",
      );
      // @ts-expect-error all good
      expect(maybeByErrorAwareGuard(ErrorAwareGuard.isNumber)(3).value).toEqual(
        3,
      );
    });
  });

  describe("mapToMaybe", () => {
    it("should map to maybe without nesting maybes", () => {
      expect(mapToMaybe(() => just(3))(nothing()).type).toEqual(
        "maybe-nothing",
      );
      expect(mapToMaybe(() => nothing())(just(3)).type).toEqual(
        "maybe-nothing",
      );
      expect(mapToMaybe(() => just(5))(just(3)).type).toEqual("maybe-just");
      // @ts-expect-error all good
      expect(mapToMaybe(() => just(5))(just(3)).value).toEqual(5);
    });
  });

  describe("tryMap", () => {
    it("should not map nothing", () => {
      expect(tryMap(() => 3)(nothing()).type).toEqual("maybe-nothing");
    });
    it("should create just when no error occurs in func", () => {
      expect(tryMap(() => 3)(just(3)).type).toEqual("maybe-just");
      // @ts-expect-error all good
      expect(tryMap(() => 3)(just(3)).value).toEqual(3);
    });
    it("should create nothing when error occurs in func", () => {
      const error = new Error("OHOH!");
      expect(
        tryMap(() => {
          throw error;
        })(just(3)).type,
      ).toEqual("maybe-nothing");
    });
  });

  describe("concat", () => {
    it("should combine two Just", () => {
      expect(concat<number>((a, b) => a + b)(just(3))(just(2))).toEqual({
        type: "maybe-just",
        value: 5,
      });
    });
    it("should combine one Just one Nothing", () => {
      expect(concat<number>((a, b) => a + b)(just(3))(nothing())).toEqual({
        type: "maybe-just",
        value: 3,
      });
    });
    it("should combine one Nothing one Just", () => {
      expect(concat<number>((a, b) => a + b)(nothing())(just(2))).toEqual({
        type: "maybe-just",
        value: 2,
      });
    });
    it("should combine two Nothing", () => {
      expect(concat<number>((a, b) => a + b)(nothing())(nothing())).toEqual({
        type: "maybe-nothing",
      });
    });
  });
});
