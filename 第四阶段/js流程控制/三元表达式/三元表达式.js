//1.有三元运算符组成的式子我们成为三元表达式
//2.++num  3+5  ? :
//3.语法结构
//条件表达式 ？ 表达式1 ： 表达式2
//4.执行思路
//如果条件表达式结果为真 则 返回表达式1的值；如果条件表达式的结果是假 则返回 表达式2的值
var num = 10;
var result = num > 5 ? "是的" : "不是";
console.log(result);

//例子
var time = prompt("请输入一个0~29的数字");
var result = time < 10 ? "0" + time : time;
console.log(result);

