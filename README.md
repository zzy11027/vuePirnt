# vuePrint
## 简介

  首先感谢大佬（https://github.com/myliuxia/kr-print-designer）提供的开源模板，基于原作者基础上新增图标打印和一些其他细微更改。基于原模板以及VUE、LODOP、ElementUi、进行二次开发，实现的打印模板自定义,具体使用方法参照原作者，本模块只为公司项目提供。

## 安装

Vue项目中引用该组件
```
npm install vue-lodop-print
```
打印功能基于C-Lodop打印控件，需前往[下载](http://www.lodop.net/download.html)

## 引入

main.js

```javascript
import Vue from 'vue'
import VueLodopPrint from 'vue-lodop-print'
import 'vue-lodop-print/lib/vue-lodop-print.css'

Vue.use(VueLodopPrint)
```

demo.vue

```html
<template>
  <div id="app">
    <vue-lodop-print />
  </div>
</template>
```
