import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InnerPlaceShare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inner-place-share',
  templateUrl: 'inner-place-share.html'
})
export class InnerPlaceSharePage {

	shares: any;
	shareCurr: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeShare();
  	
  	this.getShareInfo(navParams.get('shareId'), this.shares)
  }
	getShareInfo(id, array){
  	for (var i = array.length - 1; i >= 0; i--) {
  		if(array[i].id == id){
  			this.shareCurr = array[i];
  		}
  	}
  }
  initializeShare(){
  	this.shares = [
		{id:1, label:'Акция', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
		{id:2, label:'Акция2', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
		{id:3, label:'Акция3', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
		{id:4, label:'Акция4', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'},
		{id:5, label:'Акция5', excerpt: 'Текст Акции Текст Акции Текст Акции Текст Акции',src: '../assets/content/b1.jpg'}
	]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerPlaceSharePage');
  }

}
