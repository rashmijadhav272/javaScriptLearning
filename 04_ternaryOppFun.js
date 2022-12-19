console.log("====================chek interview eligiblity=============================") 
var eligiblity=function(gradScore,hscScore,sscScore,candidateName){
var score =(gradScore>=70 || hscScore>=80 || sscScore>90) ? `congrats ${candidateName} you are eligible for TCS interview` : `unfortunately ${candidateName}you are not eligible`;
console.log(` selected student is ${score}`);
}
eligiblity(80,86,90,"Anu");
eligiblity(70,65,55,"Tara");
eligiblity(60,79,88,"Tanu"); 
