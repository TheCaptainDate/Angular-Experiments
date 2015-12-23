import {Component} from "angular2/core";
import {IHero} from "./iHero";

@Component({
  selector: "my-hero-detail",
  template: `
			<div *ngIf="hero">
				<h2>Hero {{hero.name}} details!</h2>
				<div>
					<label>ID:</label>{{hero.id}}
				</div>
				<div>
					<label>Name:</label>
					<div>
							<input [(ngModel)]="hero.name" placeholder="Name of hero">
					</div>
				</div>
			</div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent {
	public hero: IHero;
}
