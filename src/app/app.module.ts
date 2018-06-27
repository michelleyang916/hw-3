import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsPage } from '../pages/products/products';
import { Pastry1Page } from '../pages/pastry1/pastry1';
import { Pastry2Page } from '../pages/pastry2/pastry2';
import { Pastry3Page } from '../pages/pastry3/pastry3';
import { Pastry4Page } from '../pages/pastry4/pastry4';
import { PaymentPage } from '../pages/payment/payment';
import { CartPage } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    Pastry1Page,
    Pastry2Page,
    Pastry3Page,
    Pastry4Page,
    PaymentPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    Pastry1Page,
    Pastry2Page,
    Pastry3Page,
    Pastry4Page,
    PaymentPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
