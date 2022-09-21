//Math数学对象不是一个构造器（构造函数），不需要new来调用，直接用就行
console.log(Math.PI);//圆周率
console.log(Math.max(1, 99, 3));//99
console.log(Math.max(-1, -10));//-1
console.log(Math.max(1, 99, "114514同城"));//NAN
console.log(Math.max());//-Infinity
console.log(Math.max("1"));//都会隐式转换

var a = "114514";
console.log(typeof (a));
console.log(typeof (Math.max(0, "1")));//1 纯字符串比较，转换成ascii码再比较
console.log(Math.max(1, "20"));//字符串隐式转换为数字在比较
console.log((1 > "1我"));//false纯数字和非纯数字字符串比较返回false