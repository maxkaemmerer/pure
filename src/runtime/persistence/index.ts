import { Init, Message } from "@kaumlaut/pure/runtime";
import * as Guard from "@kaumlaut/pure/guard";
import { Result } from "@kaumlaut/pure/result";
import { Cloneable } from "@kaumlaut/pure/clone";

export type Persistence<
  Model extends Cloneable,
  CustomMessage extends Message,
> = {
  persist(model: Model): void;
  read(
    guard: Guard.Guard<Model>,
    init: Init<Model, CustomMessage>,
  ): Result<Model, string>;
};
