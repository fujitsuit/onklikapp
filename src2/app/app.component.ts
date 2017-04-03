import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CheckInStoryPage } from '../pages/check-in-story/check-in-story';
import { BookStoryPage } from '../pages/book-story/book-story';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { OrderStoryPage } from '../pages/order-story/order-story';
import { OrderPlaceStoryPage } from '../pages/order-place-story/order-place-story';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Мой профиль', component: MyProfilePage, icon: "profile" },
      { title: 'История check in', component: CheckInStoryPage, icon: "checkin" },
      { title: 'История брони', component: BookStoryPage, icon: "order" },
      { title: 'История заказов на месте', component: OrderPlaceStoryPage, icon: "cart" },
      { title: 'История заказов', component: OrderStoryPage, icon: "clock" },
      { title: 'Корзина', component: MyCartPage, icon: "favourite" },
      { title: 'Избранное', component: MyFavouritePage, icon: "trash" },
      { title: 'Настройки', component: MyOptionsPage, icon: "wrench" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page.component);
    this.nav.setRoot(page.component);
  }
}
