[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / util

# util

## Functions

### coerceOptionalFieldsAsMaybe()

> **coerceOptionalFieldsAsMaybe**\<`T`\>(`value`, `keys`): \{ \[Property in string \| number \| symbol\]: Maybe\<T\[keyof T\]\> \}

Defined in: [util/index.ts:53](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L53)

Takes an object with partial keys of type T and a list of keys for the wanted object type T.
Returns a new object with all keys of T present. The values are Just if the key was present and includes the value, or nothing if the key was not present.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### value

`Partial`\<`T`\>

##### keys

keyof `T`[]

#### Returns

\{ \[Property in string \| number \| symbol\]: Maybe\<T\[keyof T\]\> \}

***

### coerceOptionalFieldsAsMaybeByGuard()

> **coerceOptionalFieldsAsMaybeByGuard**\<`T`\>(`value`, `guards`): \{ \[Property in string \| number \| symbol\]: Maybe\<T\[keyof T\]\> \}

Defined in: [util/index.ts:70](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L70)

Takes an object with partial keys of type T and an object of ErrorAwareGuards used to validate T.
Returns a new object with all keys of T present. The values are Just with the value if the key was present and the value passed the corresponding ErrorAwareGuard or nothing if the key was not present.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### value

`Partial`\<`T`\>

##### guards

\{ \[K in string \| number \| symbol\]: ErrorAwareGuard\<T\[K\]\> \}

#### Returns

\{ \[Property in string \| number \| symbol\]: Maybe\<T\[keyof T\]\> \}

***

### field()

> **field**\<`T`\>(`key`): (`value`) => `T`\[keyof `T`\]

Defined in: [util/index.ts:43](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L43)

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

Defined in: [util/index.ts:7](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L7)

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

Defined in: [util/index.ts:33](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L33)

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

Defined in: [util/index.ts:14](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L14)

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

Defined in: [util/index.ts:22](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/util/index.ts#L22)

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
