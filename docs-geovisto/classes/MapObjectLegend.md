**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapObjectLegend

# Class: `abstract` MapObjectLegend\<T\>

The interface declares functions for management of legends.

## Author

Tomas Koscielniak

## Extended by

- [`MapLayerToolLegend`](MapLayerToolLegend.md)

## Type parameters

• **T** extends [`IMapObject`](../interfaces/IMapObject.md)

## Constructors

### new MapObjectLegend(mapObject)

> **new MapObjectLegend**\<`T`\>(`mapObject`): [`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

#### Parameters

• **mapObject**: `T`

#### Returns

[`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

#### Source

[src/model/internal/legend/MapObjectLegend.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L13)

## Properties

### mapObject

> **`private`** **mapObject**: `T`

#### Source

[src/model/internal/legend/MapObjectLegend.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L11)

## Methods

### getContent()

> **`abstract`** **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns a HTML div element conatining the legend.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`undefined` \| `HTMLElement`

#### Source

[src/model/internal/legend/MapObjectLegend.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L24)

***

### getMapObject()

> **`protected`** **getMapObject**(): `T`

#### Returns

`T`

#### Source

[src/model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L17)
