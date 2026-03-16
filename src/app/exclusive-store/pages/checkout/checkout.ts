import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [],
  template: `
    <div class="container py-5">

        <div class="row">
            <div class="col-md-12">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item active" aria-current="page">CheckOut</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row g-4">

            <!-- LEFT  -->
            <div class="col-lg-8">

                <!-- Customer information -->
                <div class="card checkout-card p-4 mb-4">
                    <h4 class="mb-3">Contact Information</h4>
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" placeholder="you@example.com">
                        </div>
                    </div>
                </div>

                <!-- Shipping Address -->
                <div class="card checkout-card p-4 mb-4">
                    <h4 class="mb-3">Shipping Address</h4>
                    <div class="row g-3">

                        <div class="col-md-6">
                            <label class="form-label">First Name</label>
                            <input class="form-control" placeholder="Haris">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label">Last Name</label>
                            <input class="form-control" placeholder="Khurshid">
                        </div>

                        <div class="col-12">
                            <label class="form-label">Street Address</label>
                            <input class="form-control" placeholder="House #, Street #">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label">City</label>
                            <input class="form-control" placeholder="Lahore">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label">Postal Code</label>
                            <input class="form-control" placeholder="54000">
                        </div>

                    </div>
                </div>

                <!-- Shipping Options -->
                <div class="card checkout-card p-4 mb-4">
                    <h4 class="mb-3">Shipping Method</h4>

                    <div class="form-check d-flex align-items-center p-3 border rounded mb-2">
                        <input class="form-check-input me-3" type="radio" checked>
                        <div>
                            <div class="fw-semibold">Standard Delivery (3–5 days)</div>
                            <small class="text-muted">$5.00</small>
                        </div>
                    </div>

                    <div class="form-check d-flex align-items-center p-3 border rounded">
                        <input class="form-check-input me-3" type="radio">
                        <div>
                            <div class="fw-semibold">Express Delivery (1–2 days)</div>
                            <small class="text-muted">$12.00</small>
                        </div>
                    </div>
                </div>

                <!-- Payment -->
                <div class="card checkout-card p-4 mb-4">
                    <h4 class="mb-3">Payment Method</h4>

                    <div class="payment-icons mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Mastercard-logo.svg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Stripe_Logo%2C_revised_2016.svg">
                    </div>

                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label">Card Number</label>
                            <input class="form-control" placeholder="•••• •••• •••• ••••">
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">Expiry</label>
                            <input class="form-control" placeholder="MM/YY">
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">CVV</label>
                            <input class="form-control" placeholder="123">
                        </div>
                    </div>

                </div>

            </div>

            <!-- RIGHT: ORDER SUMMARY -->
            <div class="col-lg-4">

                <div class="sticky-summary">

                    <div class="card checkout-card p-4 mb-3">
                        <h4 class="mb-3">Order Summary</h4>

                        <!-- Product 1 -->
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/60" class="product-img me-3">
                            <div>
                                <div class="fw-semibold">Nike Air Shoes</div>
                                <small class="text-muted">Size: 42</small>
                            </div>
                            <span class="ms-auto fw-semibold">$70</span>
                        </div>

                        <!-- Product 2 -->
                        <div class="d-flex align-items-center mb-3">
                            <img src="https://via.placeholder.com/60" class="product-img me-3">
                            <div>
                                <div class="fw-semibold">Black Hoodie</div>
                                <small class="text-muted">Size: L</small>
                            </div>
                            <span class="ms-auto fw-semibold">$35</span>
                        </div>

                        <hr>

                        <div class="d-flex justify-content-between mb-2">
                            <span>Subtotal</span>
                            <span>$105</span>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                            <span>Shipping</span>
                            <span>$5</span>
                        </div>

                        <div class="d-flex justify-content-between">
                            <strong>Total</strong>
                            <strong>$110</strong>
                        </div>

                    </div>

                    <!-- Coupon -->
                    <div class="card checkout-card p-4 mb-3">
                        <h5 class="mb-3">Have a Coupon?</h5>
                        <div class="input-group">
                            <input class="form-control" placeholder="Enter coupon code">
                            <button class="btn btn-dark">Apply</button>
                        </div>
                    </div>

                    <!-- Place Order -->
                    <button class="btn btn-primary w-100 py-3 fw-semibold">
                        Place Order
                    </button>

                </div>
            </div>

        </div>

    </div>
  `,
  styleUrls: ['./checkout.css'],
  styles: ``
})
export class Checkout {

}
