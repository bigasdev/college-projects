#include "include/SDL2/SDL.h"

struct App{
    SDL_Renderer *renderer;
    SDL_Window *window;
    int up;
    int down;
    int left;
    int right;
};

typedef struct {
    int x;
    int y;
    int moveSpeed;
    int health;
    char name;
    SDL_Texture *texture;
} Entity;
