//(1)Math.floot() 向下取整 往小了取
console.log(Math.floor(1.1));//1
console.log(Math.floor(1.9));//1

//(2)Math.ceil() 向上取整 往大了取
console.log(Math.ceil(1.1));//2
console.log(Math.ceil(1.9));//2

//(3)Math.round() 四舍五入  其他数字都是四舍五入，.5是特殊情况，会往大了取
console.log(Math.round(1.1));//1
console.log(Math.round(1.5));//2
console.log(Math.round(1.9));//2
console.log(Math.round(-1.1));//-1
console.log(Math.round(-1.5));//-1  .5是特殊情况，会往大了取(这里-1比-2更大所以这里去-1)
console.log(Math.round(-1.9));//-2