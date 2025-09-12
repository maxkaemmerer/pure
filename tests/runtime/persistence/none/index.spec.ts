import { describe, expect, it } from "vitest";
import { noPersistence } from "../../../../src/runtime/persistence/none";
import { isOk } from "../../../../src/result";
import { none } from "../../../../src/runtime/effect/none";

describe("runtime/persistence/none", () => {
  it("should always return init of nothing", () => {
    const persistence = noPersistence();
    const result = persistence.read(
      () => true,
      (model) => [model, none()],
    );
    expect(isOk(result)).toEqual(true);
  });
});
