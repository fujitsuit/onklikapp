import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DeliveryCart{
  status = false;
  placeCart = [];


  cartCount(id){
    console.log('start cartCount');
    if(this.placeCart.length){
      let bool = false;
      let count = 0;
      for(let i=0; this.placeCart.length -1 >= i; i++){
        if(this.placeCart[i].placeId == id ){
          console.log('cartCount '+i);
          bool = true;
          count = this.placeCart[i].items.length;
          break;
        }else{
          console.log('cartCount false');
          bool = false;
        }
      }
      if(bool){
        return count;
      }else{
        return 0;
      }
    }
  }

  hasCart(id){
    console.log('start hasCart');
    if(this.placeCart.length){
      let bool = false;
      for(let i=0; this.placeCart.length -1 >= i; i++){
        if(this.placeCart[i].placeId == id ){
          console.log('hasCart true')
          bool = true;
          break;
        }else{
          console.log('hasCart false')
          bool = false;
          
        }
      }
      return bool;
    }
  }
  InitCartCur(sid){
    console.log('InitCartCur started')
    console.log('PlaceId: '+sid)
    let id = parseInt(sid);

    if(this.placeCart.length){
      console.log('InitCartCur: yes PlaceCart');
      let hasntCart = false;
      let hasCart = false;
      let toReturn = {};
      let hasNotCartId = 0;
      for(let i=0; this.placeCart.length -1 >= i; i++){
        console.log('InitCartCur: looping ' +i)
        if(parseInt(this.placeCart[i].placeId) == id ){
          hasntCart = false;
          hasCart = true;
          toReturn = this.placeCart[i];
          break;
        }else{
          hasCart = false;
          hasntCart = true;
          hasNotCartId = i;
        }
      }
      if(hasntCart){
        this.placeCart.push({
          placeId: id,
          status: false,
          items: []
        });
        console.log('InitCartCur: returned new cart');
        console.log(this.placeCart[hasNotCartId+1]);
        return this.placeCart[hasNotCartId+1];
      }else if(hasCart){
        console.log('InitCartCur: returned new cart');
        console.log(toReturn);
        return toReturn;
      }
      
    }else{
      console.log('InitCartCur: No PlaceCart')
      this.placeCart.push({
        placeId: id,
        status: false,
        items: []
      });
      console.log('InitCartCur: created new cart');
      return this.placeCart[0];
    }
  }
}
@Injectable()
export class DeliveryPlaces{

    places: any[];
    filters = {};
    count:number;
    constructor(public http: Http, public cart: DeliveryCart) {


    this.delivery().subscribe(r => {
        this.places = r;
        this.count = r.length;
        this.setCarts();
    });

		this.deliveryfilter().subscribe(r => {
        this.filters = r;
        console.log(this.filters)
    });  
    console.log(this.filters)
  	}	
    public delivery(){
     return Observable.create(observer => {
          this.http.get('https://onklik.kz/api/delivery') // ...using post request ha ha ha 
                           .map((res:Response) => res.json())
                           .subscribe(r => {
                            observer.next(r);
                            observer.complete();                           
                           }) // ...and calling .json() on the response to return data
                           //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        });
   }    
   public deliveryplace(id){
     return Observable.create(observer => {
          this.http.get('https://onklik.kz/api/deliveryplace?id='+id) // ...using post request ha ha ha 
                           .map((res:Response) => res.json())
                           .subscribe(r => {
                            observer.next(r);
                            observer.complete();                           
                           }) // ...and calling .json() on the response to return data
                           //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        });
   } 
    public deliveryfilter(){
      return Observable.create(observer => {
            this.http.get('https://onklik.kz/api/deliveryfilter') // ...using post request ha ha ha 
                            .map((res:Response) => res.json())
                            .subscribe(r => {
                              observer.next(r);
                              observer.complete();                           
                            })   
                      });
       }  
   public setCarts(){
    for(let i = 0; this.places.length -1 >= i; i++){
      this.places[i].hasCart = this.cart.hasCart(parseInt(this.places[i].id));
      this.places[i].cartCount = this.cart.cartCount(parseInt(this.places[i].id));
      console.log(this.places[i]);
    }
  }
}