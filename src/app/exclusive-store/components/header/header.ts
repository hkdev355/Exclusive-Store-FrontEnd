import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    template: `
    <!-- Header start -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img class="logo" src="assets/imgs/ChatGPT Image Nov 3, 2025, 07_15_56 PM.png" name="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
            </span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0 top-option ms-auto">
                    <li class="nav-item">
                    <a class="nav-link " aria-current="page" [routerLink]="['/']">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " aria-current="page" [routerLink]="['/product-list']">Products</a>
                    </li>
                </ul>

                <div class="d-none d-lg-inline">
                <form class="d-flex search" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </div>

                <div class="d-none d-lg-block">
                    <ul class="navbar-nav profile-icon">
                        <li class="nav-item">
                            <a class="nav-link">
                            <i class="fa-regular fa-heart d-none d-lg-inline"></i>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">
                            <i class="fa-solid fa-cart-shopping d-none d-lg-inline"></i>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">
                            <i class="fa-solid fa-user d-none d-lg-inline"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class=" d-lg-none">

                <ul class="navbar-nav ms-lg-3 top-option ">
                    <li class="nav-item">
                        <a class="nav-link">
                        <span>Favourite</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                        <span>Cart</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                        <span>Profile</span>
                        </a>
                    </li>

                </ul>

                <form class="d-flex m-3 search" role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>

                </div>
            </div>
        </div>
    </nav>
    <!-- Header End -->
  `,
    styleUrls: ['./header.css'],
    styles: ``,

})
export class Header {

}
