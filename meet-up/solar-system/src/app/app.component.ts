import { PlanetComponent } from './planet/planet.component';
import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // lista planetas do tipo array de planetaComponent
  listPlanets: PlanetComponent[] = []; // Array<PlanetComponent>

  constructor(private ajax: Http) {
    ajax.get(`http://localhost:3000/v1/dados`)
      .subscribe(
        (response) => {
          this.listPlanets = response.json();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}