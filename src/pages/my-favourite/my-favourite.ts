import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Content } from 'ionic-angular';
import { DeliveryPlacePage } from '../delivery-place/delivery-place';

import { DeliveryCart, DeliveryPlaces } from '../../providers/delivery-cart';
import { InnerPlacePage } from '../inner-place/inner-place';
import { PlaceBookPage } from '../place-book/place-book';
import { AuthService } from '../../providers/auth-service';
import { CallNumber } from 'ionic-native';

/*
  Generated class for the MyFavourite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-favourite',
  templateUrl: 'my-favourite.html'
})
export class MyFavouritePage {
  
  @ViewChild('content') contentq: Content;
	@ViewChild('favSlider') slides: Slides;

  favContent: any;
  places: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: AuthService,public cart: DeliveryCart, public delivery: DeliveryPlaces) {
    this.favContent = "0";
    this.api.booking().subscribe(r => {
        this.places = r;
    })
  }
  goInner(id){
    this.navCtrl.push(InnerPlacePage, {
      placeId: id
    });
  }
  goInnerDelivery(id){
      this.navCtrl.push(DeliveryPlacePage, {
        placeId: id
      });
    
  }
  goInnerPlaceBook(id){
    this.navCtrl.push(PlaceBookPage, {
        id: id
      });
  }
  onSegmentChanged(segmentButton) {
		this.slides.slideTo(segmentButton.value);
	}
 
	onSlideChanged(slider) {
		this.favContent = slider.getActiveIndex()+"";

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
  CallNumber(number){
          CallNumber.callNumber(number, true)
         .then(() => console.log('Launched dialer!'))
         .catch(() => console.log('Error launching dialer'));
  }


  ionViewDidLoad() {
    this.contentq.enableScrollListener();
    console.log('ionViewDidLoad MyFavouritePage');
  }

}
