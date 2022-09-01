#ifndef STRUCT_H
#define STRUCT_H

#include "include/SDL2/SDL.h"

typedef struct{
    SDL_Renderer *renderer;
    SDL_Window *window;
    int up;
    int down;
    int left;
    int right;
} App;

typedef struct {
    int x;
    int y;
    int moveSpeed;
    int health;
    char name;
    SDL_Texture *texture;
} Entity;

extern App app;

#endif
