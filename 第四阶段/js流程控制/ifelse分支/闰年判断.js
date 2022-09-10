var year = prompt("请输入年份");
if (year % 4 == 0 && year / 100 != 0 || year % 400 == 0) {
    alert("是闰年");
}
else {
    alert("是平年");
}