import { describe, expect, it } from "vitest";
import { is, Message } from "../../src/runtime";

describe("runtime", () => {
  it("should be", () => {
    type TestMessage = Message<"EXISTS", null>;

    const message: TestMessage = {
      value: null,
      name: "EXISTS",
    };

    expect(is("EXISTS", message)).toEqual(true);
    expect(
      is("EXISTS", {
        value: null,
        name: "NOT_EXISTS",
      }),
    ).toEqual(false);
  });
});
