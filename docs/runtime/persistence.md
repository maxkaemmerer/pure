[**@kaumlaut/pure v1.0.0**](../README.md)

***

[@kaumlaut/pure](../README.md) / runtime/persistence

# runtime/persistence

## Type Aliases

### Persistence\<Model, CustomMessage\>

> **Persistence**\<`Model`, `CustomMessage`\> = `object`

Defined in: [runtime/persistence/index.ts:6](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/runtime/persistence/index.ts#L6)

#### Type Parameters

##### Model

`Model` *extends* [`Cloneable`](../clone.md#cloneable)

##### CustomMessage

`CustomMessage` *extends* [`Message`](../runtime.md#message)

#### Methods

##### persist()

> **persist**(`model`): `void`

Defined in: [runtime/persistence/index.ts:10](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/runtime/persistence/index.ts#L10)

###### Parameters

###### model

`Model`

###### Returns

`void`

##### read()

> **read**(`guard`, `init`): [`Result`](../result.md#result)\<`Model`, `string`\>

Defined in: [runtime/persistence/index.ts:11](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/runtime/persistence/index.ts#L11)

###### Parameters

###### guard

[`Guard`](../guard.md#guard)\<`Model`\>

###### init

[`Init`](../runtime.md#init)\<`Model`, `CustomMessage`\>

###### Returns

[`Result`](../result.md#result)\<`Model`, `string`\>
