**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapSelection

# Class: MapSelection

The class provides API for the selection of map elements.
It wraps reference to the source element and list of identifiers of geographic items.

## Author

Jiri Hynek

## Implements

- [`IMapSelection`](../interfaces/IMapSelection.md)

## Constructors

### new MapSelection(tool, srcIds)

> **new MapSelection**(`tool`, `srcIds`): [`MapSelection`](MapSelection.md)

It creates a map selection.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

• **srcIds**: `string`[]

#### Returns

[`MapSelection`](MapSelection.md)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L26)

## Properties

### allIds

> **`private`** **allIds**: `string`[]

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L18)

***

### srcIds

> **`private`** **srcIds**: `string`[]

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L17)

***

### tool

> **`private`** **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L16)

## Methods

### addIds()

> **addIds**(`ids`): `string`[]

It takes geographical items and returns the list of new ids
which were added to the list of all ids.

#### Parameters

• **ids**: `string`[]

#### Returns

`string`[]

#### Implementation of

[`IMapSelection`](../interfaces/IMapSelection.md).[`addIds`](../interfaces/IMapSelection.md#addids)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L81)

***

### equals()

> **equals**(`selection`): `boolean`

It compares two map selections.

#### Parameters

• **selection**: `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Returns

`boolean`

#### Implementation of

[`IMapSelection`](../interfaces/IMapSelection.md).[`equals`](../interfaces/IMapSelection.md#equals)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L58)

***

### getIds()

> **getIds**(): `string`[]

It returns identifiers of geographical items which were selected or affected by this selection.

#### Returns

`string`[]

#### Implementation of

[`IMapSelection`](../interfaces/IMapSelection.md).[`getIds`](../interfaces/IMapSelection.md#getids)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L49)

***

### getSrcIds()

> **getSrcIds**(): `string`[]

It returns identifiers of geographical items which were selected.

#### Returns

`string`[]

#### Implementation of

[`IMapSelection`](../interfaces/IMapSelection.md).[`getSrcIds`](../interfaces/IMapSelection.md#getsrcids)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L42)

***

### getTool()

> **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool of the selected element.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

[`IMapSelection`](../interfaces/IMapSelection.md).[`getTool`](../interfaces/IMapSelection.md#gettool)

#### Source

[src/tools/selection/model/internal/selection/MapSelection.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/selection/MapSelection.ts#L35)
