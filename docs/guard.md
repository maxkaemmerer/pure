[**@kaumlaut/pure v1.0.0**](README.md)

***

[@kaumlaut/pure](README.md) / guard

# guard

Provides easily composable generic type guards

## Type Aliases

### Guard()\<T\>

> **Guard**\<`T`\> = (`value`) => `value is T`

Defined in: [guard/index.ts:11](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L11)

Represents a type guard

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is T`

## Functions

### isAll()

> **isAll**\<`T`\>(`guards`): (`value`) => `value is T`

Defined in: [guard/index.ts:16](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L16)

Confirms that the given value passes all guards.

#### Type Parameters

##### T

`T`

#### Parameters

##### guards

[`Guard`](#guard)\<`T`\>[]

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isAlways()

> **isAlways**\<`T`\>(`value`): `value is T`

Defined in: [guard/index.ts:133](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L133)

Always passes.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is T`

***

### isBool()

> **isBool**(`value`): `value is boolean`

Defined in: [guard/index.ts:147](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L147)

Confirms the value is a boolean.

#### Parameters

##### value

`unknown`

#### Returns

`value is boolean`

***

### isExactString()

> **isExactString**\<`T`\>(`expectedString`): (`value`) => `value is T`

Defined in: [guard/index.ts:113](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L113)

Confirms the value exactly matched the given string.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### expectedString

`string`

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isFloat()

> **isFloat**(`value`): `value is number`

Defined in: [guard/index.ts:58](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L58)

Confirms that the value is a floating point number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isInt()

> **isInt**(`value`): `value is number`

Defined in: [guard/index.ts:47](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L47)

Confirms that the value is an integer.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isListOf()

> **isListOf**\<`T`\>(`guard`): (`value`) => `value is T[]`

Defined in: [guard/index.ts:162](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L162)

Confirms the value is a list of items that all pass the given guard.
Calls console.debug with an error message to improve debugging when a large type does not match.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](#guard)\<`T`\>

#### Returns

> (`value`): `value is T[]`

##### Parameters

###### value

`unknown`

##### Returns

`value is T[]`

***

### isNever()

> **isNever**\<`T`\>(`value`): `value is T`

Defined in: [guard/index.ts:140](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L140)

Never passes.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

`value is T`

***

### isNonEmptyListOf()

> **isNonEmptyListOf**\<`T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:232](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L232)

Confirms the value is a list with atleast one item and all items match the given guard.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](#guard)\<`T`\>

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isNull()

> **isNull**(`value`): `value is null`

Defined in: [guard/index.ts:154](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L154)

Confirms the value is null.

#### Parameters

##### value

`unknown`

#### Returns

`value is null`

***

### isNullOr()

> **isNullOr**\<`T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:187](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L187)

Confirms the value is either null or passes the given Guard.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](#guard)\<`T`\>

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [guard/index.ts:40](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L40)

Confirms that the value is a number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isNumberBetweenInclusive()

> **isNumberBetweenInclusive**\<`T`\>(`min`, `max`): (`value`) => `value is T`

Defined in: [guard/index.ts:243](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L243)

Confirms the value is number between min and max inclusive.
Meaning if the value equals min or max the guard passes.

#### Type Parameters

##### T

`T`

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isObjectWithAllKeysMatchingGuard()

> **isObjectWithAllKeysMatchingGuard**\<`B`, `T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:197](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L197)

Confirms the value is an object where every value matches the given guard.
Calls console.debug with an error message to improve debugging when a large type does not match.

#### Type Parameters

##### B

`B`

##### T

`T` *extends* `object`

#### Parameters

##### guard

[`Guard`](#guard)\<`B`\>

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isObjectWithKey()

> **isObjectWithKey**\<`T`\>(`key`): (`value`) => `value is T`

Defined in: [guard/index.ts:73](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L73)

Confirms that the value is an object containing the specified key.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

keyof `T`

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isObjectWithKeys()

> **isObjectWithKeys**\<`T`\>(`keys`): (`value`) => `value is T`

Defined in: [guard/index.ts:83](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L83)

Confirms that the value is an object containing the specified keys.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### keys

keyof `T`[]

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isObjectWithKeysMatchingGuard()

> **isObjectWithKeysMatchingGuard**\<`T`\>(`guards`): (`value`) => `value is T`

Defined in: [guard/index.ts:94](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L94)

Confirms that the value is an object whose key value pairs match the corresponding type guards.
Calls console.debug with an error message to improve debugging when a large type does not match.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### guards

\{ \[K in string \| number \| symbol\]: Guard\<T\[K\]\> \}

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isOneOf()

> **isOneOf**\<`T1`, `T2`\>(`a`, `b`): (`value`) => value is T1 \| T2

Defined in: [guard/index.ts:177](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L177)

Confirms the value passes at least one of the given Guards.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

#### Parameters

##### a

[`Guard`](#guard)\<`T1`\>

##### b

[`Guard`](#guard)\<`T2`\>

#### Returns

> (`value`): value is T1 \| T2

##### Parameters

###### value

`unknown`

##### Returns

value is T1 \| T2

***

### isOneStringOf()

> **isOneStringOf**\<`T`\>(`validValues`): (`value`) => `value is T`

Defined in: [guard/index.ts:123](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L123)

Confirms the value is one of the given valid values.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### validValues

`string`[]

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isString()

> **isString**(`value`): `value is string`

Defined in: [guard/index.ts:23](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L23)

Confirms that the value is a string.

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

***

### isStringOfLength()

> **isStringOfLength**(`length`): (`value`) => `value is string`

Defined in: [guard/index.ts:30](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L30)

Confirms that the value is a string with specified length.

#### Parameters

##### length

`number`

#### Returns

> (`value`): `value is string`

##### Parameters

###### value

`unknown`

##### Returns

`value is string`

***

### isStringWithPattern()

> **isStringWithPattern**(`pattern`): [`Guard`](#guard)\<`string`\>

Defined in: [guard/index.ts:217](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L217)

Confirms the value is a string and matches the given regular expression.

#### Parameters

##### pattern

`RegExp`

#### Returns

[`Guard`](#guard)\<`string`\>

***

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: [guard/index.ts:225](https://github.com/maxkaemmerer/pure/blob/e24bfcf623e3d0036c8f97e38bf7ea0a05f6c156/src/guard/index.ts#L225)

Confirms the value is undefined.

#### Parameters

##### value

`unknown`

#### Returns

`value is undefined`
