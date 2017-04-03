import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { InnerPlacePage } from '../inner-place/inner-place';
import { PlaceBookPage } from '../place-book/place-book';
import { AuthService } from '../../providers/auth-service';
import { CallNumber } from 'ionic-native';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	searchQuery: string = '';
  searchText: string = '';
	places: any[];
  filter: any;
  filters = {};
  count:number;
  
  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams,public api:AuthService) {
    this.api.booking().subscribe(r => {
        this.places = r;
        this.count = r.length;
    })
    this.api.filter().subscribe(r => {
        this.filters = r;
    })  

    this.filter = {
      placeCity: false,
      placeSort: false,
      placeStatus: false,
      placeType: '',
      placeFeat: '',
      placeKitchen: '',
      placeAverage: {
        lower: 1000,
        upper: 25000
      },
    }  
  }

  CallNumber(number){
          CallNumber.callNumber(number, true)
         .then(() => console.log('Launched dialer!'))
         .catch(() => console.log('Error launching dialer'));
  }

  doInfinite(infiniteScroll,count) {
    setTimeout(() => {
        this.api.bookingload(count,this.searchText).subscribe(r => {
            for (let i = 0; i < r.length; i++) {
              this.places.push( r[i] );
            }
            this.count = this.places.length;
        })
      infiniteScroll.complete();
    }, 500);
  }

  goInner(id){
    this.navCtrl.push(InnerPlacePage, {
      placeId: id
    });
  }
  goInnerPlaceBook(id){
    this.navCtrl.push(PlaceBookPage, {
        id: id
      });
  }
  hideTabbar(){

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
    console.log('ionViewDidLoad HomePage');
  }

  closeMenu(){

  }

  setFilters(){
    this.api.bookingfilter(this.filter).subscribe(r => {
       this.places = r;
    });
    this.menuCtrl.close('right');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    this.searchText = val;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
          this.api.bookingloadbytext(val).subscribe(r => {
          this.places = r;
          this.count = r.length;
        })
    }else{
          this.api.booking().subscribe(r => {
          this.places = r;
          this.count = r.length;
     })
    }
  }

}
