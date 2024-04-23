**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapChangeEvent

# Interface: IMapChangeEvent\<TChangedObject, TSource\>

This interface declares abstract map event change object.

## Author

Jiri Hynek

## Extends

- [`IMapEvent`](IMapEvent.md)\<`TSource`\>

## Type parameters

• **TChangedObject** extends `unknown` = `unknown`

• **TSource** extends [`IMapObject`](IMapObject.md) = [`IMapObject`](IMapObject.md)

## Methods

### getChangedObject()

> **getChangedObject**(): `TChangedObject`

Return the changed object.

#### Returns

`TChangedObject`

#### Source

[src/model/types/event/IMapChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapChangeEvent.ts#L14)

***

### getSource()

> **getSource**(): `TSource`

Return source object of the event.

#### Returns

`TSource`

#### Inherited from

[`IMapEvent`](IMapEvent.md).[`getSource`](IMapEvent.md#getsource)

#### Source

[src/model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L18)

***

### getType()

> **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[`IMapEvent`](IMapEvent.md).[`getType`](IMapEvent.md#gettype)

#### Source

[src/model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L13)
