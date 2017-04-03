import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { ModalGalleryPage } from '../modal-gallery/modal-gallery';

import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';
/*
  Generated class for the InnerPlaceGallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inner-place-gallery',
  templateUrl: 'inner-place-gallery.html'
})
export class InnerPlaceGalleryPage {

	gallery: any;
	galleryCurr: any;
	modal: any;
  constructor(private nav: NavController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeGallery();

    this.getGalleryInfo(1, this.gallery)
  	//this.getGalleryInfo(navParams.get('id'), this.gallery)
                         
  }
  showModal(id) {
    let modal = this.modalCtrl.create(GalleryModal, {
	  photos: this.galleryCurr.img,
	  initialSlide: this.galleryCurr.id
	});
	modal.present();
  }
  	



  getGalleryInfo(id, array){
  	for (var i = array.length - 1; i >= 0; i--) {
  		if(array[i].id == id){
  			this.galleryCurr = array[i];
  		}
  	}
  }

  initializeGallery(){
  	this.gallery = [
  	{
  		id:1,
  		img:[
  			  {id: 1, url: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 2, url: '../assets/content/b1.jpg'},
			  {id: 3, url: '../assets/content/b1.jpg'}
  		]
	  
    },
    {
  		id:2,
  		img:[
  				{id: 1, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 2, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 3, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 4, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'}
  		]
	  
    },
    {
  		id:3,
  		img:[
  				{id: 1, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 2, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 3, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'},
			  {id: 4, src: 'http://onklik.kz/upload/Bookingmenu/full/Bookingmenu-image-temp43026-0.jpg'}
  		]
	  
    }
    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerPlaceGalleryPage');
  }

}
