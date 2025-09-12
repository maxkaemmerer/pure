import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  fetchJson,
  isClient,
  isHttp,
  isNotFound,
  isServer,
} from "@kaumlaut/pure/runtime/effect/fetch";
import { id } from "@kaumlaut/pure/util";
import { isErr, isOk } from "@kaumlaut/pure/result";

beforeEach(() => {
  global.fetch = vi.fn();
});

describe("runtime/effect/fetch", () => {
  describe("fetchJson", () => {
    it("should receive ok result for statuscode 200 matching guard", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: vi.fn().mockResolvedValue(3),
      });

      const headers = [
        ["Authorization", "Bearer my-token"] as [string, string],
      ];
      const method = "GET";
      const url = "some-url";
      const effect = fetchJson(url, headers, method, () => true, id);

      expect(effect.name).toEqual("fetchJson");
      expect(effect.meta).toEqual({
        url,
        headers,
        method,
      });

      const result = await effect.effectType();

      expect(isOk(result)).toEqual(true);
      expect(result.value).toEqual(3);

      expect(global.fetch).toHaveBeenNthCalledWith(1, url, {
        headers,
        method,
      });
    });
    it("should receive error result for statuscode 200 not matching guard", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        status: 200,
        json: vi.fn().mockResolvedValue(3),
      });

      const headers = [
        ["Authorization", "Bearer my-token"] as [string, string],
      ];
      const method = "GET";
      const url = "some-url";
      const effect = fetchJson(url, headers, method, () => false, id);

      expect(effect.name).toEqual("fetchJson");
      expect(effect.meta).toEqual({
        url,
        headers,
        method,
      });

      const result = await effect.effectType();

      expect(isErr(result)).toEqual(true);
      expect(result.error).toEqual({
        message: "Malformed Payload. Your Guard does not pass.",
      });

      expect(global.fetch).toHaveBeenNthCalledWith(1, url, {
        headers,
        method,
      });
    });
    it("should receive error result for non statuscode 200", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        status: 400,
        text: vi.fn().mockResolvedValue("some error"),
      });

      const headers = [
        ["Authorization", "Bearer my-token"] as [string, string],
      ];
      const method = "GET";
      const url = "some-url";
      const effect = fetchJson(url, headers, method, () => false, id);

      expect(effect.name).toEqual("fetchJson");
      expect(effect.meta).toEqual({
        url,
        headers,
        method,
      });

      const result = await effect.effectType();

      expect(isErr(result)).toEqual(true);
      expect(result.error).toEqual({
        message: "some error",
        code: 400,
      });

      expect(global.fetch).toHaveBeenNthCalledWith(1, url, {
        headers,
        method,
      });
    });
    it("should receive error when decoding fails", async () => {
      global.fetch = vi.fn().mockResolvedValue({
        status: 500,
        json: vi.fn().mockRejectedValue("some error"),
      });

      const headers = [
        ["Authorization", "Bearer my-token"] as [string, string],
      ];
      const method = "GET";
      const url = "some-url";
      const effect = fetchJson(url, headers, method, () => false, id);

      expect(effect.name).toEqual("fetchJson");
      expect(effect.meta).toEqual({
        url,
        headers,
        method,
      });

      const result = await effect.effectType();

      expect(isErr(result)).toEqual(true);
      expect(result.error).toEqual({
        message: "Malformed Payload. Invalid JSON.",
      });

      expect(global.fetch).toHaveBeenNthCalledWith(1, url, {
        headers,
        method,
      });
    });
  });

  describe("error guards", () => {
    it("should be not found", () => {
      expect(isNotFound({ message: "Not Found", code: 404 })).toEqual(true);
      expect(isNotFound({ message: "OK", code: 200 })).toEqual(false);
    });

    it("should be http", () => {
      expect(isHttp({ message: "Not Found", code: 404 })).toEqual(true);
      expect(isHttp({ message: "OHOH" })).toEqual(false);
    });
    it("should be client", () => {
      expect(isClient({ message: "Not Found", code: 404 })).toEqual(true);
      expect(isClient({ message: "Server", code: 500 })).toEqual(false);
    });
    it("should be client", () => {
      expect(isServer({ message: "Server", code: 500 })).toEqual(true);
      expect(isServer({ message: "Client", code: 400 })).toEqual(false);
    });
  });
});
