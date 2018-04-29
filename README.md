# vue-simple-modal

A Vue component to pay-keyboard
一个简单的vue弹窗插件

## 安装

```JS
npm i vue-alert-simple -S
```

## 使用

```js
import VueAlertPlugin from 'vue-alert-simple'
Vue.use(VueAlertPlugin)

// 作为组件的方式使用（alert组件）
<v-alert></v-alert>
```

## alert弹出框示例

```html
    <v-alert :visible="isShow" @close="close"></v-alert>
```

```javascript
methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false
    }
  }
```

## alert弹出框 Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| width       | 弹出框宽度 |String| 280px
| title        | 弹出框标题 |Strging | "提示"
| content        | 弹出框提示内容 |String | ""
| buttonText       | 关闭按钮的文字 |String | ”关闭”

### Slots 支持自定义插槽
```
//文档准备中
```

## toast示例

```javascript
mounted() {
    this.$toast({
      msg: this.msg,
      time: 3000
    })
  }
```

### Props

|    name    |    Description   |   type   |default|
| -----------------  | ---------------- | :--------: | :----------: |
| msg       | toast内容 |String| ""
| time        | 显示时长 |Strging | "3000"

