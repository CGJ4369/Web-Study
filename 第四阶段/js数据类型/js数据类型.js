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