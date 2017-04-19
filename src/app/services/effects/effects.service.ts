import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Effect } from '../../models/effect';

@Injectable()
export class EffectsService {

  constructor(private http: Http) { }

  public effect: Effect;

  getEffects(): Observable<Effect[]> {
    return this.http.get('/api/effect')
                    .map(res => res.json());
  }

  addEffect(effect: Effect): Observable<Effect> {
    const body = JSON.stringify(effect);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/effect', body, {headers: headers})
                    .map(res => res.json());
  }

  updateEffect(effect: Effect): Observable<Effect> {
    const body = JSON.stringify(effect);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`api/effect/${effect['_id']}`, body, {headers: headers})
                    .map(res => res.json());    
  }

  removeEffect(effect: Effect): Observable<Effect> {   
      return this.http.delete(`api/effect/${effect['_id']}`)
                    .map(res => res.json());
  }

}
