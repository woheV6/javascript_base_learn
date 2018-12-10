### 工具函数

- 1. 判断这个属性是否在原型上还是在实例上
  ```
      function hasPrototypeProperty(obj,prop){
         return obj.hasOwnProperty(prop)&&(prop in obj)
      }
  ```
- 2. 获取实例上所有对属性和方法(包括不可枚举的)
  ```
     Object.getOwnPrototypeNames(Array.prototype)
  ```
- 3. 获取页面视口大小
  ```
   const innerWidth=window.innerWidth
   const innnerHeight-window.innerHeight
   const pageWidth=innerWidth
   const pageHeight=innerHeoght
   if(typeof pageWidth!=='number'){
       if(document.compatMode==='CSS1Compat'){
          pageWidth=document.documentElement.cilentWidth
          pageHeight=document.documentElement.clientHeight
       }else{
          pageWidth=document.body.clientWidth
          pageHeight=document.body.clientheight
       }
   }
  ```
- 4. 判断window.open弹出式窗口是否被浏览器拦截
   ```
      function openWind(url){
          let isShow=false
            try{
                const newWin=window.open(url)
                if(newWin===null) isShow=true
            }catch(e){
                isShow=true
            }
            if(isShow){
                alert('您的浏览器新开窗口被屏蔽了')
            }
      }
      window.openWind('https://www.baidu.com')
   ```
- 5. 获取location对象的search 并解析
   ```
         function getUrlSearch(){
            let search=location.search
            const obj={}
            if(search){
               search=search.substring(1).split('&')
               search.forEach(item=>{
               [key,value]=item.split('=')
               obj[key]=value
               })
            }
            return obj
         }
   ```
- 6. 检查当前页面是不是用户打开的第一个页面？
    - window.history.length===0 // 这就是第一个页面
- 7. DOM是宿主对象
   - 在IE最早的版本中是通过COM来实现的并非javascript来实现 因此typeof document.createElement==='object' ;IE9纠正了这个问题，都返回function
   - 现代浏览器中 typeof document.createElement==='function' 
- 8. 检测浏览器是是否具备DOM1级的能力
   ```
   const isHasDom1=!!(document.getElementById&&document.createElement&&document.getElementsByTagName)
   ```
- 9. 利用document.domain 进行跨域？
   - 当页面包含其他子域的框架或内嵌框架时，由于安全限制 子域之间无法通过javascript进行通信。而将页面的domain设置为相同值，则框架之间就可以相互访问对方的javascript对象了
      ```
         // 假设页面来自p2p.wrap.xx
         document.domain=wrap.xx //松散设置成功
         document.domain=p2p.wrap.xx // 紧绷设置失败
      ```
   - domain 一开始设置为松散的，后面就不能把它设置为紧绷的了
- 10. 根据标签的name查找元素？
   ```
      要取得name='tyui'的div
      const div_list=document.getElementsByTagName('div')
      const tyui=div_list['tyui']
   ``` 
- 11. 下面两种方式有什么区别？
   ```
     A: document.write(`<h1>插入的</h1>`)
     B: window.onload=()=>{
        document.write(`<h1>插入的</h1>`)
     } 
     A 是在页面在呈现的过程中向页面直接输出了内容。
     B 是在页面加载完成之后 重写了页面。这样会导致页面上只存在<h1>插入的</h1>
   ```
- 12. 页面离开时 做提示？
   ```
      function beforeUnloadHandler(event){
         event.returnValue = "要离开吗？"
      }
      window.addEventListener('beforeunload',beforeUnloadHandler,true);
   ```
- 13. 计算样式  
   - 可以获取到所有的样式，包括外链 内敛 等等
   - document.defalutView.getComputedStyle(targetNode,null)
   - 它返回一个CSSStyleDeclaration对象，包含当前元素的所有计算样式
   - IE中 currentStyle也是CSSStyleDeclaration的实例
- 14. 利用DOM深度优先遍历 找出目标元素下符合条件的DOM
   ```
   // 找出页面中width>50的元素
   const target=document.getElementById('box')
   const filter={
      acceptNode:function(node){
         let style=null
         // 先判断有木有getComputedStyle这个方法
         if(document.defauleView.getComputedStyle instanceof Function){
            style=document.defaultView.getComputedStyle(node,null)
         }else{
            style=document.currentStyle
         }
         // 筛选出 width>50的dom
         return style.width.slice(0,-2)>50?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP
      }
   }
   const walker=document.createTreeWalker(target,NodeFilter.SHOW_ELEMENT,filter,false)
   let node = walker.nextNode()
   const list=[]
   while(node!==null){
      list.push(node)
      node=walker.nextNode()
   }
   ```
- 15. 如何 知道动态加载的script 资源下载完成？
   - 利用 onload事件来判断