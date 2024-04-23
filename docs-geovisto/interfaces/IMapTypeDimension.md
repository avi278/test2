**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapTypeDimension

# Interface: IMapTypeDimension\<T, C\>

This interface declares functions for using a map dimension which allows to set a value of specific type.

## Author

Jiri Hynek

## Extends

- [`IMapDimension`](IMapDimension.md)\<`T`\>

## Type parameters

• **T**

• **C** extends [`ITypeManager`](ITypeManager.md)\<`T`\> = [`ITypeManager`](ITypeManager.md)\<`T`\>

## Methods

### findValue()

> **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **value**: `string`

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`findValue`](IMapDimension.md#findvalue)

#### Source

[src/model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L32)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`getName`](IMapDimension.md#getname)

#### Source

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

***

### getTypeManager()

> **getTypeManager**(): `C`

It returns the type manager.

#### Returns

`C`

#### Source

[src/model/types/dimension/IMapTypeDimension.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapTypeDimension.ts#L14)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`getValue`](IMapDimension.md#getvalue)

#### Source

[src/model/types/dimension/IMapDimension.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L18)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setName`](IMapDimension.md#setname)

#### Source

[src/model/types/dimension/IMapDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L13)

***

### setStringValue()

> **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setStringValue`](IMapDimension.md#setstringvalue)

#### Source

[src/model/types/dimension/IMapDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L39)

***

### setTypeManager()

> **setTypeManager**(`typeConstraint`): `void`

It sets a type manager.

#### Parameters

• **typeConstraint**: `C`

#### Returns

`void`

#### Source

[src/model/types/dimension/IMapTypeDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapTypeDimension.ts#L21)

***

### setValue()

> **setValue**(`domain`): `void`

It sets a new map domain to the map dimension.

#### Parameters

• **domain**: `undefined` \| `T`

#### Returns

`void`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setValue`](IMapDimension.md#setvalue)

#### Source

[src/model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L25)
