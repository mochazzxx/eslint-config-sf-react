# Airbnb React/JSX 编码规范 plus

*结合 airbnb 的 react 书写规范, 在 eslint-plugin-react eslint-plugin-jsx-a11y 推荐用法上做了调整*

## 新增规则

  1. [避免外部的 propTypes 使用](#forbid-foreign-prop-types-校验所有对象不使用-propTypes-属性)
  2. [自定义组件强制使用驼峰](#jsx-pascal-case-自定义组件强制使用驼峰)
  3. [避免静态的类属性和组件生命周期拼写错误](#no-typos-避免静态的类属性和组件生命周期拼写错误)
  4. [styles 属性必须为对象](#style-prop-object-style-属性必须为对象)
  5. [在同一个文件中只能声明一个组件](#no-multi-comp-在同一个文件中只能声明一个组件)
  6. [强制使用-es6-的-class-创建组件](#prefer-es6-class-强制使用-es6-的-class-创建组件)
  7. [单引号还是双引号](#quotes-单引号还是双引号)
  8. [空格](#spacing-空格)
  9. [属性](#props-属性)
  10. [Refs引用](#refs)
  11. [括号](#parentheses-括号)
  12. [标签](#tags-标签)
  13. [函数/方法](#methods-函数)
  14. [模块生命周期](#ordering-react-模块生命周期)
  15. [避免模块导入自身](#no-self-impor-避免模块导入自身)


## forbid-foreign-prop-types 校验所有对象不使用 propTypes 属性

### bad

```js
    import SomeComponent from './SomeComponent';
    SomeComponent.propTypes;
    var { propTypes } = SomeComponent;
    SomeComponent['propTypes'];
```

### good

```js
    import SomeComponent, {propTypes as someComponentPropTypes} from './SomeComponent';
```

## jsx-pascal-case 自定义组件强制使用驼峰

### bad

```js
    <Text_Component />
    <Mycomponent />
```

### good

```js
    <TextComponent />
    <MyComponent />
    <div />
```

## no-typos 避免静态的类属性和组件生命周期拼写错误

### bad

```js
    class MyComponent extends React.Component {
    static PropTypes = {}
    }

    class MyComponent extends React.Component {
    static proptypes = {}
    }

    class MyComponent extends React.Component {
    static ContextTypes = {}
    }

    class MyComponent extends React.Component {
    static contexttypes = {}
    }
```

### good

```js
    class MyComponent extends React.Component {
    static propTypes = {}
    }

    class MyComponent extends React.Component {
    static contextTypes = {}
    }

    class MyComponent extends React.Component {
    static childContextTypes = {}
    }

    class MyComponent extends React.Component {
    static defaultProps = {}
    }
```


## style-prop-object style 属性必须为对象

### bad
```js
    <div style="color: 'red'" />

    <div style={true} />

    <Hello style={true} />

    const styles = true;
    <div style={styles} />
```

### good

```js
    <div style={{ color: "red" }} />

    <Hello style={{ color: "red" }} />

    const styles = { color: "red" };
    <div style={styles} />
    React.createElement("div", { style: { color: 'red' }});

    React.createElement("Hello", { style: { color: 'red' }});

    const styles = { height: '100px' };
    React.createElement("div", { style: styles });
```

## no-multi-comp 在同一个文件中只能声明一个组件

### bad

```js
    class Hello extends React.Component {
        render() {
            return <div>Hello {this.props.name}</div>;
        }
    }

    class HelloJohn extends React.Component {
        render() {
            return <Hello name="John" />;
        }
    }
```

### good

```js
    var Hello = require('./components/Hello');

    class HelloJohn extends React.Component {
        render() {
            return <Hello name="John" />;
        }
    }
```

### prefer-es6-class 强制使用 es6 的 class 创建组件

### bad

```js
    var Hello = createReactClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
    });
```

### good

```js
    class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
    }
```

## no-this-in-sfc 函数组件中禁止使用 this

### bad

```js
    function Foo(props) {
    return (
        <div>{this.props.bar}</div>
    );
    }

    function Foo(props) {
    const { bar } = this.props;
    return (
        <div>{bar}</div>
    );
    }

    function Foo(props, context) {
    return (
        <div>
        {this.context.foo ? this.props.bar : ''}
        </div>
    );
    }

    function Foo(props, context) {
    const { foo } = this.context;
    const { bar } = this.props;
    return (
        <div>
        {foo ? bar : ''}
        </div>
    );
    }
```

### goood

```js
    function Foo(props) {
    return (
        <div>{props.bar}</div>
    );
    }

    function Foo(props) {
    const { bar } = props;
    return (
        <div>{bar}</div>
    );
    }

    function Foo({ bar }) {
    return (
        <div>{bar}</div>
    );
    }

    function Foo(props, context) {
    return (
        <div>
        {context.foo ? props.bar : ''}
        </div>
    );
    }

    function Foo(props, context) {
    const { foo } = context;
    const { bar } = props;
    return (
        <div>
        {foo ? bar : ''}
        </div>
    );
    }
```

## self-closing-comp 无子节点组件强制自闭合

### bad

```js
    var HelloJohn = <Hello name="John"></Hello>;
```

### good

```js
    var contentContainer = <div className="content"></div>;

    var intentionalSpace = <div>{' '}</div>;

    var HelloJohn = <Hello name="John" />;

    var Profile = <Hello name="John"><img src="picture.png" /></Hello>;

    var HelloSpace = <Hello>{' '}</Hello>;
```

## sort-comp 强制组件生命周期和事件处理函数书写顺序

### 按照以下顺序:
- 静态属性和方法
- 生命周期函数: 
    - displayName
    - propTypes
    - contextTypes
    - childContextTypes
    - mixins
    - statics
    - defaultProps
    - constructor
    - getDefaultProps
    - state
    - getInitialState
    - getChildContext
    - getDerivedStateFromProps
    - componentWillMount
    - UNSAFE_componentWillMount
    - componentDidMount
    - componentWillReceiveProps
    - UNSAFE_componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - UNSAFE_componentWillUpdate
    - getSnapshotBeforeUpdate
    - componentDidUpdate
    - componentDidCatch
    - componentWillUnmount
- 自定义方法
- render 方法

### bad

```jsx
    class Hello extends React.Component {
        static defaultProps = {}

        constructor(props) {
            super(props)
            this.state = {}
        }
        
        componentDidMount() {}

        static propTypes = {}

        renderSpan = () => (<span>I'm span</span>)

        handleClick = () => {}

        componentWillMount() {}

        render() {
            return (
                <div onClick={this.handleClick}>
                    {this.renderSpan()}
                </div>
            )
        }
    }
```

### good

```jsx
    class Hello extends React.Component {
        static propTypes = {}

        static defaultProps = {}

        constructor(props) {
            super(props)
            this.state = {}
        }

        componentWillMount() {}

        componentDidMount() {}

        handleClick = () => {}

        renderSpan = () => (<span>I'm span</span>)

        render() {
            return (
                <div onClick={this.handleClick}>
                    {this.renderSpan()}
                </div>
            )
        }
    }
```

## no-self-impor 避免模块导入自身

### bad

```js
    // foo.js
    import foo from './foo';

    const foo = require('./foo');
```

```js
    // index.js
    import index from '.';

    const index = require('.');
```

### good

```js
// foo.js
    import bar from './bar';

    const bar = require('./bar');
```

## named 验证导入的命名是否在所引用的模块导出集中

### example

```js

    export const foo = " I'm so foo "

```

### bad

```js

    import { notFoo } from './foo'
    // ES7 proposal
    export { notFoo as defNotBar } from './foo'

```

### good

```js

    import { foo } from './foo'
    // ES7 proposal
    export { foo as bar } from './foo'

```

## no-duplicates 验证是否导入相同的模块


