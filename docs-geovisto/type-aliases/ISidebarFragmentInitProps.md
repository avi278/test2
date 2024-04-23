**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarFragmentInitProps

# Type alias: ISidebarFragmentInitProps\<TConfig, TTool\>

> **ISidebarFragmentInitProps**\<`TConfig`, `TTool`\>: [`IMapObjectInitProps`](IMapObjectInitProps.md)\<`TConfig`\> & `object`

This type provides the specification of the sidebar fragment props model used in its initialization.

## Author

Jiri Hynek

## Type declaration

### sidebarTab

> **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)

### tool

> **tool**: `TTool`

## Type parameters

• **TConfig** extends [`ISidebarFragmentConfig`](ISidebarFragmentConfig.md) = [`ISidebarFragmentConfig`](ISidebarFragmentConfig.md)

• **TTool** extends [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md) = [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Source

[src/tools/sidebar/model/types/fragment/ISidebarFragmentProps.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentProps.ts#L26)
