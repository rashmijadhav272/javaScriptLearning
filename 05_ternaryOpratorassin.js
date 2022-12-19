console.log("=============the largest no among two number================");
function maleMarrigeEligibility(gender,age,boyName){
 var eligible=(gender="male" && age>=21)?" eligible for marrige":"not eligible for marrige";
 console.log(`hey "${boyName}"you are ${eligible}`);
return eligible;
}
var criteria = maleMarrigeEligibility("Male",25,"Billgates");
 var criteria= maleMarrigeEligibility("Male",17,"stew jobs");
console.log("===================eligiblity of marrige==========================");
function femaleMarrigeEligibilty(gender,age,girlName){

    var eligible=(gender="female" && age>=18)?"eligible for marrige":" not eligible for marrige";
 console.log(`hey "${girlName}"you are ${eligible}`);
 return eligible
}
var criteria = femaleMarrigeEligibilty("feMale",16,"jenifer");
 var criteria= femaleMarrigeEligibilty("feMale",27,"Malinda Gates");


    
 