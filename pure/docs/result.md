[**@kaumlaut/pure v0.5.2**](README.md)

***

[@kaumlaut/pure](README.md) / result

# result

## Type Aliases

### Err\<T\>

> **Err**\<`T`\> = `object`

Defined in: [result/index.ts:14](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L14)

Represents the Result of an action that failed and contains a corresponding error.

#### Type Parameters

##### T

`T`

#### Properties

##### error

> **error**: `T`

Defined in: [result/index.ts:16](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L16)

##### type

> **type**: `"error-result"`

Defined in: [result/index.ts:15](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L15)

***

### Ok\<T\>

> **Ok**\<`T`\> = `object`

Defined in: [result/index.ts:6](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L6)

Represents the Result of an action that succeeded and contains a corresponding value.

#### Type Parameters

##### T

`T`

#### Properties

##### type

> **type**: `"ok-result"`

Defined in: [result/index.ts:7](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L7)

##### value

> **value**: `T`

Defined in: [result/index.ts:8](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L8)

***

### Result\<T, E\>

> **Result**\<`T`, `E`\> = [`Ok`](#ok)\<`T`\> \| [`Err`](#err)\<`E`\>

Defined in: [result/index.ts:22](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L22)

Represents the Result of an action that can fail.

#### Type Parameters

##### T

`T`

##### E

`E`

## Functions

### err()

> **err**\<`E`\>(`error`): [`Err`](#err)\<`E`\>

Defined in: [result/index.ts:51](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L51)

Creates a Result of type Err containg the given error.

#### Type Parameters

##### E

`E`

#### Parameters

##### error

`E`

#### Returns

[`Err`](#err)\<`E`\>

***

### isErr()

> **isErr**\<`T`, `E`\>(`result`): `result is Err<E>`

Defined in: [result/index.ts:34](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L34)

A Guard conforming that the given Result is of type Err.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### result

[`Result`](#result)\<`T`, `E`\>

#### Returns

`result is Err<E>`

***

### isOk()

> **isOk**\<`T`, `E`\>(`result`): `result is Ok<T>`

Defined in: [result/index.ts:27](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L27)

A Guard conforming that the given Result is of type Ok.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### result

[`Result`](#result)\<`T`, `E`\>

#### Returns

`result is Ok<T>`

***

### map()

> **map**\<`T`, `E`, `R`\>(`func`): (`result`) => [`Result`](#result)\<`R`, `E`\>

Defined in: [result/index.ts:62](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L62)

When Result is Ok: Applies the func function to the contained value and wraps it in Ok again.
When Result is Err: Returns the given Result.

#### Type Parameters

##### T

`T`

##### E

`E`

##### R

`R`

#### Parameters

##### func

(`value`) => `R`

#### Returns

> (`result`): [`Result`](#result)\<`R`, `E`\>

##### Parameters

###### result

[`Result`](#result)\<`T`, `E`\>

##### Returns

[`Result`](#result)\<`R`, `E`\>

***

### mapErr()

> **mapErr**\<`T`, `E`, `R`\>(`func`): (`result`) => [`Result`](#result)\<`T`, `R`\>

Defined in: [result/index.ts:78](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L78)

When Result is Ok: Returns the given Result.
When Result is Err: Applies the func function to the contained error and wraps it in Err again.

#### Type Parameters

##### T

`T`

##### E

`E`

##### R

`R`

#### Parameters

##### func

(`value`) => `R`

#### Returns

> (`result`): [`Result`](#result)\<`T`, `R`\>

##### Parameters

###### result

[`Result`](#result)\<`T`, `E`\>

##### Returns

[`Result`](#result)\<`T`, `R`\>

***

### ok()

> **ok**\<`T`\>(`value`): [`Ok`](#ok)\<`T`\>

Defined in: [result/index.ts:41](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L41)

Creates a Result of type Ok containg the given value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

[`Ok`](#ok)\<`T`\>

***

### toMaybe()

> **toMaybe**\<`T`, `E`\>(`result`): [`Maybe`](maybe.md#maybe)\<`T`\>

Defined in: [result/index.ts:112](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L112)

Converts the given Result to a Maybe
When Result is Ok: Returns a Just containing the value.
When Result is Err: Returns a Nothing.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### result

[`Result`](#result)\<`T`, `E`\>

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

***

### withDefault()

> **withDefault**\<`T`, `E`\>(`defaultValue`): (`result`) => `T`

Defined in: [result/index.ts:95](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/result/index.ts#L95)

Unwrap a result to either its contained value or the default value.
When Result is Ok: Returns the nested value.
When Result is Err: Returns the given default value.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### defaultValue

`T`

#### Returns

> (`result`): `T`

##### Parameters

###### result

[`Result`](#result)\<`T`, `E`\>

##### Returns

`T`
