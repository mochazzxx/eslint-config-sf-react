# Airbnb React/JSX 编码规范 plus

*结合 airbnb 的 react 书写规范, 在 eslint-plugin-react eslint-plugin-jsx-a11y 推荐用法上做了调整*

## 新增规则

  1. [避免外部的 propTypes 使用](#)
  2. [Class vs React.createClass vs stateless](#创建模块)
  3. [Mixins](#mixins)
  4. [命名](#naming-命名)
  5. [声明模块](#declaration-声明模块)
  6. [代码对齐](#alignment-代码对齐)
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


