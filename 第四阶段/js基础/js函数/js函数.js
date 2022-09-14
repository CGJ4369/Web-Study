function function1() {
    alert("Hello world!");
}

//函数如果有return 则返回的是return后面的值
function fun1() {
    return 123;
}
console.log(fun1());

//如果函数没有return则返回undefined
function fun2() {

}
console.log(fun2());

//当不确定有多少个参数传递的时候，可以用arguments来获取
//只有函数才有arguments对象 而且每个函数都内置了arguments对象
function fun3() {
    console.log(arguments);

    console.log(arguments.length);

    console.log(argument[2]);

    //遍历
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fun3(1, 2, 3);
//arguments展示形式是一个伪数组，可以遍历。
//伪数组具有以下特点：
// 1.具有length属性
// 2.按索引方式储存数据
// 3.不具有数组的push、pop等方法


//利用函数求任意个数的最大值
function getMax() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(getMax(1, 2, 3));
console.log(getMax(15, 52, 14, 4, 52));

//翻转任意数组reverse 
function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
var arr1 = reverse([1, 5, 4, 2, 3]);
console.log(arr1);

var arr2 = reverse(["red", "pink", "blue"]);
console.log(arr2);

//函数两种声明方式
// 1.利用函数关键字自定义函数(命名函数)
function f() {

}
f();
// 2.函数表达式(匿名函数)
// var 变量名 = function () { };
var fun = function (asd) {
    console.log("我是函数表达式");
    console.log(asd);
}

fun("114514");