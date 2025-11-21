import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <!-- Footer start -->
    <div class="footer-section">
        <div class="footer-list-option">
            <ul class="">
                <li class="">Need Help</li>
                <li class="">Contact Us</li>
                <li class="">Track Order</li>
                <li class="">Returns & Fund</li>
                <li class="">FAQs</li>
            </ul>

            <ul class="">
                <li class="">Company</li>
                <li class="">About Us</li>
                <li class="">Testimony</li>
                <li class="">Blogs</li>
                <li class="">Feedback</li>
            </ul>

            <ul class="">
                <li class="">More Info</li>
                <li class="">Terms & Conditions</li>
                <li class="">Privacy Policy</li>
                <li class="">Shipping Policy</li>
                <li class="">Sitemaps</li>
            </ul>

            <ul class="">
                <li class="">Location</li>
                <li class="">sample@gmail.com</li>
                <li class="">Location of our Department Road</li>
            </ul>
        </div>

        <div class="social-media">

            <div class="pt-4">
                <ul class="">
                    <li class="">
                        <span>
                            <i class="fa-brands fa-facebook-f"></i>
                        </span>
                    </li>
                    <li class="">
                        <span>
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </li>
                    <li class="">
                        <span>
                            <i class="fa-brands fa-x-twitter"></i>
                        </span>
                    </li>

                    <li class="">
                        <span>
                            <i class="fa-brands fa-linkedin"></i>
                        </span>
                    </li>
                </ul>
            </div>

            <div>
                <span>Download The APP</span>
                <ul class="download-from pt-2">
                    <li class="">
                        <img class="Playstore" src="assets/imgs/download from play store.png"
                            name="download from Google Play">
                    </li>
                    <li class="">
                        <img class="app-store" src="assets/imgs/download on app store.png" name="download from App Store">
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <!-- Footer End -->
  `,
  styleUrls: ['./footer.css'],
  styles: ``
})
export class Footer {

}
