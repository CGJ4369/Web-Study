// JavaScript 拥有动态类型
// JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
console.log(x);


// 变量的数据类型可以使用 typeof 操作符来查看：
console.log(typeof "John");                // 返回 string
console.log(typeof 3.14);                 // 返回 number
console.log(typeof false);               // 返回 boolean
console.log(typeof [1, 2, 3, 4]);           // 返回 object
console.log(typeof { name: 'John', age: 34 }); // 返回 object

//prompt取过来的值是字符型的
var age = prompt("请输入您的年龄");
console.log(age);
console.log(typeof age);


// 字符串
// 字符串可以是单引号或者双引号：
var a = "asa 114514";
var a = 'asa 114514';
// 又或者：
var a = "我是'不吃苦瓜'的咸鱼";
console.log(a);


// js数字
// js只有一种数字类型,数字可以带小数点也可以不带：
var x1 = 11.00;
var x1 = 11;
// 极大或极小的数字可以通过科学（指数）计数法来书写：
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123



// js数组
// 创建数组
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
// 或者:
var cars = new Array("Saab", "Volvo", "BMW");
// 在或者：
var cars = ["Saab", "Volvo", "BMW"];



// js对象
// 有两种创建对象方式
var person = { firstname: 'john', lastName: "doe", id: "114514" };
var person = {
    firstname: 'john',
    lastname: "doe",
    id: "114514"
};

// 有两种对象属性的寻址方式
// console.log(person.lastname);
document.write(person["lastname"] + "<br>");



//数据类型的转换
//把一种数据类型转换成另外一种数据类型
// 通常有：
// 1.转换为字符串类型
// （1）toString() 转换为字符串
var num = 1; alert(num.toString());
// （2）String()强制转换 转换为字符串
var num = 1; alert(String(num));
// （3）加好拼接字符串 和字符串拼接的结果都是字符串（隐式转换）
var num = 1; alert(num + "字符串");//重点

// 2.转换为数字类型（重点）
// （1）parseInt(string)函数 将string类型转成整数数值型
parseInt("78");
parseInt("3.94");//取整也就是3
parseInt("120px");//120去掉px单位
parseInt("rem120px")//NAN
// （2）parseFloat(string)函数 将string类型转成浮点整数数字行 
parseFloat("78.12");//78.12
// (3)Number()强制转换函数 将string类型转换为数值型
Number("12");
// (4)js隐式转换（-*/） 利用算术运算隐式转换为数值型
"12" - 0;

// 3.转换为布尔类型
//Boolean()函数 其他类型转换成布尔值
Boolean("true");
//代表空、否定的值都会转换成false,比如：''、0、NaN、null、undefined(只有这五个会转换为false)
console.log(Boolean(''));//false
console.log(Boolean(0));//false
console.log(Boolean("小白"));//true