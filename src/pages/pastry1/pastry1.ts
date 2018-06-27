import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pastry1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pastry1',
  templateUrl: 'pastry1.html',
})
export class Pastry1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pastry1Page');
  }

  navigateToPayment() {
    console.log("Navigating...");

    this.navCtrl.push(PaymentPage);
  }

  navigateToCart() {
    console.log("Navigating...");

    this.navCtrl.push(CartPage);
  }
}
