import { Result } from "@kaumlaut/pure/result";
import { Message } from "@kaumlaut/pure/runtime";

export type AsyncEffect<T extends Message> = () => Promise<T>;
export type SyncEffect<T extends Message> = () => T;
export type NullEffect = () => null;
export type AsyncNullEffect = () => Promise<null>;
export type EffectType<T extends Message> =
  | AsyncEffect<T>
  | SyncEffect<T>
  | NullEffect
  | AsyncNullEffect;
export type Effect<T extends Message> = {
  effectType: EffectType<T>;
  name: string;
  meta: object | null;
};

export function withName<T extends Message>(
  name: string,
  effect: EffectType<T>,
  meta: object | null = null,
): Effect<T> {
  return {
    name,
    effectType: effect,
    meta,
  };
}

export type ReceiveEffectResult<T, E, R> = (result: Result<T, E>) => R;
