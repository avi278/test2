**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DummyTabToolMapForm

# Class: DummyTabToolMapForm

This class provides the settings sidebar tab.

## Author

Jiri Hynek

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IDummyTabTool`](../type-aliases/IDummyTabTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new DummyTabToolMapForm(tool)

> **new DummyTabToolMapForm**(`tool`): [`DummyTabToolMapForm`](DummyTabToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IDummyTabTool`](../type-aliases/IDummyTabTool.md)

#### Returns

[`DummyTabToolMapForm`](DummyTabToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L23)

## Properties

### htmlContent

> **`private`** **htmlContent**: `HTMLDivElement`

#### Source

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L16)

## Methods

### getContent()

> **getContent**(): `HTMLDivElement`

It returns generic layer tab pane.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabToolMapForm.ts#L30)

***

### getMapObject()

> **`protected`** **getMapObject**(): [`IDummyTabTool`](../type-aliases/IDummyTabTool.md)

#### Returns

[`IDummyTabTool`](../type-aliases/IDummyTabTool.md)

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
