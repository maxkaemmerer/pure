[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / guard

# guard

Provides easily composable generic type guards

## Type Aliases

### Guard()\<T\>

> **Guard**\<`T`\> = (`value`) => `value is T`

Defined in: [guard/index.ts:11](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L11)

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

Defined in: [guard/index.ts:16](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L16)

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

Defined in: [guard/index.ts:155](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L155)

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

Defined in: [guard/index.ts:169](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L169)

Confirms the value is a boolean.

#### Parameters

##### value

`unknown`

#### Returns

`value is boolean`

***

### isBoth()

> **isBoth**\<`T`\>(`a`, `b`): (`value`) => `value is T`

Defined in: [guard/index.ts:23](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L23)

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

Defined in: [guard/index.ts:135](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L135)

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

Defined in: [guard/index.ts:80](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L80)

Confirms that the value is a floating point number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isInt()

> **isInt**(`value`): `value is number`

Defined in: [guard/index.ts:69](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L69)

Confirms that the value is an integer.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isListOf()

> **isListOf**\<`T`\>(`guard`): (`value`) => `value is T[]`

Defined in: [guard/index.ts:184](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L184)

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

Defined in: [guard/index.ts:162](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L162)

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

Defined in: [guard/index.ts:254](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L254)

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

Defined in: [guard/index.ts:39](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L39)

Confirms that the value is a non-empty string.

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

***

### isNull()

> **isNull**(`value`): `value is null`

Defined in: [guard/index.ts:176](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L176)

Confirms the value is null.

#### Parameters

##### value

`unknown`

#### Returns

`value is null`

***

### isNullOr()

> **isNullOr**\<`T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:209](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L209)

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

Defined in: [guard/index.ts:62](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L62)

Confirms that the value is a number.

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

***

### isNumberBetweenInclusive()

> **isNumberBetweenInclusive**\<`T`\>(`min`, `max`): (`value`) => `value is T`

Defined in: [guard/index.ts:265](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L265)

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

Defined in: [guard/index.ts:56](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L56)

Confirms that the value is an object.

#### Parameters

##### value

`unknown`

#### Returns

`value is object`

***

### isObjectWithAllKeysMatchingGuard()

> **isObjectWithAllKeysMatchingGuard**\<`B`, `T`\>(`guard`): (`value`) => `value is T`

Defined in: [guard/index.ts:219](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L219)

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

Defined in: [guard/index.ts:95](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L95)

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

Defined in: [guard/index.ts:105](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L105)

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

Defined in: [guard/index.ts:116](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L116)

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

Defined in: [guard/index.ts:199](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L199)

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

Defined in: [guard/index.ts:145](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L145)

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

Defined in: [guard/index.ts:33](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L33)

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

Defined in: [guard/index.ts:46](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L46)

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

Defined in: [guard/index.ts:239](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L239)

Confirms the value is a string and matches the given regular expression.

#### Parameters

##### pattern

`RegExp`

#### Returns

[`Guard`](#guard)\<`string`\>

***

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: [guard/index.ts:247](https://github.com/maxkaemmerer/pure/blob/8637ca7e93541610b2c23e6a53c45c83b6680327/src/guard/index.ts#L247)

Confirms the value is undefined.

#### Parameters

##### value

`unknown`

#### Returns

`value is undefined`
