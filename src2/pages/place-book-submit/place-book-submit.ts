import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InnerPlacePage } from '../inner-place/inner-place';
/*
  Generated class for the PlaceBookSubmit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-place-book-submit',
  templateUrl: 'place-book-submit.html'
})
export class PlaceBookSubmitPage {

	bookForm: any;
	placeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.bookForm = navParams.get('data');
  	this.placeId = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceBookSubmitPage');
  }
  bookSubmit(id){
  	this.navCtrl.popToRoot();
  }
}
