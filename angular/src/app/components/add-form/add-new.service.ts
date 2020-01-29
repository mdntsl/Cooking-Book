import { Injectable } from '@angular/core';
import {Dish} from './newRecipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddNewService {

  constructor(private http:HttpClient) { }

  addRecipe(dish:Dish){
    return this.http.post('http://127.0.0.1:3000/', {'title':`'${dish.title}'`,'author':`'${dish.author}'`,'recipe':`'${dish.recipe}'`,'ingradients':`'${dish.ingradients}'`})
  }
}
