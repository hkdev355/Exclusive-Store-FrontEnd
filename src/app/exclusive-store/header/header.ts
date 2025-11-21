import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <!-- Header start -->
    <div class="top-bar">
        <div>
            <img class="logo" src="assets/imgs/ChatGPT Image Nov 3, 2025, 07_15_56 PM.png" name="Logo">
        </div>
        <div>
            <ul class="top-option ">

                <li class="">Home</li>
                <li class="">Products</li>
            </ul>
        </div>

        <div>
            <span class="input-search-icon">

                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input class="search" type="text" name="search" placeholder="search">
        </div>

        <div class="profile-icon">
            <span class="">
                <i class="fa-regular fa-heart"></i>
            </span>
            <span class="">
                <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span class="">
                <i class="fa-solid fa-user"></i>
            </span>
        </div>
    </div>
    <!-- Header End -->
  `,
  styleUrls: ['./header.css'],
  styles: ``,

})
export class Header {

}
