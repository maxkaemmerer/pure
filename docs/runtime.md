[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / runtime

# runtime

## Type Aliases

### Change\<CustomMessage, Model\>

> **Change**\<`CustomMessage`, `Model`\> = \[`CustomMessage` \| `null`, `Model`, \{ `meta`: `object` \| `null`; `name`: `string`; \} \| `null`\]

Defined in: [runtime/index.ts:20](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L20)

#### Type Parameters

##### CustomMessage

`CustomMessage` *extends* [`Message`](#message)

##### Model

`Model`

***

### Changes\<CustomMessage, Model\>

> **Changes**\<`CustomMessage`, `Model`\> = [`Change`](#change)\<`CustomMessage`, `Model`\>[]

Defined in: [runtime/index.ts:29](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L29)

#### Type Parameters

##### CustomMessage

`CustomMessage` *extends* [`Message`](#message)

##### Model

`Model` *extends* [`Cloneable`](clone.md#cloneable)

***

### Init()\<Model, CustomMessage\>

> **Init**\<`Model`, `CustomMessage`\> = (`persistedModel`) => \[`Model`, [`Effect`](runtime/effect.md#effect)\<`CustomMessage`\>\]

Defined in: [runtime/index.ts:16](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L16)

#### Type Parameters

##### Model

`Model` *extends* [`Cloneable`](clone.md#cloneable)

##### CustomMessage

`CustomMessage` *extends* [`Message`](#message)

#### Parameters

##### persistedModel

[`Maybe`](maybe.md#maybe)\<`Model`\>

#### Returns

\[`Model`, [`Effect`](runtime/effect.md#effect)\<`CustomMessage`\>\]

***

### Message\<N, T\>

> **Message**\<`N`, `T`\> = `object`

Defined in: [runtime/index.ts:6](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L6)

#### Type Parameters

##### N

`N` *extends* `string` = `string`

##### T

`T` = `any`

#### Properties

##### name

> **name**: `N`

Defined in: [runtime/index.ts:8](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L8)

##### value

> **value**: `T`

Defined in: [runtime/index.ts:7](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L7)

***

### Update()\<Model, CustomMessage\>

> **Update**\<`Model`, `CustomMessage`\> = (`model`, `msg`) => \[`Model`, [`Effect`](runtime/effect.md#effect)\<`CustomMessage`\>\]

Defined in: [runtime/index.ts:11](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L11)

#### Type Parameters

##### Model

`Model` *extends* [`Cloneable`](clone.md#cloneable)

##### CustomMessage

`CustomMessage` *extends* [`Message`](#message)

#### Parameters

##### model

`Readonly`\<`Model`\>

##### msg

`CustomMessage`

#### Returns

\[`Model`, [`Effect`](runtime/effect.md#effect)\<`CustomMessage`\>\]

## Functions

### is()

> **is**\<`CustomMessage`, `A`\>(`name`, `message`): `message is CustomMessage`

Defined in: [runtime/index.ts:34](https://github.com/maxkaemmerer/pure/blob/ce8c2b2e9b3856498ea6d1a0b426cbea8b75dcf0/src/runtime/index.ts#L34)

#### Type Parameters

##### CustomMessage

`CustomMessage` *extends* [`Message`](#message)\<`A`, `any`\>

##### A

`A` *extends* `string`

#### Parameters

##### name

`A`

##### message

[`Message`](#message)

#### Returns

`message is CustomMessage`
