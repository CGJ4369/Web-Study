//计算年龄
var year = prompt("请输入您的出生年份");
var age = 2022 - year;//year取过来是字符串，由于是减法操作，隐式操作，如果是加法，则要转换为数字才能相减
alert("您今年已经" + age + "岁了!");//因为两个字符串相加还是字符串


//加法计算器
var a = prompt("请输入第一个数");
var b = prompt("请输入第二个数");
var sum = parseFloat(a) + parseFloat(b);
alert("结果是" + sum);