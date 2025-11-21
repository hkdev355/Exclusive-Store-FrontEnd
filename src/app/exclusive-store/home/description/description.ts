import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  template: `
        <div class="row ">
            <div class="col-md-6 img-section1 p-5">
                <img src="assets/imgs/products/pmv-chamara-P62CoAgAGdg-unsplash.jpg" class="d-block w-100 " 
                    alt="...">
                <div class="text-section1">
                    <h2>Product For Every Need</h2>
                    <p>Beauty Product</p>
                </div>
            </div>
            <div class="col-md-6 img-section1 p-5">
                <img src="assets/imgs/products/james-ree-ZmeFtu11Hpc-unsplash.jpg" class="d-block w-100 " alt="...">
                <div class="text-section1">
                    <h2>Get A Matching Bag</h2>
                    <p>Suits your colour</p>
                </div>
            </div>
        </div>
  `,
  styleUrls: ['./description.css'],
  styles: ``
})
export class Description {

}
