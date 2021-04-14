# react

## jsx语法

## state

## props

## ref

- ref="xxx" 【不推荐的写法】
- React.createRef()
- ref={(c)=>this.xxx=c}


## 生命周期

### 旧版 16.x

- 初始化阶段
    1. constructor()
    2. componentWillMount()
    3. render()
    4. componentDidMount()

- 更新阶段，由组件内部通过this.setState或者父组件触发render
    1. shouldComponentUpdate() // 返回true的情况
    2. componentWillUpdate()
    3. render()
    4. componentDidUpdate()

- 调用了this.forceUpdate() 方法,相比于b只是少了shouldComponentUpdate判断
    1. componentWillUpdate()
    2. render()
    3. componentDidUpdate()

- 当前组件的父组件更改了传入该组件的属性
    1. componentWillReceiveProps()
    2. shouldComponentUpdate()
    3. componentWillUpdate()
    4. render()
    5. componentDidUpdate()

- 组件卸载
    1. componentWillUnMount()


componentWillMount、componentWillReceiveProps、componentWillUpdate前面增加了UNSAFE_

- 初始化阶段
    1. constructor()
    2. UNSAFE_componentWillMount()
    3. render()
    4. componentDidMount()

- 更新阶段，由组件内部通过this.setState或者父组件触发render
    1. shouldComponentUpdate() // 返回true的情况
    2. UNSAFE_componentWillUpdate()
    3. render()
    4. componentDidUpdate()

- 调用了this.forceUpdate() 方法,相比于b只是少了shouldComponentUpdate判断
    1. UNSAFE_componentWillUpdate()
    2. render()
    3. componentDidUpdate()

- 当前组件的父组件更改了传入该组件的属性
    1. UNSAFE_componentWillReceiveProps()
    2. shouldComponentUpdate()
    3. UNSAFE_componentWillUpdate()
    4. render()
    5. componentDidUpdate()

- 组件卸载
    1. componentWillUnMount()

### 新版 17.x

废除了 UNSAFE_componentWillMount、UNSAFE_componentWillReceiveProps、UNSAFE_componentWillUpdate

- 初始化阶段
    1. constructor()
    2. static getDerivedStateFromProps(props,state)
    3. render()
    4. componentDidMount()

- 更新阶段，由组件内部通过this.setState或者父组件触发render
    1. static getDerivedStateFromProps(props,state)
    2. shouldComponentUpdate() // 返回true的情况
    3. render()
    4. getSnapshotBeforeUpdate(prevProps,prevState,snapshotValue)
    5. componentDidUpdate()

- 调用了this.forceUpdate() 方法,相比于b只是少了shouldComponentUpdate判断
    1. static getDerivedStateFromProps(props,state)
    2. render()
    3. getSnapshotBeforeUpdate(prevProps,prevState,snapshotValue)
    4. componentDidUpdate()

- 当前组件的父组件更改了传入该组件的属性
    1. static getDerivedStateFromProps(props,state)
    2. shouldComponentUpdate() // 返回true的情况
    3. render()
    4. getSnapshotBeforeUpdate(prevProps,prevState,snapshotValue)
    5. componentDidUpdate()

- 组件卸载
    1. componentWillUnMount()


## 组件、函数组件

## hooks

### useState

### useEffect

### useContext

### useReducer

### useCallback

### useRef

### useImperativeHandle

### useLayoutEffect

### useDebugValue

### 自定义Hooks