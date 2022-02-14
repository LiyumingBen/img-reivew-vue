## 功能  

+ 图片的拖拽事件  

+ 图片下载功能  

+ 图片左右切换功能

+ 检索Dom内所有图片,添加点击事件  

+ 图片的放大缩小功能,支持鼠标滚轮事件  
  

## Use  

### install 
```
npm install imgs-preview-vue --save  

Vue.use(VueImgsPreview)
```  

### main.js 

```
import VueImgsPreview from 'imgs-preview-vue'
```  
###  App.vue 

```
<img-preview :imgPre="false" :articleId="'Doc'" ></img-preview>
```  

## API  

|参数  | 说明 | 类型 | 默认值 |
|---|---|---|---|
|imgPre | 组件的显示状态| Boolean | false|
|articleId | 文章Dom的ID | String | null |
