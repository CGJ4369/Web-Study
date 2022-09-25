//Date() 日期对象 是一个构造函数 必须使用new来调用创建我们的日期对象
var arr = new Array();//创建一个数组对象
var obj = new Object();//创建一个对象实例

//1.使用Date 如果没有参数 返回系统当前时间
var date = new Date();
console.log(date);
//2.参数常用的写法 数字型(2019,10,01) 或者是 字符串型 "2019-10-1 8:8:8"
var date1 = new Date(2019, 10, 1);
console.log(date1);//返回的是11月不是10月 因为月份是从0开始算起的
var date2 = new Date("2019-10-1 8:8:8");
console.log(date2);//返回参数的时间

//格式化日期 年月日
var date3 = new Date();
console.log(date3.getFullYear());//2022
console.log(date.getMonth());//返回的是比现实小一个月  因为它月份是从0开始的
console.log(date.getMonth() + 1);//当前月份
console.log(date.getDate());//返回几号
console.log(date.getDay());//3  周一返回的是1 周六返回的是6  但周日返回0

//写一个 2022年9月25日 星期三
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var day = date.getDay();
console.log("今天是:" + year + "年" + month + "月" + dates + "日 " + arr[day]);