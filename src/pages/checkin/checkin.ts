import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
/*
  Generated class for the Checkin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})
export class CheckinPage {
	places: any[];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public api:AuthService) {
	    this.api.booking().subscribe(r => {
	    	console.log(r);
	        this.places = r
	    })
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
	ionViewDidLoad() {
		console.log('ionViewDidLoad CheckinPage');
	}

}
