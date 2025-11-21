import { Component } from '@angular/core';
import { Description } from '../description/description';
import { NewArrivals } from '../new-arrivals/new-arrivals';
import { NewPopular } from '../new-popular/new-popular';
import { Brands } from '../brands/brands';


@Component({
  selector: 'app-main',
  imports: [Description, NewArrivals, NewPopular, Brands],
  template: `
    <div class="container">


    <app-description></app-description>
    <app-new-arrivals></app-new-arrivals>
    <app-new-popular></app-new-popular>
    <app-brands></app-brands>







    </div>
  `,
  styleUrls: ['./main.css'],
  styles: ``
})
export class Main {

}
