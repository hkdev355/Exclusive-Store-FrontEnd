import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <!-- Footer start -->
<footer class="pt-5 pb-3 footer-section">
    <div class="container">

        <div class="row">

            <div class="col-6 col-md-3 mb-4">
                <h6 class="fw-bold">Need Help</h6>
                <ul class="list-unstyled">
                    <li>Contact Us</li>
                    <li>Track Order</li>
                    <li>Returns & Refund</li>
                    <li>FAQs</li>
                </ul>
            </div>

            <div class="col-6 col-md-3 mb-4">
                <h6 class="fw-bold">Company</h6>
                <ul class="list-unstyled">
                    <li>About Us</li>
                    <li>Testimony</li>
                    <li>Blogs</li>
                    <li>Feedback</li>
                </ul>
            </div>

            <div class="col-6 col-md-3 mb-4">
                <h6 class="fw-bold">More Info</h6>
                <ul class="list-unstyled">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Sitemaps</li>
                </ul>
            </div>

            <div class="col-6 col-md-3 mb-4">
                <h6 class="fw-bold">Location</h6>
                <ul class="list-unstyled">
                    <li>sample@gmail.com</li>
                    <li>Location of our Department Road</li>
                </ul>
            </div>

        </div>


        <!-- Social + App -->
        <div class="row border-top pt-4 align-items-center">

            <div class="col-md-6">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li class="list-inline-item me-3">
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li class="list-inline-item me-3">
                        <i class="fa-brands fa-x-twitter"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fa-brands fa-linkedin"></i>
                    </li>
                </ul>
            </div>

            <div class="col-md-6 text-md-end mt-3 mt-md-0">
                <span class="d-block fw-semibold">Download The App</span>

                <div class="d-flex justify-content-md-end gap-2 mt-2">
                    <img src="assets/imgs/download from play store.png" style="height:40px;">
                    <img src="assets/imgs/download on app store.png" style="height:40px;" class="rounded-1">
                </div>
            </div>

        </div>

    </div>
</footer>

    <!-- Footer End -->
  `,
  styleUrls: ['./footer.css'],
  styles: ``
})
export class Footer {

}
