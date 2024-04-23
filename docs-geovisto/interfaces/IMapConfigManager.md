**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapConfigManager

# Interface: IMapConfigManager

The interface declares config used by the map and functions to acquire config items.

## Author

Jiri Hynek

## Methods

### export()

> **export**(`mapConfing`): `Record`\<`string`, `unknown`\>

It provides possibility to transform given config to the original structure.

#### Parameters

• **mapConfing**: [`IMapConfig`](../type-aliases/IMapConfig.md)

#### Returns

`Record`\<`string`, `unknown`\>

#### Source

[src/model/types/config/IMapConfigManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L38)

***

### getMapConfig()

> **getMapConfig**(): [`IMapConfig`](../type-aliases/IMapConfig.md)

It returns the map config.

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Source

[src/model/types/config/IMapConfigManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L19)

***

### getOriginalConfig()

> **getOriginalConfig**(): `Record`\<`string`, `unknown`\>

It returns the original config.

#### Returns

`Record`\<`string`, `unknown`\>

#### Source

[src/model/types/config/IMapConfigManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L14)

***

### getToolConfig()

> **getToolConfig**(`toolId`): `undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns the config record for the tool identified by the given tool identifier.

#### Parameters

• **toolId**: `string`

#### Returns

`undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Source

[src/model/types/config/IMapConfigManager.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L31)

***

### getToolsConfigs()

> **getToolsConfigs**(): `undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

It returns the list of all config records for the tools.

#### Returns

`undefined` \| [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)[]

#### Source

[src/model/types/config/IMapConfigManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/config/IMapConfigManager.ts#L24)
