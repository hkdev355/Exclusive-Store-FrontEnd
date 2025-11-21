import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  template: `
    <div>
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/imgs/products/ali-moradi-9KVtDmNnFP4-unsplash.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Fill your wardrobe today</h2>
                        <p>Empty wardrobe, No Problem</p>
                        <p>We have plenty of items for you to look</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/imgs/products/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg" class="d-block w-100"
                        alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Match your wardrobe today</h2>
                        <p>Choose what you like best</p>

                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/imgs/products/huy-nguyen-YhP-E5YwOGE-unsplash.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>The Summer Arrivals</h2>
                        <p>Check our new summer arrivals</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `,
  styleUrls: ['./carousel.css'],
  styles: ``
})
export class Carousel {

}
