import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeliverySubmitPage } from '../delivery-submit/delivery-submit';

import { DeliveryCart } from '../../providers/delivery-cart';

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

  items: any;
  final: Number;
  cartCur: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: DeliveryCart) {
    this.final = 0;
    this.InitCartCur()
    this.initFinal();
  }
  InitCartCur(){
    for(let i=0; this.cart.placeCart.length -1 >= i; i++){
      if(this.cart.placeCart[i].placeId == this.navParams.get('placeId') ){
        this.items = this.cart.placeCart[i].items;
        this.cartCur = this.cart.placeCart[i];
      }
    }
  }
  quantIncr(id){
    for(let i=0; this.items.length-1 >= i; i++){
      if(this.items[i].id == id){
        this.items[i].quant = this.items[i].quant+1;
        this.items[i].amountss = this.items[i].quant*this.items[i].price + this.items[i].additPrice
      }
    }
    this.initFinal();
   }
  quantDicr(id){
    for(let i=0; this.items.length-1 >= i; i++){
      if(this.items[i].quant > 1){
        if(this.items[i].id == id){
          this.items[i].quant = this.items[i].quant-1;
          this.items[i].amountss = this.items[i].quant*this.items[i].price + this.items[i].additPrice
        }
      }
    }
    this.initFinal();
  }
  goSubmit(){
    this.navCtrl.push(DeliverySubmitPage, {
      
    });
  }
  remove(id){
    if(this.items.length){
      for(let i=0; this.items.length-1 >= i; i++){ 
        if(this.items[i].id == id){
          this.items.splice(i, 1);
        }
      }
      
      this.initFinal();
      this.cartCur.count = this.cartCur.count - 1;

      if(this.items.length == 0){
        console.log(this.items.length);
        console.log(this.cartCur.status);
        this.cartCur.status = false;
        this.navCtrl.pop(); 
      }
    }else{
      console.log('asdasd');
      this.cartCur.status = false;
      this.navCtrl.pop(); 
    }
    
  }
  initFinal(){
    this.final = 0;
    for(let i=0; this.items.length-1 >= i; i++){
      this.final += this.items[i].amountss;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinCartPage');
  }

}
