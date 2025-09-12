import { describe, expect, it } from "vitest";
import { noPersistence } from "@kaumlaut/pure/runtime/persistence/none";
import { isOk } from "@kaumlaut/pure/result";
import { none } from "@kaumlaut/pure/runtime/effect/none";

describe("runtime/persistence/none", () => {
  it("should always return init of nothing", () => {
    const persistence = noPersistence();
    const result = persistence.read(
      (value: unknown): value is string => true,
      (model) => [model, none()],
    );
    expect(isOk(result)).toEqual(true);
  });
});
