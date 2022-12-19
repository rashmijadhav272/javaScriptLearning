var string =function(){
  var string2="      Hey you are donig good,keep it up      ";
console.log("1 print the string:",string2);
var stringCount=string2.length; 
 console.log("2the length of thestring is:",stringCount);
 var removeSpace=string2.trim();
  console.log("3 Remove the extra spaces:",removeSpace);
  var count=removeSpace.length;
  console.log(" 4 Total number of extra spaces remove",count);
  console.log(" 5 print the first char :",removeSpace.charAt(0));
  console.log("5 print the last char :",removeSpace.charAt(removeSpace.length-1));
  var totalWorld=removeSpace.split(" ");

  console.log("Total world count after removing all spaces is:" ,totalWorld.length);
  var index = removeSpace.indexOf("good");

console.log(" 7 Index of worlds"," Good","is:" , index);
console.log("8.1substring strting from index 22 using substringis:",string2.substring(22));
console.log("8.1substring strting from index 22 using slice is:",string2.slice(22));

var ends=removeSpace.endsWith("up");
console.log("9 is string ends with word up:",ends);
var starts=removeSpace.startsWith("Hey");
console.log("10 is string starts with word Hey:",starts);
}
string();


