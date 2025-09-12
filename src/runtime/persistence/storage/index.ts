import { Guard } from "@kaumlaut/pure/guard";
import { Result, ok, err } from "@kaumlaut/pure/result";
import { Persistence } from "@kaumlaut/pure/runtime/persistence";
import { Message, Init } from "@kaumlaut/pure/runtime";
import { Cloneable } from "@kaumlaut/pure/clone";
import { just, nothing } from "@kaumlaut/pure/maybe";

export const storagePersistence = <
  Model extends Cloneable,
  CustomMessage extends Message,
>(
  name: string,
  storage: Storage,
): Persistence<Model, CustomMessage> => ({
  persist(model: Model) {
    storage.setItem(name, btoa(JSON.stringify(model)));
  },
  read(
    guard: Guard.Guard<Model>,
    init: Init<Model, CustomMessage>,
  ): Result<Model, string> {
    const record = storage.getItem(name);
    if (record === null) {
      return ok(init(nothing())[0]);
    }

    try {
      const json = atob(record);
      const model = JSON.parse(json);

      if (guard(model)) {
        return ok(init(just(model))[0]);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return err("Could not decode stored model");
    }

    return err("Your guard did not match the retrieved model");
  },
});
