#include <stdio.h>
#include <stdbool.h>

typedef struct{
    Entity *entity;
    Entity *next;
}EntityVar;

typedef struct{
    EntityVar *top;
}Entities;  

Entities spawn;

void addEntity(Entity entityObj){
    EntityVar *entity = malloc(sizeof(EntityVar));
    entity->entity = entityObj;
    entity->next = spawn.top;
    spawn.top = entity;
}

void startSpawn(){
    spawn.top = NULL;
}
