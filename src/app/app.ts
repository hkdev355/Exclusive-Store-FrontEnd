import {Component} from '@angular/core';
import {Header} from './exclusive-store/components/header/header';
import {Footer} from './exclusive-store/components/footer/footer';
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
