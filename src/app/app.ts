import {Component} from '@angular/core';
import {Header} from './exclusive-store/header/header';
import {Footer} from './exclusive-store/footer/footer';
import {Carousel} from './exclusive-store/home/carousel/carousel';
import {Main} from './exclusive-store/home/main/main';
import {Productlist} from './exclusive-store/productlist/productlist';
import {Checkout} from './exclusive-store/checkout/checkout';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Home';
}
