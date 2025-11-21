import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  imports: [],
  template: `
    <div class="container my-5">
        <div class="row">
            <div class="col-md-12">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item active">Products</li>
                        <li class="breadcrumb-item active" aria-current="page">Black Bag</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <!-- Product Images -->
            <div class="col-md-6 mb-4">
                <img id="mainImage" src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="product-image mb-3" alt="Product">
                <div class="d-flex">
                    <img src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="thumbnail-img" onclick="changeImage(this.src)">
                    <img src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="thumbnail-img" onclick="changeImage(this.src)">
                    <img src="assets/imgs/products/mobina-ghazazani-lnbuoKz2GlM-unsplash.jpg" class="thumbnail-img" onclick="changeImage(this.src)">
                </div>
            </div>

            <!-- Product Details -->
            <div class="col-md-6">
                <h2>Black Bag</h2>
                <!-- <p class="text-muted">Category: Electronics</p> -->
                <h4 class="text-primary product-price">$299.99</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vel tincidunt lacinia.
                </p>

                <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" value="1" min="1">
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary btn-lg me-2 add-to-cart">Add to Cart</button>
                    <button class="btn btn-outline-secondary btn-lg">Buy Now</button>
                </div>

                <hr>

                <!-- Tabs for Description, Specs, Reviews -->
                <ul class="nav nav-tabs" id="productTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active text-dark" id="description-tab" data-bs-toggle="tab"
                            data-bs-target="#description" type="button" role="tab">Description</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs"
                            type="button" role="tab">Specifications</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link text-dark" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
                            type="button" role="tab">Reviews</button>
                    </li>
                </ul>
                <div class="tab-content p-3 border border-top-0" id="productTabContent">
                    <div class="tab-pane fade show active" id="description" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus in orci cursus
                            volutpat. Praesent euismod dui nec ligula malesuada, non ullamcorper nulla viverra.</p>
                    </div>
                    <div class="tab-pane fade" id="specs" role="tabpanel">
                        <ul>
                            <li>Feature 1: Value</li>
                            <li>Feature 2: Value</li>
                            <li>Feature 3: Value</li>
                            <li>Feature 4: Value</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel">
                        <div class="review">
                            <strong>John Doe</strong> - ⭐⭐⭐⭐☆<br>
                            Great product, fast shipping!
                        </div>
                        <div class="review">
                            <strong>Jane Smith</strong> - ⭐⭐⭐⭐⭐<br>
                            Excellent quality and very comfortable.
                        </div>
                        <div class="review">
                            <strong>Mike Lee</strong> - ⭐⭐⭐⭐☆<br>
                            Worth the price.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./productdetail.css'],
  styles: ``
})
export class Productdetail {

}
