[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / fetch-state

# fetch-state

Provides types and functions to represent fetch request states

## Type Aliases

### Failed

> **Failed** = `object`

Defined in: [fetch-state/index.ts:11](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L11)

Represents a failed fetch request

#### Properties

##### errors

> **errors**: `Readonly`\<`string`[]\>

Defined in: [fetch-state/index.ts:12](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L12)

##### type

> **type**: `"Failed"`

Defined in: [fetch-state/index.ts:13](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L13)

***

### FetchState\<T\>

> **FetchState**\<`T`\> = [`Failed`](#failed) \| [`None`](#none) \| [`Loading`](#loading) \| [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:40](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L40)

Represents all possible states of a fetch request

#### Type Parameters

##### T

`T`

***

### Loading

> **Loading** = `object`

Defined in: [fetch-state/index.ts:26](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L26)

Represents a fetch request that is currently still running

#### Properties

##### type

> **type**: `"Loading"`

Defined in: [fetch-state/index.ts:27](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L27)

***

### None

> **None** = `object`

Defined in: [fetch-state/index.ts:19](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L19)

Represents a fetch request that has not been executed

#### Properties

##### type

> **type**: `"None"`

Defined in: [fetch-state/index.ts:20](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L20)

***

### Success\<T\>

> **Success**\<`T`\> = `object`

Defined in: [fetch-state/index.ts:33](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L33)

Represents a fetch request that succeeded

#### Type Parameters

##### T

`T`

#### Properties

##### data

> **data**: `Readonly`\<`T`\>

Defined in: [fetch-state/index.ts:34](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L34)

##### type

> **type**: `"Success"`

Defined in: [fetch-state/index.ts:35](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L35)

## Functions

### attempt()

> **attempt**\<`T`\>(`guard`, `firstError`, ...`errors`): (`data`) => [`Failed`](#failed) \| [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:111](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L111)

Attempts to create a fetch state of type Success if the given guard passes.
Otherwise creates a fetch state of type Failed with the provided error.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](guard.md#guard)\<`T`\>

##### firstError

`string` = `"Guard did not pass. Ensure the attempted data has the correct type"`

##### errors

...`string`[]

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

### attemptErrorAware()

> **attemptErrorAware**\<`T`\>(`guard`): (`data`) => [`Failed`](#failed) \| [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:142](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L142)

Attempts to create a fetch state of type Success if the given guard passes.
Otherwise creates a fetch state of type Failed with the errors from the ErrorAwareGuard.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`ErrorAwareGuard`](error-aware-guard.md#errorawareguard)\<`T`\>

#### Returns

> (`data`): [`Failed`](#failed) \| [`Success`](#success)\<`T`\>

##### Parameters

###### data

`unknown`

##### Returns

[`Failed`](#failed) \| [`Success`](#success)\<`T`\>

#### Example

```ts
const value = attemptErrorAware(isString)(3);
if(isSuccess(value)){
 console.log(value.data)
} else if (isFailed(value)){
 console.error(value.error)
}
```

***

### containsError()

> **containsError**\<`T`\>(`matcher`): (`state`) => `boolean`

Defined in: [fetch-state/index.ts:203](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L203)

Checks whether or not the fetch state is Failed and contains an errors that passes the matcher.

#### Type Parameters

##### T

`T`

#### Parameters

##### matcher

(`error`) => `boolean`

#### Returns

> (`state`): `boolean`

##### Parameters

###### state

[`FetchState`](#fetchstate)\<`T`\>

##### Returns

`boolean`

***

### fail()

> **fail**(`first`, ...`errors`): [`Failed`](#failed)

Defined in: [fetch-state/index.ts:68](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L68)

Creates a fetch state of type Failed

#### Parameters

##### first

`string`

##### errors

...`string`[]

#### Returns

[`Failed`](#failed)

***

### isFailed()

> **isFailed**\<`T`\>(`state`): `state is Failed`

Defined in: [fetch-state/index.ts:50](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L50)

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

Defined in: [fetch-state/index.ts:44](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L44)

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

Defined in: [fetch-state/index.ts:56](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L56)

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

Defined in: [fetch-state/index.ts:62](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L62)

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

Defined in: [fetch-state/index.ts:77](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L77)

Creates a fetch state of type Loading

#### Returns

[`Loading`](#loading)

***

### mapFailed()

> **mapFailed**\<`T`, `T2`\>(`mapper`): (`state`) => [`FetchState`](#fetchstate)\<`T` \| `T2`\>

Defined in: [fetch-state/index.ts:173](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L173)

A Utility function that allows to map the Failed fetch state to any other fetch state.
The mapper function is only called if the given fetch state is Failed.

#### Type Parameters

##### T

`T`

##### T2

`T2` = `T`

#### Parameters

##### mapper

(`state`) => [`FetchState`](#fetchstate)\<`T2`\>

#### Returns

> (`state`): [`FetchState`](#fetchstate)\<`T` \| `T2`\>

##### Parameters

###### state

[`FetchState`](#fetchstate)\<`T`\>

##### Returns

[`FetchState`](#fetchstate)\<`T` \| `T2`\>

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

### mapSuccessData()

> **mapSuccessData**\<`T`, `T2`\>(`map`): (`state`) => [`FetchState`](#fetchstate)\<`T2`\>

Defined in: [fetch-state/index.ts:189](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L189)

Converts a Success<T> into a Success<T2> using the given mapping function.
Does nothing if the FetchState is not Success.

#### Type Parameters

##### T

`T`

##### T2

`T2` = `T`

#### Parameters

##### map

(`state`) => `T2`

#### Returns

> (`state`): [`FetchState`](#fetchstate)\<`T2`\>

##### Parameters

###### state

[`FetchState`](#fetchstate)\<`T`\>

##### Returns

[`FetchState`](#fetchstate)\<`T2`\>

***

### none()

> **none**(): [`None`](#none)

Defined in: [fetch-state/index.ts:85](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L85)

Creates a fetch state of type None

#### Returns

[`None`](#none)

***

### succeed()

> **succeed**\<`T`\>(`data`): [`Success`](#success)\<`T`\>

Defined in: [fetch-state/index.ts:94](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/fetch-state/index.ts#L94)

Creates a fetch state of type Success<T>.
Generally attempt or attemptErrorAware should be used instead.

#### Type Parameters

##### T

`T`

#### Parameters

##### data

`T`

#### Returns

[`Success`](#success)\<`T`\>
