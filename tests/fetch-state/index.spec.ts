import { it, describe, expect } from "vitest";
import {
  isNone,
  isSuccess,
  none,
  isFailed,
  isLoading,
  mapFailed,
  mapSuccessData,
  load,
  attempt,
  fail,
  attemptErrorAware,
  succeed,
  containsError,
} from "@kaumlaut/pure/fetch-state";
import * as Guard from "@kaumlaut/pure/guard";
import * as ErrorAwareGuard from "@kaumlaut/pure/error-aware-guard";
import { just } from "@kaumlaut/pure/maybe";
import { includes } from "../../dist/util";

describe("fetch-state", () => {
  describe("none", () => {
    it("should create none correctly", () => {
      const value = none();
      expect(value).to.deep.equal({
        type: "None",
      });
      expect(isNone(value)).to.equal(true);
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(false);
      expect(isLoading(value)).to.equal(false);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "None",
      });
    });
  });

  describe("loading", () => {
    it("should create loading correctly", () => {
      const value = load();
      expect(value).to.deep.equal({
        type: "Loading",
      });
      expect(isNone(value)).to.equal(false);
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(false);
      expect(isLoading(value)).to.equal(true);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "Loading",
      });
    });
  });

  describe("success", () => {
    it("should create success correctly", () => {
      const value = attempt(Guard.isAlways)({ some: "key" });
      expect(value).to.deep.equal({
        type: "Success",
        data: { some: "key" },
      });
      const otherValue = succeed({ some: "key" });
      expect(otherValue).to.deep.equal({
        type: "Success",
        data: { some: "key" },
      });
      expect(isNone(value)).to.equal(false);
      expect(isSuccess(value)).to.equal(true);
      expect(isFailed(value)).to.equal(false);
      expect(isLoading(value)).to.equal(false);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "Success",
        data: { some: "key" },
      });
      expect(mapSuccessData(just)(value)).to.deep.equal({
        type: "Success",
        data: { type: "maybe-just", value: { some: "key" } },
      });
      expect(containsError(() => true)(value)).to.deep.equal(false);
    });

    it("should create success correctly with attemptErrorAware", () => {
      const value = attemptErrorAware(ErrorAwareGuard.isAlways)({
        some: "key",
      });
      expect(value).to.deep.equal({
        type: "Success",
        data: { some: "key" },
      });
      expect(isNone(value)).to.equal(false);
      expect(isSuccess(value)).to.equal(true);
      expect(isFailed(value)).to.equal(false);
      expect(isLoading(value)).to.equal(false);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "Success",
        data: { some: "key" },
      });
    });
  });

  describe("failed", () => {
    it("should create success correctly", () => {
      const value = fail("some-message");
      expect(value).to.deep.equal({
        type: "Failed",
        errors: ["some-message"],
      });
      expect(isNone(value)).to.equal(false);
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(true);
      expect(isLoading(value)).to.equal(false);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "Failed",
        errors: ["OHOH!"],
      });
      expect(mapSuccessData(just)(value)).to.deep.equal({
        type: "Failed",
        errors: ["some-message"],
      });
      expect(containsError(includes("some-message"))(value)).to.deep.equal(
        true,
      );
      expect(containsError(includes("OHOH!"))(value)).to.deep.equal(false);
    });

    it("should create failed when guard does not pass", () => {
      const value = attempt(Guard.isNever)({ some: "key" });
      expect(value).to.deep.equal({
        type: "Failed",
        errors: [
          "Guard did not pass. Ensure the attempted data has the correct type",
        ],
      });
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(true);
    });

    it("should create failed when guard does not pass", () => {
      const value = attemptErrorAware(ErrorAwareGuard.isNever)({ some: "key" });
      expect(value).to.deep.equal({
        type: "Failed",
        errors: ["Never passes"],
      });
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(true);
    });
  });
});
