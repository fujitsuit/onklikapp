import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html'
})

export class TourPage {
	src: any;
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, public api:AuthService) {
  	this.src = this.sanitizer.bypassSecurityTrustResourceUrl( navParams.get('link'));
  }
}
