import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { MyStoryPage } from '../pages/my-story/my-story';
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
  activePage: any;

  constructor(public platform: Platform,public menuCtrl: MenuController, storage: Storage, public cart:Cart) {
    this.initializeApp();
    this.sections = [      
      { title: 'Заведения', component: HomePage, icon: "restaurant"},
      { title: 'Check In', component: CheckinPage, icon: "checkmark-circle-outline"},
      { title: 'Доставка', component: DeliveryPage, icon: "car"},
      { title: 'Избранное', component: MyFavouritePage, icon: "star"},
      { title: 'История', component: MyStoryPage, icon: "bookmarks"}
    ];
    this.pages = [
      { title: 'Мой профиль', component: MyProfilePage, icon: "person" },
      { title: 'Настройки', component: MyOptionsPage, icon: "settings" }
    ];
    this.activePage = this.sections[0];
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
    this.activePage = page;
  }
  checkActive(page){
    return page == this.activePage;
  }
  logoutApp(){
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false, 'menu');
    this.nav.setRoot(LoginPage);    
  }
}
