[**@kaumlaut/pure v1.0.1**](../../README.md)

***

[@kaumlaut/pure](../../README.md) / [guard](../README.md) / Guard

# Guard

## Type Aliases

### Guard()\<T\>

> **Guard**\<`T`\> = (`value`) => `value is T`

Defined in: [guard/index.ts:13](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L13)

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

Defined in: [guard/index.ts:18](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L18)

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

Defined in: [guard/index.ts:158](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L158)

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

Defined in: [guard/index.ts:172](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L172)

Confirms the value is a boolean.

#### Parameters

##### value

`unknown`

#### Returns

`value is boolean`

***

### isBoth()

> **isBoth**\<`T`\>(`a`, `b`): (`value`) => `value is T`

Defined in: [guard/index.ts:26](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L26)

Confirms that the given value passes both guards.

#### Type Parameters

##### T

`T`

#### Parameters

##### a

[`Guard`](#guard)\<`T`\>

##### b

[`Guard`](#guard)\<`T`\>

#### Returns

> (`value`): `value is T`

##### Parameters

###### value

`unknown`

##### Returns

`value is T`

***

### isExactString()

> **isExactString**\<`T`\>(`expectedString`): (`value`) => `value is T`

Defined in: [guard/index.ts:138](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L138)

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

Defined in: [guard/index.ts:83](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L83)

Confirms that the value is a floating point number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isInt()

> **isInt**(`value`): `value is number`

Defined in: [guard/index.ts:72](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L72)

Confirms that the value is an integer.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isListOf()

> **isListOf**\<`T`\>(`guard`): (`value`) => `value is T[]`

Defined in: [guard/index.ts:187](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L187)

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

Defined in: [guard/index.ts:165](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L165)

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

Defined in: [guard/index.ts:259](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L259)

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

### isNonEmptyString()

> **isNonEmptyString**(`value`): `value is string`

Defined in: [guard/index.ts:42](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L42)

Confirms that the value is a non-empty string.

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

***

### isNull()

> **isNull**(`value`): `value is null`

Defined in: [guard/index.ts:179](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L179)

Confirms the value is null.

#### Parameters

##### value

`unknown`

#### Returns

`value is null`

***

### isNullOr()

> **isNullOr**\<`T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:214](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L214)

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

Defined in: [guard/index.ts:65](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L65)

Confirms that the value is a number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isNumberBetweenInclusive()

> **isNumberBetweenInclusive**\<`T`\>(`min`, `max`): (`value`) => `value is T`

Defined in: [guard/index.ts:270](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L270)

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

### isObject()

> **isObject**(`value`): `value is object`

Defined in: [guard/index.ts:59](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L59)

Confirms that the value is an object.

#### Parameters

##### value

`unknown`

#### Returns

`value is object`

***

### isObjectWithAllKeysMatchingGuard()

> **isObjectWithAllKeysMatchingGuard**\<`B`, `T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:224](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L224)

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

Defined in: [guard/index.ts:98](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L98)

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

Defined in: [guard/index.ts:108](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L108)

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

Defined in: [guard/index.ts:119](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L119)

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

Defined in: [guard/index.ts:204](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L204)

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

Defined in: [guard/index.ts:148](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L148)

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

> **isString**\<`T`\>(`value`): `value is T`

Defined in: [guard/index.ts:36](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L36)

Confirms that the value is a string.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### value

`unknown`

#### Returns

`value is T`

***

### isStringOfLength()

> **isStringOfLength**(`length`): (`value`) => `value is string`

Defined in: [guard/index.ts:49](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L49)

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

Defined in: [guard/index.ts:244](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L244)

Confirms the value is a string and matches the given regular expression.

#### Parameters

##### pattern

`RegExp`

#### Returns

[`Guard`](#guard)\<`string`\>

***

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: [guard/index.ts:252](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L252)

Confirms the value is undefined.

#### Parameters

##### value

`unknown`

#### Returns

`value is undefined`
