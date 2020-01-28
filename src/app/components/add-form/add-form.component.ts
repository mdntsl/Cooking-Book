import { Component, OnInit } from '@angular/core';
import {AddNewService} from './add-new.service';
import {Dish} from './newRecipe';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers:[AddNewService]
})
export class AddFormComponent implements OnInit {
     dish :Dish=new Dish();
     selected : boolean;
  constructor(private AddNew : AddNewService) { }
      
  
  ngOnInit() {
  }
  addRecipe( dish ) {
    
    this.AddNew.addRecipe(dish).subscribe();
  }
  selectChanger() {
    this.selected = !this.selected
  }

}
