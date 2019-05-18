"use strict";
var texto = document.getElementById("title");
texto.innerHTML = "Data Types in TypeScript";
console.log("----------------------------------------");
console.log("About Boolean :");
//1-Boolean :
//1.1-Returning true:
//let testOne: boolean = true;
/*if(testOne){
  alert(testOne)
}
else{
  alert(!testOne);
}*/
//1.2-Returning false:
/*let testOne: boolean = false;

if(!testOne){
  alert(testOne)
}

else{
  alert(!testOne)
}*/
//2-Numbaer:
//2.1 returning number:
console.log("----------------------------------------");
console.log("About Number :");
console.log("----------------------------------------");
let numberOne = 177;
let numberTwo = 1.24;
let numberThree = 0.997;
console.log("this is value of number one:", numberOne);
console.log("this is value of number two:", numberTwo);
console.log("this is value of number three:", numberThree);
//3-String: 
//3.1-Returning string:
console.log("----------------------------------------");
console.log("About String :");
console.log("----------------------------------------");
let firstName = "Franicsco";
let lastName = "Inoque";
console.log("Thsis value of firstName: ", firstName);
console.log("Thsis value of lasttName: ", lastName);
//4-Array
//4.1- Returning array:
console.log("----------------------------------------");
console.log("About Array :");
console.log("----------------------------------------");
let colors = ['red', 'blue', 'pink', 'green'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
for (let i = 0; i <= colors.length; i++) {
    //console.log(colors[i])
    //alert(colors[i]);
}
//4.2- Another way to declare array:
let numberOfstudent = [1, 3, 98, 8, 2, 6];
console.log(numberOfstudent[0]);
console.log(numberOfstudent[1]);
console.log(numberOfstudent[2]);
console.log(numberOfstudent[3]);
console.log(numberOfstudent[4]);
console.log(numberOfstudent[5]);
for (let i = 0; i <= numberOfstudent.length; i++) {
    console.log(numberOfstudent[i]);
}
//6-Tuple
console.log("----------------------------------------");
console.log("About Tuple:");
console.log("----------------------------------------");
let schoolSituation;
schoolSituation = ['Farncisco Inoque', 17, true];
console.log('Name: ', schoolSituation[0]);
console.log('Note ', schoolSituation[1]);
console.log('Situation: ', schoolSituation[2]);
for (let x = 0; x <= schoolSituation.length; x++) {
    console.log(schoolSituation[x]);
}
//6-Enums
console.log("----------------------------------------");
console.log("About Enum :");
console.log("----------------------------------------");
var Names;
(function (Names) {
    Names["Fname"] = "Francisco";
    Names["Mname"] = "Jaime";
    Names["Lname"] = "Inoque";
})(Names || (Names = {}));
;
let fullName = [Names.Fname, Names.Mname, Names.Lname];
console.log(fullName[2]);
//5.1 changing the position:
var myNote;
(function (myNote) {
    myNote[myNote["noteOne"] = 0] = "noteOne";
    myNote[myNote["noteTwo"] = 1] = "noteTwo";
    myNote[myNote["noteThree"] = 2] = "noteThree";
    myNote[myNote["noteFour"] = 3] = "noteFour";
    myNote[myNote["noteFive"] = 4] = "noteFive";
})(myNote || (myNote = {}));
let showmyNote = myNote.noteFive;
console.log(showmyNote);
console.log("---------Changed----------");
var myNoteChagedPosition;
(function (myNoteChagedPosition) {
    myNoteChagedPosition[myNoteChagedPosition["noteOne"] = 13] = "noteOne";
    myNoteChagedPosition[myNoteChagedPosition["noteTwo"] = 14] = "noteTwo";
    myNoteChagedPosition[myNoteChagedPosition["noteThree"] = 15] = "noteThree";
    myNoteChagedPosition[myNoteChagedPosition["noteFour"] = 16] = "noteFour";
    myNoteChagedPosition[myNoteChagedPosition["noteFive"] = 17] = "noteFive";
})(myNoteChagedPosition || (myNoteChagedPosition = {}));
let showmyNoteCha = myNoteChagedPosition.noteFive;
console.log("Position changed: ", showmyNoteCha);
