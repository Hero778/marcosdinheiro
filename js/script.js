/*var nome=prompt("Digite Seu Nome");
alert(nome  + "VOCE TEM UM VIRUS Q HACKEIA SUA VIDA EM 5 SEGUNDOS DEPOSITE 500 REAIS NA CONTA 453464 E N RECEBA O DEMONIO");
//var primeiroNome="Marcos";
//alert( "este e o primeiro valor da variavel   "+Nome );
//alert(teste1)
var soma1= +prompt("Escreva numeros");
var soma2= +prompt("Escreva o segundo");
var soma = soma1+soma2;
alert(soma);

var multiplicacao = soma1*soma2;
alert(soma);*/

function mudacor1(){
   var cor1 = document.getElementById('d1');
   cor1.style.background="blue";
	
}

function voltacor1(){
	var cor2=document.getElementById('d1');
	cor2.style.background="lightgreen";
}


function mudacor3(){
   var cor1 = document.getElementById('d2');
   cor1.style.background="red";
	
}

function voltacor4(){
	var cor2=document.getElementById('d2');
	cor2.style.background="yellow";
}


function mudacor5(){
   var cor1 = document.getElementById('d3');
   cor1.style.background="orange";
	
}

function voltacor6(){
	var cor2=document.getElementById('d3');
	cor2.style.background="blue";
}

function mudacor7(){
   var cor1 = document.getElementById('d4');
   cor1.style.background="purple";
	
}

function voltacor8(){
	var cor2=document.getElementById('d4');
	cor2.style.background="red";
}
function idade(){
	var anoAtual = 2018;
	var form =document.getElementById('formulario');
	var ano = form.anodenascimento.value;
	var nome = form.nome.value;
	var subtracao =anoAtual-ano;

	//alert("O seu nome e " + nome +"?");

	
	//alert(subtracao);
  
	var escreve = document.getElementById('div11');
	escreve.innerHTML="<p> Olá "+nome+" sua idade e "+idade+"</p>";	
}

