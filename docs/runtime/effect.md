[**@kaumlaut/pure**](../README.md)

***

[@kaumlaut/pure](../README.md) / runtime/effect

# runtime/effect

## Type Aliases

### AsyncEffect()\<T\>

> **AsyncEffect**\<`T`\> = () => `Promise`\<`T`\>

Defined in: [runtime/effect/index.ts:4](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L4)

#### Type Parameters

##### T

`T` *extends* [`Message`](../runtime.md#message)

#### Returns

`Promise`\<`T`\>

***

### AsyncNullEffect()

> **AsyncNullEffect** = () => `Promise`\<`null`\>

Defined in: [runtime/effect/index.ts:7](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L7)

#### Returns

`Promise`\<`null`\>

***

### Effect\<T\>

> **Effect**\<`T`\> = `object`

Defined in: [runtime/effect/index.ts:13](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L13)

#### Type Parameters

##### T

`T` *extends* [`Message`](../runtime.md#message)

#### Properties

##### effectType

> **effectType**: [`EffectType`](#effecttype-1)\<`T`\>

Defined in: [runtime/effect/index.ts:14](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L14)

##### meta

> **meta**: `object` \| `null`

Defined in: [runtime/effect/index.ts:16](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L16)

##### name

> **name**: `string`

Defined in: [runtime/effect/index.ts:15](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L15)

***

### EffectType\<T\>

> **EffectType**\<`T`\> = [`AsyncEffect`](#asynceffect)\<`T`\> \| [`SyncEffect`](#synceffect)\<`T`\> \| [`NullEffect`](#nulleffect) \| [`AsyncNullEffect`](#asyncnulleffect)

Defined in: [runtime/effect/index.ts:8](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L8)

#### Type Parameters

##### T

`T` *extends* [`Message`](../runtime.md#message)

***

### NullEffect()

> **NullEffect** = () => `null`

Defined in: [runtime/effect/index.ts:6](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L6)

#### Returns

`null`

***

### ReceiveEffectResult()\<T, E, R\>

> **ReceiveEffectResult**\<`T`, `E`, `R`\> = (`result`) => `R`

Defined in: [runtime/effect/index.ts:31](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L31)

#### Type Parameters

##### T

`T`

##### E

`E`

##### R

`R`

#### Parameters

##### result

[`Result`](../result.md#result)\<`T`, `E`\>

#### Returns

`R`

***

### SyncEffect()\<T\>

> **SyncEffect**\<`T`\> = () => `T`

Defined in: [runtime/effect/index.ts:5](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L5)

#### Type Parameters

##### T

`T` *extends* [`Message`](../runtime.md#message)

#### Returns

`T`

## Functions

### withName()

> **withName**\<`T`\>(`name`, `effect`, `meta`): [`Effect`](#effect)\<`T`\>

Defined in: [runtime/effect/index.ts:19](https://github.com/maxkaemmerer/pure/blob/309e4f1dd4ac9f96b6bb9152765ae1dbd95bd346/src/runtime/effect/index.ts#L19)

#### Type Parameters

##### T

`T` *extends* [`Message`](../runtime.md#message)

#### Parameters

##### name

`string`

##### effect

[`EffectType`](#effecttype-1)\<`T`\>

##### meta

`object` = `null`

#### Returns

[`Effect`](#effect)\<`T`\>
