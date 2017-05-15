import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Content } from 'ionic-angular';

import { InnerPlacePage } from '../inner-place/inner-place';

import {History} from '../../providers/history';

/*
  Generated class for the MyStory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-story',
  templateUrl: 'my-story.html'
})
export class MyStoryPage {


  @ViewChild('content') contentq: Content;
	@ViewChild('historySlider') slides: Slides;

  historyContent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public history: History) {
    this.historyContent="0";
  }



  goInnerPlace(id){
    this.navCtrl.push(InnerPlacePage,{
      placeId: id
    })
  }
  openDelivery(id){
    console.log('Open Delivery '+ id)

    for (var i = 0; i < this.history.delivery.length; i++) {
      var element = this.history.delivery[i];
      if ( parseInt(id) == element.id ) {
        element.opened = true;
      }else{
        element.opened = false;
      }
    }

  }
  closeDelivery(id){
    console.log('Close Delivery '+ id);
    for (var i = 0; i < this.history.delivery.length; i++) {
      var element = this.history.delivery[i];
      if ( parseInt(id) == element.id ) {
        element.opened = false;
      }
    }

  }
  openCheckin(id){
    console.log('Open Checkin '+ id);
    for (var i = 0; i < this.history.checkin.length; i++) {
      var element = this.history.checkin[i];
      if ( parseInt(id) == element.id ) {
        element.opened = true;
      }else{
        element.opened = false;
      }
    }
  }
  closeCheckin(id){
    console.log('Close Checkin '+ id);
    for (var i = 0; i < this.history.checkin.length; i++) {
      var element = this.history.checkin[i];
      if ( parseInt(id) == element.id ) {
        element.opened = false;
      }
    }
  }
  removePlace(id){
    console.log('Remove Place '+id);
    for (var i = 0; i < this.history.places.length; i++) {
      var element = this.history.places[i];
      if ( parseInt(id) == element.id ) {
        this.history.places.splice(i, 1);
      }
    }
  }
  removeDelivery(id){
    console.log('Remove Place '+id);
    for (var i = 0; i < this.history.delivery.length; i++) {
      var element = this.history.delivery[i];
      if ( parseInt(id) == element.id ) {
        this.history.delivery.splice(i, 1);
      }
    }
  }
  removeCheckin(id){
    console.log('Remove Checkin '+id);
    for (var i = 0; i < this.history.checkin.length; i++) {
      var element = this.history.checkin[i];
      if ( parseInt(id) == element.id ) {
        this.history.checkin.splice(i, 1);
      }
    }
  }




  onSegmentChanged(segmentButton) {
		this.slides.slideTo(segmentButton.value);
	}
 
	onSlideChanged(slider) {
		this.historyContent = slider.getActiveIndex()+"";

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



  ionViewDidLoad() {
    this.contentq.enableScrollListener();
    console.log('ionViewDidLoad MyStoryPage');
  }

}
