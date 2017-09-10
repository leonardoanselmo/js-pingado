var prop1 = prompt("Modelo ?");
var prop2 = prompt("Name ?");
var prop3 = prompt("Color ?");

var obj = {
    modelo: prop1,
    name: prop2,
    color: prop3
};

console.log(obj);
console.log(JSON.stringify(obj));


// function myFunction(name){
// 	console.log('Nome => ', name);
// }
// 
// myFunction("Leonardo Anselmo");

//console.log('Leonardo Anselmo');

// var age = prompt("quantos anos você tem?");

//var ageParser = parseInt(age);

//if (ageParser >= 18) {
//	console.log('Você está autorizado.');
//} else {
//	console.log('Você não está autorizado.');
//}



//var i = 0;
//while(i < 10){
//	console.log(i);
//	i++;
//}

//for (var i = 0; i < 10; i++) {
//	console.log(i);
//}

//['Paulo', "Leonardo", "de", "Freitas", "Anselmo"].forEach(function(key, value){
//	console.log(key, value);
//});

//var number = 0;

//console.log(typeof number);

//var number = "0";

//console.log(typeof number);

//var myFunction = function() {

//	var number = 0.1 + 1;

//	console.log(number);
//}

//myFunction();