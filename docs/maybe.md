[**@kaumlaut/pure v0.5.2**](README.md)

---

[@kaumlaut/pure](README.md) / maybe

# maybe

Provides types representing the Maybe concept as well as functions to work with it.

## Type Aliases

### Just\<T\>

> **Just**\<`T`\> = `object`

Defined in: [maybe/index.ts:18](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L18)

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

Defined in: [maybe/index.ts:19](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L19)

##### value

> **value**: `T`

Defined in: [maybe/index.ts:20](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L20)

---

### Maybe\<T\>

> **Maybe**\<`T`\> = [`Just`](#just)\<`T`\> \| [`Nothing`](#nothing)

Defined in: [maybe/index.ts:38](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L38)

Represents the Maybe type.

#### Type Parameters

##### T

`T`

---

### Nothing

> **Nothing** = `object`

Defined in: [maybe/index.ts:31](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L31)

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

Defined in: [maybe/index.ts:32](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L32)

## Functions

### filter()

> **filter**\<`T`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:99](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L99)

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

### isJust()

> **isJust**\<`T`\>(`maybe`): `maybe is Just<T>`

Defined in: [maybe/index.ts:69](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L69)

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

Defined in: [maybe/index.ts:76](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L76)

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

Defined in: [maybe/index.ts:62](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L62)

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

Defined in: [maybe/index.ts:52](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L52)

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

Defined in: [maybe/index.ts:84](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L84)

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

Defined in: [maybe/index.ts:150](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L150)

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

### maybeByGuard()

> **maybeByGuard**\<`T`\>(`guard`): (`value`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:140](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L140)

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

Defined in: [maybe/index.ts:43](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L43)

Creates a maybe not containing a value. (Nothing)

#### Returns

[`Nothing`](#nothing)

---

### toResult()

> **toResult**\<`T`, `E`\>(`error`): (`maybe`) => [`Result`](result.md#result)\<`T`, `E`\>

Defined in: [maybe/index.ts:133](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L133)

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

Defined in: [maybe/index.ts:166](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L166)

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

Defined in: [maybe/index.ts:118](https://github.com/maxkaemmerer/pure-vue-poc/blob/1f00f47d2f3c329e3dda9a01eb5ed8ebf93253d3/pure/src/maybe/index.ts#L118)

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
