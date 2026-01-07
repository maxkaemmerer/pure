[**@kaumlaut/pure**](README.md)

***

[@kaumlaut/pure](README.md) / error-aware-guard

# error-aware-guard

Provides easily composable generic type guards that track errors

## Type Aliases

### ErrorAwareGuard()\<T\>

> **ErrorAwareGuard**\<`T`\> = (`value`) => [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:29](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L29)

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

Defined in: [error-aware-guard/index.ts:16](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L16)

Represents a failed ErrorAwareGuard, containing errors

#### Properties

##### errors

> `readonly` **errors**: `string`[]

Defined in: [error-aware-guard/index.ts:18](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L18)

##### success

> `readonly` **success**: `false`

Defined in: [error-aware-guard/index.ts:17](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L17)

***

### SuccessResult\<T\>

> **SuccessResult**\<`T`\> = `object`

Defined in: [error-aware-guard/index.ts:11](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L11)

Represents a successful ErrorAwareGuard, containing the value

#### Type Parameters

##### T

`T`

#### Properties

##### success

> `readonly` **success**: `true`

Defined in: [error-aware-guard/index.ts:11](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L11)

##### value

> `readonly` **value**: `T`

Defined in: [error-aware-guard/index.ts:11](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L11)

***

### ValidationResult\<T\>

> **ValidationResult**\<`T`\> = [`SuccessResult`](#successresult)\<`T`\> \| [`ErrorResult`](#errorresult)

Defined in: [error-aware-guard/index.ts:24](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L24)

Represents the result of a ErrorAwareGuard

#### Type Parameters

##### T

`T`

## Variables

### isAlways

> `const` **isAlways**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [error-aware-guard/index.ts:357](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L357)

Always passes.

***

### isBool

> `const` **isBool**: [`ErrorAwareGuard`](#errorawareguard)\<`boolean`\>

Defined in: [error-aware-guard/index.ts:323](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L323)

Confirms that the value is a boolean.

***

### isFalse

> `const` **isFalse**: [`ErrorAwareGuard`](#errorawareguard)\<`false`\>

Defined in: [error-aware-guard/index.ts:595](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L595)

Confirms a value is false

***

### isFloat

> `const` **isFloat**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:328](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L328)

Confirms that the value is a float.

***

### isInt

> `const` **isInt**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:335](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L335)

Confirms that the value is an interger.

***

### isNever

> `const` **isNever**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [error-aware-guard/index.ts:362](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L362)

Never passes.

***

### isNonEmptyString

> `const` **isNonEmptyString**: [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [error-aware-guard/index.ts:367](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L367)

Confirms that the value is a non-empty string.

***

### isNull

> `const` **isNull**: [`ErrorAwareGuard`](#errorawareguard)\<`null`\>

Defined in: [error-aware-guard/index.ts:340](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L340)

Confirms that the value is null.

***

### isNumber

> `const` **isNumber**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [error-aware-guard/index.ts:304](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L304)

Confirms that the value is a number.

***

### isObject

> `const` **isObject**: [`ErrorAwareGuard`](#errorawareguard)\<`object`\>

Defined in: [error-aware-guard/index.ts:352](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L352)

Confirms that the value is an object.

***

### isTrue

> `const` **isTrue**: [`ErrorAwareGuard`](#errorawareguard)\<`true`\>

Defined in: [error-aware-guard/index.ts:588](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L588)

Confirms a value is true

***

### isUndefined

> `const` **isUndefined**: [`ErrorAwareGuard`](#errorawareguard)\<`undefined`\>

Defined in: [error-aware-guard/index.ts:345](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L345)

Confirms that the value is undefined.

## Functions

### check()

> **check**\<`T`\>(`value`, `guard`): `value is T`

Defined in: [error-aware-guard/index.ts:78](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L78)

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

Defined in: [error-aware-guard/index.ts:89](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L89)

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

Defined in: [error-aware-guard/index.ts:165](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L165)

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

Defined in: [error-aware-guard/index.ts:118](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L118)

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

Defined in: [error-aware-guard/index.ts:138](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L138)

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

### errorByGuard()

> **errorByGuard**\<`T`\>(`guards`, `defaultError`): (`value`) => `string` \| keyof `T`

Defined in: [error-aware-guard/index.ts:531](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L531)

Given an object of error to Guard pairs, maps the given value to a key if the matching Guard passes.
If no guard passes the default error is returned.
If multiple guards pass, the first error will be returned.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### guards

\{ \[K in string \| number \| symbol\]: ErrorAwareGuard\<T\[K\]\> \}

##### defaultError

`string`

#### Returns

> (`value`): `string` \| keyof `T`

##### Parameters

###### value

`unknown`

##### Returns

`string` \| keyof `T`

#### Example

```ts
errorByGuard(
   {
       "Some validation error": isSomeValidationError,
       "Some Io Error": isIoError,
   },
   "Default Error",
   // returns "Some validation error" if the given error passes the isSomeValidationError Guard
   // returns "Some Io Error" if the given error passes the isIoError Guard
   // returns "Default Error" if none of the Guards pass
)(error)
```

***

### fail()

> **fail**(...`errors`): [`ErrorResult`](#errorresult)

Defined in: [error-aware-guard/index.ts:34](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L34)

Creates an ErrorResult with the given errors

#### Parameters

##### errors

...`string`[]

#### Returns

[`ErrorResult`](#errorresult)

***

### fromGuard()

> **fromGuard**\<`T`\>(`guard`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:189](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L189)

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

Defined in: [error-aware-guard/index.ts:247](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L247)

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

Defined in: [error-aware-guard/index.ts:233](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L233)

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

### isEmptyList()

> **isEmptyList**\<`I`\>(`value`): [`ValidationResult`](#validationresult)\<`I`[]\>

Defined in: [error-aware-guard/index.ts:408](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L408)

Confirms the value is a list with zero items.

#### Type Parameters

##### I

`I`

#### Parameters

##### value

`unknown`

#### Returns

[`ValidationResult`](#validationresult)\<`I`[]\>

***

### isExactString()

> **isExactString**\<`T`\>(`expectedString`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [error-aware-guard/index.ts:315](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L315)

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

Defined in: [error-aware-guard/index.ts:276](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L276)

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

Defined in: [error-aware-guard/index.ts:398](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L398)

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

Defined in: [error-aware-guard/index.ts:425](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L425)

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

Defined in: [error-aware-guard/index.ts:415](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L415)

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

Defined in: [error-aware-guard/index.ts:498](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L498)

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

Defined in: [error-aware-guard/index.ts:437](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L437)

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

Defined in: [error-aware-guard/index.ts:450](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L450)

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

Defined in: [error-aware-guard/index.ts:473](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L473)

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

Defined in: [error-aware-guard/index.ts:482](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L482)

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

Defined in: [error-aware-guard/index.ts:256](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L256)

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

Defined in: [error-aware-guard/index.ts:427](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L427)

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

Defined in: [error-aware-guard/index.ts:309](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L309)

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

Defined in: [error-aware-guard/index.ts:376](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L376)

Confirms that the value is a string with specified length.

#### Parameters

##### length

`number`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### isStringWithPattern()

> **isStringWithPattern**(`pattern`): [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [error-aware-guard/index.ts:388](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L388)

Confirms the value is a string and matches the given regular expression.

#### Parameters

##### pattern

`RegExp`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### mapWithDefault()

> **mapWithDefault**\<`T`, `T2`\>(`result`, `mapFunction`, `defaultValue`): `T2`

Defined in: [error-aware-guard/index.ts:566](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L566)

Will return the result of the function if ValidationResult is success
Otherwise will return defaultValue

#### Type Parameters

##### T

`T`

##### T2

`T2`

#### Parameters

##### result

[`ValidationResult`](#validationresult)\<`T`\>

##### mapFunction

(`value`) => `T2`

##### defaultValue

`T2`

#### Returns

`T2`

***

### pass()

> **pass**\<`T`\>(`value`): [`SuccessResult`](#successresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:44](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L44)

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

### peek()

> **peek**\<`T`\>(`result`, `applyFunction`): `void`

Defined in: [error-aware-guard/index.ts:553](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L553)

Will execute the function if ValidationResult is successful

#### Type Parameters

##### T

`T`

#### Parameters

##### result

[`ValidationResult`](#validationresult)\<`T`\>

##### applyFunction

(`value`) => `void`

#### Returns

`void`

***

### prefixErrors()

> **prefixErrors**\<`T`\>(`value`, `prefix`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [error-aware-guard/index.ts:54](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L54)

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

Defined in: [error-aware-guard/index.ts:71](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L71)

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

### toMaybe()

> **toMaybe**\<`T`\>(`result`): [`Maybe`](maybe.md#maybe)\<`T`\>

Defined in: [error-aware-guard/index.ts:581](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L581)

Converts a successful ValidationResult<T> to Just<T> and failed ones to Nothing.

#### Type Parameters

##### T

`T`

#### Parameters

##### result

[`ValidationResult`](#validationresult)\<`T`\>

#### Returns

[`Maybe`](maybe.md#maybe)\<`T`\>

***

### tryGuardIf()

> **tryGuardIf**\<`T`, `T2`\>(`predicateGuard`, `check`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T2`\>

Defined in: [error-aware-guard/index.ts:213](https://github.com/maxkaemmerer/pure/blob/33437c9712cebf878cd23cdb804c3d248185b29c/src/error-aware-guard/index.ts#L213)

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
