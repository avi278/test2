**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DrawingLayerToolMapForm

# Class: DrawingLayerToolMapForm

This class provides controls for management of the layer sidebar tab.

## Author

Andrej Tlcina

## Extends

- [`MapLayerToolForm`](MapLayerToolForm.md)\<`IDrawingLayerTool`\>

## Implements

- `DrawingForm`

## Constructors

### new DrawingLayerToolMapForm(props)

> **new DrawingLayerToolMapForm**(`props`): [`DrawingLayerToolMapForm`](DrawingLayerToolMapForm.md)

#### Parameters

• **props**

• **props\.tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Returns

[`DrawingLayerToolMapForm`](DrawingLayerToolMapForm.md)

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`constructor`](MapLayerToolForm.md#constructors)

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L34)

## Properties

### htmlContent

> **`private`** **htmlContent**: `HTMLDivElement`

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L29)

***

### state

> **`private`** **state**: `TabState`

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L32)

***

### tool

> **`private`** **tool**: `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L31)

## Methods

### getAutocompleteInput()

> **`protected`** **getAutocompleteInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal autocomplete input for the any map domain dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getAutocompleteInput`](MapLayerToolForm.md#getautocompleteinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L43)

***

### getCheckboxInput()

> **`protected`** **getCheckboxInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal checkbox input for the any map boolean dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getCheckboxInput`](MapLayerToolForm.md#getcheckboxinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L78)

***

### getColorInput()

> **`protected`** **getColorInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal color input for the any map string dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getColorInput`](MapLayerToolForm.md#getcolorinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L96)

***

### getContent()

> **getContent**(`layerType`): `HTMLDivElement`

It returns the sidebar tab pane.

#### Parameters

• **layerType**: `""` \| `LayerType`= `""`

#### Returns

`HTMLDivElement`

#### Implementation of

`DrawingForm.getContent`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`getContent`](MapLayerToolForm.md#getcontent)

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L77)

***

### getMapObject()

> **`protected`** **getMapObject**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getMapObject`](MapLayerToolForm.md#getmapobject)

#### Source

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)

***

### getNumberInput()

> **`protected`** **getNumberInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal number input for the any map number dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getNumberInput`](MapLayerToolForm.md#getnumberinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:133](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L133)

***

### getSliderInput()

> **`protected`** **getSliderInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal slider input for the any map range integer dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getSliderInput`](MapLayerToolForm.md#getsliderinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L113)

***

### getState()

> **getState**(): `TabState`

It creates new state of the tab control.

#### Returns

`TabState`

#### Implementation of

`DrawingForm.getState`

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L52)

***

### getTextInput()

> **`protected`** **getTextInput**(`dimension`, `formAction`?): [`IMapFormInput`](../interfaces/IMapFormInput.md)

Help method which returns a new universal text input for the any map domain dimension.

#### Parameters

• **dimension**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **formAction?**

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Inherited from

[`MapLayerToolForm`](MapLayerToolForm.md).[`getTextInput`](MapLayerToolForm.md#gettextinput)

#### Source

[src/model/internal/form/MapLayerToolForm.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapLayerToolForm.ts#L61)

***

### getTool()

> **getTool**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

`DrawingForm.getTool`

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L45)

***

### redrawTabContent()

> **redrawTabContent**(`layerType`): `void`

removes all elements of a sidebar and calls function to create new content of the sidebar

#### Parameters

• **layerType**: `""` \| `LayerType`

#### Returns

`void`

#### Implementation of

`DrawingForm.redrawTabContent`

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L59)

***

### setInputValues()

> **setInputValues**(`dimensions`): `void`

It updates selected input values according to the given dimensions.

#### Parameters

• **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Returns

`void`

#### Overrides

[`MapLayerToolForm`](MapLayerToolForm.md).[`setInputValues`](MapLayerToolForm.md#setinputvalues)

#### Source

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapForm.ts#L41)
