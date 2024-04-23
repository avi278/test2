**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AnimateDirectionUtil

# Class: AnimateDirectionUtil

Help class which provide animating of direction in connections.

## Author

Krystof Rykala

## Author

Jiri Hynek - converted to Typescript and moved to util class

## Constructors

### new AnimateDirectionUtil(tool)

> **new AnimateDirectionUtil**(`tool`): [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Parameters

• **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Source

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L19)

## Properties

### animationInterval

> **`private`** **animationInterval**: `null` \| `Timeout`

#### Source

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L17)

***

### tool

> **`private`** **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Source

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L16)

## Methods

### animateDirection()

> **animateDirection**(`animate`): `void`

It changes the styles of connection (enables/disables animation).

#### Parameters

• **animate**: `boolean`

#### Returns

`void`

#### Source

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L28)
