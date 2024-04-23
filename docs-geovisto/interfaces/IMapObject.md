**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapObject

# Interface: IMapObject\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares functions for using map object which can be identified by uniquie string.

## Author

Jiri Hynek

## Extended by

- [`IMap`](IMap.md)
- [`IMapTool`](IMapTool.md)
- [`ISidebarFragment`](ISidebarFragment.md)
- [`ISidebarTab`](ISidebarTab.md)

## Type parameters

• **TProps** extends [`IMapObjectProps`](../type-aliases/IMapObjectProps.md) = [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

• **TDefaults** extends [`IMapObjectDefaults`](IMapObjectDefaults.md) = [`IMapObjectDefaults`](IMapObjectDefaults.md)

• **TState** extends [`IMapObjectState`](IMapObjectState.md) = [`IMapObjectState`](IMapObjectState.md)

• **TConfig** extends [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md) = [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)

• **TInitProps** extends [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<`TConfig`\> = [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<`TConfig`\>

## Methods

### getDefaults()

> **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Source

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Source

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

***

### getProps()

> **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Source

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

***

### getState()

> **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Source

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Source

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: `TInitProps`

#### Returns

`this`

#### Source

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)
