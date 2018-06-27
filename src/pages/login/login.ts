import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { ProductsPage } from '../products/products';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController) { }

    navigateToRegistration() {
        console.log("Navigating...");

        this.navCtrl.push(RegistrationPage);
    }
}