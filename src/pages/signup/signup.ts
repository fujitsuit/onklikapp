import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {


  signupForm = {email: '', password: '',name: '', tel:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  goLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  signup(){
    console.log(this.signupForm);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
