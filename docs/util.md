[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / util

# util

## Functions

### field()

> **field**\<`T`\>(`key`): (`value`) => `T`\[keyof `T`\]

Defined in: [util/index.ts:40](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/util/index.ts#L40)

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

Defined in: [util/index.ts:4](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/util/index.ts#L4)

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

Defined in: [util/index.ts:30](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/util/index.ts#L30)

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

***

### left()

> **left**\<`L`, `R`\>(`left`): (`right`) => `L` \| `R`

Defined in: [util/index.ts:11](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/util/index.ts#L11)

Returns the first (left) value passed

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### left

`L`

#### Returns

> (`right`): `L` \| `R`

##### Parameters

###### right

`R`

##### Returns

`L` \| `R`

***

### right()

> **right**\<`L`, `R`\>(`left`): (`right`) => `L` \| `R`

Defined in: [util/index.ts:19](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/util/index.ts#L19)

Returns the second (right) value passed

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### left

`L`

#### Returns

> (`right`): `L` \| `R`

##### Parameters

###### right

`R`

##### Returns

`L` \| `R`
