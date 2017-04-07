import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';

import { CheckinTablePage } from '../checkin-table/checkin-table';
import { CheckinDishPage } from '../checkin-dish/checkin-dish';


/*
  Generated class for the CheckinInner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkin-inner',
  templateUrl: 'checkin-inner.html'
})
export class CheckinInnerPage {

	place: any;
	placeContent: any;
	profile: any;
	guests: any;

	placeMenu: any;
	placeMenuCat: any;
	menuItems: any;
	placeCatMenuItems: any;

	@ViewChild('mySlider') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.placeContent = "0";
  	this.profile = {
  		open: false,
  		checked: false
  	};
  	this.place= {
			id: 1,
  		title: 'PlaceName',
  		star: 5,
  		src: 'assets/content/checkinLogo.jpg',
  		count: 50,
  		type: 'qr'
  	};


  	if(navParams.get('type')%2 == 1){
  		this.place.type = 'admin';
  	};


  	this.guests = [
  		{img: 'assets/content/ava.jpg', name: 'Name', table: 2,zone: 'Zone 1', status:'notFriend', id: 1},
  		{img: 'assets/content/ava.jpg', name: 'Name 2', table: 3,zone: 'Zone 2', status:'pending', id: 2},
  		{img: 'assets/content/ava.jpg', name: 'Name 2', table: 2,zone: 'Zone 3', status:'refuse', id: 3},
  		{img: 'assets/content/ava.jpg', name: 'Name 2', table: 3,zone: 'Zone 2', status:'friend', id: 4}
  	];


		this.initializePlaceMenuCat();
		this.getPlaceMenuCat( this.place.id , this.placeMenu);
		this.menuItems = {menuId: null, items: [{label:'', id: null}]};
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
	goCheckinDish(id){
		console.log(id);
		this.navCtrl.push(CheckinDishPage, {
		  dishId: id
		});
	}
	loadCatItems($event, id){
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

	goMenu(id){
		this.navCtrl.push(CheckinTablePage , {
	      id: id
	    });
	}
  getSelfie(){
  	console.log('f*ck your selfie')
  }
  getQR(){
  	console.log('And now it should open the camera i guess')
		this.profile.checked = true;
  }
  openProfile(){
  	this.profile.open = true;
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
				{menuCatId: 1,menuCatTitle: 'Горячие блюда'},
				{menuCatId: 2,menuCatTitle: 'Холодные закуски'},
				{menuCatId: 3,menuCatTitle: 'Салаты'},
				{menuCatId: 4,menuCatTitle: 'Гарниры'},
				{menuCatId: 5,menuCatTitle: 'Напитки'}
			]
		},
		{
			placeId: 2,
			placeMenuId: 2,
			menuCats: [
				{menuCatId: 1,menuCatTitle: 'Горячие блюда'},
				{menuCatId: 2,menuCatTitle: 'Холодные закуски'},
				{menuCatId: 3,menuCatTitle: 'Салаты'},
				{menuCatId: 4,menuCatTitle: 'Гарниры'},
				{menuCatId: 5,menuCatTitle: 'Напитки'}
			]
		},
		{
			placeId: 3,
			placeMenuId: 3,
			menuCats: [
				{menuCatId: 1,menuCatTitle: 'Горячие блюда'},
				{menuCatId: 2,menuCatTitle: 'Холодные закуски'},
				{menuCatId: 3,menuCatTitle: 'Салаты'},
				{menuCatId: 4,menuCatTitle: 'Гарниры'},
				{menuCatId: 5,menuCatTitle: 'Напитки'}
			]
		}
		]
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinInnerPage');
  }

}
