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
    if(triangle[0] === triangle[1] && triangle[1] === triangle[2]){
        console.log(`Triangulo ${triangle} = EQUILATERO`);
    }
    if(triangle[0] === triangle[1] || triangle[0] === triangle[2] || triangle[1] === triangle[2]){
        console.log(`Triangulo ${triangle} = ISOSCELES`);
    }else{
        console.log(`Triangulo ${triangle} = ESCALENO`);
    }
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

function basquete(pontuacao){
   exercicioName("8"); 
   var melhor = 0;
   var quantia = -1;
   var pior = pontuacao[0];
   var piorJogo;
   for (let i = 0; i < pontuacao.length; i++) {
        if(pontuacao[i] > melhor){
            quantia++;
            melhor = pontuacao[i];
        }
        if(pontuacao[i] < pior){
            pior = pontuacao[i];
            piorJogo = i;
        }
   }
   var v = [quantia, piorJogo];
   console.log(`Pedro bateu seu recorde ${quantia} vezes e teve sua pior pontuacao no jogo: ${piorJogo+1}`);
   return v;
}

function sistemaNotas(notas){
   exercicioName("9");
   notas.forEach(n=>{
        if(n > 40){
            console.log(`Aluno foi aprovado direto com a nota: ${n}`);
            return;
        }
        if(n < 38){
            console.log(`Aluno foi reprovado direto com a nota: ${n}`);
            return;
        }else if(n % 5 >= 3){
            n = n + (5-(n%5));
        }else{
            n = n - (n%5);
        }

        if(n < 40){
            console.log(`Aluno foi reprovado apos arredondamento com a nota: ${n}`);
        }else{
            console.log(`Aluno foi aprovado apos arredondamento com a nota: ${n}`);
        }
   })
}

function divisivelPor(x){
   exercicioName("10");
   var div = x % 3 === 0;
   console.log(`O Numero ${x} é divisivel = ${div}`);
}

function anoBissexto(ano){
   exercicioName("11");
   var anoBissexto = false;
   if(ano <= 0){
        console.log(`O ano ${ano} e invalido.`);
        return false;
   }
   if(ano % 400 === 0){
        anoBissexto = true;
   }else if(ano % 100 === 0){
        anoBissexto = false;
   }else if(ano % 4 === 0){
        anoBissexto = true;
   }
   console.log(`O ano ${ano} e bissexto = ${anoBissexto}`);
   return anoBissexto;
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

function fruitCheck(fruta){
    exercicioName("14");
    switch(fruta){
        case "Maca":
            console.log("Nao vendemos essa fruta aqui");
            break;
        case "Kiwi":
            console.log("Estamos com escassez de kiwis");
            break;
        case "Melancia":
            console.log("Aqui esta, sao 3 reais o quilo");
            break;
        default:
            console.error("Erro vc nao digitou nenhuma fruta")
            break;
    }
}

function hatchCar(carro){
    exercicioName("15");
    switch(carro){
        case "hatch":
           console.log("Compra efetuada com sucesso!");
           break;
        case "sedan":
           console.log("Tem certeza que nao prefere este modelo?");
           break;
        case "motocicleta":
           console.log("Tem certeza que nao prefere este modelo?");
           break;
        case "caminhonete":
           console.log("Tem certeza que nao prefere este modelo?");
           break;
        default:
            console.error("Nao trabalhamos com este tipo de automovel aqui");
            break;
    }
}

function calculadora(x,conta,y){
    exercicioName("16");
    switch(conta){
        case "+":
           console.log(`Escolheu soma... Resultado = ${x+y}`);
           break;
        case "-":
           console.log(`Escolheu subtracao... Resultado = ${x-y}`);
           break;
        case "*":
           console.log(`Escolheu multiplicacao... Resultado = ${x*y}`);
           break;
        case "/":
           console.log(`Escolheu divisao... Resultado = ${x/y}`);
           break;
        default:
            console.error("Operacao invalida");
            break;
    }
}

function aumentoFuncionario(plano, salario){
    exercicioName("17");
    switch(plano){
        case "A":
           console.log(`Funcionario vai receber um aumento de 10%, o salario foi de ${salario} para ${salario+(salario*.1)}`)
           break;
        case "B":
           console.log(`Funcionario vai receber um aumento de 15%, o salario foi de ${salario} para ${salario+(salario*.15)}`)
           break;
        case "C":
           console.log(`Funcionario vai receber um aumento de 20%, o salario foi de ${salario} para ${salario+(salario*.2)}`)
           break;
        default:
            console.error("Plano invalido");
            break;
    }
}
function numeroExtenso(numero){
    exercicioName("18");
    switch(numero){
        case 0:
           console.log("Zero");
           break;
        case 1:
            console.log("Um");
           break;
        case 2:
            console.log("Dois");
           break;
        case 3:
            console.log("Tres");
           break;
        case 4:
            console.log("Quatro");
           break;
        case 5:
            console.log("Cinco");
           break;
        case 6:
            console.log("Seis");
           break;
        case 7:
            console.log("Sete");
           break;
        case 8:
            console.log("Oito");
           break;
        case 9:
            console.log("Nove");
           break;
        case 10:
            console.log("Dez");
           break;
        default:
            console.error("Numero fora do intervalo");
            break;
    }
}

function cardapio(codigo, quantia){
    exercicioName(19);
    switch(codigo){
        case 100:
           console.log(`Produto escolhido: cachorro quente, vai ficar: ${quantia*3}`);
           break;
        case 200:
            console.log(`Produto escolhido: hamburguer, vai ficar: ${quantia*4}`);
           break;
        case 300:
            console.log(`Produto escolhido: cheeseburguer, vai ficar: ${quantia*5.50}`);
           break;
        case 400:
            console.log(`Produto escolhido: Bauru, vai ficar: ${quantia*7.50}`);
           break;
        case 500:
            console.log(`Produto escolhido: refrigerante, vai ficar: ${quantia*3.50}`);
           break;
        case 600:
            console.log(`Produto escolhido: suco, vai ficar: ${quantia*2.80}`);
           break;
        default:
            console.error("Produto nao existe");
            break;
    }
}

function entregarCedulas(valor){
    exercicioName("20");
}

function planoSaude(idade){
    exercicioName("21");
    var valorPadrao = 100;
    var valor;
    if(idade < 10){
        valor = 80;
    }else if(idade >= 10 && idade < 30){
        valor = 50;
    }else if(idade >= 30 && idade < 60){
        valor = 95;
    }else{
        valor = 130;
    }
    console.log(`O valor do plano para a idade ${idade} fica: ${valor} reais adicionais + ${valorPadrao} reais padrao do plano. Totalizando: ${valor+valorPadrao} reais.`);
}

function anuidade(valor, mes){
    exercicioName("22");
    var montante = valor*Math.pow((1 + .05), mes - 1);
    console.log(`O valor a ser pago vai ser de ${montante}`)
    return montante;
}

function media(){
    exercicioName("23");
}

function helloWorld(){
    exercicioName("24");
    var i = 0;
    while(i < 12){
        console.log("Hello World!");
        i++;
    }
}

function numeros50(){
    exercicioName("25");
    for (let i = 0; i < 51; i++) {
        console.log(`Numero: ${i}`);
    }
}

function encontrarPares(){
    exercicioName("26");
    for (let i = 0; i < 101; i++) {
        if(i % 2 === 0)console.log(`O numero ${i} é par`);
    }
}

function calcularAltura(altura, taxa){
    exercicioName("27");
}

function vetorInteiros(numeros){
    exercicioName("28");
    var pares = [];
    var impares = [];
    numeros.forEach(n =>{
        if(n % 2 === 0){
            pares.push(n);
        }else{
            impares.push(n);
        }
    })
    console.log(`Temos ${pares.length} pares (${pares}) e ${impares.length} impares (${impares})`);
}

function vetorNoLimite(vetor){
    exercicioName("29");
    var intervalo = [10,11,12,13,14,15,16,17,18,19,20];
    var dentroDoIntervalo = [];
    var foraDoIntervalo = [];
    vetor.forEach(v=>{
        if(v >= 10 && v <= 20){
            dentroDoIntervalo.push(v);
        }else{
            foraDoIntervalo.push(v);
        }
    })
    console.log(`Numeros dentro do intervalo ${dentroDoIntervalo} e numeros fora do intervalo ${foraDoIntervalo}`);
}

function menorMaiorVetor(vetor){
    exercicioName("30");
    var menor = vetor[0];
    var maior = vetor[0];
    vetor.forEach(v =>{
        if(v < menor)menor = v;
        if(v > maior)maior = v;
    })
    console.log(`Maior numero dentro do vetor: ${maior} menor: ${menor}`);
}

function vetorNegativo(vetor){
    exercicioName("31");
    var negativos = [];
    vetor.forEach(v =>{
        if(v < 0){
            negativos.push(v);
        }
    })
    console.log(`Quantia de numeros negativos no vetor: ${negativos.length} vetor = ${negativos}`);
}

function mediaAritmetica(vetor){
    exercicioName("32");
    var conta = 0;
    vetor.forEach(v=>{
        conta += v;
    })
    var div = conta/vetor.length;
    console.log(`Media aritmetica: ${div}`);
}

function tresVetores(vetorInteiro, vetorString, vetorDouble){
    exercicioName("33");
    var x = [];
    var y = [];
    x = x.concat(vetorInteiro, vetorDouble);
    y = y.concat(vetorInteiro, vetorString);
    console.table(x);
    console.table(y);
}

function stringsCompare(x,y){
    exercicioName("34");
    var newString = "";
    var newX = x.toLowerCase();
    var newY = y.toLowerCase();
    if(x.length < y.length){
        console.error("As strings tem tamanhos diferentes, nao sera possivel comparar");
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if(newX[i] === newY[i])newString += x[i];
    }
    if(newString === x){
        console.log("As strings estao iguais");
        return true;
    }else{
        return false;
    }
}

function adicionarPilha(vetorPilha, vetorAdiciona){
   exercicioName("35");
   var v = vetorPilha;
   vetorAdiciona.forEach(vetor=>{
        v.push(vetor);
   })
   console.log(`O vetor agora e: ${v}`);
}

function vetorCalculo(vetor, numero){
    exercicioName("36");
    var newVetor = [];
    vetor.forEach(v=>{
        newVetor.push(v*numero);
    })
    console.log(`Vetor multiplicado = ${newVetor}`);
    return newVetor;
}
function vetorCalculo5(vetor, numero){
    exercicioName("36.5");
    var newVetor = [];
    vetor.forEach(v=>{
        if(v > 5){
            newVetor.push(v*numero);
        }
    })
    console.log(`Vetor multiplicado (apenas os maiores de 5) = ${newVetor}`);
    return newVetor;
}

function progressaoAritmetica(n, a1, r){
   exercicioName("37");
   
}

function progressaoGeometrica(n, a1, r){
   exercicioName("37.5");
   
}

function inicioFim(inicio, fim){
   exercicioName("38");
   if(inicio > fim){
        var f = inicio;
        inicio = fim;
        fim = f;
   }
   var impar = [];
   for (let i = inicio; i <= fim; i++) {
        if(i % 2 != 0)impar.push(i);
   }
   console.log(`Foram encontrados ${impar.length} numeros impares:`)
   console.table(impar);
   return impar;
}

function trocarVetores(vetorA, vetorB){
   exercicioName("39");
   
}

function vetorNotas(){
   exercicioName("40");
   
}

//Exercicio 1
numberHandle(2,2); 
//Exercicio 2
returnTriangle([0,3,1]);
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
basquete([10,25,35,8,6,14,1,38]);
//Exercicio 9
sistemaNotas([38, 34, 41, 39]);
//Exercicio 10
divisivelPor(9);
//Exercicio 11
anoBissexto(2024);
//Exercicio 12
fatorial(6);
//Exercicio 13
diaUtil(15);
//Exercicio 14
fruitCheck("Kiwi");
//Exercicio 15
hatchCar("hatch");
//Exercicio 16
calculadora(15, "*", 2);
//Exercicio 17
aumentoFuncionario("B", 1500);
//Exercicio 18
numeroExtenso(5);
//Exercicio 19
cardapio(600, 4);
//Exercicio 20
entregarCedulas(122);
//Exercicio 21
planoSaude(17);
//Exercicio 22
anuidade(150, 3);
//Exercicio 23
media();
//Exercicio 24
helloWorld();
//Exercicio 25
numeros50();
//Exercicio 26
encontrarPares();
//Exercicio 27
calcularAltura([1.25, 1.35], [3, 5]);
//Exercicio 28
vetorInteiros([1,2,3,4,8,9,12]);
//Exercicio 29
vetorNoLimite([1,5,9,11,15,17,21]);
//Exercicio 30
menorMaiorVetor([1,4,5,15,25,35]);
//Exercicio 31
vetorNegativo([-2,-5,-10,1,2,5,-25]);
//Exercicio 32
mediaAritmetica([8,7,6,7]);
//Exercicio 33
tresVetores([1,3,5,8], ["Sim", "Nao", "Talvez", "Otimo"], [.5, 1.25, 3.7, 15.5]);
//Exercicio 34
stringsCompare("TEst", "Test")
//Exercicio 35
adicionarPilha([1,2,3,4,5], [6,7,8,9,10]);
//Exercicio 36
vetorCalculo([1,2,4,5,10], 3);
//Exercicio 36.5
vetorCalculo5([1,2,6,8,12], 4);
//Exercicio 37
progressaoAritmetica();
//Exercicio 37.5
progressaoGeometrica();
//Exercicio 38
inicioFim(265, 250);
//Exercicio 39
trocarVetores([1,2,3], [4,7,9]);
//Exercicio 40
vetorNotas([1.5, 2.7, 3.5, 5.6]);