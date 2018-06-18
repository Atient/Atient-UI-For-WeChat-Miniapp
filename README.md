## Atient UI
###### Useful components for Wechat Miniapp
___
#### Usage
&emsp; Just clone these folder into your project and add key sentence into your `.json` file of your page. <br>
```  
    "usingComponents": {
      "component-name": "path/to/component"
    }
```
Then you can use the component in the page.
___
#### Components
##### 1. &emsp; load-image
This is a image component that could show a local `.gif` before the web image loaded.

Firstly add code into your `.json` file to use the component,and then you can write in your `.wxml` file. If the component's name you defined is `load-image`, write like this:
```html
<load-image/>
```  
 The properties except those `view` take itself are as follow:

 |Name|Type|Required|Default|Explanation|
 |----|----|--------|-------|-----------|
 |src |string|true|none|This is the `url` of the main image you wanna show|
 |loadsrc|string|true|none|This is the `url` of the loading image, support `.gif`|
 |mode|string|false|aspectFit|This is the scale mode of your main image, you can set it like official usage of `image`.You can [jump here](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)|

You can add `class` into this component's tag to change its looks.

Example:
```
  <load-image class='load-image' loadsrc='load.gif' src='main.jpg' mode='scaleToFill'/>
```
![Atient 1.0](https://www.passstr8.top/TraImages/github/example1.gif)
---
 ##### 2. &emsp; float-button-list
This is a button include less than 5 other button, which will show those with animation when you tap it.  

Firstly add code into your `.json` file to use the component,and then you can write in your `.wxml` file. If the component's name you defined is `float-button-list`, write like this:
```html
<float-button-list class="float-button-list"/>
```
If you want to make the button always on the top, remenber set `z-index` a big number. add things into the relative `class` in the `.wxss` file of page like this:
```
.float-button-list{
  position: fixed;
  bottom: 100px;
  left: 50px;
  z-index: 99;
}
```
Notice! The `bottom` here may be the distance from the top of this component to the bottom of window. Please change the `bottom` and `left` carefully to move it to the best place.

The properties except those `view` take itself are as follow:

|Name|Type|Required|Default|Explanation|
|----|----|--------|-------|-----------|
|background|string|false|"#62b900"|This is the background color of buttons.Only support Hexadecimal format|
|length|number|false|50|This is the height and width of buttons,the unit is `px`.|
|direction|string|false|"up"|This is the translate direction of buttons. The valid values are "up","down","left" and "right".|
|duration|number|false|500|The time set for animation.|
|single-tap|oolean|false|true|Set "true" to make buttons move back after single tap and "false" for no.|
|top|string|true| |This is the icon's `url` of the button always show.|
|list|array|true| |Set icons' `url` for the list buttons and the item of it is listed behind. The max length set is 5.|

The item of `list` contains only one property now:

|Name|Type|Explanation|
|----|----|-----------|
|icon|string|The `url` to the icon of button.|

This component takes an event:

|Name|Type|Explanation|
|----|----|-----------|
|itemtap|event|It will return the button's Id in `e.detail.current` after you tap a buuton in this component.You can use it for different options.|

You can add `class` into this component's tag to change its looks.

Example:

In `.wxml`
```html
  <float-button-list class='float-button-list' list='{{list}}' top='../../resource/add.png' binditemtap='ItemTap' direction='up' single-tap='false' length='100' duration='1000' background='#e08e84'/>
```

In `.js`
```js
...
data: {
 list: [{
   icon: "../../resource/idea.png"
 }, {
   icon: "../../resource/idea.png"
 }, {
   icon: "../../resource/idea.png"
 }, {
   icon: "../../resource/idea.png"
 }]
},
...
ItemTap: function(e){
    console.log(e.detail.current);
  }
...
```

![Atient 1.0](https://www.passstr8.top/TraImages/github/example3.gif)

---

##### &emsp; 3. gradient-background
This may be a failure of my work. I don't know why it couldn't inherit `class` from its parent. So the only thing I can do is insert a child into itself to make a change and it goes hard to use for some the fresh.

At beginning in my design it could be use as background freely in any occasion. But now <font color=orange> I only recommand to use it as a main background when you're introduce your Miniapp like some did on the Android. </font> Certainly, if you're familiar with Miniapp development, you can try to adjust its `class` `inter` in its `.wxss` file to your application.

In your page, use it like this if you've named it as `gradient-background`:

```
<gradient-background/>
```   

The properties are as follow:

|Name|Type|Required|Default|Explanation|
|----|----|--------|-------|-----------|
|start-color|string|false|#000000|To set the color before beginning. And it will be set as the same as the `end-color` after changing finish.|
|end-color|string|false|#ffffff|To set the final color.|
|auto-start|boolean|false|true|The color start changing since this component loaded.|
|start|boolean|false|false|To let the change start set this `true`.|
|duration|number|false|500|The animation's duration.|
|height|number|false|100|The percentage of its height.|
|width|number|false|100|The percentage of its width.|

This component takes two events besides events the `view` taking:

|Name|Type|Explanation|
|----|----|-----------|
|start|event|It will cause a trigger when the animation start.|
|end|event|It will cause a trigger when the animation end.|

Example:
```html
  <gradient-background start-color='#6699ff' end-color="#e08e84" duration='100' auto-start='false' start='{{start}}' height='100' width='100' bindstart='Start' bindend='End'/>
```

![Atient 1.1](https://www.passstr8.top/TraImages/github/example4.gif)

 ---
##### Developer
&emsp; Atient
