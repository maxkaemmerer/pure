import { describe, it, expect } from "vitest";
import { asFloat, asInt } from "@kaumlaut/pure/parse";

describe("parse", () => {
  describe("asInt", () => {
    it("should result in err for non int value", () => {
      expect(asInt("blabla").type).toEqual("error-result");
      expect(asInt("blabla").error).toEqual("Number is NaN");
    });
    it("should parse int as int", () => {
      expect(asInt("1").type).toEqual("ok-result");
      expect(asInt("1").value).toEqual(1);
    });
    it("should parse float as int", () => {
      expect(asInt("1.3").type).toEqual("ok-result");
      expect(asInt("1.3").value).toEqual(1);
    });
  });
  describe("asFloat", () => {
    it("should result in err for non int value", () => {
      expect(asFloat("blabla").type).toEqual("error-result");
      expect(asFloat("blabla").error).toEqual("Number is NaN");
    });
    it("should parse int as int", () => {
      expect(asFloat("1").type).toEqual("ok-result");
      expect(asFloat("1").value).toEqual(1);
    });
    it("should parse float as int", () => {
      expect(asFloat("1.3").type).toEqual("ok-result");
      expect(asFloat("1.3").value).toEqual(1.3);
    });
  });
});
