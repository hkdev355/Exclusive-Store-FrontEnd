import { Component } from '@angular/core';

@Component({
  selector: 'app-new-popular',
  imports: [],
  template: `
        <div class="row pt-2">
            <div class="row">
                <div class="col-md-12 txt-arrival">
                    <h2>Popular Items</h2>
                </div>
            </div>

            <div class="row txt-img-section2">
                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.jpg" class="d-block w-100 "
                        alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Stylish Bag</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>

                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/daniel-storek-JM-qKEd1GMI-unsplash.jpg" class="d-block w-100 " alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Stylish Shoe</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>

                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/c-d-x-PDX_a_82obo-unsplash.jpg" class="d-block w-100 " alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Headset</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 p-3">
                    <img src="assets/imgs/products/personalgraphic-com-glY1L-eo0Fc-unsplash.jpg" class="d-block w-100 "
                        alt="...">
                    <div class="row product-name">
                        <div class="col-md-9">
                            <p>Travelling Bag</p>
                        </div>
                        <div class="col-md-3">
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
  `,
  styleUrls: ['./new-popular.css'],
  styles: ``
})
export class NewPopular {

}
