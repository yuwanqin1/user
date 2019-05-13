module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "indent": [2, 4],//缩进风格
    "no-console": 2,//启用console
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-continue": 0,//禁止使用continue
    "no-bitwise": 0,//禁止使用按位运算符
    "no-caller": 1,//禁止使用arguments.caller或arguments.callee
    "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 2,//禁止给类赋值
    "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    "no-eval": 2,//禁止使用eval"no-extra-parens": 2,//禁止非必要的括号
    "no-extra-semi": 2,//禁止多余的冒号
    "no-inline-comments": 0,//禁止行内备注
    "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量"no-multi-spaces": 1,//不能用多余的空格
    "no-multi-str": 2,//字符串不能用\换行
    "no-negated-in-lhs": 2,//in 操作符的左边不能有!
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算"no-new-func": 1,//禁止使用new Function
    "no-new-object": 2,//禁止使用new Object()
    "no-new-require": 2,//禁止使用new require
    "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
    "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
    "no-ternary": 0,//禁止使用三目运算符
    "no-this-before-super": 0,//在调用super()之前不能使用this或super
    "no-with": 2,//禁用with
    "no-var": 0,//禁用var，用let和const代替"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
    "arrow-parens": 0,//箭头函数用小括号括起来
    "arrow-spacing": 0,//=>的前/后括号
    "accessor-pairs": 0,//在对象中使用getter/setter
    "block-scoped-var": 0,//块语句中使用var
    "brace-style": [1, "1tbs"],//大括号风格
    "camelcase": 1,//强制驼峰法命名
    "comma-spacing": 0,//逗号前后的空格
    "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    "consistent-return": 2,//return 后面是否允许省略
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "default-case": 2,//switch语句最后必须有default
    "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
    "quotes": [2, "single"],//引号类型 `` "" ''
    "no-console": "off",//可以使用console
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi": [2, "always"],
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": 0,
    // 要求同一个声明块中的
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
