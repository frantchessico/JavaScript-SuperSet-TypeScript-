var texto:any = document.getElementById("title");
texto.innerHTML ="Data Types in TypeScript";
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
let numberOne: number = 177;
let numberTwo: number = 1.24
let numberThree:number = 0.997;

console.log("this is value of number one:",numberOne);
console.log("this is value of number two:",numberTwo);
console.log("this is value of number three:",numberThree);

//3-String: 
//3.1-Returning string:
console.log("----------------------------------------");
console.log("About String :");
console.log("----------------------------------------");
let firstName:string = "Franicsco";
let lastName:string = "Inoque";
console.log("Thsis value of firstName: ",firstName );
console.log("Thsis value of lasttName: ",lastName );
//4-Array
//4.1- Returning array:
console.log("----------------------------------------");
console.log("About Array :");
console.log("----------------------------------------");

let colors:string[] = ['red','blue', 'pink','green'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
for(let i = 0; i<= colors.length; i++){
//console.log(colors[i])
//alert(colors[i]);
}


//4.2- Another way to declare array:

let numberOfstudent:Array<number> =[1,3,98, 8,2,6 ];
console.log(numberOfstudent[0]);
console.log(numberOfstudent[1]);
console.log(numberOfstudent[2]);
console.log(numberOfstudent[3]);
console.log(numberOfstudent[4]);
console.log(numberOfstudent[5]);

for(let i =0; i<=numberOfstudent.length; i++){
  console.log(numberOfstudent[i]);
}
//6-Tuple
console.log("----------------------------------------");
console.log("About Tuple:");
console.log("----------------------------------------");
let schoolSituation: [string, number, boolean];
 schoolSituation = ['Farncisco Inoque',17,true]
 
 console.log('Name: ',schoolSituation[0]);
 console.log('Note ',schoolSituation[1]);
 console.log('Situation: ',schoolSituation[2]);

 for(let x = 0; x<=schoolSituation.length; x++){
   console.log(schoolSituation[x]);
 }

//6-Enums
console.log("----------------------------------------");
console.log("About Enum :");
console.log("----------------------------------------");

enum Names {Fname ="Francisco", Mname ="Jaime", Lname="Inoque"};
let fullName: Array<Names> = [Names.Fname, Names.Mname, Names.Lname];

console.log(fullName[2]);

//6.1 changing the position:

enum myNote {
  noteOne,
  noteTwo,
  noteThree,
  noteFour,
  noteFive
}

let showmyNote:myNote = myNote.noteFive;
console.log(showmyNote)
console.log("---------Changed----------")

enum myNoteChagedPosition {
  noteOne=13,
  noteTwo,
  noteThree,
  noteFour,
  noteFive
}

let showmyNoteCha:myNoteChagedPosition = myNoteChagedPosition.noteFive;
console.log("Position changed: ", showmyNoteCha);

//6-Enums
console.log("----------------------------------------");
console.log("About Any :");
console.log("----------------------------------------");
let PesrsoUser: any = {
  nome:"Francisco",
  apelido:"Inoque"
}


