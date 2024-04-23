**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMarkerIcon

# Interface: IMarkerIcon\<T\>

This intreface extends Leaflet Icon in order to work with generic icon type.

## Author

Jiri Hynek

## Extends

- `Icon`\<`T`\>

## Type parameters

• **T** extends [`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)

## Properties

### \_map

> **`protected`** **\_map**: `Map`

#### Inherited from

`Icon._map`

#### Source

node\_modules/@types/leaflet/index.d.ts:1228

***

### options

> **options**: `T`

#### Inherited from

`Icon.options`

#### Source

node\_modules/@types/leaflet/index.d.ts:2456

## Methods

### addEventListener()

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:993

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:995

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:997

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1002

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1004

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1006

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1008

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1010

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1012

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1015

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1017

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1019

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1021

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn**: `TileErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1023

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1025

#### addEventListener(eventMap)

> **addEventListener**(`eventMap`): `this`

Alias for on(...)

Adds a set of type/listener pairs, e.g. \{click: onClick, mousemove: onMouseMove\}

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1032

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:213

#### addEventListener(type, fn, context)

> **addEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:214

***

### addEventParent()

> **addEventParent**(`obj`): `this`

Adds an event parent - an Evented that will receive propagated events

#### Parameters

• **obj**: `Evented`

#### Returns

`this`

#### Inherited from

`Icon.addEventParent`

#### Source

node\_modules/@types/leaflet/index.d.ts:977

***

### addInteractiveTarget()

> **addInteractiveTarget**(`targetEl`): `this`

#### Parameters

• **targetEl**: `HTMLElement`

#### Returns

`this`

#### Inherited from

`Icon.addInteractiveTarget`

#### Source

node\_modules/@types/leaflet/index.d.ts:1198

***

### addOneTimeEventListener()

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1099

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1101

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1103

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1108

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1110

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1112

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1114

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1116

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1118

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1121

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1123

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1125

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1127

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn**: `TileErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1129

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1131

#### addOneTimeEventListener(eventMap)

> **addOneTimeEventListener**(`eventMap`): `this`

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1138

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:219

#### addOneTimeEventListener(type, fn, context)

> **addOneTimeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.addOneTimeEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:220

***

### addTo()

> **addTo**(`map`): `this`

#### Parameters

• **map**: `Map` \| `LayerGroup`\<`any`\>

#### Returns

`this`

#### Inherited from

`Icon.addTo`

#### Source

node\_modules/@types/leaflet/index.d.ts:1193

***

### beforeAdd()?

> **`optional`** **beforeAdd**(`map`): `this`

#### Parameters

• **map**: `Map`

#### Returns

`this`

#### Inherited from

`Icon.beforeAdd`

#### Source

node\_modules/@types/leaflet/index.d.ts:1226

***

### bindPopup()

> **bindPopup**(`content`, `options`?): `this`

#### Parameters

• **content**: `Popup` \| `Content` \| (`layer`) => `Content`

• **options?**: `PopupOptions`

#### Returns

`this`

#### Inherited from

`Icon.bindPopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1202

***

### bindTooltip()

> **bindTooltip**(`content`, `options`?): `this`

#### Parameters

• **content**: `Content` \| `Tooltip` \| (`layer`) => `Content`

• **options?**: `TooltipOptions`

#### Returns

`this`

#### Inherited from

`Icon.bindTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1212

***

### clearAllEventListeners()

> **clearAllEventListeners**(): `this`

Alias for off()

Removes all listeners to all events on the object.

#### Returns

`this`

#### Inherited from

`Icon.clearAllEventListeners`

#### Source

node\_modules/@types/leaflet/index.d.ts:1091

***

### closePopup()

> **closePopup**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.closePopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1205

***

### closeTooltip()

> **closeTooltip**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.closeTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1215

***

### createIcon()

> **createIcon**(`oldIcon`?): `HTMLElement`

#### Parameters

• **oldIcon?**: `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

`Icon.createIcon`

#### Source

node\_modules/@types/leaflet/index.d.ts:2453

***

### createShadow()

> **createShadow**(`oldIcon`?): `HTMLElement`

#### Parameters

• **oldIcon?**: `HTMLElement`

#### Returns

`HTMLElement`

#### Inherited from

`Icon.createShadow`

#### Source

node\_modules/@types/leaflet/index.d.ts:2454

***

### fire()

> **fire**(`type`, `data`?, `propagate`?): `this`

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

• **type**: `string`

• **data?**: `any`

• **propagate?**: `boolean`

#### Returns

`this`

#### Inherited from

`Icon.fire`

#### Source

node\_modules/@types/leaflet/index.d.ts:882

***

### fireEvent()

> **fireEvent**(`type`, `data`?, `propagate`?): `this`

Alias for fire(...)

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

• **type**: `string`

• **data?**: `any`

• **propagate?**: `boolean`

#### Returns

`this`

#### Inherited from

`Icon.fireEvent`

#### Source

node\_modules/@types/leaflet/index.d.ts:1148

***

### getAttribution()?

> **`optional`** **getAttribution**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Inherited from

`Icon.getAttribution`

#### Source

node\_modules/@types/leaflet/index.d.ts:1225

***

### getEvents()?

> **`optional`** **getEvents**(): `object`

#### Returns

`object`

#### Inherited from

`Icon.getEvents`

#### Source

node\_modules/@types/leaflet/index.d.ts:1224

***

### getPane()

> **getPane**(`name`?): `undefined` \| `HTMLElement`

#### Parameters

• **name?**: `string`

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

`Icon.getPane`

#### Source

node\_modules/@types/leaflet/index.d.ts:1196

***

### getPopup()

> **getPopup**(): `undefined` \| `Popup`

#### Returns

`undefined` \| `Popup`

#### Inherited from

`Icon.getPopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1209

***

### getTooltip()

> **getTooltip**(): `undefined` \| `Tooltip`

#### Returns

`undefined` \| `Tooltip`

#### Inherited from

`Icon.getTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1219

***

### hasEventListeners()

> **hasEventListeners**(`type`): `boolean`

Alias for listens(...)

Returns true if a particular event type has any listeners attached to it.

#### Parameters

• **type**: `string`

#### Returns

`boolean`

#### Inherited from

`Icon.hasEventListeners`

#### Source

node\_modules/@types/leaflet/index.d.ts:1155

***

### isPopupOpen()

> **isPopupOpen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`Icon.isPopupOpen`

#### Source

node\_modules/@types/leaflet/index.d.ts:1207

***

### isTooltipOpen()

> **isTooltipOpen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`Icon.isTooltipOpen`

#### Source

node\_modules/@types/leaflet/index.d.ts:1217

***

### listens()

#### listens(type, propagate)

> **listens**(`type`, `propagate`?): `boolean`

Returns true if a particular event type has any listeners attached to it.

##### Parameters

• **type**: `"zoom"` \| `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"` \| `"layeradd"` \| `"layerremove"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"` \| `"resize"` \| `"popupopen"` \| `"tooltipopen"` \| `"tooltipclose"` \| `"locationerror"` \| `"locationfound"` \| `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"` \| `"keypress"` \| `"keydown"` \| `"keyup"` \| `"zoomanim"` \| `"dragend"` \| `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"` \| `"tileerror"`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:888

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:896

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn**: `LayerEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:898

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:900

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"resize"`

• **fn**: `ResizeEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:905

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn**: `PopupEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:907

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn**: `TooltipEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:909

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"locationerror"`

• **fn**: `ErrorEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:911

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"locationfound"`

• **fn**: `LocationEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:913

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:915

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:918

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"zoomanim"`

• **fn**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:920

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"dragend"`

• **fn**: `DragEndEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:922

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:924

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `"tileerror"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:926

#### listens(type, fn, context, propagate)

> **listens**(`type`, `fn`, `context`?, `propagate`?): `boolean`

##### Parameters

• **type**: `string`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

• **propagate?**: `boolean`

##### Returns

`boolean`

##### Inherited from

`Icon.listens`

##### Source

node\_modules/@types/leaflet/index.d.ts:928

***

### off()

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn?**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:831

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn?**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:833

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn?**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:835

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn?**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:840

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn?**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:842

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn?**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:844

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn?**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:846

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn?**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:848

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn?**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:850

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn?**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:853

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn?**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:855

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn?**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:857

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn?**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:859

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn?**: `TileErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:861

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn?**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:863

#### off(eventMap)

> **off**(`eventMap`): `this`

Removes a set of type/listener pairs.

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:869

#### off()

> **off**(): `this`

Removes all listeners to all events on the object.

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet/index.d.ts:874

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:207

#### off(type, fn, context)

> **off**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.off`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:208

***

### on()

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:784

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:786

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:788

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:793

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:795

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:797

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:799

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:801

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:803

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:806

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:808

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:810

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:812

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn**: `TileErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:814

#### on(type, fn, context)

> **on**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:816

#### on(eventMap)

> **on**(`eventMap`): `this`

Adds a set of type/listener pairs, e.g. \{click: onClick, mousemove: onMouseMove\}

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet/index.d.ts:821

#### on(type, fn, context)

> **on**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:204

#### on(type, fn, context)

> **on**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.on`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:205

***

### onAdd()

> **onAdd**(`map`): `this`

#### Parameters

• **map**: `Map`

#### Returns

`this`

#### Inherited from

`Icon.onAdd`

#### Source

node\_modules/@types/leaflet/index.d.ts:1222

***

### onRemove()

> **onRemove**(`map`): `this`

#### Parameters

• **map**: `Map`

#### Returns

`this`

#### Inherited from

`Icon.onRemove`

#### Source

node\_modules/@types/leaflet/index.d.ts:1223

***

### once()

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:934

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:936

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:938

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:943

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:945

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:947

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:949

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:951

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:953

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:956

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:958

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:960

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:962

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:964

#### once(type, fn, context)

> **once**(`type`, `fn`, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:966

#### once(eventMap)

> **once**(`eventMap`): `this`

Behaves as on(...), except the listener will only get fired once and then removed.

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet/index.d.ts:971

#### once(type, fn, context)

> **once**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:210

#### once(type, fn, context)

> **once**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.once`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:211

***

### openPopup()

> **openPopup**(`latlng`?): `this`

#### Parameters

• **latlng?**: `LatLngExpression`

#### Returns

`this`

#### Inherited from

`Icon.openPopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1204

***

### openTooltip()

> **openTooltip**(`latlng`?): `this`

#### Parameters

• **latlng?**: `LatLngExpression`

#### Returns

`this`

#### Inherited from

`Icon.openTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1214

***

### remove()

> **remove**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.remove`

#### Source

node\_modules/@types/leaflet/index.d.ts:1194

***

### removeEventListener()

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

##### Parameters

• **type**: `"baselayerchange"` \| `"overlayadd"` \| `"overlayremove"`

• **fn?**: `LayersControlEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1044

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"layeradd"` \| `"layerremove"`

• **fn?**: `LayerEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1046

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"zoom"` \| `"zoomlevelschange"` \| `"unload"` \| `"viewreset"` \| `"load"` \| `"zoomstart"` \| `"movestart"` \| `"move"` \| `"zoomend"` \| `"moveend"` \| `"autopanstart"` \| `"dragstart"` \| `"drag"` \| `"add"` \| `"remove"` \| `"loading"` \| `"error"` \| `"update"` \| `"down"` \| `"predrag"`

• **fn?**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1048

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"resize"`

• **fn?**: `ResizeEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1053

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"popupopen"` \| `"popupclose"`

• **fn?**: `PopupEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1055

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tooltipopen"` \| `"tooltipclose"`

• **fn?**: `TooltipEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1057

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"locationerror"`

• **fn?**: `ErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1059

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"locationfound"`

• **fn?**: `LocationEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1061

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"click"` \| `"dblclick"` \| `"mousedown"` \| `"mouseup"` \| `"mouseover"` \| `"mouseout"` \| `"mousemove"` \| `"contextmenu"` \| `"preclick"`

• **fn?**: `LeafletMouseEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1063

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"keypress"` \| `"keydown"` \| `"keyup"`

• **fn?**: `LeafletKeyboardEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1066

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"zoomanim"`

• **fn?**: `ZoomAnimEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1068

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"dragend"`

• **fn?**: `DragEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1070

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tileunload"` \| `"tileloadstart"` \| `"tileload"` \| `"tileabort"`

• **fn?**: `TileEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1072

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"tileerror"`

• **fn?**: `TileErrorEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1074

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `string`

• **fn?**: `LeafletEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1076

#### removeEventListener(eventMap)

> **removeEventListener**(`eventMap`): `this`

Alias for off(...)

Removes a set of type/listener pairs.

##### Parameters

• **eventMap**: `LeafletEventHandlerFnMap`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet/index.d.ts:1083

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"spiderfied"` \| `"unspiderfied"`

• **fn?**: `SpiderfyEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:216

#### removeEventListener(type, fn, context)

> **removeEventListener**(`type`, `fn`?, `context`?): `this`

##### Parameters

• **type**: `"animationend"`

• **fn?**: `AnimationEndEventHandlerFn`

• **context?**: `any`

##### Returns

`this`

##### Inherited from

`Icon.removeEventListener`

##### Source

node\_modules/@types/leaflet.markercluster/index.d.ts:217

***

### removeEventParent()

> **removeEventParent**(`obj`): `this`

Removes an event parent, so it will stop receiving propagated events

#### Parameters

• **obj**: `Evented`

#### Returns

`this`

#### Inherited from

`Icon.removeEventParent`

#### Source

node\_modules/@types/leaflet/index.d.ts:982

***

### removeFrom()

> **removeFrom**(`map`): `this`

#### Parameters

• **map**: `Map`

#### Returns

`this`

#### Inherited from

`Icon.removeFrom`

#### Source

node\_modules/@types/leaflet/index.d.ts:1195

***

### removeInteractiveTarget()

> **removeInteractiveTarget**(`targetEl`): `this`

#### Parameters

• **targetEl**: `HTMLElement`

#### Returns

`this`

#### Inherited from

`Icon.removeInteractiveTarget`

#### Source

node\_modules/@types/leaflet/index.d.ts:1199

***

### setPopupContent()

> **setPopupContent**(`content`): `this`

#### Parameters

• **content**: `Popup` \| `Content`

#### Returns

`this`

#### Inherited from

`Icon.setPopupContent`

#### Source

node\_modules/@types/leaflet/index.d.ts:1208

***

### setTooltipContent()

> **setTooltipContent**(`content`): `this`

#### Parameters

• **content**: `Content` \| `Tooltip`

#### Returns

`this`

#### Inherited from

`Icon.setTooltipContent`

#### Source

node\_modules/@types/leaflet/index.d.ts:1218

***

### togglePopup()

> **togglePopup**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.togglePopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1206

***

### toggleTooltip()

> **toggleTooltip**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.toggleTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1216

***

### unbindPopup()

> **unbindPopup**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.unbindPopup`

#### Source

node\_modules/@types/leaflet/index.d.ts:1203

***

### unbindTooltip()

> **unbindTooltip**(): `this`

#### Returns

`this`

#### Inherited from

`Icon.unbindTooltip`

#### Source

node\_modules/@types/leaflet/index.d.ts:1213

***

### updateData()

> **updateData**(`values`, `animateOptions`): `void`

It updates the data of the marker icon.

#### Parameters

• **values**: [`IMarkerIconValueOptions`](../type-aliases/IMarkerIconValueOptions.md)

• **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[src/tools/layers/marker/model/types/marker/IMarkerIcon.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/marker/IMarkerIcon.ts#L26)
