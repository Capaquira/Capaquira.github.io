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

// function DecirHola (){
//    console.log(
//        document.getElementById("name").value
//    )
// }

// function DecirHola (){

//     var name =
//     document.getElementById("name").value;
//     var message="Hola "+name+"!";

//     document
//     .getElementById("contenido")
//     .textContent=message;

// }

function DecirHola (){
    this.textContent="Done";
    console.log(this);
    var name =
    document.getElementById("name").value;
    var message="<h2>Hola "+name+"!</h2>";

    document
    .getElementById("contenido1")
    .innerHTML=message;

    if (name==="Juan Carlos"){
        var title=
        document
        .querySelector("#title")
        .textContent;
        title += " & Lovin' it!";
        document
        .querySelector("#title")
        .textContent = title;

    }
}


function DecirAdios (){
    this.textContent="Hecho";
    console.log(this);
    var name2 =
    document.getElementById("name2").value;
    var message="<h3>Adios mi estimad@ "+name2+"!</h3>";

    document
    .getElementById("contenido2")
    .innerHTML=message;

    if (name2==="Juan Carlos"){
        var title2=
        document
        .querySelector("#title")
        .textContent;
        title2 += " & will miss you!";
        document
        .querySelector("#title")
        .textContent = title2;

    }
}

document.querySelector("#PrimerB")
 .addEventListener("click", DecirHola);

document.querySelector("#PrimerB")
  .onblur=DecirHola;


document.querySelector("#SegundoB")
   .addEventListener("click", DecirAdios);
   
document.querySelector("#SegundoB")
  .onblur=DecirAdios;


document.addEventListener("DOMContentLoaded",
function(event){

    document.querySelector("body")
    .addEventListener("mousemove",
    function (event){
        if (event.shiftKey===true){
            console.log("x: "+event.clientX);
            console.log("y: "+event.clientY);
        }
    }
    );

}
);