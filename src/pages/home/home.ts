import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { ProductsPage } from '../products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  names = ['hello', 'there', 'this', 'is', 'a', 'array'];
  constructor(public navCtrl: NavController) {}

  navigateToRegistration() {
    console.log("Navigating...");

    this.navCtrl.push(RegistrationPage);
  }

  navigateToProducts() {
    console.log("Navigating...");

    this.navCtrl.push(ProductsPage);
  }
}
