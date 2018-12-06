// 来正儿八经创建个闭包
function sayId(){
       const element=document.getElementById('yo')     
       element.onclick=function(){
         console.log(element.id)
       }
}