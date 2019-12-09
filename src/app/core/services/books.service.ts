import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { switchMap, startWith } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from './cookie.service';
import { Store } from '@ngrx/store';


const $ = (s: string): any => document.querySelector(s);
const defParam: string = '';
const orderUrl: string = '';
const getBooksUrl: string = '';

@Injectable()
export class BooksService {

  private myObservable = new Subject<string>();

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private cookie$: CookieService,
  ) {
    this.route.queryParamMap.subscribe( queryParams => this.myObservable.next( queryParams.get('id') ) );
  }

  orderBook(): Observable<any> {
    return this.myObservable.pipe(
        startWith(environment.production? '' : defParam),
        switchMap( param => this.http.post(orderUrl + param, 
          { headers: new HttpHeaders().set('Content-Type', 'application/json') }), )
      );
  }

  addToCart(id: string){
    
  }

  getAllBooks(): Observable<any> {
    return this.http.get(getBooksUrl, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}