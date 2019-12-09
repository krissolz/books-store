import { Injectable } from '@angular/core';

/* cookie servise useing:

  installing service

  import { CookieService } '../path to cookie service/cookie.service';

  ...

  export class AnyClassName {
    constructor(private cookie$: CookieService){}

    ...
  }

  get cookie value:

  this.cookie$.get(/'name'/);

  setting a cookie:
  
  this.cookie$.set(/'name'/, /'value'/, /{ // configuration object
        expires: /daysofexpire/,
        path: '/',
        domain: /'.domain.com'/
    }/);

*/

interface Options {
  expires: number,
  path: string,
  domain: string,
  secure?: boolean
}

const d = document;

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  delete(name: string): void {
    this.cookie(name, '', { expires: -1 });
  }

  get(name: string): string{
    return this.cookie(name);
  }

  set(name: string, value: string, options: Options) {
    return this.cookie(name, value, options);
  }

  private cookie(name: string, value?: string, options?: any): string {
    if (typeof value != 'undefined') {
      options = options;
      if (value === null) {
        value = '';
        options.expires = -1
      }
      let expires = '';
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
        let date: Date;
        if (typeof options.expires == 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
        } else {
          date = options.expires
        }
        expires = '; expires=' + date.toUTCString()
      }
      let path = options.path ? '; path=' + (options.path) : '',
          domain = options.domain ? '; domain=' + (options.domain) : '',
          secure = options.secure ? '; secure' : '';
      d.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
    } else {
      let cookieValue = null;
      if (d.cookie && d.cookie != '') {
        let cookies = d.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break
          }
        }
      }
      return cookieValue;
    }
  }

}
