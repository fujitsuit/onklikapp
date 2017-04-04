import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { MyApp } from './app.component';

import { MyProfilePage } from '../pages/my-profile/my-profile';
import { CheckInStoryPage } from '../pages/check-in-story/check-in-story';
import { BookStoryPage } from '../pages/book-story/book-story';
import { MyOptionsPage } from '../pages/my-options/my-options';
import { MyFavouritePage } from '../pages/my-favourite/my-favourite';
import { OrderStoryPage } from '../pages/order-story/order-story';
import { OrderPlaceStoryPage } from '../pages/order-place-story/order-place-story';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { TourPage } from '../pages/tour/tour';

import { ForgotPage } from '../pages/forgot/forgot';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { InnerPlacePage } from '../pages/inner-place/inner-place';
import { InnerPlaceDishPage } from '../pages/inner-place-dish/inner-place-dish';
import { InnerPlaceGalleryPage } from '../pages/inner-place-gallery/inner-place-gallery';
import { InnerPlaceSharePage } from '../pages/inner-place-share/inner-place-share';
import { PlaceBookPage } from '../pages/place-book/place-book';
import { PlaceBookSubmitPage } from '../pages/place-book-submit/place-book-submit';


import { DeliveryPage } from '../pages/delivery/delivery';
import { DeliveryPlacePage } from '../pages/delivery-place/delivery-place';


import { CheckinPage } from '../pages/checkin/checkin';
import { CheckinInnerPage } from '../pages/checkin-inner/checkin-inner';
import { TabsPage } from '../pages/tabs/tabs';


import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';
import { ModalGalleryPage } from '../pages/modal-gallery/modal-gallery';
import { AuthService } from '../providers/auth-service';
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
    TabsPage,
    CheckinPage,
    CheckinInnerPage,
    DeliveryPage,
    DeliveryPlacePage,
    MyProfilePage,
    CheckInStoryPage,
    BookStoryPage,
    MyOptionsPage,
    MyFavouritePage,
    OrderStoryPage,
    OrderPlaceStoryPage,
    SignupPage,
    ForgotPage,
    MyCartPage,
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
    }, {})
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
    TabsPage,
    CheckinPage,
    CheckinInnerPage,
    DeliveryPage,
    DeliveryPlacePage,
    MyProfilePage,
    CheckInStoryPage,
    BookStoryPage,
    MyOptionsPage,
    MyFavouritePage,
    OrderStoryPage,
    OrderPlaceStoryPage,
    SignupPage,
    ForgotPage,
    MyCartPage,
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
        AuthService
    ]
})
export class AppModule {}
