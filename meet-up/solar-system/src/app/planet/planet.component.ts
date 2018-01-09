import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-planet',
  templateUrl: 'planet.component.html',
  styles: [ `h1 { color: pink }`]
})

export class PlanetComponent {
  @Input() name = 'Terra';
  @Input() image: string;
  @Input() description: string;
}
