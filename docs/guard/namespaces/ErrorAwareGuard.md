[**@kaumlaut/pure v1.0.1**](../../README.md)

***

[@kaumlaut/pure](../../README.md) / [guard](../README.md) / ErrorAwareGuard

# ErrorAwareGuard

## Type Aliases

### ErrorAwareGuard()\<T\>

> **ErrorAwareGuard**\<`T`\> = (`value`) => [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [guard/index.ts:288](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L288)

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

Defined in: [guard/index.ts:282](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L282)

#### Properties

##### errors

> `readonly` **errors**: `string`[]

Defined in: [guard/index.ts:284](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L284)

##### success

> `readonly` **success**: `false`

Defined in: [guard/index.ts:283](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L283)

***

### SuccessResult\<T\>

> **SuccessResult**\<`T`\> = `object`

Defined in: [guard/index.ts:281](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L281)

#### Type Parameters

##### T

`T`

#### Properties

##### success

> `readonly` **success**: `true`

Defined in: [guard/index.ts:281](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L281)

##### value

> `readonly` **value**: `T`

Defined in: [guard/index.ts:281](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L281)

***

### ValidationResult\<T\>

> **ValidationResult**\<`T`\> = [`SuccessResult`](#successresult)\<`T`\> \| [`ErrorResult`](#errorresult)

Defined in: [guard/index.ts:286](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L286)

#### Type Parameters

##### T

`T`

## Variables

### isAlways

> `const` **isAlways**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [guard/index.ts:529](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L529)

***

### isBool

> `const` **isBool**: [`ErrorAwareGuard`](#errorawareguard)\<`boolean`\>

Defined in: [guard/index.ts:519](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L519)

***

### isFloat

> `const` **isFloat**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [guard/index.ts:520](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L520)

***

### isInt

> `const` **isInt**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [guard/index.ts:523](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L523)

***

### isNever

> `const` **isNever**: [`ErrorAwareGuard`](#errorawareguard)\<`unknown`\>

Defined in: [guard/index.ts:530](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L530)

***

### isNonEmptyString

> `const` **isNonEmptyString**: [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [guard/index.ts:531](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L531)

***

### isNull

> `const` **isNull**: [`ErrorAwareGuard`](#errorawareguard)\<`null`\>

Defined in: [guard/index.ts:524](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L524)

***

### isNumber

> `const` **isNumber**: [`ErrorAwareGuard`](#errorawareguard)\<`number`\>

Defined in: [guard/index.ts:512](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L512)

***

### isObject

> `const` **isObject**: [`ErrorAwareGuard`](#errorawareguard)\<`object`\>

Defined in: [guard/index.ts:528](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L528)

***

### isUndefined

> `const` **isUndefined**: [`ErrorAwareGuard`](#errorawareguard)\<`undefined`\>

Defined in: [guard/index.ts:525](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L525)

## Functions

### combineResultsAll()

> **combineResultsAll**\<`T`\>(...`results`): [`ValidationResult`](#validationresult)\<`T`\>

Defined in: [guard/index.ts:317](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L317)

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

Defined in: [guard/index.ts:384](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L384)

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

Defined in: [guard/index.ts:342](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L342)

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

Defined in: [guard/index.ts:361](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L361)

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

Defined in: [guard/index.ts:290](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L290)

#### Parameters

##### errors

...`string`[]

#### Returns

[`ErrorResult`](#errorresult)

***

### fromGuard()

> **fromGuard**\<`T`\>(`guard`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:405](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L405)

#### Type Parameters

##### T

`T`

#### Parameters

##### guard

[`Guard`](Guard.md#guard)\<`T`\>

##### createErrors

(`value`) => `string`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isAll()

> **isAll**\<`T`\>(`guards`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:452](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L452)

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

Defined in: [guard/index.ts:441](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L441)

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

Defined in: [guard/index.ts:515](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L515)

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

> **isListOf**\<`I`, `T`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:474](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L474)

#### Type Parameters

##### I

`I`

##### T

`T` *extends* `I`[]

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`I`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isNonEmptyListOf()

> **isNonEmptyListOf**\<`I`, `T`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:550](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L550)

#### Type Parameters

##### I

`I`

##### T

`T` *extends* `I`[]

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`I`\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isNullOr()

> **isNullOr**\<`T`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:564](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L564)

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

Defined in: [guard/index.ts:558](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L558)

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`number`\>

***

### isObjectWithAllKeysMatchingGuard()

> **isObjectWithAllKeysMatchingGuard**\<`T`, `K`\>(`guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:632](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L632)

Confirms the value is an object where every value matches the given guard.
Calls console.debug with an error message to improve debugging when a large type does not match.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\[`K`\]\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKey()

> **isObjectWithKey**\<`T`, `K`\>(`key`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:576](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L576)

Confirms that the value is an object containing the specified key.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeyMatchingGuard()

> **isObjectWithKeyMatchingGuard**\<`T`, `K`\>(`key`, `guard`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:589](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L589)

Confirms that the value is an object containing the specified key the value matching the given guard.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### guard

[`ErrorAwareGuard`](#errorawareguard)\<`T`\[`K`\]\>

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeys()

> **isObjectWithKeys**\<`T`, `K`\>(`keys`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:608](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L608)

Confirms that the value is an object containing the specified keys.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### keys

`K`[]

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isObjectWithKeysMatchingGuard()

> **isObjectWithKeysMatchingGuard**\<`T`, `K`\>(`guards`): [`ErrorAwareGuard`](#errorawareguard)\<`T`\>

Defined in: [guard/index.ts:614](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L614)

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### guards

\{ \[K in string \| number \| symbol\]: ErrorAwareGuard\<T\[K\]\> \}

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`T`\>

***

### isOneOf()

> **isOneOf**\<`T1`, `T2`\>(`a`, `b`): [`ErrorAwareGuard`](#errorawareguard)\<`T1` \| `T2`\>

Defined in: [guard/index.ts:457](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L457)

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

Defined in: [guard/index.ts:566](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L566)

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

Defined in: [guard/index.ts:513](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L513)

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

Defined in: [guard/index.ts:536](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L536)

#### Parameters

##### length

`number`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### isStringWithPattern()

> **isStringWithPattern**(`pattern`): [`ErrorAwareGuard`](#errorawareguard)\<`string`\>

Defined in: [guard/index.ts:544](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L544)

#### Parameters

##### pattern

`RegExp`

#### Returns

[`ErrorAwareGuard`](#errorawareguard)\<`string`\>

***

### pass()

> **pass**\<`T`\>(`value`): [`SuccessResult`](#successresult)\<`T`\>

Defined in: [guard/index.ts:297](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L297)

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

Defined in: [guard/index.ts:303](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L303)

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

### tryGuardIf()

> **tryGuardIf**\<`T`, `T2`\>(`predicateGuard`, `check`, `createErrors`): [`ErrorAwareGuard`](#errorawareguard)\<`T2`\>

Defined in: [guard/index.ts:424](https://github.com/maxkaemmerer/pure/blob/f475113534f30f48594a78af6186d19989fb84f7/src/guard/index.ts#L424)

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
