//一行打印五颗星星
var str = "";
for (var i = 1; i <= 5; i++) {
    str = str + "★";
}
console.log(str);

var str1 = "";
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str1 += j + "x" + i + "=" + i * j + "\t";
    }
    str1 += "\n";
}
console.log(str1);