import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";
import {IHero} from "./iHero";


@Injectable()
export class HeroService {

	getHeroes () {
		return Promise.resolve(HEROES);
	}

    getHeroesSlowly() {
		return new Promise(resolve =>
			setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
   		);
    }
  }
