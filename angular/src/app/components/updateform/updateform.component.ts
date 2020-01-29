import { Component, OnInit } from '@angular/core';
import {GethistoryService} from './gethistory.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css'],
  providers:[GethistoryService]
})
export class UpdateformComponent implements OnInit {
  id:number;
  result:JSON;
  selected:boolean;
  constructor(private rout: ActivatedRoute, private get:GethistoryService) { 
    this.id = rout.snapshot.params['id'];
  }

  async ngOnInit() {
    this.selected=false;
    this.result = await this.get.getUrl(this.id);
  }
  selectChanger() {
    this.selected = !this.selected;
   }

}
