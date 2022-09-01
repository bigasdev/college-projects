#include "src/include/SDL2/SDL.h"
#include "src/draw.h"
#include <stdio.h>
#include "src/structs.h"
#include "src/hero.h"

Entity Hero;

void createHero(void){
    Hero.x = 600;
    Hero.y = 300;
    Hero.moveSpeed = 4;
    Hero.health = 10;
    Hero.texture = loadTexture("resources/sprites/player.png");
    //hero = &_hero;
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