**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IHierarchyToolDomain

# Interface: IHierarchyToolDomain

Interface for one domain hierarchy definiton. 
Used by HierarchyToolManager.

## Author

Vojtěch Malý

## Methods

### addToLevel()

> **addToLevel**(`zoom`, `id`): `void`

Add ID to hierarchy ply based on zoom level.

#### Parameters

• **zoom**: `number`

• **id**: `string` \| `number`

#### Returns

`void`

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L27)

***

### getHierarchyMap()

> **getHierarchyMap**(): `Map`\<`string`, `string`[]\>

Returns hierarchy Map.

#### Returns

`Map`\<`string`, `string`[]\>

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L32)

***

### getLevelByZoom()

> **getLevelByZoom**(`zoom`): `undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

Returns zoom ply based on requested zoom level number.
Undefined if that zoom level doesn't exists.

#### Parameters

• **zoom**: `number`

#### Returns

`undefined` \| [`IHierarchyToolZoomLevel`](IHierarchyToolZoomLevel.md)

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L20)

***

### getName()

> **getName**(): `string`

Get name of Domain.

#### Returns

`string`

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L53)

***

### getNodes()

> **getNodes**(): [`string`, `string` \| `boolean`, `number`][]

Return node array where:
[childID, parentID or True if parent, ZoomLevel of change]

#### Returns

[`string`, `string` \| `boolean`, `number`][]

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L13)

***

### getParentChild()

> **getParentChild**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L46)

***

### setParentChild()

> **setParentChild**(`parentChild`): `void`

Sets new parent child arrry of domain.

#### Parameters

• **parentChild**: [`string`, `string`][]

#### Returns

`void`

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L38)

***

### setParentChildMap()

> **setParentChildMap**(`map`): `void`

Sets new parent child map of domain.

#### Parameters

• **map**: `Map`\<`string`, `string`[]\>

#### Returns

`void`

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L44)

***

### setZoomLevels()

> **setZoomLevels**(`zoomLevels`): `void`

#### Parameters

• **zoomLevels**: `number`[]

#### Returns

`void`

#### Source

[src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyToolDomain.ts#L48)
