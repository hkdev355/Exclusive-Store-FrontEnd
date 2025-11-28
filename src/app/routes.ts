import {Route, Routes} from '@angular/router';
import { Main } from "./exclusive-store/home/main/main";
import { Productlist } from "./exclusive-store/productlist/productlist";
import { Productdetail } from "./exclusive-store/productdetail/productdetail";
import { Checkout } from "./exclusive-store/checkout/checkout";

const routeConfig: Routes = [
  {
    path: '',
    component: Main,
    title: 'Home page',
  },
    {
    path: 'product-list',
    component: Productlist,
    title: 'product-list',
  },
    {
    path: 'product-detail',
    component: Productdetail,
    title: 'product-detail',
  },
    {
    path: 'checkout',
    component: Checkout,
    title: 'Checkout',
  }
];

export default routeConfig;