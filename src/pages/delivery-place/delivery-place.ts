import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Content } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DeliveryDishPage } from '../delivery-dish/delivery-dish';
import { DeliveryCartPage } from '../delivery-cart/delivery-cart';
import { InnerPlaceSharePage } from '../inner-place-share/inner-place-share';

import { AuthService } from '../../providers/auth-service';
import { DeliveryCart } from '../../providers/delivery-cart';
/*
  Generated class for the InnerPlace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inner-delivery',
  templateUrl: 'delivery-place.html'
})
export class DeliveryPlacePage {

	private newTesti : FormGroup;

	@ViewChild('content') contentq: Content;
	@ViewChild('mySlider') slides: Slides;
	@ViewChild('message') message;
	selectedPlace: any;
	selectedPlaceDesc: any;
	places: any;
	desc: any;
	placeContent: any;
	///////////
	///////////
	placeMenu: any;
	placeMenuCat: any;
	menuItems: any;
	placeCatMenuItems: any;
	testi: any;

	cartCur: any;

	shares: any;
	favourite: any;
	deliveryplace = {};
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public api:AuthService, public cart: DeliveryCart) {
  	this.placeContent = "0";
  	this.favourite = false;
  	this.newTesti = this.formBuilder.group({
  		text: [''],
  		date: [''],
  		reply: [''],
  		replyId: [''],
  		author: [''],
  		admin: [''],
  		avatar: 'assets/avatar.jpg',

    });

	this.initializeDeliveryplace(navParams.get('placeId'))
  	this.initializeShares();
  	this.initializePlaceMenuCat();
  	this.initializePlaceTesti();

  	this.menuItems = {menuId: null, items: [{label:'', id: null}]};

  	this.getPlaceMenuCat( 1 , this.placeMenu)


		this.InitCartCur();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
    initializeDeliveryplace(id) {
    	this.api.deliveryplace(id).subscribe(r => {
      		this.deliveryplace = r
    	})
  	}


  ngAfterViewInit() {
    this.slides.lockSwipeToPrev(true);
  }


  onScroll() {
  	let $segments = document.getElementById('segments');
  	let $segmentsStart = document.getElementById('segments-start');
    console.log('dd');

  	let scrollTop = this.contentq.getContentDimensions().scrollTop;
  		
	let segmentsClasses = $segments.classList;

	if($segmentsStart.offsetTop < scrollTop){
		segmentsClasses.add('sticky');
	}else{
		segmentsClasses.remove('sticky');
	}

  }

	InitCartCur(){
    for(let i=0; this.cart.placeCart.length -1 >= i; i++){
      if(this.cart.placeCart[i].placeId == this.navParams.get('placeId') ){
        this.cartCur = this.cart.placeCart[i];
      }
    }
		console.log(this.cart.status)
  }


  onSegmentChanged(segmentButton) {
    this.slides.slideTo(segmentButton.value);
  }
 
  onSlideChanged(slider) {
    this.placeContent = slider.getActiveIndex()+"";

    if(slider.isBeginning()){
    	slider.lockSwipeToPrev(true);
    }else{
		slider.lockSwipeToPrev(false);
    }
    if(slider.isEnd()){
    	slider.lockSwipeToNext(true);
    }else{
		slider.lockSwipeToNext(false);
    }
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
  isArrayO(array){
  	return Array.isArray(array);
  }
  isStringO(string){
  	return typeof string == "string";
  }
  ionViewDidLoad() {
    this.contentq.enableScrollListener();
  }
  isScrolling() {
  	console.log('asdasd');
  }
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
	setFav(id){
		console.log(id);
		this.favourite ? this.favourite = false : this.favourite = true
	}
	addTesti(){
		this.newTesti.value.date = new Date();
		this.newTesti.value.author = 'Author';

		console.log(this.newTesti.value);
		console.log(this.testi);
		this.testi.unshift(this.newTesti.value);
	}
	replyTesti(reply, replyId){
		console.log(reply);
		console.log(replyId);
		this.newTesti.value.reply = reply;
		this.newTesti.value.replyId = replyId;
		this.message.setFocus();
	}
	initializePlaceTesti(){
		this.testi = [
			{id:1, author: 'Author', avatar: 'assets/avatar.jpg', text: 'Комментарий для заведения',date:'Tue Mar 14 2017 13:26:32 GMT+0600 (Центральная Азия (зима))',reply:'',admin:false},
			{id:2, author: 'Author', avatar: 'assets/avatar.jpg', text: 'Комментарий для заведения',date:'Tue Mar 14 2017 13:26:32 GMT+0600 (Центральная Азия (зима))',reply:'Author',admin:false},
			{id:3, author: 'Admin', avatar: 'assets/avatar.jpg', text: 'Комментарий для заведения',date:'Tue Mar 14 2017 13:26:32 GMT+0600 (Центральная Азия (зима))',reply:'',admin:true},
			{id:4, author: 'Author', avatar: 'assets/avatar.jpg', text: 'Комментарий для заведения',date:'Tue Mar 14 2017 13:26:32 GMT+0600 (Центральная Азия (зима))',reply:'',admin:false}
		]
	}

	  goInnerPlaceDish(id){
	    this.navCtrl.push(DeliveryDishPage, {
	      dishId: id,
				placeId: this.navParams.get('placeId'),
	    });
	  }
	  goInnerPlaceShare(id){
	    this.navCtrl.push(InnerPlaceSharePage, {
	      shareId: id
	    });
	  }
		goCart(){
			this.navCtrl.push(DeliveryCartPage, {
				placeId: this.navParams.get('placeId')
			});
		}
	getPlaceMenuCat(id, array){
		for (var i = array.length - 1; i >= 0; i--) {
	  		if(array[i].placeId == id){
	  			this.placeMenuCat = array[i];
	  		}
	  	}
	}
	getCatItems(id, array){
		for (var i = array.length - 1; i >= 0; i--) {
	  		if(array[i].menuCatId == id){
	  			return array[i].items;
	  		}
	  	}
	}
	loadCatItems(id){
		this.menuItems.menuCatId = id;
		this.menuItems.items = this.getCatItems(id, this.placeCatMenuItems);

		for (var i = this.placeMenuCat.menuCats.length - 1; i >= 0; i--) {
			if(this.placeMenuCat.menuCats[i].menuCatId == id){
				if(this.placeMenuCat.menuCats[i].status == 'active'){
					this.placeMenuCat.menuCats[i].status = '';
					this.menuItems = [];
				}else{
					this.placeMenuCat.menuCats[i].status = 'active';
				}
			}else{
				this.placeMenuCat.menuCats[i].status = '';
			}
		}
	}
	initializeShares(){
		this.shares = [
			{id:1, label:'Акция', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
			{id:2, label:'Акция2', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
			{id:3, label:'Акция3', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
			{id:4, label:'Акция4', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
			{id:5, label:'Акция5', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'}
		]
	};
	initializePlaceMenuCat(){
		this.placeCatMenuItems = [
			{
				menuCatId: 1,
				items: [
					{label:'ssss', id: 1, src: '../assets/content/b1.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'dddd', id: 2, src: '../assets/content/b1.jpg', price: 2740, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'cccc', id: 3, src: '../assets/content/b1.jpg', price: 2740, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'zzzz', id: 4, src: '../assets/content/b1.jpg', price: 2720, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'}
				]
			},
			{
				menuCatId: 2,
				items: [
					{label:'ssss2', id: 11, src: '../assets/content/b1.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'dddd2', id: 12, src: '../assets/content/b1.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'cccc2', id: 13, src: '../assets/content/b1.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'},
					{label:'zzzz2', id: 14, src: '../assets/content/b1.jpg', price: 2700, count: false, excerpt: 'Салат со свеклой, руколой и козьим сыром'}
				]
			},
			{
				menuCatId: 3,
				items: [
					{label:'ssss3', id: 31},
					{label:'dddd3', id: 32},
					{label:'cccc3', id: 33},
					{label:'zzzz3', id: 34}
				]
			},
			{
				menuCatId: 4,
				items: [
					{label:'ssss4', id: 41},
					{label:'dddd4', id: 42},
					{label:'cccc4', id: 43},
					{label:'zzzz4', id: 44}
				]
			},
			{
				menuCatId: 5,
				items: [
					{label:'sss5', id: 51},
					{label:'ddd5', id: 52},
					{label:'ccc5', id: 53},
					{label:'zzz5', id: 54}
				]
			},
		]
		this.placeMenu = [
		{
			placeId: 1,
			placeMenuId: 1,
			menuCats: [
				{menuCatId: '1',menuCatTitle: 'Горячие блюда'},
				{menuCatId: '2',menuCatTitle: 'Холодные закуски'},
				{menuCatId: '3',menuCatTitle: 'Салаты'},
				{menuCatId: '4',menuCatTitle: 'Гарниры'},
				{menuCatId: '5',menuCatTitle: 'Напитки'}
			]
		},
		{
			placeId: 2,
			placeMenuId: 2,
			menuCats: [
				{menuCatId: '1',menuCatTitle: 'Горячие блюда'},
				{menuCatId: '2',menuCatTitle: 'Холодные закуски'},
				{menuCatId: '3',menuCatTitle: 'Салаты'},
				{menuCatId: '4',menuCatTitle: 'Гарниры'},
				{menuCatId: '5',menuCatTitle: 'Напитки'}
			]
		},
		{
			placeId: 3,
			placeMenuId: 3,
			menuCats: [
				{menuCatId: '1',menuCatTitle: 'Горячие блюда'},
				{menuCatId: '2',menuCatTitle: 'Холодные закуски'},
				{menuCatId: '3',menuCatTitle: 'Салаты'},
				{menuCatId: '4',menuCatTitle: 'Гарниры'},
				{menuCatId: '5',menuCatTitle: 'Напитки'}
			]
		}
		]
	}
}
