import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DeliveryPlacePage } from '../delivery-place/delivery-place';

import { AuthService } from '../../providers/auth-service';
import { DeliveryCart, DeliveryPlaces } from '../../providers/delivery-cart';
import { Injectable } from '@angular/core';

@Injectable()
/*
  Generated class for the Delivery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryPage {

	searchQuery: string = '';
  //places: any[];
	filter: any;
	//filters = {};
  //count:number;
	constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public api:AuthService, public cart: DeliveryCart, public delivery: DeliveryPlaces) {
    
    
	
  	this.filter = {
			placeCity: 1,
      placeSort: false,
      placeStatus: false,
			placeKitchen: '',
			placeAverage: {
				lower: 1000,
				upper: 25000
			}
		};
	}
  isEmptyObject(obj) {
    return (Object.keys(obj).length === 0);
  }
  goInner(id){
      this.navCtrl.push(DeliveryPlacePage, {
        placeId: id
      });
    
  }

  closeMenu(){

  }
  
  setFilters(){
  	console.log(this.filter);
  	this.menuCtrl.close('right');
  }

getStars(x: number, y:number){
	let stars = [];

	for(let i = 0; i < 5; i++){
		if(i<y){
			stars[i] = true;
		}else{
			stars[i] = false;
			}
	}
	return stars;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
    console.log(this.delivery.places);
    this.menuCtrl.enable(false, 'menu-right');
    this.menuCtrl.enable(true, 'deliveryFilter');
  }

}
