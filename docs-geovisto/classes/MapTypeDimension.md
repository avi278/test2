**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapTypeDimension

# Class: MapTypeDimension\<T, C\>

The class wraps a map type dimension and its properties.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

## Type parameters

• **T**

• **C** extends [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> = [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\>

## Implements

- [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`T`, `C`\>

## Constructors

### new MapTypeDimension(name, typeManager, value)

> **new MapTypeDimension**\<`T`, `C`\>(`name`, `typeManager`, `value`?): [`MapTypeDimension`](MapTypeDimension.md)\<`T`, `C`\>

It creates a new map dimension.

#### Parameters

• **name**: `string`

• **typeManager**: `C`

• **value?**: `T`

#### Returns

[`MapTypeDimension`](MapTypeDimension.md)\<`T`, `C`\>

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`constructor`](AbstractMapDimension.md#constructors)

#### Source

[src/model/internal/dimension/MapTypeDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L21)

## Properties

### typeManager

> **`private`** **typeManager**: `C`

#### Source

[src/model/internal/dimension/MapTypeDimension.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L12)

## Methods

### findValue()

> **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **value**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`findValue`](../interfaces/IMapTypeDimension.md#findvalue)

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`findValue`](AbstractMapDimension.md#findvalue)

#### Source

[src/model/internal/dimension/MapTypeDimension.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L47)

***

### getName()

> **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`getName`](../interfaces/IMapTypeDimension.md#getname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`getName`](AbstractMapDimension.md#getname)

#### Source

[src/model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L30)

***

### getTypeManager()

> **getTypeManager**(): `C`

It returns the type constraint.

#### Returns

`C`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`getTypeManager`](../interfaces/IMapTypeDimension.md#gettypemanager)

#### Source

[src/model/internal/dimension/MapTypeDimension.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L29)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`getValue`](../interfaces/IMapTypeDimension.md#getvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`getValue`](AbstractMapDimension.md#getvalue)

#### Source

[src/model/internal/dimension/AbstractMapDimension.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L44)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`setName`](../interfaces/IMapTypeDimension.md#setname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setName`](AbstractMapDimension.md#setname)

#### Source

[src/model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L37)

***

### setStringValue()

> **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`setStringValue`](../interfaces/IMapTypeDimension.md#setstringvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setStringValue`](AbstractMapDimension.md#setstringvalue)

#### Source

[src/model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L69)

***

### setTypeManager()

> **setTypeManager**(`typeManager`): `void`

It sets a type constraint.

#### Parameters

• **typeManager**: `C`

#### Returns

`void`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`setTypeManager`](../interfaces/IMapTypeDimension.md#settypemanager)

#### Source

[src/model/internal/dimension/MapTypeDimension.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L38)

***

### setValue()

> **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

• **value**: `undefined` \| `T`

#### Returns

`void`

#### Implementation of

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md).[`setValue`](../interfaces/IMapTypeDimension.md#setvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setValue`](AbstractMapDimension.md#setvalue)

#### Source

[src/model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L53)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`toString`](AbstractMapDimension.md#tostring)

#### Source

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
