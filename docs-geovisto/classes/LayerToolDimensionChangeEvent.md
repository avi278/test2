**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LayerToolDimensionChangeEvent

# Class: LayerToolDimensionChangeEvent\<TSource\>

This class provides the layer tool dimension change event object.

## Author

Tomas Koscielniak

## Author

Jiri Hynek

## Extends

- [`MapEvent`](MapEvent.md)\<`TSource`\>

## Type parameters

• **TSource** extends [`ILayerTool`](../interfaces/ILayerTool.md) = [`ILayerTool`](../interfaces/ILayerTool.md)

## Constructors

### new LayerToolDimensionChangeEvent(source)

> **new LayerToolDimensionChangeEvent**\<`TSource`\>(`source`): [`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

#### Returns

[`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

#### Overrides

[`MapEvent`](MapEvent.md).[`constructor`](MapEvent.md#constructors)

#### Source

[src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L16)

## Methods

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

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

#### Inherited from

[`MapEvent`](MapEvent.md).[`getType`](MapEvent.md#gettype)

#### Source

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> **`static`** **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L23)
