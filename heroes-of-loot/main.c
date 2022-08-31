#define SDL_MAIN_HANDLED

#include "src/include/SDL2/SDL.h"
#include "src/init.h"
#include "src/draw.h"
#include "src/input.h"
#include "src/structs.h"
#include <stdio.h>
#include <string.h>
#include "test.h"

extern struct App app;

Entity player;

void cleanup(){

}

void initPlayer(){
    player.x = 600;
    player.y = 300;
    player.health = 10;
    player.texture = loadTexture("resources/sprites/player.png");
}

int main(int argc, char *argv[]){
    Test();

    SDL_Delay(1600);

	memset(&app, 0, sizeof(app));
    memset(&player, 0, sizeof(Entity));

	initSDL();

    initPlayer();

	atexit(cleanup);

	while (1)
	{
        
		prepareScene();

		doInput();

        blit(player.texture, player.x, player.y);

		presentScene();


		SDL_Delay(16);
	}

	return 0;
}
