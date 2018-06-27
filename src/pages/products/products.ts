import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pastry1Page } from '../pastry1/pastry1';
import { Pastry2Page } from '../pastry2/pastry2';
import { Pastry3Page } from '../pastry3/pastry3';
import { Pastry4Page } from '../pastry4/pastry4';


/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  navigateToPastry1() {
    console.log("Navigating...");

    this.navCtrl.push(Pastry1Page);
  }

  navigateToPastry2() {
    console.log("Navigating...");

    this.navCtrl.push(Pastry2Page);
  }

  navigateToPastry3() {
    console.log("Navigating...");

    this.navCtrl.push(Pastry3Page);
  }

  navigateToPastry4() {
    console.log("Navigating...");

    this.navCtrl.push(Pastry4Page);
  }
  
}
