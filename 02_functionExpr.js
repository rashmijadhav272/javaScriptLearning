var square=function(num){
    console.log(num,"=",num*num);
    
}
console.log("The square are these number are:");
square (5);
square(6);
square(25);
square(100);
console.log("=================================");
var data=function(){
console.log("the type of variable is:",typeof data);
}
data();
var square=function(width,length){
console.log("the area of rectangle is:",width*length);
}
square(499,917);
console.log("=====================================");


function swapValue(values1,values2){
}
var values1="Virat";
 var values2="Anushka";

 console.log("Before swaping",values1,values2);
 tempt=values1;
values1=values2;
values2=tempt;
console.log("After swaping",values1,values2);
console.log("============================================");
function swapValue(num1,num2){
}
var num1="1000";
var num2="2000";
console.log("Before swaping",num1,num2);
tempt=num1;
num1=num2;
num2=tempt;
console.log("After swaping",num1,num2);

console.log("==============================================");



var string=function(data){
    console.log("string is",data)

var firstName= "Js the most popular languge";
console.log("Given string is",firstName);
console.log("total character in the string=",firstName.length );
console.log("char at index 6:", firstName.charAt(6));
console.log("char at index 11: ", firstName.charAt(11));
var lengthTotal = firstName.length;
console.log("char at last index:=", firstName.charAt(lengthTotal-1));
console.log("char at first index:=",firstName.charAt(lengthTotal-27));
console.log("square of the string length",firstName.length*firstName.length)
}
string("js is the most popular language")


