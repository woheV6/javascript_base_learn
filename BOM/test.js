const max=10
let  n=0
// const id=setInterval(test,500)
// function test(){
//     n++
//     if(n===max){
//         clearInterval(id)
//         console.log(n)
//     }
// }
function test2(){
    n++
    if(n<max){
        console.log(n)
       setTimeout(test2,500) 
    }else{
        console.log(n)
    }
}
test2()