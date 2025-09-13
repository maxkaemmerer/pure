[**@kaumlaut/pure**](README.md)

---

[@kaumlaut/pure](README.md) / maybe

# maybe

Provides types representing the Maybe concept as well as functions to work with it.

## Type Aliases

### Just\<T\>

> **Just**\<`T`\> = `object`

Defined in: [maybe/index.ts:19](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L19)

Represents a Maybe containing a value.

#### Example

```ts
if (isJust(maybe)) {
  // the isJust guard tells typescript that maybe has a value of type number
  console.log("Something here: " + maybe.value);
}
```

#### Type Parameters

##### T

`T`

#### Properties

##### type

> **type**: `"maybe-just"`

Defined in: [maybe/index.ts:20](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L20)

##### value

> **value**: `T`

Defined in: [maybe/index.ts:21](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L21)

---

### Maybe\<T\>

> **Maybe**\<`T`\> = [`Just`](#just)\<`T`\> \| [`Nothing`](#nothing)

Defined in: [maybe/index.ts:39](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L39)

Represents the Maybe type.

#### Type Parameters

##### T

`T`

---

### Nothing

> **Nothing** = `object`

Defined in: [maybe/index.ts:32](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L32)

Represents a Maybe not containing a value.

#### Example

```ts
if (isNothing(maybe)) {
  // no value property exists on maybe
  console.log("Nothing here");
}
```

#### Properties

##### type

> **type**: `"maybe-nothing"`

Defined in: [maybe/index.ts:33](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L33)

## Functions

### bothNothing()

> **bothNothing**\<`T`\>(`a`, `b`): `boolean`

Defined in: [maybe/index.ts:222](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L222)

Returns true if both values are Nothing

#### Type Parameters

##### T

`T`

#### Parameters

##### a

[`Maybe`](#maybe)\<`T`\>

##### b

[`Maybe`](#maybe)\<`T`\>

#### Returns

`boolean`

---

### eqBy()

> **eqBy**\<`T`, `T2`\>(`by`): (`a`, `b`) => `boolean`

Defined in: [maybe/index.ts:207](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L207)

Returns true if both values are either Just with matching predicate return values
Or if both values are Nothing

#### Type Parameters

##### T

`T`

##### T2

`T2`

#### Parameters

##### by

(`value`) => `T2`

#### Returns

> (`a`, `b`): `boolean`

##### Parameters

###### a

[`Maybe`](#maybe)\<`T`\>

###### b

[`Maybe`](#maybe)\<`T`\>

##### Returns

`boolean`

---

### filter()

> **filter**\<`T`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:100](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L100)

Converts the given Maybe into a Nothing if it is Just but does not pass the given function.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`value`) => `boolean`

#### Returns

> (`maybe`): [`Maybe`](#maybe)\<`T`\>

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

[`Maybe`](#maybe)\<`T`\>

---

### fromListAndIndex()

> **fromListAndIndex**\<`T`\>(`index`, `list`): [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:229](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L229)

Creates a Maybe<T> from a list and an index. Just if the key exists, Nothing if it doesn't

#### Type Parameters

##### T

`T`

#### Parameters

##### index

`number`

##### list

`T`[]

#### Returns

[`Maybe`](#maybe)\<`T`\>

---

### isJust()

> **isJust**\<`T`\>(`maybe`): `maybe is Just<T>`

Defined in: [maybe/index.ts:70](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L70)

A Guard confirming that the given maybe value is a Just.

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](#maybe)\<`T`\>

#### Returns

`maybe is Just<T>`

---

### isMaybe()

> **isMaybe**\<`T`\>(`value`): `value is Maybe<T>`

Defined in: [maybe/index.ts:77](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L77)

A Guard confirming that the given value is a Maybe.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is Maybe<T>`

---

### isNothing()

> **isNothing**\<`T`\>(`maybe`): `maybe is Nothing`

Defined in: [maybe/index.ts:63](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L63)

A Guard confirming that the given maybe value is a Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](#maybe)\<`T`\>

#### Returns

`maybe is Nothing`

---

### just()

> **just**\<`T`\>(`value`): [`Just`](#just)\<`T`\>

Defined in: [maybe/index.ts:53](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L53)

Creates a maybe containing a value. (Just)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

[`Just`](#just)\<`T`\>

---

### map()

> **map**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:85](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L85)

Applies the func function to the value if the given Maybe is a Just and returns it wrapped in a Just. Otherwise returns the given Maybe.

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### func

(`value`) => `R`

#### Returns

> (`maybe`): [`Maybe`](#maybe)\<`R`\>

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

[`Maybe`](#maybe)\<`R`\>

---

### mapToMaybe()

> **mapToMaybe**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:170](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L170)

Maps the a value contained within a Just using the given function without wrapping it in another Just.
Returns the given Maybe if it is a Nothing.

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### func

(`value`) => [`Maybe`](#maybe)\<`R`\>

#### Returns

> (`maybe`): [`Maybe`](#maybe)\<`R`\>

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

[`Maybe`](#maybe)\<`R`\>

---

### maybeByErrorAwareGuard()

> **maybeByErrorAwareGuard**\<`T`\>(`guard`): (`value`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:152](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L152)

Creates a Just if the ErrorAwareGuard passes for the given value. Otherwise Creates a Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`ErrorAwareGuard`](error-aware-guard.md#errorawareguard)\<`T`\>

#### Returns

> (`value`): [`Maybe`](#maybe)\<`T`\>

##### Parameters

###### value

`unknown`

##### Returns

[`Maybe`](#maybe)\<`T`\>

---

### maybeByGuard()

> **maybeByGuard**\<`T`\>(`guard`): (`value`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:141](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L141)

Creates a Just if the Guard passes for the given value. Otherwise Creates a Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](guard.md#guard)\<`T`\>

#### Returns

> (`value`): [`Maybe`](#maybe)\<`T`\>

##### Parameters

###### value

`unknown`

##### Returns

[`Maybe`](#maybe)\<`T`\>

---

### nothing()

> **nothing**(): [`Nothing`](#nothing)

Defined in: [maybe/index.ts:44](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L44)

Creates a maybe not containing a value. (Nothing)

#### Returns

[`Nothing`](#nothing)

---

### toResult()

> **toResult**\<`T`, `E`\>(`error`): (`maybe`) => [`Result`](result.md#result)\<`T`, `E`\>

Defined in: [maybe/index.ts:134](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L134)

Converts the given Maybe to a Result.
A Nothing becomes an Err with the given error.
A Just becomes an Ok with the contained value.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### error

`E`

#### Returns

> (`maybe`): [`Result`](result.md#result)\<`T`, `E`\>

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

[`Result`](result.md#result)\<`T`, `E`\>

---

### tryMap()

> **tryMap**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:186](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L186)

Maps the a value contained within a Just using the given function without wrapping it in another Just.
Returns the given Maybe if it is a Nothing.

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### func

(`value`) => `R`

#### Returns

> (`maybe`): [`Maybe`](#maybe)\<`R`\>

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

[`Maybe`](#maybe)\<`R`\>

---

### withDefault()

> **withDefault**\<`T`\>(`defaultValue`): (`maybe`) => `T`

Defined in: [maybe/index.ts:119](https://github.com/maxkaemmerer/pure/blob/7d6dd89bd92ad8e578666976a4b450075db35938/src/maybe/index.ts#L119)

Unwraps a Maybe, returning the value if it is a Just or the default value if it is a Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### defaultValue

`T`

#### Returns

> (`maybe`): `T`

##### Parameters

###### maybe

[`Maybe`](#maybe)\<`T`\>

##### Returns

`T`
