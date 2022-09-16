//javascript代码是由浏览器中的javascript解析器来执行的，
//javascript解析器在运行js代码时候分为两步：
//（1）预解析
//预解析js引擎会把js里面所有的var(变量声明) 还有function(函数声明)提升到当前作用域的最前面
//1.变量预解析：
console.log(num);//undefined
var num = 10;
//相当于以下形式
var num;
console.log(num);
num = 10;
//所以输出的是undefined


fun(2);//报错
var fun = function (num) {
    console.log(num)
}
//相当于执行以下代码
var fun;
fun(2);//这时候的fun是没有赋值的（或者说赋表达式的）,要让它先赋个表达式或者值再调用，也就是把fun()移到表达式下面即可。
fun = function (num) {
    console.log(num)
}

//2.函数预解析
fun();//fun()放上面下面都可以，因为会优先把函数声明提上去
function fun() {
    console.log(2);
}


//(2)代码执行
//代码执行是按照代码书写的顺序从上往下执行

//例子1
var num1 = 11;
fun1();
function fun1() {
    console.log(num1)
    var num1 = 33;
}
//可转化成以下代码
var num1;
function fun1() {
    var num1;
    console.log(num1);//就近原则执行上面的var num1;所以输出位undefined
    num1 = 33;
}
num1 = 11;
fun1();

//例子2
var num = 10;
function fn() {
    console.log(num);
    var num = 20;
    console.log(num);

}
fn();
//相当于以下代码
var num;

function fn() {
    var num;
    console.log(num);//undefined
    num = 20;
    console.log(num);//20
}
num = 10;
fn();

//例子3
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

//相当于以下代码
function f1() {
    var a;
    //相当于 var a = 9; b=9;c=9;
    //集体声明是var a=9,b=9,c=9;
    a = 9;
    b = 9;
    c = 9;
    //因为b和c在函数内都没有赋值，所以当全局变量看。
    console.log(a);//9
    console.log(b);//9
    console.log(c);//9
}
f1();
console.log(c);//9
console.log(b);//9
console.log(a);//报错（没有定义）