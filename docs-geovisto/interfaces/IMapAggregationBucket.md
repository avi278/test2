**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapAggregationBucket

# Interface: IMapAggregationBucket

This interface declares functions aggregation of values.

## Author

Jiri Hynek

## Methods

### addValue()

> **addValue**(`value`): `void`

It adds a new value to the aggregation bucket.

#### Parameters

• **value**: `number`

#### Returns

`void`

#### Source

[src/model/types/aggregation/IMapAggregationBucket.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationBucket.ts#L13)

***

### getValue()

> **getValue**(): `number`

It returns the current aggregated value.

#### Returns

`number`

#### Source

[src/model/types/aggregation/IMapAggregationBucket.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationBucket.ts#L18)
