import { Injectable } from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor(private http:Http) { }

    download(){
      let headers=new Headers();
  
      headers.append('Content-Type','application/json');
      console.log('reached')
      return this.http.get('users/download', {headers:headers})
        .map(res=>res.json());
        console.log('b');
    }
  
}
