import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
/*
  Generated class for the Tour page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html'
})
export class TourPage {


	src: any;
	desc: any;
	selectedPlaceDesc: any;
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
  	this.initializePlaceDesc();

    this.getPlaceDesc(1 , this.desc);
  	//this.getPlaceDesc( navParams.get('id') , this.desc);
  	this.sanitizeUrl(this.selectedPlaceDesc.tourUrl);


  	console.log(this.src);
  	console.log(this.selectedPlaceDesc.tourUrl);
  }
	sanitizeUrl(url) {
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
  getPlaceDesc(id, array){
  	for (var i = array.length - 1; i >= 0; i--) {
  		if(array[i].placeId == id){
  			this.selectedPlaceDesc = array[i];
  		}
  	}
  }
  initializePlaceDesc() {
  	this.desc = [
  	{
  		placeId:1,
  		tourUrl: 'http://3d.onklik.kz/upload/Booking/17/',
    	char: [
    		{label: 'кухня', value: 'Японская / Итальянская', iconName: 'clock'},
	    	{label: 'средний чек', value: '5000 - 10000 тг', iconName: 'clock'},
	    	{label: 'время работы', value: '12:00 - 02:00', iconName: 'clock'},
	    	{label: 'выходной день', value: 'без выходных', iconName: 'clock'},
	    	{label: 'адрес', value: 'Керей-Жанибек ханов 22', iconName: 'clock'},
	    	{label: 'телефон', value: ['+7(717) 222-2202','+7(777)071-1117'], iconName: 'clock'},
	    	{label: 'сайт', value: 'carretarestobar.kz', iconName: 'clock'},
	    	{label: 'музыка', value: 'DJ / Живая / Фоновая', iconName: 'clock'},
	    	{label: 'всего мест', value: '100 чел.', iconName: 'clock'},
    	],
    	text: '<p>Restobar "Carreta" - это новый ресторан европейской и японской кухни. Здесь Вы имеете возможность насладиться неповторимыми блюдами от признанных шеф-поваров, отдохнуть с друзьями, зарядиться позитивной энергией во время пения караоке.</p><p>Ресторан, бар, кальянная и караоке Астана собрала в одном месте с красивым и сказочным названием "Carreta". Приходите и "прокатитесь" вместе с веселой компанией. Вы можете провести здесь тихий, романтичный вечер, а можете зажечь на своей собственной вечеринке или же провести банкет. Restobar "Carreta" ждет Вас!</p>'
    },
    {
  		placeId:2,
  		tourUrl: 'http://3d.onklik.kz/upload/Booking/17/',
    	char: [
    		{label: 'кухня', value: 'Япон4141ская / Итальянская'},
	    	{label: 'средний чек', value: '500410 - 10000 тг'},
	    	{label: 'время работы', value: '12:1400 - 02:00'},
	    	{label: 'выходной день', value: 'без выходных'},
	    	{label: 'адрес', value: 'Керей-Жанибек ханов 22'},
	    	{label: 'телефон', value: ['+7(717) 222-2202','+7(777)071-1117']},
	    	{label: 'сайт', value: 'carretarestobar.kz'},
	    	{label: 'музыка', value: 'DJ / Живая / Фоновая'},
	    	{label: 'всего мест', value: '100 чел.'},
    	],
    	text: '<p>Ресторан, бар, кальянная и караоке Астана собрала в одном месте с красивым и сказочным названием "Carreta". Приходите и "прокатитесь" вместе с веселой компанией. Вы можете провести здесь тихий, романтичный вечер, а можете зажечь на своей собственной вечеринке или же провести банкет. Restobar "Carreta" ждет Вас!</p>'
    },
    {
  		placeId:3,
  		tourUrl: 'http://3d.onklik.kz/upload/Booking/17/',
    	char: [
    		{label: 'кухня', value: 'Японская / Итальянская'},
	    	{label: 'средний чек', value: '5000 - 10000 тг'},
	    	{label: 'время работы', value: '12:00 - 02:00'},
	    	{label: 'выходной день', value: 'без выходных'},
	    	{label: 'адрес', value: 'Керей-Жанибек ханов 22'},
	    	{label: 'телефон', value: ['+7(717) 222-2202','+7(777)071-1117']},
	    	{label: 'сайт', value: 'carretarestobar.kz'},
	    	{label: 'музыка', value: 'DJ / Живая / Фоновая'},
	    	{label: 'всего мест', value: '100 чел.'},
    	],
    	text: '<p>Restobar "Carreta" - это новый ресторан европейской и японской кухни. Здесь Вы имеете возможность насладиться неповторимыми блюдами от признанных шеф-поваров, отдохнуть с друзьями, зарядиться позитивной энергией во время пения караоке.</p><p>Ресторан, бар, кальянная и караоке Астана собрала в одном месте с красивым и сказочным названием "Carreta". Приходите и "прокатитесь" вместе с веселой компанией. Вы можете провести здесь тихий, романтичный вечер, а можете зажечь на своей собственной вечеринке или же провести банкет. Restobar "Carreta" ждет Вас!</p>'
    },
    {
  		placeId:4,
  		tourUrl: 'http://3d.onklik.kz/upload/Booking/17/',
    	char: [
    		{label: 'кухня', value: 'Японская / Итальянская'},
	    	{label: 'средний чек', value: '5000 - 10000 тг'},
	    	{label: 'время работы', value: '12:00 - 02:00'},
	    	{label: 'выходной день', value: 'без выходных'},
	    	{label: 'адрес', value: 'Керей-Жанибек ханов 22'},
	    	{label: 'телефон', value: ['+7(717) 222-2202','+7(777)071-1117']},
	    	{label: 'сайт', value: 'carretarestobar.kz'},
	    	{label: 'музыка', value: 'DJ / Живая / Фоновая'},
	    	{label: 'всего мест', value: '100 чел.'},
    	],
    	text: '<p>Restobar "Carreta" - это новый ресторан европейской и японской кухни. Здесь Вы имеете возможность насладиться неповторимыми блюдами от признанных шеф-поваров, отдохнуть с друзьями, зарядиться позитивной энергией во время пения караоке.</p><p>Ресторан, бар, кальянная и караоке Астана собрала в одном месте с красивым и сказочным названием "Carreta". Приходите и "прокатитесь" вместе с веселой компанией. Вы можете провести здесь тихий, романтичный вечер, а можете зажечь на своей собственной вечеринке или же провести банкет. Restobar "Carreta" ждет Вас!</p>'
    }
    ]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }

}
