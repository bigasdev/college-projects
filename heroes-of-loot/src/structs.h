#include "include/SDL2/SDL.h"

struct App{
    SDL_Renderer *renderer;
    SDL_Window *window;
};

typedef struct {
    int x;
    int y;
    int health;
    char name;
    SDL_Texture *texture;
} Entity;
