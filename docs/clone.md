[**@kaumlaut/pure v1.0.0**](README.md)

***

[@kaumlaut/pure](README.md) / clone

# clone

Provides value cloning capabilities

## Type Aliases

### Cloneable

> **Cloneable** = `string` \| `number` \| `boolean` \| `null` \| [`Cloneable`](#cloneable)[] \| \{\[`key`: `string`\]: [`Cloneable`](#cloneable); \}

Defined in: [clone/index.ts:9](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/clone/index.ts#L9)

Defines the Cloneable type

## Functions

### clone()

> **clone**\<`T`\>(`value`): `T`

Defined in: [clone/index.ts:20](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/clone/index.ts#L20)

Recursively clones values to prevent changing of the original value.

#### Type Parameters

##### T

`T` *extends* [`Cloneable`](#cloneable)

#### Parameters

##### value

`T`

#### Returns

`T`
