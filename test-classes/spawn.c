#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int x;
    int y;
    struct Entity *next;
}Entity;

void addEntity(Entity **spawn, int x, int y){
    Entity *aux, *entity = malloc(sizeof(Entity));
    if(entity){
        entity->x = x;
        entity->y = y;
        entity->next = NULL;
        
        // Caso a fila esteja NULL a gente vai iniciar ela com a entity criada como objeto
        if(*spawn == NULL){
          *spawn = entity;  
        }else{
            // Caso contrario a gente vai utilizar como auxiliar o objeto que estava armazenado no next;
            aux = *spawn;
            while(aux->next){
                aux = aux->next;
                // A gente vai entao pegar o next do auxiliar e assignar com a entity que criamos
                aux->next = entity;
            }
        }
        
    
    }else{
        // Caso nao seja possivel criar o entity a gente printa um erro de alolcacao de memoria
        printf("Erro de alocacao de memoria");
    }
}

void readEntities(Entity **spawn){
    Entity *aux, *entity = NULL;
    if(*spawn){
        aux = *spawn;
        printf("\n Entity na posicao X: %d e posicao Y: %d", aux->x, aux->y);
        entity = aux->next;
        readEntities(&entity);
    }
}

Entity* removeEntity(Entity **spawn){
    Entity *remover = NULL;
    if(*spawn){
        //Se nao estiver null a gente vai remover o next
        remover = *spawn;
        *spawn = remover->next;
    }else{
        printf("\Fila vazia!");
    }
    return remover;
}


int main()
{
    int choice, x, y;
    Entity *r, *fila = NULL;
    do{
        printf("Escolha sua opcao: \n 0 - Sair \n 1 - Inserir \n 2 - Remover \n 3 - Checar \n"); 
        scanf("%d", &choice);
        switch(choice){
            case 0:
            break;
            case 1:
                printf("Inserindo uma entity na pilha... \n");
                printf("Digite sua posicao X: \n");
                scanf("%d", &x);
                printf("Digite sua posicao y: \n");
                scanf("%d", &y);
                addEntity(&fila, x, y);
            break;
            case 2:
                r = removeEntity(&fila);
                if(r){
                    printf("\nRemovido entity da posicao X: %d e posicao Y: %d", r->x, r->y);
                    free(r);
                }
                break;
            case 3:
                readEntities(&fila);
                break;
            default:
                break;
        }
    }while(choice != 0);
    return 0;
}