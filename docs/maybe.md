[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / maybe

# maybe

Provides types representing the Maybe concept as well as functions to work with it.

## Type Aliases

### Just\<T\>

> **Just**\<`T`\> = `object`

Defined in: [maybe/index.ts:20](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L20)

Represents a Maybe containing a value.

#### Example

```ts
if (isJust(maybe)) {
 // the isJust guard tells typescript that maybe has a value of type number
 console.log("Something here: " + maybe.value)
}
```

#### Type Parameters

##### T

`T`

#### Properties

##### type

> **type**: `"maybe-just"`

Defined in: [maybe/index.ts:21](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L21)

##### value

> **value**: `T`

Defined in: [maybe/index.ts:22](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L22)

***

### Maybe\<T\>

> **Maybe**\<`T`\> = [`Just`](#just)\<`T`\> \| [`Nothing`](#nothing)

Defined in: [maybe/index.ts:40](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L40)

Represents the Maybe type.

#### Type Parameters

##### T

`T`

***

### Nothing

> **Nothing** = `object`

Defined in: [maybe/index.ts:33](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L33)

Represents a Maybe not containing a value.

#### Example

```ts
if (isNothing(maybe)) {
     // no value property exists on maybe
     console.log("Nothing here")
 }
```

#### Properties

##### type

> **type**: `"maybe-nothing"`

Defined in: [maybe/index.ts:34](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L34)

## Functions

### bothNothing()

> **bothNothing**\<`T`\>(`a`, `b`): `boolean`

Defined in: [maybe/index.ts:226](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L226)

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

***

### concat()

> **concat**\<`T`\>(`combine`): (`a`) => (`b`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:242](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L242)

Combines two Maybe<T>. If both are Just<T> the combine function is used
Otherwise Either a single Just is returned directly
Or Nothing is retured if both are Nothing

#### Type Parameters

##### T

`T`

#### Parameters

##### combine

(`aValue`, `bValue`) => `T`

#### Returns

> (`a`): (`b`) => [`Maybe`](#maybe)\<`T`\>

##### Parameters

###### a

[`Maybe`](#maybe)\<`T`\>

##### Returns

> (`b`): [`Maybe`](#maybe)\<`T`\>

###### Parameters

###### b

[`Maybe`](#maybe)\<`T`\>

###### Returns

[`Maybe`](#maybe)\<`T`\>

***

### eqBy()

> **eqBy**\<`T`, `T2`\>(`by`): (`a`, `b`) => `boolean`

Defined in: [maybe/index.ts:211](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L211)

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

***

### filter()

> **filter**\<`T`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:103](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L103)

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

***

### fromListAndIndex()

> **fromListAndIndex**\<`T`\>(`index`, `list`): [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:233](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L233)

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

***

### isJust()

> **isJust**\<`T`\>(`maybe`): `maybe is Just<T>`

Defined in: [maybe/index.ts:71](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L71)

A Guard confirming that the given maybe value is a Just.

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](#maybe)\<`T`\>

#### Returns

`maybe is Just<T>`

***

### isMaybe()

> **isMaybe**\<`T`\>(`value`): `value is Maybe<T>`

Defined in: [maybe/index.ts:78](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L78)

A Guard confirming that the given value is a Maybe.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is Maybe<T>`

***

### isNothing()

> **isNothing**\<`T`\>(`maybe`): `maybe is Nothing`

Defined in: [maybe/index.ts:64](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L64)

A Guard confirming that the given maybe value is a Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### maybe

[`Maybe`](#maybe)\<`T`\>

#### Returns

`maybe is Nothing`

***

### just()

> **just**\<`T`\>(`value`): [`Just`](#just)\<`T`\>

Defined in: [maybe/index.ts:54](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L54)

Creates a maybe containing a value. (Just)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

[`Just`](#just)\<`T`\>

***

### map()

> **map**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:88](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L88)

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

***

### mapToMaybe()

> **mapToMaybe**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:173](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L173)

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

***

### maybeByErrorAwareGuard()

> **maybeByErrorAwareGuard**\<`T`\>(`guard`): (`value`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:155](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L155)

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

***

### maybeByGuard()

> **maybeByGuard**\<`T`\>(`guard`): (`value`) => [`Maybe`](#maybe)\<`T`\>

Defined in: [maybe/index.ts:144](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L144)

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

***

### nothing()

> **nothing**(): [`Nothing`](#nothing)

Defined in: [maybe/index.ts:45](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L45)

Creates a maybe not containing a value. (Nothing)

#### Returns

[`Nothing`](#nothing)

***

### preferLeft()

> **preferLeft**\<`L`, `R`\>(`value`): [`Nothing`](#nothing) \| [`Just`](#just)\<`L`\> \| [`Just`](#just)\<`R`\>

Defined in: [maybe/index.ts:255](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L255)

Returns the left value of a Tuple<Maybe<L>, Maybe<R>> if it a Just<L>, otherwise returns the right value.

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### value

[`Tuple`](tuple.md#tuple)\<[`Maybe`](#maybe)\<`L`\>, [`Maybe`](#maybe)\<`R`\>\>

#### Returns

[`Nothing`](#nothing) \| [`Just`](#just)\<`L`\> \| [`Just`](#just)\<`R`\>

***

### preferRight()

> **preferRight**\<`L`, `R`\>(`value`): [`Nothing`](#nothing) \| [`Just`](#just)\<`L`\> \| [`Just`](#just)\<`R`\>

Defined in: [maybe/index.ts:264](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L264)

Returns the right value of a Tuple<Maybe<L>, Maybe<R>> if it a Just<R>, otherwise returns the left value.

#### Type Parameters

##### L

`L`

##### R

`R`

#### Parameters

##### value

[`Tuple`](tuple.md#tuple)\<[`Maybe`](#maybe)\<`L`\>, [`Maybe`](#maybe)\<`R`\>\>

#### Returns

[`Nothing`](#nothing) \| [`Just`](#just)\<`L`\> \| [`Just`](#just)\<`R`\>

***

### toResult()

> **toResult**\<`T`, `E`\>(`error`): (`maybe`) => [`Result`](result.md#result)\<`T`, `E`\>

Defined in: [maybe/index.ts:137](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L137)

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

***

### tryMap()

> **tryMap**\<`T`, `R`\>(`func`): (`maybe`) => [`Maybe`](#maybe)\<`R`\>

Defined in: [maybe/index.ts:190](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L190)

Runs the given function with the contained value if maybe is Just<T>
If an error occurs it returns Nothing.
Otherwise it returns the mapped value inside a Just<R>.

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

***

### withDefault()

> **withDefault**\<`T`\>(`defaultValue`): (`maybe`) => `T`

Defined in: [maybe/index.ts:122](https://github.com/maxkaemmerer/pure/blob/2f4dca6d9662ea84dd97f260210e875967f703e6/src/maybe/index.ts#L122)

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
