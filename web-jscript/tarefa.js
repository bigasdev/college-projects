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