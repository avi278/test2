**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IInfoToolDefaults

# Interface: IInfoToolDefaults

This interface declares functions which return the default state values.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`IMapToolDefaults`](IMapToolDefaults.md)

## Methods

### getConfig()

> **getConfig**(): [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

#### Overrides

[`IMapToolDefaults`](IMapToolDefaults.md).[`getConfig`](IMapToolDefaults.md#getconfig)

#### Source

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L20)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getIcon`](IMapToolDefaults.md#geticon)

#### Source

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getId`](IMapToolDefaults.md#getid)

#### Source

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getInfoDataManager()

> **getInfoDataManager**(): [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

It returns default info data manager.

#### Returns

[`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Source

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L25)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getLabel`](IMapToolDefaults.md#getlabel)

#### Source

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

***

### getMarkdown()

> **getMarkdown**(): [`IInfoData`](IInfoData.md)

#### Returns

[`IInfoData`](IInfoData.md)

#### Source

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L27)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getProps`](IMapToolDefaults.md#getprops)

#### Source

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`getType`](IMapToolDefaults.md#gettype)

#### Source

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`isEnabled`](IMapToolDefaults.md#isenabled)

#### Source

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`IMapToolDefaults`](IMapToolDefaults.md).[`isSingleton`](IMapToolDefaults.md#issingleton)

#### Source

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
