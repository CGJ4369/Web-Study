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