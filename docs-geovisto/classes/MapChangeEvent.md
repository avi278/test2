**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapChangeEvent

# Class: MapChangeEvent\<TChangedObject, TSource\>

This class provides generic map change event object.

## Author

Jiri Hynek

## Extends

- [`MapEvent`](MapEvent.md)\<`TSource`\>

## Type parameters

• **TChangedObject**

• **TSource** extends [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IMapChangeEvent`](../interfaces/IMapChangeEvent.md)

## Constructors

### new MapChangeEvent(type, source, changedObject)

> **new MapChangeEvent**\<`TChangedObject`, `TSource`\>(`type`, `source`, `changedObject`): [`MapChangeEvent`](MapChangeEvent.md)\<`TChangedObject`, `TSource`\>

It initializes event.

#### Parameters

• **type**: `string`

• **source**: `TSource`

• **changedObject**: `TChangedObject`

#### Returns

[`MapChangeEvent`](MapChangeEvent.md)\<`TChangedObject`, `TSource`\>

#### Overrides

[`MapEvent`](MapEvent.md).[`constructor`](MapEvent.md#constructors)

#### Source

[src/model/internal/event/generic/MapChangeEvent.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L17)

## Properties

### changedObject

> **`private`** **changedObject**: `TChangedObject`

#### Source

[src/model/internal/event/generic/MapChangeEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L12)

## Methods

### getChangedObject()

> **getChangedObject**(): `TChangedObject`

Return the changed object.

#### Returns

`TChangedObject`

#### Implementation of

[`IMapChangeEvent`](../interfaces/IMapChangeEvent.md).[`getChangedObject`](../interfaces/IMapChangeEvent.md#getchangedobject)

#### Source

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

[`IMapChangeEvent`](../interfaces/IMapChangeEvent.md).[`getSource`](../interfaces/IMapChangeEvent.md#getsource)

#### Inherited from

[`MapEvent`](MapEvent.md).[`getSource`](MapEvent.md#getsource)

#### Source

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[`IMapChangeEvent`](../interfaces/IMapChangeEvent.md).[`getType`](../interfaces/IMapChangeEvent.md#gettype)

#### Inherited from

[`MapEvent`](MapEvent.md).[`getType`](MapEvent.md#gettype)

#### Source

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)
