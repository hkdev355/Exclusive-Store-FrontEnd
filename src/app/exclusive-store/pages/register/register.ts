import { Component } from '@angular/core';


@Component({
    selector: 'app-register',
    imports: [],
    template: `
<div class="container auth-container d-flex align-items-center justify-content-center">
    <div class="col-md-5">

        <div class="text-center mb-4">
            <img src="assets/imgs/logo-transparent.webp" class="logo">
        </div>

        <div class="card shadow">
            <div class="card-body p-4">
                <h4 class="text-center mb-3">Register</h4>

                <form>
                    <div class="mb-3">
                        <label>Full Name</label>
                        <input type="text" class="form-control" placeholder="Enter full name">
                    </div>

                    <div class="mb-3">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter email">
                    </div>

                    <div class="mb-3">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Create password">
                    </div>

                    <div class="mb-3">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" placeholder="Confirm password">
                    </div>

                    <button class="btn btn-success w-100">Register</button>
                </form>

                <p class="text-center mt-3">
                    Already have an account?
                    <a href="login.html">Login</a>
                </p>
            </div>
        </div>
    </div>
</div>
  `,
    styleUrls: ['./register.css'],
    styles: ``
})
export class Register {

}
