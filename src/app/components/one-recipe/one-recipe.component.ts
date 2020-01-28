import { Component, OnInit } from '@angular/core';
import {SelectService} from './select.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dish} from './dish';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css'],
  providers:[SelectService]
})
export class OneRecipeComponent implements OnInit {
  id;
  result;
  dish: Dish = new Dish();
    constructor(private rout: ActivatedRoute, private get:SelectService ) {
    this.id = rout.snapshot.params['id'];
   }
   

   async ngOnInit( ) {
     let id =  Number.parseInt(this.id) ;
     this.result = await this.get.getUrl( id );
     
    }

    editRecipe (dish:Dish){
      console.log('yes')
      let id =  Number.parseInt(this.id) ;
      this.get.updateRecipe(id,dish).subscribe();
    }

}
