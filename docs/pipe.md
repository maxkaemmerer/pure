[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / pipe

# pipe

## Type Aliases

### Pipe\<IT\>

> **Pipe**\<`IT`\> = `object`

Defined in: [pipe/index.ts:4](https://github.com/maxkaemmerer/pure/blob/0f04f2b5051f5f9b30a1a5966844c5fde22bffa4/src/pipe/index.ts#L4)

Represents a function pipeline

#### Type Parameters

##### IT

`IT`

#### Properties

##### into()

> **into**: \<`RT`\>(`func`) => [`Pipe`](#pipe)\<`RT`\>

Defined in: [pipe/index.ts:5](https://github.com/maxkaemmerer/pure/blob/0f04f2b5051f5f9b30a1a5966844c5fde22bffa4/src/pipe/index.ts#L5)

###### Type Parameters

###### RT

`RT`

###### Parameters

###### func

(`input`) => `RT`

###### Returns

[`Pipe`](#pipe)\<`RT`\>

##### out()

> **out**: () => `IT`

Defined in: [pipe/index.ts:6](https://github.com/maxkaemmerer/pure/blob/0f04f2b5051f5f9b30a1a5966844c5fde22bffa4/src/pipe/index.ts#L6)

###### Returns

`IT`

## Functions

### compose()

> **compose**\<`T1`, `T2`, `R`\>(`f1`, `f2`): (`value`) => `R`

Defined in: [pipe/index.ts:32](https://github.com/maxkaemmerer/pure/blob/0f04f2b5051f5f9b30a1a5966844c5fde22bffa4/src/pipe/index.ts#L32)

Combines two single argument functions to create a new one. Passing the output of f1 to f2 as input.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

##### R

`R`

#### Parameters

##### f1

(`value`) => `T2`

##### f2

(`value`) => `R`

#### Returns

> (`value`): `R`

##### Parameters

###### value

`T1`

##### Returns

`R`

***

### put()

> **put**\<`IT`\>(`data`): [`Pipe`](#pipe)\<`IT`\>

Defined in: [pipe/index.ts:20](https://github.com/maxkaemmerer/pure/blob/0f04f2b5051f5f9b30a1a5966844c5fde22bffa4/src/pipe/index.ts#L20)

Creates a Pipe that allows you to chain multiple functions using into.
Is meant to make larger functions more readable.

#### Type Parameters

##### IT

`IT`

#### Parameters

##### data

`IT`

#### Returns

[`Pipe`](#pipe)\<`IT`\>

#### Example

```ts
const output = put("3")
     .into(asInt)
     .into(toMaybe)
     .into(withDefault(0))
     .into((input) => input * 3.14)
     .into((input) => input.toPrecision());
```
