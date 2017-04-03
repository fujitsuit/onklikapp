import { Component } from '@angular/core';
import { MenuController, NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor( 
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, 
    public menuCtrl: MenuController, 
    private auth: AuthService, 
    private nav: NavController, 
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
        this.menuCtrl.swipeEnable(false);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (!allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.nav.setRoot(HomePage)
        });
      } else {
        this.showError("Ошибка Авторизации");
      }
    },
    error => {
      this.showError(error);
    });
  }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Загрузка...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
