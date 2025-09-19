[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / util

# util

## Functions

### field()

> **field**\<`T`\>(`key`): (`value`) => `T`\[keyof `T`\]

Defined in: [util/index.ts:22](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/util/index.ts#L22)

Utility function that returns the value for the matching objects key

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

keyof `T`

#### Returns

> (`value`): `T`\[keyof `T`\]

##### Parameters

###### value

`T`

##### Returns

`T`\[keyof `T`\]

#### Example

```ts
field("name")({name: "Peter"})
// returns the string "Peter"
```

***

### id()

> **id**\<`T`\>(`value`): `T`

Defined in: [util/index.ts:4](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/util/index.ts#L4)

Returns the given value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

`T`

***

### includes()

> **includes**(`searchString`): (`value`) => `boolean`

Defined in: [util/index.ts:12](https://github.com/maxkaemmerer/pure/blob/d30a4bc91e164edceedaf0820bc185ec52d2032f/src/util/index.ts#L12)

Checks if the given searchString is included in the value.
Easier to use for composition purposes than value.includes(x).

#### Parameters

##### searchString

`string`

#### Returns

> (`value`): `boolean`

##### Parameters

###### value

`string`

##### Returns

`boolean`
