[**@kaumlaut/pure**](../../README.md)

---

[@kaumlaut/pure](../../README.md) / runtime/effect/fetch

# runtime/effect/fetch

## Type Aliases

### FetchError

> **FetchError** = [`HttpError`](#httperror) \| [`MalformedPayloadError`](#malformedpayloaderror)

Defined in: [runtime/effect/fetch/index.ts:19](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L19)

---

### HttpError

> **HttpError** = `object`

Defined in: [runtime/effect/fetch/index.ts:10](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L10)

#### Properties

##### code

> **code**: `number`

Defined in: [runtime/effect/fetch/index.ts:11](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L11)

##### message

> **message**: `string`

Defined in: [runtime/effect/fetch/index.ts:12](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L12)

---

### MalformedPayloadError

> **MalformedPayloadError** = `object`

Defined in: [runtime/effect/fetch/index.ts:15](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L15)

#### Properties

##### message

> **message**: `string`

Defined in: [runtime/effect/fetch/index.ts:16](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L16)

## Functions

### fetchJson()

> **fetchJson**\<`T`, `M`\>(`url`, `headers`, `method`, `guard`, `receiver`): [`Effect`](../effect.md#effect)\<`M`\>

Defined in: [runtime/effect/fetch/index.ts:40](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L40)

#### Type Parameters

##### T

`T`

##### M

`M` _extends_ [`Message`](../../runtime.md#message)

#### Parameters

##### url

`string`

##### headers

\[`string`, `string`\][]

##### method

`string`

##### guard

[`Guard`](../../guard.md#guard)\<`T`\>

##### receiver

[`ReceiveEffectResult`](../effect.md#receiveeffectresult)\<`T`, [`FetchError`](#fetcherror), `M`\>

#### Returns

[`Effect`](../effect.md#effect)\<`M`\>

---

### isClient()

> **isClient**(`error`): `boolean`

Defined in: [runtime/effect/fetch/index.ts:32](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L32)

#### Parameters

##### error

[`FetchError`](#fetcherror)

#### Returns

`boolean`

---

### isHttp()

> **isHttp**(`error`): `error is HttpError`

Defined in: [runtime/effect/fetch/index.ts:25](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L25)

#### Parameters

##### error

[`FetchError`](#fetcherror)

#### Returns

`error is HttpError`

---

### isNotFound()

> **isNotFound**(`error`): `boolean`

Defined in: [runtime/effect/fetch/index.ts:21](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L21)

#### Parameters

##### error

[`FetchError`](#fetcherror)

#### Returns

`boolean`

---

### isServer()

> **isServer**(`error`): `boolean`

Defined in: [runtime/effect/fetch/index.ts:36](https://github.com/maxkaemmerer/pure/blob/71cc1d73c1a096a1d398321a0b488240723d1229/src/runtime/effect/fetch/index.ts#L36)

#### Parameters

##### error

[`FetchError`](#fetcherror)

#### Returns

`boolean`
