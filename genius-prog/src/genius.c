#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
#define MAX 10

//Criando a estrutura de NO da Pilha
typedef struct no{
    int valor;
    struct no *proximo;
}No;

//Criando a estrutura de Pilha
typedef struct{
    No *topo;
}Pilha;


// criando a operacao push
void empilhar(Pilha *p, int x){
    No *no = malloc(sizeof(No));
    no->valor = x;
    no->proximo = p->topo;
    p->topo = no;
}

//Criando a exibição da sequencia da pilha
void mostrar(No *no){
    if(no){
   	textcolor(RED); gotoxy(10,10); cprintf("%d", no->valor);
	delay(500);
	textcolor(RED); gotoxy(10,10); cprintf(" ");
	delay(500);
	mostrar(no->proximo);

    }
}

//Imprimindo os valores da Pilha que o Computador gerou
void imprimir(No *no){

    if(no){
	textcolor(RED); cprintf("%d", no->valor);printf("\n");
	delay(1000);
	imprimir(no->proximo);
	delay(1000);
    }
}

//Imprimindo os valores que o jogador jogou
void imprimir2(int jogadas[MAX]){
    int x;
	for(x=0; x< MAX; x++)
	{
		textcolor(BLUE);cprintf("%d", jogadas[x]); printf("\n");
		delay(1000);
		
    }
}

int main() {
//declaração das variaveis
	int jogadas[MAX];
	int x;
    int op, valor, valor_genius;
    No *no;
	Pilha p;
    p.topo = NULL;
//Limpa a tela
    clrscr();
//Gerando a sequencia da pilha que o computador ira gerar randomicamente e empilhando na memoria	
			for (x=0; x< MAX; x++)
			{
				valor_genius = (rand() % 4);
				empilhar(&p, valor_genius);
				
			}
//mostrando a sequencia para o Jogador
			 mostrar(p.topo);
//Limpando a tela			
			clrscr();
//Jogador ira tentar repetir a sequencia do computador
			for(x=0 ; x < MAX; x++)
			{
				gotoxy(0,0); printf("\nJogue: ");
			    scanf("%d", &op);
				jogadas[x] = op;
				
			}
//limpa a tela
			clrscr();
//Monstrando a Pilha do computador
			textcolor(BLUE); gotoxy(0,0);printf("\n");cprintf("Pilha do Jogo"); printf("\n");
			imprimir(p.topo);
//Mostrando a Pilha do jogador			
			textcolor(BLUE); printf("\n");cprintf("Jogadas do Jogador"); printf("\n");
			imprimir2(jogadas);
			delay(5000);
			

	
    
    return 0;
}