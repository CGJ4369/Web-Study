
// JavaScript 变量
// 与代数一样，JavaScript 变量可用于存放值（比如 x=5）和表达式（比如 z=x+y）。

// 变量可以使用短名称（比如 x 和 y），也可以使用描述性更好的名称（比如 age, sum, totalvolume）。

// 变量必须以字母开头
// 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
// 变量名称对大小写敏感（y 和 Y 是不同的变量）
// JavaScript 语句和 JavaScript 变量都对大小写敏感。



// 一条语句，多个变量
// 您可以在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可：
// 多条语句，多个变量
var lastName = "Doe", age = 30, job = "carpenter";



// 重新声明 JavaScript 变量
// 如果重新声明 JavaScript 变量，该变量的值不会丢失：

// 在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：
var carname = "Volve";
var carname;
console.log(carname);