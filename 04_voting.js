var voteDetails=function(value){
if (value>=18 && value<120)
 {
 console.log(`The ${value} age is eligible for voting`);  
}
if (value<=0 && value<18) 
{
 console.log(`the ${value} age not eligible for voting`);   
}
if (value<=0 || value>120)
 {
  console.log(`${value} Invalid data`);  
}   
}
voteDetails(45);
voteDetails(17);
voteDetails(8);
voteDetails(20);
voteDetails(-10);
voteDetails(200);
voteDetails(0);



console.log(`========================================================================`);

function gradecalculation(marks){
    if (marks>=90 && marks<=100) {
      console.log(`fantastic marks ${marks}= your grade is A+`);  
    }
    if (marks>=75 &&marks<90) {
       console.log(`excellen marks ${marks}= your grade is A`); 
    }
    if(marks>=50 && marks<75){
        console.log(`good  marks ${marks}= your grade is B`);
    }
    if (marks>=35 && marks<50) {
      console.log(`marks is ${marks} your grade is C,need improvement`);  
    }
    if (marks<=0 || marks>=100) {
        console.log(`${marks} please provide the valid marks`);
    }
}
gradecalculation(98);
gradecalculation(80);
gradecalculation(90);
gradecalculation(0);
gradecalculation(150);
gradecalculation(-7);
gradecalculation(35);
gradecalculation(29);
gradecalculation(64);
gradecalculation(49);






