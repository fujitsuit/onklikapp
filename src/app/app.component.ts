import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CheckInStoryPage } from '../pages/check-in-story/check-in-story';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckinCartPage } from '../pages/checkin-cart/checkin-cart';
import { DeliveryPage } from '../pages/delivery/delivery';
import { LoginPage } from '../pages/login/login';

import { Cart } from '../providers/checkin-cart';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  sections: Array<{title: string, component: any, icon: string}>;
  pages: Array<{title: string, component: any, icon: string}>;


  constructor(public platform: Platform,public menuCtrl: MenuController, storage: Storage, public cart:Cart) {
    this.initializeApp();
    this.sections = [      
      { title: 'Заведения', component: HomePage, icon: "checkin"},
      { title: 'Check In', component: CheckinPage, icon: "checkin"},
      { title: 'Доставка', component: DeliveryPage, icon: "checkin"},
      { title: 'Избранное', component: MyFavouritePage, icon: "checkin"},
      { title: 'История', component: CheckInStoryPage, icon: "checkin"}
    ];
    this.pages = [
      { title: 'Мой профиль', component: MyProfilePage, icon: "profile" },
      { title: 'Настройки', component: MyOptionsPage, icon: "wrench" }
    ]
}

  goCheckCart(){
    this.nav.push(CheckinCartPage);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logoutApp(){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false, 'menu');
    this.nav.setRoot(LoginPage);    
  }
}
