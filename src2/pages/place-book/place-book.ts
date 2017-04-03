import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams, Slides } from 'ionic-angular';

import { PlaceBookSubmitPage } from '../place-book-submit/place-book-submit';
import { ModalGalleryPage } from '../modal-gallery/modal-gallery';

import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

/*
  Generated class for the PlaceBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-place-book',
  templateUrl: 'place-book.html'
})
export class PlaceBookPage {
	@ViewChild('bookSlider') slides: Slides;
	book: any;
	bookCurr: any;
	modal: any;
	bookSlides: any;
	curZone: any;

	bookForm: any;

	bookTables: any;

  constructor(private nav: NavController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeBook();

  	

  	//this.getBookInfo(navParams.get('id'), this.book);
  	this.getBookInfo(1, this.book);
  	this.curZone = this.bookCurr.zones[0];
  	this.setSlides();

  	this.setTables(this.curZone.tables);

  	let todayDay = new Date();

  	todayDay.setHours(todayDay.getHours()+7);

  	this.bookForm =  {
  		bookZone: this.bookCurr.zones[0].name,
  		bookTable: '1',
  		bookDay: todayDay.toISOString(),
  		bookTime: todayDay.toISOString(),
  		bookPlace: navParams.get('id')
  	}
  }

  setSlides(){
  	this.bookSlides = [];
  	for (var i = 0 ; i <= this.bookCurr.zones.length - 1; i++) {
  		this.bookSlides.push({ url: this.bookCurr.zones[i].src, id: this.bookCurr.zones[i].id, name: this.bookCurr.zones[i].name}); 
  	}
  }

  setTables(number){
  	this.bookTables = [];
  	for (var i = 0 ; i <= number - 1; i++) {
  		this.bookTables[i] = i+1;
  	}
  }
  goSubmitBook(){
		this.navCtrl.push(PlaceBookSubmitPage, {
      		data: this.bookForm,
      		id: this.bookForm.bookPlace,
    });
  }
  showModal() {

    let modal = this.modalCtrl.create(GalleryModal, {
	  photos: this.bookSlides,
	  initialSlide: this.bookSlides.id
	});
	modal.present();
  }
  onSlideChanged($event){
	for (var i = 0; i <= this.bookCurr.zones.length - 1; i++) {
  		if(i == $event.getActiveIndex()){
  			this.curZone = this.bookCurr.zones[i];
  		}
  	}
  	this.bookForm.bookZone = this.curZone.name;
  }
  setCurZone(zoneId){
  	let slideTo=0;
  	for (var i = this.bookCurr.zones.length - 1; i >= 0; i--) {
  		if(this.bookCurr.zones[i].id == zoneId){
  			this.curZone = this.bookCurr.zones[i];
  			slideTo = i;
  		}
  	}
  	//this.curZone = this.bookCurr.zones[zoneId];

  	console.log(this.curZone);

  	this.setTables(this.curZone.tables);

  	this.slides.slideTo(slideTo);

  };

  getBookInfo(id, array){
  	for (var i = array.length - 1; i >= 0; i--) {
  		if(array[i].id == id){
  			this.bookCurr = array[i];
  		}
  	}
  }

	initializeBook(){
	  	this.book = [
	  	{
	  		id:1,
	  		zones: [
		  		{
		  			id: 1, 
		  			name: 'Общий зал',
		  			src: 'assets/content/book1.png',
		  			tables: 20,
		  			show:true
		  		},
		  		{
		  			id: 2, 
		  			name: 'Зал для некурящих',
		  			src: 'assets/content/book1.png',
		  			tables: 10,
		  			show:true
		  		},
		  		{
		  			id: 3, 
		  			name: 'VIP зал',
		  			src: 'assets/content/book1.png',
		  			tables: 4,
		  			show:true
		  		}
	  		],
		  
	    },
	    {
	  		id:2,
	  		zones: [
		  		{
		  			id: 1, 
		  			name: 'Общий зал',
		  			src: 'assets/content/book1.png',
		  			tables: 20,
		  			show:true
		  		},
		  		{
		  			id: 2, 
		  			name: 'Зал для некурящих',
		  			src: 'assets/content/book1.png',
		  			tables: 10,
		  			show:true
		  		},
		  		{
		  			id: 3, 
		  			name: 'VIP зал',
		  			src: 'assets/content/book1.png',
		  			tables: 4,
		  			show:true
		  		}
	  		],
		  
	    },
	    {
	  		id:3,
	  		zones: [
		  		{
		  			id: 1, 
		  			name: 'Общий зал',
		  			src: 'assets/content/book1.png',
		  			tables: 20,
		  			show:true
		  		},
		  		{
		  			id: 2, 
		  			name: 'Зал для некурящих',
		  			src: 'assets/content/book1.png',
		  			tables: 10,
		  			show:true
		  		},
		  		{
		  			id: 3, 
		  			name: 'VIP зал',
		  			src: 'assets/content/book1.png',
		  			tables: 4,
		  			show:true
		  		}
	  		],
		  
	    }
	    ];
	  }




  ionViewDidLoad() {
  }

}
