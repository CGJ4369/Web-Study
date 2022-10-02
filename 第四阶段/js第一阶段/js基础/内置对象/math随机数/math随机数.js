//Math对象随机数方法
//1.random() 返回一个随机的小数  0 <= x < 1
//2.这个方法里面不跟参数
console.log(Math.random());
//3.两个数之间的随机整数 并且 包含着两个整数
//Math.floor(Math.random()*(max-min+1))_min;
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));


//随机点名
var arr = ["张三", "114514", "仙贝"];
// console.log(arr[getRandom(0, 2)]);
console.log(arr[getRandom(0, arr.length - 1)]);


//猜数字游戏
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = getRandom(1, 10);
var count = 0;
while (true) {
    var num = prompt("输入1~10之间的一个数字,只有5次机会");
    if (count < 5) {
        if (num > random) {
            alert("你猜大了");
            count++;
        } else if (num < random) {
            alert("你猜小了")
            count++;
        } else {
            alert("你猜对了");
            break;
        }
    }
    else {
        alert("超过5次了");
        break;
    }

}