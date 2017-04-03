import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';

import { DeliveryPage } from '../delivery/delivery';
import { CheckinPage } from '../checkin/checkin';
import { HomePage } from '../home/home';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

	  tab1Root = HomePage;
	  tab2Root = CheckinPage;
	  tab3Root = DeliveryPage;

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.menuCtrl.enable(true, 'menu');
  }

}
