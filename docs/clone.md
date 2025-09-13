[**@kaumlaut/pure**](README.md)

---

[@kaumlaut/pure](README.md) / clone

# clone

Provides value cloning capabilities

## Type Aliases

### Cloneable

> **Cloneable** = `string` \| `number` \| `boolean` \| `null` \| [`Cloneable`](#cloneable)[] \| \{\[`key`: `string`\]: [`Cloneable`](#cloneable); \}

Defined in: [clone/index.ts:9](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/clone/index.ts#L9)

Defines the Cloneable type

## Functions

### clone()

> **clone**\<`T`\>(`value`): `T`

Defined in: [clone/index.ts:20](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/clone/index.ts#L20)

Recursively clones values to prevent changing of the original value.

#### Type Parameters

##### T

`T` _extends_ [`Cloneable`](#cloneable)

#### Parameters

##### value

`T`

#### Returns

`T`
