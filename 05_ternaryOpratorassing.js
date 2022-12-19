var ternal=function(num1,num2){
    var check = num1>num2  ? num1 : num2;
    console.log(`The greatest number is =:${check}`);
  }
   ternal(10,-10);
   ternal(800,899);
   console.log(`**********************************************************`);
   var checkEvenOdd=function(value){
     var check=value%2==0 ?"EVEN =TRUE " :" ODD = FALSE";
     console.log(`the  numbers is ${value} ${check}\n`);
   return check;
   }
    var evenOdd1=checkEvenOdd(29);
    var evenOdd1=checkEvenOdd(44);
    var evenOdd1=checkEvenOdd(101);
    var evenOdd1=checkEvenOdd(0);
    console.log(`**********************************************************`);
  
    var evenOddLength= function(data){
      var wordlength=data.length;
      var check=wordlength%2==0 ? "even":"odd";
      console.log(` value "${data}",length is = ${wordlength} : ${check}\n`);
    }
    evenOddLength("JavaScript");
    evenOddLength("developer");
    evenOddLength("Google");