import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private htttp: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
   }

  get(uri: String){
    return this.htttp.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object){
    return this.htttp.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object){
    return this.htttp.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.htttp.delete(`${this.ROOT_URL}/${uri}`);
  }

  
}
