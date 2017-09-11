function validateNumber(){
	var number = document.getElementById('number_val').value;

	if (isNaN(number)) {
		alert('Não é um número');
	} else {
		alert('É um número.');
	}

}


function somar(){
	var number1 = document.getElementById('num1').value;
	var number2 = document.getElementById('num2').value;

	var soma = parseInt(number1) + parseInt(number2);

	alert('A soma é: '+soma);

}

// var ft = ['Leonardo', 'Anselmo'];

// ft.push('Freitas');

// console.log(ft);

// ft.pop();

// console.log(ft);

// console.log(ft.indexOf('Anselmo'));

//var login = prompt("Login: ");
//var senha = prompt("Senha: ");

//var obj = {};

//obj.login = login;
//obj.senha = senha;

//console.log(obj);


//var prop1 = prompt("Modelo ?");
//var prop2 = prompt("Name ?");
//var prop3 = prompt("Color ?");


//var obj = {
//    modelo: prop1,
//    name: prop2,
//    color: prop3
//};

//var obj = {};
//
//obj.model = prop1;
//obj.name = prop2;
//obj.color = prop3;

//console.log(JSON.stringify(obj));

//obj.start = function() {
//	console.log('Está pronto');
//};

//obj.start();


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