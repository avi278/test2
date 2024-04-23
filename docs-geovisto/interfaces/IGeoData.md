**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IGeoData

# Interface: IGeoData

The interface declares functions for management of geographical data.

## Author

Jiri Hynek

## Extends

- [`IMapDomain`](IMapDomain.md)

## Methods

### getFeatures()

> **getFeatures**(`type`): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the array of features of specific type.

#### Parameters

• **type**: `string`[]

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Source

[src/model/types/geodata/IGeoData.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L29)

***

### getGeoJSON()

> **getGeoJSON**(): `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

It returns the original representation of data domain.

#### Returns

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

#### Source

[src/model/types/geodata/IGeoData.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L22)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

***

### getOriginalGeoData()

> **getOriginalGeoData**(): `unknown`

It returns the original source of geographical data.

#### Returns

`unknown`

#### Source

[src/model/types/geodata/IGeoData.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/geodata/IGeoData.ts#L17)
