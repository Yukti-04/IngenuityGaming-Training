var FullName = prompt("Enter your Name");

document.body.innerHTML = '<span style="color:red">' + "Your Name: " + FullName + "</span>";

num1 = prompt("enter first number");
num2 = prompt("enter second number");
add = Number(num1) + Number(num2);
sub = Number(num1) - Number(num2);
mul = Number(num1) * Number(num2);
div = Number(num1) / Number(num2);
document.write("<br> add:" + add);

document.write("<br> Subtraction:" + sub);
document.write("<br> Multiplicition:" + mul);
document.write("<br> Division:" + div);

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
document.write("<br>Today Date: " + day + "/" + month + "/" + year);
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  

 "Friday",
  "Saturday",
];

const d = new Date();
let dayName = weekday[d.getDay()];
document.write("<br>Today Day:" + dayName);