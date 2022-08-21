#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#define clrscr() system("@cls||clear")
#include <windows.h>
#include <time.h>
#define MAX 10

#define Middle_X 53
#define Middle_Y 10

void delay(unsigned int mseconds)
{
    clock_t goal = mseconds + clock();
    while (goal > clock());
}

void gotoxy(int x, int y)
{
  COORD coord;
  coord.X = x;
  coord.Y = y;
  SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

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

void mostrar(No *no){
    if(no){
   	gotoxy(10,10); printf("%d", no->valor);
	delay(500);
	gotoxy(10,10); printf(" ");
	delay(500);
	mostrar(no->proximo);

    }
}

//Funcao criada para ler arquivos .txt (intuito de banner e/ou imagens)
void read(char file[], int x, int y){
    FILE    *textfile;
    char    *text;
    long    numbytes;
     
    textfile = fopen(file, "r");
    if(textfile == NULL)
        return;
     
    fseek(textfile, 0L, SEEK_END);
    numbytes = ftell(textfile);
    fseek(textfile, 0L, SEEK_SET);  
 
    text = (char*)calloc(numbytes, sizeof(char));   
    if(text == NULL)
        return;
 
    fread(text, sizeof(char), numbytes, textfile);
    fclose(textfile);
 
    gotoxy(x,y); printf(text);
}

//Funcao criada para desenhar meu logo
void logo(){
    read("src/banner.txt", Middle_X-100, 25);
}

//Funcao criada para limpar a a desenha e desenhar o logo (default)
void defaultScreen(){
    clrscr();
    logo();
}

//Funcao criada para escrever algo no meio da tela
void writeFocus(char text[]){
    gotoxy(Middle_X, Middle_Y);printf(text);
}

//Funcao base para fechar o jogo
void leave(){
    defaultScreen();
    writeFocus("Ate a proxima!!");
    delay(1500);
    exit(0);
}

//Core game loop
void game(){

}

//Funcao criada para o main menu
void mainMenu(){
    //Variavel para a opcao do main menu
    int choice;
    //Variavel para checar a opcao na tela de pontuacao
    int scoreChoice;

    //Criacao do main menu
    gotoxy(50,Middle_Y);printf("Bem vindo ao Bigas-Genius!");
    delay(500);
    gotoxy(46,11);printf("_______________________________");
    gotoxy(Middle_X,12);printf("1 - Iniciar o jogo");
    gotoxy(Middle_X,13);printf("2 - Olhar pontuacoes");
    gotoxy(Middle_X,14);printf("3 - Sair\n");

    scanf("%d", &choice);

    switch(choice){
        case 1:
            defaultScreen();
            writeFocus("Iniciando o game");
            //Loading bar
            for (size_t i = 0; i < 8; i++)
            {
                delay(250);
                printf(".");
            }
            defaultScreen();
            //Core loop do game
            game();
        break;
        case 2:
            defaultScreen();
            writeFocus("Abrindo as pontuacoes");
            for (size_t i = 0; i < 5; i++)
            {
                delay(250);
                printf(".");
            }
            defaultScreen();
            //Leitura dos scores salvo no .txt
            read("scores/score.txt", Middle_X, Middle_Y);

            gotoxy(Middle_X, 28); printf("1 - Voltar");
            gotoxy(Middle_X, 29); printf("2 - Sair");

            scanf("%d", &scoreChoice);

            //Switch case para fazer algo com a opcao escolhida
            switch(scoreChoice){
                //Limpa a tela e mostra o main menu novamente
                case 1:
                    defaultScreen();
                    mainMenu();
                break;

                //Fecha o jogo
                case 2:
                    leave();
                break;
            }
        break;
        case 3:
            leave();
        break;
    }
}

int main(){

    logo();
    mainMenu();

    scanf("%d");

    return 0;
}