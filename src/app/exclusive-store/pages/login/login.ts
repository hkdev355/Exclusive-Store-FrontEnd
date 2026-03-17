import { Component } from '@angular/core';


@Component({
    selector: 'app-login',
    imports: [],
    template: `
<div class="container auth-container d-flex align-items-center justify-content-center">
    <div class="col-md-5">

        <div class="text-center mb-4">
            <img src="assets/imgs/logo-transparent.webp" class="logo">
        </div>

        <div class="card shadow">
            <div class="card-body p-4">
                <h4 class="text-center mb-3">Login</h4>

                <form>
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter email">
                    </div>

                    <div class="mb-3">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter password">
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox">
                            <label class="form-check-label">Remember me</label>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button class="btn btn-primary w-100">Login</button>
                </form>

                <p class="text-center mt-3">
                    Don't have an account?
                    <a href="register.html">Register</a>
                </p>
            </div>
        </div>
    </div>
</div>
  `,
    styleUrls: ['./login.css'],
    styles: ``
})
export class Login {

}
