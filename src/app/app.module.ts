import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

// User Pages
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { MyStoryPage } from '../pages/my-story/my-story';

// Auth pages
import { ForgotPage } from '../pages/forgot/forgot';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

// Places
import { HomePage } from '../pages/home/home';
import { InnerPlacePage } from '../pages/inner-place/inner-place';
import { InnerPlaceDishPage } from '../pages/inner-place-dish/inner-place-dish';
import { InnerPlaceGalleryPage } from '../pages/inner-place-gallery/inner-place-gallery';
import { InnerPlaceSharePage } from '../pages/inner-place-share/inner-place-share';
import { PlaceBookPage } from '../pages/place-book/place-book';
import { PlaceBookSubmitPage } from '../pages/place-book-submit/place-book-submit';
import { TourPage } from '../pages/tour/tour';

// Delivery
import { DeliveryPage } from '../pages/delivery/delivery';
import { DeliveryPlacePage } from '../pages/delivery-place/delivery-place';
import { DeliveryDishPage } from '../pages/delivery-dish/delivery-dish';
import { DeliveryCartPage } from '../pages/delivery-cart/delivery-cart';
import { DeliverySubmitPage } from '../pages/delivery-submit/delivery-submit';

//Checkin
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckinInnerPage } from '../pages/checkin-inner/checkin-inner';
import { CheckinTablePage } from '../pages/checkin-table/checkin-table';
import { CheckinCartPage } from '../pages/checkin-cart/checkin-cart';
import { CheckinDishPage } from '../pages/checkin-dish/checkin-dish';

//Plugins
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';
import { ModalGalleryPage } from '../pages/modal-gallery/modal-gallery';

//Providers
import { AuthService } from '../providers/auth-service';
import { Cart } from '../providers/checkin-cart';
import { DeliveryCart } from '../providers/delivery-cart';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InnerPlacePage,
    InnerPlaceDishPage,
    InnerPlaceGalleryPage,
    InnerPlaceSharePage,
    ModalGalleryPage,
    PlaceBookPage,
    PlaceBookSubmitPage,
    TourPage,
    CheckinPage,
    CheckinInnerPage,
    CheckinDishPage,
    CheckinCartPage,
    CheckinTablePage,
    DeliveryPage,
    DeliveryPlacePage,
    DeliveryDishPage,
    DeliveryCartPage,
    DeliverySubmitPage,
    MyProfilePage,
    MyOptionsPage,
    MyFavouritePage,
    MyStoryPage,
    SignupPage,
    ForgotPage,
    LoginPage,
    GalleryModal,
    ZoomableImage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
       tabsHideOnSubPages: true,
       platforms: {
        ios: {
          backButtonText: 'Назад',
        }
      }
    }, {}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InnerPlacePage,
    InnerPlaceDishPage,
    InnerPlaceGalleryPage,
    InnerPlaceSharePage,
    ModalGalleryPage,
    PlaceBookPage,
    PlaceBookSubmitPage,
    TourPage,
    CheckinPage,
    CheckinInnerPage,
    CheckinCartPage,
    CheckinDishPage,
    CheckinTablePage,
    DeliveryPage,
    DeliveryPlacePage,
    DeliveryDishPage,
    DeliveryCartPage,
    DeliverySubmitPage,
    MyProfilePage,
    MyOptionsPage,
    MyFavouritePage,
    MyStoryPage,
    SignupPage,
    ForgotPage,
    LoginPage,
    GalleryModal,
    ZoomableImage
  ],
//   providers: [{
//     provide: ErrorHandler, 
//     useClass: IonicErrorHandler
// }]
    providers: [
        { provide: LOCALE_ID, useValue: "ru-RU" },
        AuthService,
        Cart,
        DeliveryCart
    ]
})
export class AppModule {}
