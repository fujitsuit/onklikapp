import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalGallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-gallery',
  templateUrl: 'modal-gallery.html'
})
export class ModalGalleryPage {

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {}
	dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalGalleryPage');
  }

}
