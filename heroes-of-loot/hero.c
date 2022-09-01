#include "src/include/SDL2/SDL.h"
#include "src/draw.h"
#include <stdio.h>
#include <inttypes.h>
#include "src/structs.h"
#include "src/hero.h"

Entity Hero;
int idleAnim = 0;

void createHero(void){
    Hero.x = 600;
    Hero.y = 300;
    Hero.moveSpeed = 4;
    Hero.framesCount = 2;
    Hero.health = 10;
    Hero.texture = loadTexture("resources/sprites/player.png");
    Hero.frames[0] = loadTexture("resources/sprites/player.png");
    Hero.frames[1] = loadTexture("resources/sprites/player1.png");
    //hero = &_hero;
}

void animatePlayer(){
    Uint32 ticks = SDL_GetTicks();
    Uint32 sprite = (ticks / 300) % 2;
    printf("%" PRIu32 "\n", sprite);
    Hero.texture = Hero.frames[sprite];
}

void playerInputs(){
    if(app.up){
        printf("Going up!");
        Hero.y -= Hero.moveSpeed;
    }
    if(app.down){
        printf("Going down!");
        Hero.y += Hero.moveSpeed;
    }
    if(app.right){
        printf("Going right!");
        Hero.x += Hero.moveSpeed;
    }
    if(app.left){
        printf("Going left!");
        Hero.x -= Hero.moveSpeed;
    }
}