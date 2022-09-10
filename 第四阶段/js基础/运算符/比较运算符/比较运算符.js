// 比较运算符是两个数据进行比较的时候使用的，返回的结果是一个布尔值（true/false）
// 全等运算符（===/!==）
// 全等运算符要求值和数据类型都一致
// 不等运算符要求值和数据类型不全一致
console.log(18 === "18");//false
console.log(18 !== "18");//true

//==默认转换数据类型，会吧字符类型转换为数字类型,不等于也一样
console.log(18 == "18");//true

//>,<，=比较符
var num = 7;
console.log(!(num < 10 || structuredClone.length == num));//false

//布尔值参与的逻辑运算 true && false == false
//逻辑与短路运算 如果表达式1结果为真 表达式2因为真 则返回表达式2
console.log(123 && 456);//456 因为123为true，所以返回456这个true
// 如果表达式1为假,那就返回表达式1
console.log(0 && 456);//0
console.log(0 && 11 && 222 && 33);//0
//如果有空的或者否定的都为假（0 "" null undefined NaN）,其他都是真的

//逻辑或短路运算 如果表达式1 结果是真 则返回的是表达式1
console.log(123 || 456);//123
console.log(123 || 456 || 444 || 51514);//123
//如果表示1是假 则返回表达式2
console.log(0 || 456);//456
console.log(0 || 456 || 656526);//456

var num = 0;
console.log(123 || num++);//123 
console.log(num);//0 因为num++在上面一直没有实现过，直接中断输出123了
