# VueCircleMenu

<img src="./src/images/index.gif">

# demo
为了更好的演示请使用手机扫描下面的二维码查看demo

<img src="./src/images/demo.png">

# API

## Props

| 参数    | 类型    | 说明   |
| ------------- |-------------| -----|
| type | String |必填项,指明菜单的类型,有6种：top,bottom,left,right,middle,middle-around |
| circle | boolean | 菜单按钮是否为圆角，默认为方形按钮 |
| mask | String | 遮罩层，有两种："white"和"black" |
| animate | String | 子菜单动画,可以引入外部css动画库，比如Animate.css |
| btn | boolean | 开关按钮,填这属性，则有默认开关按钮，不填则没有默认,需要在slot中自行定义开关按钮 |
| colors | Array | 按钮和菜单的背景颜色 |

## Slot

| SlotName    | 说明   |
| -------------| -----|
| item_btn  | 自定义开关按钮 |
| item_1 | 第一个菜单的内容 |
| item_2 | 第二个菜单的内容 |
| item_3 | 第三个菜单的内容 |
| item_4 | 第四个菜单的内容 |

# 详细说明

## Props

### type
`type`参数是必填项，指明菜单的类型，一共有一下六种：top,bottom,left,right,middle,middle-around

<img src="./src/images/top.gif" width="250">
<img src="./src/images/bottom.gif" width="250">
<img src="./src/images/left.gif" width="250">
<img src="./src/images/right.gif" width="250">
<img src="./src/images/middle.gif" width="250">
<img src="./src/images/middle-around.gif" width="250">

## circle
`circle`是让菜单按钮为圆角，默认是方形按钮：

<img src="./src/images/cirecle.gif" width="300">
<img src="./src/images/ani04.gif" width="300">

## mask
`mask`是开关按钮在切换的时候产生的遮罩，分为两种："white"和"black".(注意：不填或填错类型都视为不需要遮罩)

<img src="./src/images/mask.gif" width="300">
<img src="./src/images/middle-around.gif" width="300">

## animate
`animate`是给菜单添加动画，只要添加动画css类即可，可以引入第三方css动画库，比如animate.css

<img src="./src/images/ani.gif" width="300">
<img src="./src/images/ani02.gif" width="300">
<img src="./src/images/ani03.gif" width="300">
<img src="./src/images/ani04.gif" width="300">

## colors
`colors`是指定按钮和菜单的背景颜色，不使用该属性，则会使用默认的颜色配置，该组件默认颜色配置为：

  <img src="./src/images/colors.PNG" width="300">

如果要配置颜色，`colors`传入数组，<b>另外，很重要的一点,数组的值必须是颜色代码，而不是css类.</b>例如:

```html

  <circle-menu type="bottom" colors="[ '#563761', 'rgb(255, 255, 102)', '#FFE26F', '#F3825F', '#F19584', ]">
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
    <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
    <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a>
    <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a>
  </circle-menu>
```
注意颜色代码必须一一对应，第一个颜色代码指代按钮，第二个颜色为第一个菜单，依次类推，共五个颜色代码，填多，填少或者填入的不是颜色代码都是无效的

## Slot

### item_btn
该命名`slot`是指自定义开关按钮，当你需要自定义开关按钮，请不要填写`btn`属性，使用该`slot`,这样就可以禁用默认的开关按钮，使用自定义的按钮。（自定义开关按钮有个好处，就是可以给开关按钮绑定事件，做进一步的操作）

### item_1,item_2,item_3,item_4
该类`slot`分别指代四个菜单按钮

### 思想：
这五个`slot`，其实就说明该组件其实就一个包裹内容的控件， 里面的内容都在`slot`设置

- 通过`slot`，可以填写任何内容，并且自定义样式
```html
  <circle-menu type="top">
    <button type="button" slot="item_btn"></button>
    <router-link :to="..." slot="item_1">
    <span slot="item_2"></a>
    <div slot="item_3"></a>
    <img  slot="item_4" src="img" />
  </circle-menu>
```
- 通过`slot`,给菜单绑定事件

```html
  <circle-menu type="middle-around">
    <button type="button" slot="item_btn" @click="dosomething" ></button>
    <a slot="item_1" herf="#" @click=""></a>
    <v-touch tag="a" v-on:tap="onTap" slot="item_2"></v-touch>
    <v-touch tag="a" v-on:tap="onTap" slot="item_3"></v-touch>
    <a slot="item_4" herf="#" v-on:handler="handler"></a>
  </circle-menu>
```


## 简单的例子
```html
<!--"middle"类型, 动画引入animate.css库，白色遮罩，圆形自定义开关按钮，默认菜单颜色配置-->
  <circle-menu type="middle" animate="animated jello" mask='white' circle>
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg"></a>
    <a slot="item_2" class="fa fa-weixin fa-lg"></a>
    <a slot="item_3" class="fa fa-weibo fa-lg"></a>
    <a slot="item_4" class="fa fa-github fa-lg"></a>
  </circle-menu>
```

```html
<!--"top"类型,默认动画,灰色遮罩，方形默认开关按钮，自定义菜单颜色配置-->
  <circle-menu type="top" mask='black' btn colors="[ '#563761', '#A7425C', '#FFE26F', 'F3825F', '#F19584', ]">
    <a slot="item_1" class="fa fa-twitter fa-lg"></a>
    <a slot="item_2" class="fa fa-weixin fa-lg"></a>
    <a slot="item_3" class="fa fa-weibo fa-lg"></a>
    <a slot="item_4" class="fa fa-github fa-lg"></a>
  </circle-menu>
```

# 安装和使用

```javascript
npm install vue-circle-menu
```

- 若作为全局组件使用

```javascript
//在项目入口文件
import Vue from 'vue'
import CircleMenu from 'vue-circle-menu'
Vue.component('CircleMenu', CircleMenu)
```

- 若作为局部组件

```javascript
//在某个组件中
import CircleMenu from 'vue-circle-menu'
export default {
  components: {
    CircleMenu
  }
}
```
# bug和建议

如果在使用中遇到问题或者建议，欢迎提`issues`

# LICENSE

MIT