**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TextFormInput

# Class: TextFormInput

This class represents basic text form input.

## Author

Jiri Hynek

## Author

Krystof Rykala - generic input types

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new TextFormInput(props)

> **new TextFormInput**(`props`): [`TextFormInput`](TextFormInput.md)

#### Parameters

• **props**: [`ITextFormInputProps`](../interfaces/ITextFormInputProps.md)

#### Returns

[`TextFormInput`](TextFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L20)

## Properties

### input?

> **`private`** **`optional`** **input**: `HTMLInputElement`

Basic input is used.

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L18)

## Methods

### create()

> **create**(): `HTMLElement`

It returns input element.

#### Returns

`HTMLElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L34)

***

### getInput()

> **`protected`** **getInput**(): `undefined` \| `HTMLInputElement`

It makes input element visible for the extended classes.

#### Returns

`undefined` \| `HTMLInputElement`

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L48)

***

### getProps()

> **`protected`** **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getProps`](AbstractMapFormInput.md#getprops)

#### Source

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> **getValue**(): `string`

It returns value of the input element.

#### Returns

`string`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`getValue`](../interfaces/IMapFormInput.md#getvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L55)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setDisabled`](../interfaces/IMapFormInput.md#setdisabled)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L73)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setValue`](../interfaces/IMapFormInput.md#setvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L64)

***

### ID()

> **`static`** **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Source

[src/model/internal/inputs/basic/text/TextFormInput.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L27)
