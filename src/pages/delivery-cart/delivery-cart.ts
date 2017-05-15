import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeliverySubmitPage } from '../delivery-submit/delivery-submit';

import { DeliveryCart, DeliveryPlaces } from '../../providers/delivery-cart';

/*
  Generated class for the DeliveryCart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delivery-cart',
  templateUrl: 'delivery-cart.html'
})
export class DeliveryCartPage {

  final: Number;
  cartCur: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: DeliveryCart,public delivery: DeliveryPlaces) {
    this.final = 0;
    this.cartCur = this.cart.InitCartCur(this.navParams.get('placeId'));
    this.initFinal();
  }

  quantIncr(id){
    for(let i=0; this.cartCur.items.length-1 >= i; i++){
      if(this.cartCur.items[i].id == id){
        this.cartCur.items[i].quant = this.cartCur.items[i].quant+1;
        this.cartCur.items[i].amountss = this.cartCur.items[i].quant*this.cartCur.items[i].price + this.cartCur.items[i].additPrice
      }
    }
    this.initFinal();
   }
  quantDicr(id){
    for(let i=0; this.cartCur.items.length-1 >= i; i++){
      if(this.cartCur.items[i].quant > 1){
        if(this.cartCur.items[i].id == id){
          this.cartCur.items[i].quant = this.cartCur.items[i].quant-1;
          this.cartCur.items[i].amountss = this.cartCur.items[i].quant*this.cartCur.items[i].price + this.cartCur.items[i].additPrice
        }
      }
    }
    this.initFinal();
  }
  goSubmit(){
    this.navCtrl.push(DeliverySubmitPage, {
      placeId: parseInt(this.navParams.get('placeId'))
    });
  }
  remove(id){
    if(this.cartCur.items.length){
      for(let i=0; this.cartCur.items.length-1 >= i; i++){ 
        if(this.cartCur.items[i].id == id){
          this.cartCur.items.splice(i, 1);
        }
      }
      
      this.initFinal();
      this.cartCur.count = this.cartCur.count - 1;

      if(this.cartCur.items.length == 0){
        console.log(this.cartCur.items.length);
        console.log(this.cartCur.status);
        this.cartCur.status = false;
        this.navCtrl.pop(); 
      }
    }else{
      console.log('asdasd');
      this.cartCur.status = false;
      this.navCtrl.pop(); 
    }
    this.delivery.setCarts();
  }
  initFinal(){
    this.final = 0;
    for(let i=0; this.cartCur.items.length-1 >= i; i++){
      this.final += this.cartCur.items[i].amountss;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinCartPage');
  }

}
