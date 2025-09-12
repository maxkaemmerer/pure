import { Init, Message } from "@kaumlaut/pure/runtime";
import { Persistence } from "@kaumlaut/pure/runtime/persistence";
import { Guard } from "@kaumlaut/pure/guard";
import { ok, Result } from "@kaumlaut/pure/result";
import { Cloneable } from "@kaumlaut/pure/clone";
import { nothing } from "@kaumlaut/pure/maybe";

export const noPersistence = <
  Model extends Cloneable,
  CustomMessage extends Message,
>(): Persistence<Model, CustomMessage> => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  persist(model: Model) {},
  read(
    guard: Guard<Model>,
    init: Init<Model, CustomMessage>,
  ): Result<Model, string> {
    return ok(init(nothing())[0]);
  },
});
