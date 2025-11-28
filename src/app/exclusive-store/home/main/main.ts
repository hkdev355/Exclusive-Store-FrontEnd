import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Description } from '../description/description';
import { NewArrivals } from '../new-arrivals/new-arrivals';
import { NewPopular } from '../new-popular/new-popular';
import { Brands } from '../brands/brands';


@Component({
  selector: 'app-main',
  imports: [Carousel ,Description, NewArrivals, NewPopular, Brands],
  template: `
    <app-carousel></app-carousel>
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
