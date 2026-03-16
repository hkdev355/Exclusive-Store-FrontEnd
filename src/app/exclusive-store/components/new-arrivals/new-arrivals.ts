import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  imports: [],
  template: `
        <div class="row ">
            <div class="row">
                <div class="col-md-12 txt-arrival">
                    <h2>New Arrivals</h2>
                </div>
            </div>

            <div class="row  txt-img-section2">
                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/domino-studio-164_6wVEHfI-unsplash.jpg" class="d-block w-100 " alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Nike Red Shoe</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="d-block w-100 "
                        alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Black Bag</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg" class="d-block w-100 "
                        alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Sun Glasses</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/mohammed-attia-wYVKRBIchV0-unsplash.jpg" class="d-block w-100 " alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Sports Shoe</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  `,
  styleUrls: ['./new-arrivals.css'],
  styles: ``
})
export class NewArrivals {

}
