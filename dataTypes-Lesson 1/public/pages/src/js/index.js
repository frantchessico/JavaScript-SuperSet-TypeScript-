"use strict";
var texto = document.getElementById("title");
texto.innerHTML = "Data Types in TypeScript";
console.log("-----------------------------------------");
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
//5-Enums
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
//7.Any
console.log("----------------------------------------");
console.log("About Any :");
console.log("----------------------------------------");
/*O any nos ajuda a trabalhar com variaveis que não retorna um tipo de dado especifico, quando usamos o Any, estamos assumindo que o dado pode que iremos receber em determinado caso pode ser de qualquer tipo.
Diga em determinado, porque o seu codigo não precisa ser feito todo de Any, não acha?. Mas é claro meu amigo. Por exemplo, quando falamos de Array, na declaração da variavel, informavamos que tipo de dados esse Array deveria receber, isto é, ou number, ou string, ou então boolean assim por diante, então aqui nós diremos, Array recebe qualquer coisa.Então vamos ao codigo:
*/
let tobeBoolean = true;
let tobeNumber = 2019;
let tobeObject = {
    firstOne: "",
    lastOne: ""
};
let tobeString = "Hello World";
let tobeArray = ["Blue", "Red", "ETC"];
let tobeUndefined = undefined;
let tobeNull = null;
// Nota bem:
/* Existem tipos de dados que o Any não pode receber directamente, mas é possivel passar para ele sim mas por meio de algumas maluquice.😅 😅 😅 😅 😅 😅 😅 😅 😅. Como  o Enum e o Void.
Então vamos a isso:*/
//Enum:
var alunos;
(function (alunos) {
    alunos["nome"] = "Francisco";
    alunos["apelido"] = "Inoque";
})(alunos || (alunos = {}));
let aluno = alunos.nome + " " + alunos.apelido;
console.log(`O meu nome é ${aluno}`);
//Void: 
function printNewname() {
    let person = 'Francisco Jone Inoque';
    console.log(person);
}
let callPrintNewName = printNewname();
callPrintNewName;
//8. Void
console.log("----------------------------------------");
console.log("About Void :");
console.log("----------------------------------------");
/* O Void é um pouco confundido com o Any, tem quase mesmo comportamento, se prestarmos atenção notaremos que o void se diferência do Any pelo facto de não retornar nada, Void é ausência de qualquer tipo de dados, então podemos dizer que Void é um pouco oposto de any, em quanto Any retorna qualquer tipo de dados, o Void não retorna nada.*/
function funcVoid() {
    let name = "Meu nome é Francisco";
    /*Se você escrever o seguinte:
    return name, verá uma notificão de erro de compilação no código, dizendo o seguinte:
    Type 'string' is not assignable to type 'void', isto é, o Tipo String não é atribuível ao Tipo Void. Mas no void podemos retornar dados do tipo Any*/
    //return name;
    console.log(name);
}
function funcVoid2(personName) {
    let name = undefined;
    return name;
}
funcVoid();
console.log(funcVoid2("Larissa Jacob"));
//9. Void
console.log("----------------------------------------");
console.log("About Null and Undefined :");
console.log("----------------------------------------");
//Nota: 
/*Por padrão null e undefined são subtipos de todos os outros tipos. Isso
significa que você pode atribuir null e undefined algo parecido number */
let userName = undefined;
let uid = null;
console.log(userName);
console.log(uid);
//10. Never
console.log("----------------------------------------");
console.log("About Never :");
console.log("----------------------------------------");
/*O never tipo representa o tipo de valores que nunca ocorrem. Por
exemplo, never é o tipo de retorno para uma expressão de função ou uma
expressão de função de seta que sempre lança uma exceção ou uma que
nunca retorna; Variáveis também adquirem o tipo never quando estreitadas por qualquer tipo de guardas que nunca podem ser
verdadeiras.  O never tipo é um subtipo de e atribuível a todos os tipos; no entanto,
nenhum tipo é um subtipo ou atribuível a never (exceto a never si
próprio). Mesmo any não é atribuível a never .*/
function error(message) {
    throw new Error(message);
}
//11. Object
console.log("----------------------------------------");
console.log("About Object :");
console.log("----------------------------------------");
create({ prop: 0 }); // OK
create(null); // OK
create(42); // OK
create("string"); // Ok
create(false); // Ok
create(undefined); // Ok
