[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / pipe

# pipe

## Type Aliases

### Pipe\<IT\>

> **Pipe**\<`IT`\> = `object`

Defined in: [pipe/index.ts:4](https://github.com/maxkaemmerer/pure/blob/dd25821cd8ff6e263aa08030807845c209d9f5a2/src/pipe/index.ts#L4)

Represents a function pipeline

#### Type Parameters

##### IT

`IT`

#### Properties

##### into()

> **into**: \<`RT`\>(`func`) => [`Pipe`](#pipe)\<`RT`\>

Defined in: [pipe/index.ts:5](https://github.com/maxkaemmerer/pure/blob/dd25821cd8ff6e263aa08030807845c209d9f5a2/src/pipe/index.ts#L5)

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

Defined in: [pipe/index.ts:6](https://github.com/maxkaemmerer/pure/blob/dd25821cd8ff6e263aa08030807845c209d9f5a2/src/pipe/index.ts#L6)

###### Returns

`IT`

## Functions

### put()

> **put**\<`IT`\>(`data`): [`Pipe`](#pipe)\<`IT`\>

Defined in: [pipe/index.ts:20](https://github.com/maxkaemmerer/pure/blob/dd25821cd8ff6e263aa08030807845c209d9f5a2/src/pipe/index.ts#L20)

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
