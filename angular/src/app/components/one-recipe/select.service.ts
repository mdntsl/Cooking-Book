import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http:HttpClient) { }

  getUrl(id:number) {
    return fetch(`http://127.0.0.1:3000/${id}`)
   .then((res) => res.json())
   .then((res) => {return res})
   
 }
 updateRecipe(id:number,dish:Dish) {
   return this.http.put(`http://127.0.0.1:3000/${id}`,{'recipe':`'${dish.recipe}'`,'ingradients':`'${dish.ingradients}'`})
 }
}
