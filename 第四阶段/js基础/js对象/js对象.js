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
document.getElementById("demo").innerHTML = person.fullName();//jone doe

// 如果你要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：不加括号输出函数表达式
document.getElementById("demo").innerHTML = person.fullName;//fullName: function () {return this.firstName + " " + this.lastName;}