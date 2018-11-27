var s1 = "123456789";
const s2 = s1.slice(1, 4);
const s3 = s1.substr(1, 4);
const s4 = s1.substring(1, 4);
console.log(s2); //234
console.log(s3); //234
console.log(s4); //2345
// substr 第二个参数指返回的个数
// slice substring 第二个参数 值的是 最后一个字符串后面的位置
// 如果没有传递第二个参数 则以字符串长度作为第二个参数
// 负数的情况
const s5 = s1.slice(-2); // s1.slice(7)用字符串长度加上这个负数
const s6 = s1.substring(-2); // s1.substring(0)返回全部
const s7 = s1.substr(-2); // s1.substr(7)
console.log(s5); //89
console.log(s6); // 123456789
console.log(s7); // 89
const s8 = s1.slice(-2, -5); // s1.slice(7,4) //返回空''
const s9 = s1.substr(-2, -5); //s1.substr(7,0) // ''
const s10 = s1.substring(-2, -5); // s1.substring(0,0)
console.log(s8);
console.log(s9);
console.log(s10);
