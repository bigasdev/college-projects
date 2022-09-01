#define SDL_MAIN_HANDLED

#include "src/include/SDL2/SDL.h"
#include "src/init.h"
#include "src/draw.h"
#include "src/input.h"
#include "src/structs.h"
#include "src/hero.h"
#include <stdio.h>
#include <string.h>
#include "test.h"

extern struct App app;

Entity hero;

void cleanup(){

}


int main(int argc, char *argv[]){
    Test();

    SDL_Delay(1600);

	memset(&app, 0, sizeof(app));
    memset(&hero, 0, sizeof(Entity));

	initSDL();

    //createHero(&hero);

	atexit(cleanup);

	while (1)
	{
        
		prepareScene();

		doInput();

		playerInputs();

        blit(hero.texture, hero.x, hero.y);

		presentScene();


		SDL_Delay(16);
	}

	return 0;
}
