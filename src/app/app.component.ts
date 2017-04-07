import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CheckInStoryPage } from '../pages/check-in-story/check-in-story';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckinDishPage } from '../pages/checkin-dish/checkin-dish';
import { DeliveryPage } from '../pages/delivery/delivery';
import { LoginPage } from '../pages/login/login';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CheckinDishPage;

  sections: Array<{title: string, component: any, icon: string}>;
  pages: Array<{title: string, component: any, icon: string}>;
  cartStatus: any;


  constructor(public platform: Platform,public menuCtrl: MenuController, storage: Storage) {
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


     storage.ready().then(() => {

        this.cartStatus = storage.get('checkinCart').then((val) => {
          return 1
        });

         console.log(this.cartStatus.toString());

      });
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
