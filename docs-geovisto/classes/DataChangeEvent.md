**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DataChangeEvent

# Class: DataChangeEvent\<TSource\>

This class provides the data change event object.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapData`](../type-aliases/IMapData.md), `TSource`\>

## Type parameters

• **TSource** extends [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md)

## Constructors

### new DataChangeEvent(source, data, animateOptions)

> **new DataChangeEvent**\<`TSource`\>(`source`, `data`, `animateOptions`?): [`DataChangeEvent`](DataChangeEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

• **data**: [`IMapData`](../type-aliases/IMapData.md)

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

[`DataChangeEvent`](DataChangeEvent.md)\<`TSource`\>

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[src/model/internal/event/data/DataChangeEvent.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L19)

## Properties

### animateOptions?

> **`private`** **`optional`** **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Source

[src/model/internal/event/data/DataChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L14)

## Methods

### getAnimateOptions()

> **getAnimateOptions**(): `undefined` \| [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

It returns the animate options

#### Returns

`undefined` \| [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Implementation of

[`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md).[`getAnimateOptions`](../interfaces/IMapDataChangeEvent.md#getanimateoptions)

#### Source

[src/model/internal/event/data/DataChangeEvent.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L34)

***

### getChangedObject()

> **getChangedObject**(): [`IMapData`](../type-aliases/IMapData.md)

Return the changed object.

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Implementation of

[`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md).[`getChangedObject`](../interfaces/IMapDataChangeEvent.md#getchangedobject)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

[`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md).[`getSource`](../interfaces/IMapDataChangeEvent.md#getsource)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getSource`](MapChangeEvent.md#getsource)

#### Source

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[`IMapDataChangeEvent`](../interfaces/IMapDataChangeEvent.md).[`getType`](../interfaces/IMapDataChangeEvent.md#gettype)

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getType`](MapChangeEvent.md#gettype)

#### Source

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> **`static`** **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[src/model/internal/event/data/DataChangeEvent.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/data/DataChangeEvent.ts#L27)
