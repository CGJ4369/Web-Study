//switch注意事项

//num的值和case里面的值相匹配的时候是 全等 必须是值和数据类型一致才可以 num ===1
var num = 3;//如果num="3"就不信
switch (num) {
    case 1:
        console.log(1)
        break;
    case 3:
        console.log(3)
        break;
}

//例子
// var time = prompt("请输入时间");
// switch (time) {
//     case "12":
//         console.log("现在是中午十二点");
//         break;
//     case "18":
//         console.log("现在是下午十八点");
//         break;
// }