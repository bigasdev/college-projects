const exercicioName = (number) => {
    console.log("");
    console.log(`Exercicio ${number}`);
    console.log("-------------------");
}

function numberHandle(value1, value2){
    exercicioName(1);
    console.log("Soma: "+value1+value2);
    console.log("Subtracao: "+(value1-value2));
    console.log("Multiplicacao: "+value1*value2);
    console.log("Divisao: "+value1/value2);
}

function returnTriangle(triangle){
    exercicioName(2);
    var tCount = 0;
    var oldTriangle;
}

function baseElevada(value1,value2){
    exercicioName(3);
    console.log("Base elevada ao expoente: "+Math.pow(value1, value2));
}

function dividendoHandle(value1,value2){
    exercicioName(4);
    var div = Math.trunc(value1/value2);
    var resto = value1 % value2;
    console.log(`Resultado: ${div} Restante: ${resto}`);
}

function handleCents(value1, value2){
    exercicioName(5);
    var result = (value1+value2).toString();
    var r = result.slice(0, 4);
    console.log(`Resultado: R$${r[0]},${r[2]}${r[3]}`);
}

function juroSimples(value1,value2,value3){
    exercicioName("6 - Taxa de juros simples");
    var j = (value1*value2*value3)/100;
    var montante = value1+j;
    console.log(`Valor do juros: ${j}`);
    console.log(`Montante: ${montante}`);
}
function juroComposto(value1,value2,value3){
    exercicioName("6.5 - Taxa de juros composto");
    var div = value2/100;
    var montante = value1*Math.pow((1+div), value3);
    var juros = montante-value1;
    console.log(`Valor do juros: ${juros}`);
    console.log(`Valor do montante: ${montante}`);
}
function bhaskara(ax2,bx,c){
    exercicioName("7");
    var delta = ((Math.pow(ax2,2))-((4*bx)*c));
    var r = Math.sqrt(delta);
    console.log(delta);
    console.log(r);
}

function basquete(){
   exercicioName("8");
   
}

function sistemaNotas(){
   exercicioName("9");
   
}

function divisivelPor(x){
   exercicioName("10");
   var div = x % 3 === 0;
   console.log(`O Numero ${x} é divisivel = ${div}`);
}

function anoBissexto(){
   exercicioName("11");
   
}

function fatorial(x){
   exercicioName("12");
   var f = x;
   for (let i = 1; i < x; i++) {
        f = f*(x-i);
   }
   console.log(`Resultado do fatorial de ${x} = ${f}`);
}

function diaUtil(x){
   exercicioName("13");
   var dia = "Util";
   switch(x){
    case 1:
        dia = "Fim de semana";
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        dia = "Fim de semana";
        break;
    default:
        dia = "Invalido";
        break;
   }
   console.log(`O dia ${x} é = ${dia}`);
}

//Exercicio 1
numberHandle(2,2); 
//Exercicio 2
returnTriangle([1,0,1]);
//Exercicio 3
baseElevada(3,3);
//Exercicio 4
dividendoHandle(8,4);
//Exercicio 5
handleCents(0.1,0.2);
//Exercicio 6
juroSimples(600, 3, 15);
juroComposto(300, 1, 12);
//Exercicio 7
bhaskara(3,-5,12);
//Exercicio 8
basquete();
//Exercicio 9
sistemaNotas();
//Exercicio 10
divisivelPor(9);
//Exercicio 11
anoBissexto();
//Exercicio 12
fatorial(6);
//Exercicio 13
diaUtil(15);