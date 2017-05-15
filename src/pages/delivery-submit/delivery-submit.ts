import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{ DeliveryCart } from '../../providers/delivery-cart'

/*
  Generated class for the DeliverySubmit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delivery-submit',
  templateUrl: 'delivery-submit.html'
})
export class DeliverySubmitPage {


  deliveryForm: any;
  cartCur: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: DeliveryCart) {
    this.deliveryForm = {
      tel: '',
      address: '',
      street: '',
      house: '',
      fast: true,
      atTime: false,
      time: new Date().toISOString(),
      message: ''
    }
    this.getCartCur();
  }
  getCartCur(){
    for(let i=0; this.cart.placeCart.length -1 >= i; i++){
      if(this.cart.placeCart[i].placeId ==  this.navParams.get('placeId') ){
        this.cartCur = this.cart.placeCart[i];
      }
    }
  }
  checkTime(){
    this.deliveryForm.atTime ? this.deliveryForm.fast = false : this.deliveryForm.fast = true;
    this.deliveryForm.fast ? this.deliveryForm.atTime = false : this.deliveryForm.atTime = true;


    console.log(this.deliveryForm.atTime)
    console.log(this.deliveryForm.fast)
  }
  bookDelivery(){
    console.log(this.deliveryForm);
    console.log(this.cartCur.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliverySubmitPage');
  }

}
