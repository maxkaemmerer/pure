import { Effect } from "@kaumlaut/pure/runtime/effect";
import { Cloneable } from "@kaumlaut/pure/clone";
import { Maybe } from "@kaumlaut/pure/maybe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Message<N extends string = string, T = any> = {
  value: T;
  name: N;
};

export type Update<Model extends Cloneable, CustomMessage extends Message> = (
  model: Readonly<Model>,
  msg: CustomMessage,
) => [Model, Effect<CustomMessage>];

export type Init<Model extends Cloneable, CustomMessage extends Message> = (
  persistedModel: Maybe<Model>,
) => [Model, Effect<CustomMessage>];

export type Change<CustomMessage extends Message, Model> = [
  CustomMessage | null,
  model: Model,
  effect: {
    name: string;
    meta: object | null;
  } | null,
];

export type Changes<
  CustomMessage extends Message,
  Model extends Cloneable,
> = Change<CustomMessage, Model>[];

export function is<CustomMessage extends Message<A>, A extends string>(
  name: A,
  message: Message,
): message is CustomMessage {
  return message.name === name;
}
