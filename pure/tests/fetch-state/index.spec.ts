import { it, describe, expect } from "vitest";
import {
  isNone,
  isSuccess,
  none,
  isFailed,
  isLoading,
  mapFailed,
  load,
  attempt,
  fail,
} from "../../src/fetch-state";
import { isNever, isAlways } from "../../src/guard";

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
      const value = attempt(isAlways)({ some: "key" });
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
        error: "some-message",
      });
      expect(isNone(value)).to.equal(false);
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(true);
      expect(isLoading(value)).to.equal(false);
      expect(mapFailed(() => fail("OHOH!"))(value)).to.deep.equal({
        type: "Failed",
        error: "OHOH!",
      });
    });

    it("should create failed when guard does not pass", () => {
      const value = attempt(isNever)({ some: "key" });
      expect(value).to.deep.equal({
        type: "Failed",
        error:
          "Guard did not pass. Ensure the attempted data has the correct type",
      });
      expect(isSuccess(value)).to.equal(false);
      expect(isFailed(value)).to.equal(true);
    });
  });
});
