**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapConfigManagerFactory

# Class: MapConfigManagerFactory

This class provides a factory for config managers.

## Author

Jiri Hynek

## Implements

- [`IMapConfigManagerFactory`](../interfaces/IMapConfigManagerFactory.md)

## Constructors

### new MapConfigManagerFactory()

> **new MapConfigManagerFactory**(): [`MapConfigManagerFactory`](MapConfigManagerFactory.md)

#### Returns

[`MapConfigManagerFactory`](MapConfigManagerFactory.md)

## Methods

### default()

> **default**(`config`): [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

It creates the default config manager function.

#### Parameters

• **config**: `Record`\<`string`, `unknown`\>

#### Returns

[`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Implementation of

[`IMapConfigManagerFactory`](../interfaces/IMapConfigManagerFactory.md).[`default`](../interfaces/IMapConfigManagerFactory.md#default)

#### Source

[src/model/internal/config/MapConfigManagerFactory.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/config/MapConfigManagerFactory.ts#L15)
