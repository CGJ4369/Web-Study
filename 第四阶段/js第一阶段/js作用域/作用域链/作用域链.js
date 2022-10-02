//作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来觉得取哪个值。这种结构称为作用域链 就近原则

var num1 = 10;
function fn() {
    var num = 20;

    function fun() {
        var num = 1;
        console.log(num);//谁离得近就执行谁
    }
    fun();
    console.log(num1);
}
fn();