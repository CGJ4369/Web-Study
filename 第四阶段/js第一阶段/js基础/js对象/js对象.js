//在js中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。
//对象由属性和方法组成：
//属性时事物的特征，方法是事物的行为。

//1.创建对象
//利用对象字面量创建对象{}
//var obj = {};//创建了一个空对象
var obj = {
    uname: "田所浩二",
    age: 18,
    sex: '男',
    phone: 114514,
    audio: function () {
        console.log("压力马斯涅");
    }
}
//里面的属性或者方法采取键值对的形式 属性名（键）:属性值(值)。
//逗号隔开
//方法冒号后面跟一个匿名函数

// 对象方法
//     对象的方法定义了一个函数，并作为对象的属性存储。
//     对象方法通过添加 () 调用 (作为一个函数)。
//     该实例访问了 person 对象的 fullName() 方法:加括号就直接输出值
var person = {
    firstName: "jone",
    lastName: "doe",
    id: 114514,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

//2.使用对象
//（1）调用对象属性
console.log(obj.uname);
//(2)调用对象第二种方法 对象名["属性名"]
console.log(obj["age"]);
//(3)调用对象的方法  对象名.方法名
obj.audio();



//变量、属性，函数、方法的区别
//变量和属性的相同点：变量和属性都是起到保存数值的作用
//变量和属性的不同点:变量是单独声明并赋值，使用时直接引用变量名，单独存在;属性是在对象里不需要声明，使用时是对象名.属性名

//函数和方法的相同点：都是实现某种功能，做某件事
//函数和方法的不同点：函数是单独声明，调用函数名 函数名（），单独存在;方法是在对象里调用的时候 对象.方法（）
var num = 1;
var obi = {
    num: 12,
    fn: function () {

    }
}

function fn() {

}
fn();//函数
obi.fn();//方法


//利用new object创建对象
var obj = new Object();//创建了一个空对象
obj.name = "阿瓦达";
obj.age = 14;
obj.sex = '男';
obj.sayHi = function () {
    console.log("你好");
}
//等号赋值；每个属性和方法之间用分号结束
console.log(obj.name);
console.log(obj['sex']);
obj.sayHi();



//利用构造函数创建对象
//new 构造函数名（）;
function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
        console.log(sang);
    }
}

var cgx = new Star("陈冠希", 18, "男");
//console.log(typeof cgx);
console.log(cgx.name);
console.log(cgx["sex"]);
cgx.sing("中国人");
var zbz = new Star("张柏芝", 18, "女");
console.log(zbz.name);
console.log(zbz.age);
//1.构造函数名字首字母要大写
//2.构造函数不需要return就可以返回结果
//3.属性和方法前面必须添加this



//new关键字执行过程
//1.new构造函数可以在内存中创建一个空的对象
//2.this就会指向刚才创建的空对象
//3.执行构造函数里面的代码 给这个空对象添加属性和方法
//4.返回这个对象（所以不需要return返回）





//遍历对象
var obj = {
    name: "pink老师",
    age: 18,
    sex: "男",
    f: function () {

    }
}
//一般都是直接console.log(obj.name)；得到想要的值

//for in 遍历对象
//for(变量 in 对象){}
for (var k in obj) {
    console.log(k);//k 变量 输出 得到的是属性名
    console.log(obj[k]);//obj[k]得到属性值
}




