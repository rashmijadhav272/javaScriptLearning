var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log("**************************************************************");

function gradeCalculation(marks){
    if(marks<=0 || marks>100){
        console.log(`Please${marks} provide th valid data`);

    }
    if(marks>=90 && marks<=100){
       console.log(`Funtastic marks ${marks} your grade is A+`); 
    }
    if(marks>=75 && marks<90){
        console.log(`Excellant marks ${marks} your grade is A`); 
     }
     if (marks>=50 && marks<75) {
        console.log(`Good maarks ${marks} your grade is B`);
     } 
        if (marks>=35 &&marks<50) {
         console.log(`Marks ${marks} your grade is C need a improvment`);   
        }
        if (marks<0 &&marks<100 ) {
            console.log(`marks ${marks} Plase provide the valid no.`);
            console.log(`Not valid number "50" ${marks} please provide the valid marks`);
            console.log(`not valid number "seventy' ${marks} plese provide valid marks`);
        }   
            
        }
gradeCalculation("50");     
gradeCalculation("seventy");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);


