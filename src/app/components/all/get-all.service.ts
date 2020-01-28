import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor() { }
  getUrl() {
     return fetch('http://127.0.0.1:3000/')
    .then((res) => res.json())
    .then((res) => {return res})
  }
  
}
