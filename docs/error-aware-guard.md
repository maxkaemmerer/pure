[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / error-aware-guard

# error-aware-guard

Provides easily composable generic type guards that track errors

## Type Aliases

### ErrorAwareGuard()\<T\>

> **ErrorAwareGuard**\<`T`\> = (`value`) => [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:28](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L28)

Represents a function that returns a wrapped value on success or a wrapped error on failure

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

#### Returns

[`ValidationResult`](#validationresult)\<`T`\>

***

### ErrorResult

> **ErrorResult** = `object`

Defined in: [error-aware-guard/index.ts:15](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L15)

Represents a failed ErrorAwareGuard, containing errors

#### Properties

##### errors

> `readonly` **errors**: `string`[]

Defined in: [error-aware-guard/index.ts:17](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L17)

##### success

> `readonly` **success**: `false`

Defined in: [error-aware-guard/index.ts:16](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L16)

***

### SuccessResult\<T\>

> **SuccessResult**\<`T`\> = `object`

Defined in: [error-aware-guard/index.ts:10](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L10)

Represents a successful ErrorAwareGuard, containing the value

#### Type Parameters

##### T

`T`

#### Properties

##### success

> `readonly` **success**: `true`

Defined in: [error-aware-guard/index.ts:10](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L10)

##### value

> `readonly` **value**: `T`

Defined in: [error-aware-guard/index.ts:10](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L10)

***

### ValidationResult\<T\>

> **ValidationResult**\<`T`\> = [`SuccessResult`](#successresult)\<`T`\> \| [`ErrorResult`](#errorresult)

Defined in: [error-aware-guard/index.ts:23](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L23)

Represents the result of a ErrorAwareGuard

#### Type Parameters

##### T

`T`

## Variables

### isAlways

> `const` **isAlways**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [error-aware-guard/index.ts:356](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L356)

Always passes.

***

### isBool

> `const` **isBool**: [`ErrorAwareGuard`](#errorawareguard)\<`boolean`\>

Defined in: [error-aware-guard/index.ts:322](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L322)

Confirms that the value is a boolean.

***

### isFloat

> `const` **isFloat**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:327](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L327)

Confirms that the value is a float.

***

### isInt

> `const` **isInt**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:334](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L334)

Confirms that the value is an interger.

***

### isNever

> `const` **isNever**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [error-aware-guard/index.ts:361](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L361)

Never passes.

***

### isNonEmptyString

> `const` **isNonEmptyString**: [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [error-aware-guard/index.ts:366](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L366)

Confirms that the value is a non-empty string.

***

### isNull

> `const` **isNull**: [`ErrorAwareGuard`](#errorawareguard)\<`null`\>

Defined in: [error-aware-guard/index.ts:339](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L339)

Confirms that the value is null.

***

### isNumber

> `const` **isNumber**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:303](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L303)

Confirms that the value is a number.

***

### isObject

> `const` **isObject**: [`ErrorAwareGuard`](#errorawareguard)\<`object`\>

Defined in: [error-aware-guard/index.ts:351](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L351)

Confirms that the value is an object.

***

### isUndefined

> `const` **isUndefined**: [`ErrorAwareGuard`](#errorawareguard)\<`undefined`\>

Defined in: [error-aware-guard/index.ts:344](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L344)

Confirms that the value is undefined.

## Functions

### check()

> **check**\<`T`\>(`value`, `guard`): `value is T`

Defined in: [error-aware-guard/index.ts:77](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L77)

Evaluates an ErrorAwareGuard<T> for given value

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`unknown`

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

#### Returns

`value is T`

***

### combineResultsAll()

> **combineResultsAll**\<`T`\>(...`results`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:88](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L88)

Combines a list of results. Returning a SuccessResult<T> if all of them are SucessResult<T>
or returns an ErrorResult with combined errors if any of them are ErrorResult.

#### Type Parameters

##### T

`T`

#### Parameters

##### results

...[`ValidationResult`](#validationresult)\<`T`\>[]

#### Returns

[`ValidationResult`](#validationresult)\<`T`\>

***

### combineResultsOneOf()

> **combineResultsOneOf**\<`T`\>(...`results`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:164](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L164)

Combines a list of results. Returning a SuccessResult<T> if either of them are SucessResult<T>
or returns an ErrorResult with combined errors if all are an ErrorResult.

#### Type Parameters

##### T

`T`

#### Parameters

##### results

...[`ValidationResult`](#validationresult)\<`T`\>[]

#### Returns

[`ValidationResult`](#validationresult)\<`T`\>

***

### combineTwoResultsAnd()

> **combineTwoResultsAnd**\<`T1`, `T2`\>(`a`, `b`): [`ValidationResult`](#validationresult)\<`T1` & `T2`\>

Defined in: [error-aware-guard/index.ts:117](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L117)

Combines two results. Returning a SuccessResult<T> if both of them are SucessResult<T>
or returns an ErrorResult with combined errors if one is an ErrorResult.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

#### Parameters

##### a

[`ValidationResult`](#validationresult)\<`T1`\>

##### b

[`ValidationResult`](#validationresult)\<`T2`\>

#### Returns

[`ValidationResult`](#validationresult)\<`T1` & `T2`\>

***

### combineTwoResultsOneOf()

> **combineTwoResultsOneOf**\<`T1`, `T2`\>(`a`, `b`): [`ValidationResult`](#validationresult)\<`T1` \| `T2`\>

Defined in: [error-aware-guard/index.ts:137](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L137)

Combines two results. Returning a SuccessResult<T> if either of them are SucessResult<T>
or returns an ErrorResult with combined errors if both are an ErrorResult.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

#### Parameters

##### a

[`ValidationResult`](#validationresult)\<`T1`\>

##### b

[`ValidationResult`](#validationresult)\<`T2`\>

#### Returns

[`ValidationResult`](#validationresult)\<`T1` \| `T2`\>

***

### fail()

> **fail**(...`errors`): [`ErrorResult`](#errorresult)

Defined in: [error-aware-guard/index.ts:33](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L33)

Creates an ErrorResult with the given errors

#### Parameters

##### errors

...`string`[]

#### Returns

[`ErrorResult`](#errorresult)

***

### fromGuard()

> **fromGuard**\<`T`\>(`guard`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:188](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L188)

Converts a Guard<T> to an ErrorAwareGuard<T> with provided error factory function

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](guard.md#guard)\<`T`\>

##### createErrors

(`value`) => `string`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isAll()

> **isAll**\<`T`\>(`guards`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:246](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L246)

Confirms that the given value passes all guards.

#### Type Parameters

##### T

`T`

#### Parameters

##### guards

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isBoth()

> **isBoth**\<`T1`, `T2`\>(`a`, `b`): [`ErrorAwareGuard`](#errorawareguard)\<`T1` & `T2`\>

Defined in: [error-aware-guard/index.ts:232](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L232)

Confirms that the given value passes both guards.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

#### Parameters

##### a

[`ErrorAwareGuard`](#errorawareguard)\<`T1`\>

##### b

[`ErrorAwareGuard`](#errorawareguard)\<`T2`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T1` & `T2`\>

***

### isExactString()

> **isExactString**\<`T`\>(`expectedString`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:314](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L314)

Confirms that the value is an exact string.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### expectedString

`T`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isListOf()

> **isListOf**\<`I`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`I`[]\>

Defined in: [error-aware-guard/index.ts:275](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L275)

Confirms the value is a list of items that all pass the given guard.

#### Type Parameters

##### I

`I`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`I`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`I`[]\>

***

### isNonEmptyListOf()

> **isNonEmptyListOf**\<`I`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`I`[]\>

Defined in: [error-aware-guard/index.ts:397](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L397)

Confirms the value is a list with atleast one item and all items match the given guard.

#### Type Parameters

##### I

`I`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`I`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`I`[]\>

***

### isNullOr()

> **isNullOr**\<`T`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:418](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L418)

Confirms the value is either null or passes the given Guard.

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isNumberBetweenInclusive()

> **isNumberBetweenInclusive**(`min`, `max`): [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:408](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L408)

Confirms the value is number between min and max inclusive.
Meaning if the value equals min or max the guard passes.

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`number`\>

***

### isObjectWithAllKeysMatchingGuard()

> **isObjectWithAllKeysMatchingGuard**\<`T`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:491](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L491)

Confirms the value is an object where every value matches the given guard.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\[keyof `T`\]\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKey()

> **isObjectWithKey**\<`T`\>(`key`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:430](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L430)

Confirms that the value is an object containing the specified key.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

keyof `T`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeyMatchingGuard()

> **isObjectWithKeyMatchingGuard**\<`T`\>(`key`, `guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:443](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L443)

Confirms that the value is an object containing the specified key the value matching the given guard.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

keyof `T`

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\[keyof `T`\]\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeys()

> **isObjectWithKeys**\<`T`\>(`keys`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:466](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L466)

Confirms that the value is an object containing the specified keys.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### keys

keyof `T`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeysMatchingGuard()

> **isObjectWithKeysMatchingGuard**\<`T`\>(`guards`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:475](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L475)

Confirms that the value is an object whose key value pairs match the corresponding type guards.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### guards

\{ \[K in string \| number \| symbol\]: ErrorAwareGuard\<T\[K\]\> \}

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isOneOf()

> **isOneOf**\<`T1`, `T2`\>(`a`, `b`): [`ErrorAwareGuard`](#errorawareguard)\<`T1` \| `T2`\>

Defined in: [error-aware-guard/index.ts:255](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L255)

Confirms the value passes at least one of the given Guards.

#### Type Parameters

##### T1

`T1`

##### T2

`T2`

#### Parameters

##### a

[`ErrorAwareGuard`](#errorawareguard)\<`T1`\>

##### b

[`ErrorAwareGuard`](#errorawareguard)\<`T2`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T1` \| `T2`\>

***

### isOneStringOf()

> **isOneStringOf**\<`T`\>(`validValues`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:420](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L420)

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### validValues

`T`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isString()

> **isString**\<`T`\>(`value`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:308](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L308)

Confirms that the value is a string.

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### value

`unknown`

#### Returns

[`ValidationResult`](#validationresult)\<`T`\>

***

### isStringOfLength()

> **isStringOfLength**(`length`): [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [error-aware-guard/index.ts:375](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L375)

Confirms that the value is a string with specified length.

#### Parameters

##### length

`number`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### isStringWithPattern()

> **isStringWithPattern**(`pattern`): [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [error-aware-guard/index.ts:387](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L387)

Confirms the value is a string and matches the given regular expression.

#### Parameters

##### pattern

`RegExp`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### pass()

> **pass**\<`T`\>(`value`): [`SuccessResult`](#successresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:43](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L43)

Creates an SuccessResult<T> with the given value

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

#### Returns

[`SuccessResult`](#successresult)\<`T`\>

***

### prefixErrors()

> **prefixErrors**\<`T`\>(`value`, `prefix`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:53](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L53)

Takes a ValidationResult<T> and if it is an ErrorResult, prefixes every error with the given prefix.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

[`ValidationResult`](#validationresult)\<`T`\>

##### prefix

`string`

#### Returns

[`ValidationResult`](#validationresult)\<`T`\>

***

### toGuard()

> **toGuard**\<`T`\>(`guard`): [`Guard`](guard.md#guard)\<`T`\>

Defined in: [error-aware-guard/index.ts:70](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L70)

Converts an ErrorAwareGuard<T> to a Guard<T>

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

#### Returns

[`Guard`](guard.md#guard)\<`T`\>

***

### tryGuardIf()

> **tryGuardIf**\<`T`, `T2`\>(`predicateGuard`, `check`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T2`\>

Defined in: [error-aware-guard/index.ts:212](https://github.com/maxkaemmerer/pure/blob/ca7bfe23ff25588c07f62c0e812dd8f58d29f518/src/error-aware-guard/index.ts#L212)

First applies the predicateGuard and if it is a SuccessResult<T> passes the value to check.
If check returns true it creates SuccessResult<T>.
Otherwise an ErrorResult is created, containing the errors created by the error factory function.

#### Type Parameters

##### T

`T`

##### T2

`T2` = `T`

#### Parameters

##### predicateGuard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

##### check

(`value`) => `value is T2`

##### createErrors

(`value`) => `string`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T2`\>
