import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class TypeProductServiceService {

  url  = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url + '/type');
  }

  send(body) {

    return this.http.post(this.url + '/type', body);
  }

  getOne(id) {

   return this.http.get(this.url + '/type/' + id);
  }

  update(body, id){

   return this.http.put(this.url + '/type/' + id , body);
 }

 delete(id) {

 return this.http.delete(this.url + '/type/' + id );
 }
}
