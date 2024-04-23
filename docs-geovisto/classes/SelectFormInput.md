**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SelectFormInput

# Class: SelectFormInput

This class represents a basic select form input composed of options.

## Author

Jiri Hynek

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Constructors

### new SelectFormInput(props)

> **new SelectFormInput**(`props`): [`SelectFormInput`](SelectFormInput.md)

#### Parameters

• **props**: [`ISelectFormInputProps`](../interfaces/ISelectFormInputProps.md)

#### Returns

[`SelectFormInput`](SelectFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L18)

## Properties

### element?

> **`private`** **`optional`** **element**: `HTMLSelectElement`

the input element is initialized when required

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L16)

## Methods

### create()

> **create**(): `HTMLElement`

It returns select element.

#### Returns

`HTMLElement`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L32)

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

It returns value of the select element.

#### Returns

`string`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L53)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L71)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the select element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L62)

***

### ID()

> **`static`** **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Source

[src/model/internal/inputs/basic/select/SelectFormInput.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L25)
