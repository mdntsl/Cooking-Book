import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GethistoryService {

  constructor() { }
  getUrl(id:number) {
    return fetch(`http://127.0.0.1:3000/history/${id}`)
   .then((res) => res.json())
   .then((res) => {return res})
 }
}
