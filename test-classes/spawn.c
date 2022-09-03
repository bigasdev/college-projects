#include <stdio.h>
#include <stdlib.h>

typedef struct{
    char name;
    int x;
    int y;
    struct Entity *next;
}Entity;

void addEntity(Entity **spawn, int x, int y, char name[]){
    Entity *aux, *entity = malloc(sizeof(Entity));
    if(entity){
        entity->name = name;
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

Entity* removeEntity(Entity **spawn){
    Entity *remover = NULL;
    *spawn = remover->next;
}


int main()
{

}
