import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeliveryCart, DeliveryPlaces } from '../../providers/delivery-cart';

/*
  Generated class for the DeliveryDish page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delivery-dish',
  templateUrl: 'delivery-dish.html'
})
export class DeliveryDishPage {

  dish: any;
	dishCurr: any;
	dishType: any;
  cartCur: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cart: DeliveryCart, public delivery: DeliveryPlaces) {
  	this.initializeDish();
  	
  	this.dishCurr = {
      placeId: parseInt(navParams.get('placeId')),
      label:'ssss', 
      id: 1, 
      src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg', 
      price: 2700, 
      count: false, 
      excerpt: 'Салат со свеклой, руколой и козьим сыром',
      prefs: [
        {id:1, title: 'Острый'},
        {id:2, title: 'Неострый'},
      ],
      addits: [
        {id:1, title:'С сыром', price: 100},
        {id:2, title:'С сыром', price: 500},
        {id:3, title:'С сыром', price: 200}
      ]
    };
    this.dishType = {
      placeId: parseInt(navParams.get('placeId')),
      name: this.dishCurr.label,
      dishid: this.dishCurr.id,
      src: this.dishCurr.src,
      price: this.dishCurr.price,
      pref: '',
      addit: '',
      quant: 1,
      additData: [],
      additPrice: 0,
      amountss: this.dishCurr.price
    };
    // this.InitCartCur();
    
  }
  //  InitCartCur(){
  //   for(let i=0; this.cart.placeCart.length -1 >= i; i++){
  //     if(this.cart.placeCart[i].placeId == this.dishCurr.placeId ){
  //       this.cartCur = this.cart.placeCart[i];
  //       this.cartCur.status = false;
  //     }
  //   }
  // }
  quantIncr(){
    this.dishType.quant = this.dishType.quant+1;
    this.dishType.amountss = this.dishCurr.price*this.dishType.quant+ this.dishType.additPrice;
  }
  quantDicr(){
    if(this.dishType.quant > 1){
      this.dishType.quant = this.dishType.quant-1;
      this.dishType.amountss = this.dishCurr.price*this.dishType.quant+ this.dishType.additPrice;
    }
  }
  refresh(){
    this.dishType.additPrice = 0;
    for(let i = 0; i <= this.dishCurr.addits.length-1; i++){
      for(let x = 0; x<= this.dishType.addit.length; x++){
        if( this.dishCurr.addits[i].id == this.dishType.addit[x] ){
          this.dishType.additPrice += this.dishCurr.addits[i].price;
          let obj = {
            price: this.dishCurr.addits[i].price,
            id: this.dishCurr.addits[i].id,
            title: this.dishCurr.addits[i].title
          }
          this.dishType.additData.push(obj);
        }
      }
    }
    console.log(this.dishType.additPrice);
    this.dishType.amountss = this.dishCurr.price*this.dishType.quant+ this.dishType.additPrice;
  }
  addToCart(){
    console.log('btn click');
    if(this.cart.placeCart.length){
      console.log('YesItems')
      let notExisted = false;
      for(let i=0; this.cart.placeCart.length -1 >= i; i++){
        console.log('looped' + i);

        if(this.cart.placeCart[i].placeId == this.dishCurr.placeId ){

          console.log('Existed '+ i);
          this.cart.placeCart[i].status = true;
          this.cart.placeCart[i].items.push(this.dishType);
          notExisted = false;
        }else{
          console.log('notExisted'+ this.dishCurr.placeId);

          notExisted = true;

          
        }
      }
      if(notExisted){
        this.cart.placeCart.push(
          {
            placeId: this.dishCurr.placeId,
            status: true,
            items: [this.dishType]
          }
        )
      }
    }else{
      console.log('NoItems')
      this.cart.placeCart.push({
        placeId: this.dishType.placeId,
        status: true,
        items: [this.dishType]
      });
    }
    this.delivery.setCarts();
    this.navCtrl.pop();
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
