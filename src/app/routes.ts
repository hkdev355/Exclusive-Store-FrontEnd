import {Route, Routes} from '@angular/router';
import { Login } from "./exclusive-store/pages/login/login";
import { Register } from "./exclusive-store/pages/register/register";
import { Main } from "./exclusive-store/pages/home/main/main";
import { Productlist } from "./exclusive-store/pages/productlist/productlist";
import { Productdetail } from "./exclusive-store/pages/productdetail/productdetail";
import { Checkout } from "./exclusive-store/pages/checkout/checkout";

const routeConfig: Routes = [
  {
    path: 'login',
    component: Login,
    title: 'Login page',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register page',
  },
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