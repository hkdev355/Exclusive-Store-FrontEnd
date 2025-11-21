import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  imports: [],
  template: `
    <div class="container">
        <div class="row">

            <div class="col-md-2">
                <div class="filter-product">

                    <div>
                        <p class="pt-3 ps-3">Brands</p>
                    </div>


                    <div class="brand-listing">
                        <p class="ps-3">Nike</p>
                        <hr>
                        <p class="ps-3">Adidas</p>
                        <hr>
                        <p class="ps-3">Jordan</p>
                        <hr>
                        <p class="ps-3">Dolce</p>
                        <hr>
                        <p class="ps-3">Puma</p>
                    </div>

                    <div>
                        <p class="pt-3 ps-3">Price</p>

                        <input type="range" class="form-range pt-1 ps-1 pe-1" min="50" max="1500" step="50"
                            id="price_input">
                        <div class="range-values ps-3 pe-1 pb-1">
                            <button>50</button>
                            <p>--------</p>
                            <button id="selected-price">1500</button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-10">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select form-select-sm sort-select" aria-label="Small select example">
                            <option value="1">New</option>
                            <option value="2">Popular</option>
                            <option value="3">Recommended</option>
                        </select>
                    </div>
                </div>
                <div class="row txt-img-section2">
                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/domino-studio-164_6wVEHfI-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Nike Red Shoe</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Black Bag</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Sun Glasses</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/mohammed-attia-wYVKRBIchV0-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Sports Shoe</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Stylish Bag</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/daniel-storek-JM-qKEd1GMI-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Stylish Shoe</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/c-d-x-PDX_a_82obo-unsplash.jpg" class="d-block w-100 " alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Headset</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 p-3">
                        <img src="assets/imgs/products/personalgraphic-com-glY1L-eo0Fc-unsplash.jpg" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>Travelling Bag</p>
                            </div>
                            <div class="col-md-4">
                                <button>View</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
  `,
  styleUrls: ['./productlist.css'],
  styles: ``
})
export class Productlist {

}
