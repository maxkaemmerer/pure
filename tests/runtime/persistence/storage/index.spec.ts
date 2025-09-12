import { describe, expect, it, vi } from "vitest";
import { storagePersistence } from "@kaumlaut/pure/runtime/persistence/storage";
import { none } from "@kaumlaut/pure/runtime/effect/none";
import { isErr, isOk } from "@kaumlaut/pure/result";
import { isJust, isNothing } from "@kaumlaut/pure/maybe";
describe("runtime/persistence/storage", () => {
  it("should return init of ok if item is in storage and passes guard", () => {
    const storage = {
      getItem: vi.fn().mockReturnValue(btoa(JSON.stringify(3))),
      setItem: vi.fn(),
    } as unknown as Storage;
    const persistence = storagePersistence("my-key", storage);

    const result = persistence.read(
      (value: unknown): value is string => true,
      (model) => [model, none()],
    );

    expect(storage.getItem).toHaveBeenNthCalledWith(1, "my-key");
    expect(isOk(result)).toEqual(true);
    expect(isJust(result.value)).toEqual(true);
    expect(result.value.value).toEqual(3);
  });

  it("should return init of nothing if item is not in storage", () => {
    const persistence = storagePersistence("my-key", {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    } as unknown as Storage);

    const result = persistence.read(
      (value: unknown): value is string => true,
      (model) => [model, none()],
    );

    expect(isOk(result)).toEqual(true);
    expect(isNothing(result.value)).toEqual(true);
  });
  it("should return decoding error if item is in storage but invalid", () => {
    const persistence = storagePersistence("my-key", {
      getItem: vi.fn().mockReturnValue(3),
      setItem: vi.fn(),
    } as unknown as Storage);

    const result = persistence.read(
      (value: unknown): value is string => true,
      (model) => [model, none()],
    );

    expect(isErr(result)).toEqual(true);
    expect(result.error).toEqual("Could not decode stored model");
  });
  it("should return guard not matched error if item does not pass guard", () => {
    const persistence = storagePersistence("my-key", {
      getItem: vi.fn().mockReturnValue(btoa(JSON.stringify(3))),
      setItem: vi.fn(),
    } as unknown as Storage);

    const result = persistence.read(
      (value: unknown): value is string => false,
      (model) => [model, none()],
    );

    expect(isErr(result)).toEqual(true);
    expect(result.error).toEqual(
      "Your guard did not match the retrieved model",
    );
  });
  it("should set base64 encoded json string of model", () => {
    const storage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
    } as unknown as Storage;
    const persistence = storagePersistence("my-key", storage);

    persistence.persist({
      some: "value",
    });

    expect(storage.setItem).toHaveBeenNthCalledWith(
      1,
      "my-key",
      "eyJzb21lIjoidmFsdWUifQ==",
    );
  });
});
