import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import querystring from 'querystring'

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
 	constructor(public http: Http) {
    	
  	}	

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
      	let body = querystring.stringify({
      		'email': credentials.email,
      		'password': credentials.password
      	})
      	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post('https://onklik.kz/api/login', body, options) // ...using post request
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                           const access = (r == 1)
                          this.currentUser = new User('Simon', 'saimon@devdactic.com');
                          observer.next(access);
                          observer.complete();                           
                         }) // ...and calling .json() on the response to return data
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      });
    }
  }
 
 public booking(){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/booking') // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         }) // ...and calling .json() on the response to return data
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      });
 } 
 public bookingload(count,searchText){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/bookingload?count='+count+'&searchText='+searchText) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         }) // ...and calling .json() on the response to return data
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      });
 }

 public place(id){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/place?id=' + id) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         }) // ...and calling .json() on the response to return data
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      });
 } 

 public menucat(id){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/menucat?id=' + id) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         })   
                   });
       } 
  public menu(id){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/menu?id=' + id) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         })   
                   });
       }  
  public bookingloadbytext(text){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/bookingbytext?text=' + text) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         })   
                   });
       }  
   public filter(){
   return Observable.create(observer => {
        this.http.get('https://onklik.kz/api/filters') // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         })   
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

  public bookingfilter(filters){
   return Observable.create(observer => {
        this.http.post('https://onklik.kz/api/bookingfilter',JSON.stringify(filters)) // ...using post request ha ha ha 
                         .map((res:Response) => res.json())
                         .subscribe(r => {
                          observer.next(r);
                          observer.complete();                           
                         })   
                   });
       }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
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

}	