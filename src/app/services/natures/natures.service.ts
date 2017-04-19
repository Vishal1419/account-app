import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Nature } from '../../models/nature';

@Injectable()
export class NaturesService {

  constructor(private http: Http) { }

  public nature: Nature;

  getNatures(): Observable<Nature[]> {
    return this.http.get('/api/nature')
                    .map(res => res.json());
  }

  addNature(nature: Nature): Observable<Nature> {
    const body = JSON.stringify(nature);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/nature', body, {headers: headers})
                    .map(res => res.json());
  }

  updateNature(nature: Nature): Observable<Nature> {
    const body = JSON.stringify(nature);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`api/nature/${nature['_id']}`, body, {headers: headers})
                    .map(res => res.json());    
  }

  removeNature(nature: Nature): Observable<Nature> {   
      return this.http.delete(`api/nature/${nature['_id']}`)
                    .map(res => res.json());
  }

}
