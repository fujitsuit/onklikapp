import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-inner-place-dish',
  templateUrl: 'inner-place-dish.html'
})

export class InnerPlaceDishPage {
  dishCurr: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:AuthService) {
      this.dishCurr = navParams.get('dishId');
  }
}
