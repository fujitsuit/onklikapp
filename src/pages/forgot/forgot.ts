import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
/*
  Generated class for the Forgot page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {

  signupForm = {email: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  forgot(){
    console.log(this.signupForm);
  }
  goLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

}
