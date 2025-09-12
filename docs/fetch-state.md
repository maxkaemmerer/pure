[**@kaumlaut/pure v1.0.0**](README.md)

***

[@kaumlaut/pure](README.md) / fetch-state

# fetch-state

Provides types and functions to represent fetch request states

## Type Aliases

### Failed

> **Failed** = `object`

Defined in: [fetch-state/index.ts:10](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L10)

Represents a failed fetch request

#### Properties

##### error

> **error**: `Readonly`\<`string`\>

Defined in: [fetch-state/index.ts:11](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L11)

##### type

> **type**: `"Failed"`

Defined in: [fetch-state/index.ts:12](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L12)

***

### FetchState\<T\>

> **FetchState**\<`T`\> = [`Failed`](#failed) \| [`None`](#none) \| [`Loading`](#loading) \| [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:39](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L39)

Represents all possible states of a fetch request

#### Type Parameters

##### T

`T`

***

### Loading

> **Loading** = `object`

Defined in: [fetch-state/index.ts:25](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L25)

Represents a fetch request that is currently still running

#### Properties

##### type

> **type**: `"Loading"`

Defined in: [fetch-state/index.ts:26](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L26)

***

### None

> **None** = `object`

Defined in: [fetch-state/index.ts:18](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L18)

Represents a fetch request that has not been executed

#### Properties

##### type

> **type**: `"None"`

Defined in: [fetch-state/index.ts:19](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L19)

***

### Success\<T\>

> **Success**\<`T`\> = `object`

Defined in: [fetch-state/index.ts:32](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L32)

Represents a fetch request that succeeded

#### Type Parameters

##### T

`T`

#### Properties

##### data

> **data**: `Readonly`\<`T`\>

Defined in: [fetch-state/index.ts:33](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L33)

##### type

> **type**: `"Success"`

Defined in: [fetch-state/index.ts:34](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L34)

## Functions

### attempt()

> **attempt**\<`T`\>(`guard`, `error`): (`data`) => [`Failed`](#failed) \| [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:100](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L100)

Attempts to create a fetch state of type Success if the given guard passes.
Otherwise creates a fetch state of type Failed with the provided error.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](guard.md#guard)\<`T`\>

##### error

`string` = `"Guard did not pass. Ensure the attempted data has the correct type"`

#### Returns

> (`data`): [`Failed`](#failed) \| [`Success`](#success)\<`T`\>

##### Parameters

###### data

`unknown`

##### Returns

[`Failed`](#failed) \| [`Success`](#success)\<`T`\>

#### Example

```ts
const value = attempt(isString, "Not a String")(3);
if(isSuccess(value)){
 console.log(value.data)
} else if (isFailed(value)){
 console.error(value.error)
}
```

***

### fail()

> **fail**(`error`): [`Failed`](#failed)

Defined in: [fetch-state/index.ts:67](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L67)

Creates a fetch state of type Failed

#### Parameters

##### error

`string`

#### Returns

[`Failed`](#failed)

***

### isFailed()

> **isFailed**\<`T`\>(`state`): `state is Failed`

Defined in: [fetch-state/index.ts:49](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L49)

Checks whether or not the fetch state is Failed via a type guard

#### Type Parameters

##### T

`T`

#### Parameters

##### state

[`FetchState`](#fetchstate)\<`T`\>

#### Returns

`state is Failed`

***

### isLoading()

> **isLoading**\<`T`\>(`state`): `state is Loading`

Defined in: [fetch-state/index.ts:43](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L43)

Checks whether or not the fetch state is Loading via a type guard

#### Type Parameters

##### T

`T`

#### Parameters

##### state

[`FetchState`](#fetchstate)\<`T`\>

#### Returns

`state is Loading`

***

### isNone()

> **isNone**\<`T`\>(`state`): `state is None`

Defined in: [fetch-state/index.ts:55](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L55)

Checks whether or not the fetch state is None via a type guard

#### Type Parameters

##### T

`T`

#### Parameters

##### state

[`FetchState`](#fetchstate)\<`T`\>

#### Returns

`state is None`

***

### isSuccess()

> **isSuccess**\<`T`\>(`state`): `state is Success<T>`

Defined in: [fetch-state/index.ts:61](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L61)

Checks whether or not the fetch state is Success via a type guard

#### Type Parameters

##### T

`T`

#### Parameters

##### state

[`FetchState`](#fetchstate)\<`T`\>

#### Returns

`state is Success<T>`

***

### load()

> **load**(): [`Loading`](#loading)

Defined in: [fetch-state/index.ts:76](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L76)

Creates a fetch state of type Loading

#### Returns

[`Loading`](#loading)

***

### mapFailed()

> **mapFailed**\<`T`\>(`mapper`): (`state`) => [`FetchState`](#fetchstate)\<`T`\>

Defined in: [fetch-state/index.ts:131](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L131)

A Utility function that allows to map the Failed fetch state to any other fetch state.
The mapper function is only called if the given fetch state is Failed.

#### Type Parameters

##### T

`T`

#### Parameters

##### mapper

(`state`) => [`FetchState`](#fetchstate)\<`T`\>

#### Returns

> (`state`): [`FetchState`](#fetchstate)\<`T`\>

##### Parameters

###### state

[`FetchState`](#fetchstate)\<`T`\>

##### Returns

[`FetchState`](#fetchstate)\<`T`\>

#### Example

```ts
const value = attempt(isString, "Not a String")(3);
const mappedValue = mapFailed<string>(state => state.error.includes("404") ? fail("Not Found") : state)(value)
if(isSuccess(mappedValue)){
 console.log(mappedValue.data)
} else if (isFailed(mappedValue)){
 console.error(mappedValue.error)
}
```

***

### none()

> **none**(): [`None`](#none)

Defined in: [fetch-state/index.ts:84](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/fetch-state/index.ts#L84)

Creates a fetch state of type None

#### Returns

[`None`](#none)
