import { Component, input} from '@angular/core';
import { ProductsInterface } from '../productsInterface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  template: `
                    <div class="">
                        <img [src]="product().img_url" class="d-block w-100 "
                            alt="...">
                        <div class="row product-name">
                            <div class="col-md-8">
                                <p>{{product().name}}</p>
                            </div>
                            <div class="col-md-4">
                                <a [routerLink]="['/product-detail']">
                                <button>View</button>
                                </a>
                            </div>
                        </div>
                    </div>
  `,
  styleUrls: ['./products.css'],
  styles: ``
})
export class ProductSection {
  product = input.required<ProductsInterface>();
}
