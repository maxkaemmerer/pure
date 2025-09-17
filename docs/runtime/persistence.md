[**@kaumlaut/pure**](../README.md)

---

[@kaumlaut/pure](../README.md) / runtime/persistence

# runtime/persistence

## Type Aliases

### Persistence\<Model, CustomMessage\>

> **Persistence**\<`Model`, `CustomMessage`\> = `object`

Defined in: [runtime/persistence/index.ts:6](https://github.com/maxkaemmerer/pure/blob/a7ad7a360a83471e406b82c9f7c8fba490c59782/src/runtime/persistence/index.ts#L6)

#### Type Parameters

##### Model

`Model` _extends_ [`Cloneable`](../clone.md#cloneable)

##### CustomMessage

`CustomMessage` _extends_ [`Message`](../runtime.md#message)

#### Methods

##### persist()

> **persist**(`model`): `void`

Defined in: [runtime/persistence/index.ts:10](https://github.com/maxkaemmerer/pure/blob/a7ad7a360a83471e406b82c9f7c8fba490c59782/src/runtime/persistence/index.ts#L10)

###### Parameters

###### model

`Model`

###### Returns

`void`

##### read()

> **read**(`guard`, `init`): [`Result`](../result.md#result)\<`Model`, `string`\>

Defined in: [runtime/persistence/index.ts:11](https://github.com/maxkaemmerer/pure/blob/a7ad7a360a83471e406b82c9f7c8fba490c59782/src/runtime/persistence/index.ts#L11)

###### Parameters

###### guard

[`Guard`](../guard.md#guard)\<`Model`\>

###### init

[`Init`](../runtime.md#init)\<`Model`, `CustomMessage`\>

###### Returns

[`Result`](../result.md#result)\<`Model`, `string`\>
