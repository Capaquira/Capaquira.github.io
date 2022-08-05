//var x="10";

var a=function(){
    var x="550";
    console.log("a: message = "+x);
}
//a();
//function b(){
 //   console.log("b: message = "+x);
//}
//b();

console.log((5+4)/3);
console.log(undefined/3);

//var y = 4, z = 4;
//if (y == z) {
//console.log("y = 4 and z = 4 are equal");

var sum =0;
for (var i=0; i<10; i++){
    console.log(i);
    sum=sum+i;
}
console.log("sum of 0 to 9 is: "+sum);

var company = new Object();
company.name = "Facebook";
//console.log(company);

company.ceo = new Object();
company.ceo.firstName ="Mark";
console.log(company);

console.log("Name CEO: "+company.ceo.firstName);
console.log(company["name"]);
company["company name"]=100;

////var a=7;
////var b=a;
//console.log("a: "+a);
//console.log("b: "+b);

////b=5;
////console.log("after b update:");
////console.log("a: "+a);
////console.log("b: "+b);

var a={x:7};
var b=a;
console.log(a);
console.log(b);

b.x=5;
console.log("after b.x update:");
console.log(a);
console.log(b);


var names = ["Juan", "Carlos"];
console.log(names);

for (var i = 0; i < names.length; i++) {
console.log("Hello "+ names[i])
}

var myObj={
    name: "Juan Carlos",
    course: "django",
    plataform:"coursera"
};
for (var prop in myObj){
    console.log(prop+":"+myObj[prop]);
}