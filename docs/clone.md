[**@kaumlaut/pure v0.5.2**](README.md)

---

[@kaumlaut/pure](README.md) / clone

# clone

Provides value cloning capabilities

## Type Aliases

### Cloneable

> **Cloneable** = `string` \| `number` \| `boolean` \| `null` \| [`Cloneable`](#cloneable)[] \| \{\[`key`: `string`\]: [`Cloneable`](#cloneable); \}

Defined in: [clone/index.ts:9](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/clone/index.ts#L9)

Defines the Cloneable type

## Functions

### clone()

> **clone**\<`T`\>(`value`): `T`

Defined in: [clone/index.ts:20](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/clone/index.ts#L20)

Recursively clones values to prevent changing of the original value.

#### Type Parameters

##### T

`T` _extends_ [`Cloneable`](#cloneable)

#### Parameters

##### value

`T`

#### Returns

`T`
