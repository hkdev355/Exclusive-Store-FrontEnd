import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  template: `
            <div class="brands p-5 mb-4 mt-4">
                <div class="">
                    <div class="col-md-12">
                        <h2>Looking for the most popular Brands</h2>
                        <p>Upto 60% off on Brands</p>
                    </div>
                </div>

                <div class="row  brand-img-section">
                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/brand/logo1.jpeg" class="d-block w-100 " alt="...">
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/brand/logo2.png" class="d-block w-100 " alt="...">
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/brand/logo3.png" class="d-block w-100 " alt="...">
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/brand/logo4.png" class="d-block w-100 " alt="...">
                    </div>
                </div>

            </div>
  `,
  styleUrls: ['./brands.css'],
  styles: ``
})
export class Brands {

}
