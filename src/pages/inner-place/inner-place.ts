import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Content } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { InnerPlaceDishPage } from '../inner-place-dish/inner-place-dish';
import { InnerPlaceGalleryPage } from '../inner-place-gallery/inner-place-gallery';
import { InnerPlaceSharePage } from '../inner-place-share/inner-place-share';
import { PlaceBookPage } from '../place-book/place-book';
import { PlaceBookSubmitPage } from '../place-book-submit/place-book-submit';
import { TourPage } from '../tour/tour';

import { AuthService } from '../../providers/auth-service';
import { CallNumber } from 'ionic-native';
/*
  Generated class for the InnerPlace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inner-place',
  templateUrl: 'inner-place.html'
})
export class InnerPlacePage {

	private newTesti : FormGroup;

	@ViewChild('content') contentq: Content;
	@ViewChild('mySlider') slides: Slides;
	@ViewChild('message') message;
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
	shares: any;
	favourite: any;
	place = {};
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public api:AuthService) {
  	
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
	this.initializePlace(navParams.get('placeId'))
  	this.getPlaceMenuCat( navParams.get('placeId'))
  	this.menuItems = {menuId: null, items: [{label:'', id: null}]};

  	this.initializeShares();
  	this.initializePlaceTesti();


  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  	
  	initializePlace(id) {
    	this.api.place(id).subscribe(r => {
      		this.place = r
    	})
  	}

	getPlaceMenuCat(id){
		this.placeMenuCat = {}
		this.api.menucat(id).subscribe(r => {
		    this.placeMenuCat = r; 
		})
	}


	goInnerPlaceDish(array){
		this.navCtrl.push(InnerPlaceDishPage, {
		  dishId: array
		});
	}

	CallNumber(number){
          CallNumber.callNumber(number, true)
         .then(() => console.log('Launched dialer!'))
         .catch(() => console.log('Error launching dialer'));
  	}

	ngAfterViewInit() {
		this.slides.lockSwipeToPrev(true);
	}



	  onScroll() {
	  	let $segments = document.getElementById('segments');
	  	let $segmentsStart = document.getElementById('segments-start');


	  	let scrollTop = this.contentq.getContentDimensions().scrollTop;
	  		
		let segmentsClasses = $segments.classList;

		if($segmentsStart.offsetTop < scrollTop){
			segmentsClasses.add('sticky');
		}else{
			segmentsClasses.remove('sticky');
		}

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
	goInnerPlaceBook(id){
		this.navCtrl.push(PlaceBookPage, {
	      id: id
	    });
	}
	goInnerPlaceTour(link){
		this.navCtrl.push(TourPage, {
	      link: link
	    });
	}
	goInnerPlaceGallery(id){
	    this.navCtrl.push(InnerPlaceGalleryPage, {
	      id: id
	    });
	  }

	  goInnerPlaceShare(id){
	    this.navCtrl.push(InnerPlaceSharePage, {
	      shareId: id
	    });
	  }


	getCatItems(id, array){
		for (var i = array.length - 1; i >= 0; i--) {
	  		if(array[i].menuCatId == id){
	  			return array[i].items;
	  		}
	  	}
	}
	loadCatItems($event, id){
		if(this.menuItems.menuCatId == id){
			this.menuItems = [];
		}else{
			this.menuItems.menuCatId = id;
			this.menuItems = [];
			this.api.menu(id).subscribe(r => {
			    this.menuItems = r; 
			});
			console.log($event);
		}
		
		console.log('sd')
		// for (var i = this.placeMenuCat.menuCats.length - 1; i >= 0; i--) {
		// 	if(this.placeMenuCat.menuCats[i].menuCatId == id){
		// 		if(this.placeMenuCat.menuCats[i].status == 'active'){
		// 			this.placeMenuCat.menuCats[i].status = '';
		// 			this.menuItems = [];
		// 		}else{
		// 			this.placeMenuCat.menuCats[i].status = 'active';
		// 		}
		// 	}else{
		// 		this.placeMenuCat.menuCats[i].status = '';
		// 	}
		// }
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
	
}
