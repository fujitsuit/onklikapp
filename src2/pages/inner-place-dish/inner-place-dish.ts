import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InnerPlaceDish page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inner-place-dish',
  templateUrl: 'inner-place-dish.html'
})
export class InnerPlaceDishPage {

  dish: any;
	dishCurr: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeDish();
  	
    //this.getDishInfo(navParams.get('dishId'), this.dish)
  	this.getDishInfo(1, this.dish)
  }

  getDishInfo(id, array){
  	for (var i = array.length - 1; i >= 0; i--) {
  		if(array[i].id == id){
  			this.dishCurr = array[i];
  		}
  	}
  }
  initializeDish(){
  	this.dish = [
	  {label:'ssss', id: 1, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
	  {label:'dddd', id: 2, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg', price: 2740, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
	  {label:'cccc', id: 3, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg', price: 2740, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
	  {label:'zzzz', id: 4, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg', price: 2720, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'}
    ];
  }
  ionViewDidLoad() {
  }

}
