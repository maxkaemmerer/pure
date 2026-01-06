[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / tuple

# tuple

## Type Aliases

### Tuple\<L, R\>

> **Tuple**\<`L`, `R`\> = `object`

Defined in: [tuple/index.ts:1](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L1)

#### Type Parameters

##### L

`L`

##### R

`R`

#### Properties

##### left

> **left**: `L`

Defined in: [tuple/index.ts:2](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L2)

##### right

> **right**: `R`

Defined in: [tuple/index.ts:3](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L3)

## Functions

### left()

> **left**\<`L`, `R`\>(`value`): `L`

Defined in: [tuple/index.ts:38](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L38)

Returns the left value

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### value

[`Tuple`](#tuple)\<`L`, `R`\>

#### Returns

`L`

***

### mapLeft()

> **mapLeft**\<`L`, `R`, `T`\>(`func`): (`value`) => [`Tuple`](#tuple)\<`T`, `R`\>

Defined in: [tuple/index.ts:29](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L29)

Map the left value from type L to T using the given function

#### Type Parameters

##### L

`L`

##### R

`R`

##### T

`T`

#### Parameters

##### func

(`value`) => `T`

#### Returns

> (`value`): [`Tuple`](#tuple)\<`T`, `R`\>

##### Parameters

###### value

[`Tuple`](#tuple)\<`L`, `R`\>

##### Returns

[`Tuple`](#tuple)\<`T`, `R`\>

***

### mapRight()

> **mapRight**\<`L`, `R`, `T`\>(`func`): (`tuple`) => [`Tuple`](#tuple)\<`L`, `T`\>

Defined in: [tuple/index.ts:45](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L45)

Map the right value from type R to T using the given function

#### Type Parameters

##### L

`L`

##### R

`R`

##### T

`T`

#### Parameters

##### func

(`value`) => `T`

#### Returns

> (`tuple`): [`Tuple`](#tuple)\<`L`, `T`\>

##### Parameters

###### tuple

[`Tuple`](#tuple)\<`L`, `R`\>

##### Returns

[`Tuple`](#tuple)\<`L`, `T`\>

***

### right()

> **right**\<`L`, `R`\>(`value`): `R`

Defined in: [tuple/index.ts:54](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L54)

Returns the right value

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### value

[`Tuple`](#tuple)\<`L`, `R`\>

#### Returns

`R`

***

### same()

> **same**\<`T`\>(`value`): [`Tuple`](#tuple)\<`T`, `T`\>

Defined in: [tuple/index.ts:19](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L19)

Creates a Tuple with the same type and value for both left and right

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

[`Tuple`](#tuple)\<`T`, `T`\>

***

### tuple()

> **tuple**\<`L`, `R`\>(`left`): (`right`) => [`Tuple`](#tuple)\<`L`, `R`\>

Defined in: [tuple/index.ts:9](https://github.com/maxkaemmerer/pure/blob/3c4fa09f0f86ecd38bd58f0709ba22d89c241d7c/src/tuple/index.ts#L9)

Creates a Tuple with the given left and right values and types

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### left

`L`

#### Returns

> (`right`): [`Tuple`](#tuple)\<`L`, `R`\>

##### Parameters

###### right

`R`

##### Returns

[`Tuple`](#tuple)\<`L`, `R`\>
