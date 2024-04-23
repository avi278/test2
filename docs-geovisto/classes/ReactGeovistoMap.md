**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ReactGeovistoMap

# Class: ReactGeovistoMap

React component which wraps Geovisto map.

## Author

Jiri Hynek

## Extends

- `Component`\<`IReactGeovistoMapProps`, `Record`\<`string`, `never`\>\>

## Constructors

### new ReactGeovistoMap(props)

> **new ReactGeovistoMap**(`props`): [`ReactGeovistoMap`](ReactGeovistoMap.md)

Initializes object.

#### Parameters

• **props**: `IReactGeovistoMapProps`

#### Returns

[`ReactGeovistoMap`](ReactGeovistoMap.md)

#### Overrides

`Component<IReactGeovistoMapProps, Record<string, never>>.constructor`

#### Source

[src/react/ReactGeovistoMap.tsx:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L27)

## Properties

### context

> **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

#### See

https://react.dev/reference/react/Component#context

#### Inherited from

`Component.context`

#### Source

node\_modules/@types/react/index.d.ts:472

***

### m

> **`private`** **m**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Source

[src/react/ReactGeovistoMap.tsx:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L20)

***

### props

> **`readonly`** **props**: `Readonly`\<`IReactGeovistoMapProps`\> & `Readonly`\<`object`\>

#### Inherited from

`Component.props`

#### Source

node\_modules/@types/react/index.d.ts:497

***

### ~~refs~~

> **refs**: `object`

#### Deprecated

https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

 \[`key`: `string`\]: `ReactInstance`

#### Inherited from

`Component.refs`

#### Source

node\_modules/@types/react/index.d.ts:503

***

### state

> **state**: `Readonly`\<`Record`\<`string`, `never`\>\>

#### Inherited from

`Component.state`

#### Source

node\_modules/@types/react/index.d.ts:498

***

### contextType?

> **`static`** **`optional`** **contextType**: `Context`\<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

#### See

https://react.dev/reference/react/Component#static-contexttype

#### Inherited from

`Component.contextType`

#### Source

node\_modules/@types/react/index.d.ts:454

## Methods

### ~~UNSAFE\_componentWillMount()?~~

> **`optional`** **UNSAFE\_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

#### Inherited from

`Component.UNSAFE_componentWillMount`

#### Deprecated

16.3, use componentDidMount or the constructor instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:710

***

### ~~UNSAFE\_componentWillReceiveProps()?~~

> **`optional`** **UNSAFE\_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

• **nextProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

`Component.UNSAFE_componentWillReceiveProps`

#### Deprecated

16.3, use static getDerivedStateFromProps instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:742

***

### ~~UNSAFE\_componentWillUpdate()?~~

> **`optional`** **UNSAFE\_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

• **nextProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **nextState**: `Readonly`\<`Record`\<`string`, `never`\>\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

`Component.UNSAFE_componentWillUpdate`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:770

***

### componentDidCatch()?

> **`optional`** **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

• **error**: `Error`

• **errorInfo**: `ErrorInfo`

#### Returns

`void`

#### Inherited from

`Component.componentDidCatch`

#### Source

node\_modules/@types/react/index.d.ts:639

***

### componentDidMount()

> **componentDidMount**(): `void`

Draw map after component is rendered

#### Returns

`void`

#### Overrides

`Component.componentDidMount`

#### Source

[src/react/ReactGeovistoMap.tsx:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L60)

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Redraw map after component is updated

#### Returns

`void`

#### Overrides

`Component.componentDidUpdate`

#### Source

[src/react/ReactGeovistoMap.tsx:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L68)

***

### ~~componentWillMount()?~~

> **`optional`** **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

#### Inherited from

`Component.componentWillMount`

#### Deprecated

16.3, use componentDidMount or the constructor instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:696

***

### ~~componentWillReceiveProps()?~~

> **`optional`** **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

• **nextProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

`Component.componentWillReceiveProps`

#### Deprecated

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:725

***

### componentWillUnmount()?

> **`optional`** **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

`Component.componentWillUnmount`

#### Source

node\_modules/@types/react/index.d.ts:634

***

### ~~componentWillUpdate()?~~

> **`optional`** **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

• **nextProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **nextState**: `Readonly`\<`Record`\<`string`, `never`\>\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

`Component.componentWillUpdate`

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Source

node\_modules/@types/react/index.d.ts:755

***

### forceUpdate()

> **forceUpdate**(`callback`?): `void`

#### Parameters

• **callback?**

#### Returns

`void`

#### Inherited from

`Component.forceUpdate`

#### Source

node\_modules/@types/react/index.d.ts:489

***

### getDefaultClass()

> **`private`** **getDefaultClass**(): `string`

It returns a default class name used for Geovisto map container.

#### Returns

`string`

#### Source

[src/react/ReactGeovistoMap.tsx:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L53)

***

### getDefaultId()

> **`private`** **getDefaultId**(): `string`

It returns a default id used for Geovisto map container.

#### Returns

`string`

#### Source

[src/react/ReactGeovistoMap.tsx:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L46)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns Geovisto map.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Source

[src/react/ReactGeovistoMap.tsx:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L39)

***

### getSnapshotBeforeUpdate()?

> **`optional`** **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

• **prevProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **prevState**: `Readonly`\<`Record`\<`string`, `never`\>\>

#### Returns

`any`

#### Inherited from

`Component.getSnapshotBeforeUpdate`

#### Source

node\_modules/@types/react/index.d.ts:675

***

### render()

> **render**(): `Element`

The render function prepares a wrapper which will be used by Geovisto/Leaflet to render the map.

#### Returns

`Element`

#### Overrides

`Component.render`

#### Source

[src/react/ReactGeovistoMap.tsx:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L76)

***

### setState()

> **setState**\<`K`\>(`state`, `callback`?): `void`

#### Type parameters

• **K** extends `string`

#### Parameters

• **state**: `null` \| `Record`\<`string`, `never`\> \| (`prevState`, `props`) => `null` \| `Record`\<`string`, `never`\> \| `Pick`\<`Record`\<`string`, `never`\>, `K`\> \| `Pick`\<`Record`\<`string`, `never`\>, `K`\>

• **callback?**

#### Returns

`void`

#### Inherited from

`Component.setState`

#### Source

node\_modules/@types/react/index.d.ts:484

***

### shouldComponentUpdate()?

> **`optional`** **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

• **nextProps**: `Readonly`\<`IReactGeovistoMapProps`\>

• **nextState**: `Readonly`\<`Record`\<`string`, `never`\>\>

• **nextContext**: `any`

#### Returns

`boolean`

#### Inherited from

`Component.shouldComponentUpdate`

#### Source

node\_modules/@types/react/index.d.ts:629
