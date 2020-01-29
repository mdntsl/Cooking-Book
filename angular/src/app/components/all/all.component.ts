import { Component, OnInit } from '@angular/core';
import {GetAllService} from './get-all.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers:[GetAllService]
})
export class AllComponent implements OnInit {
  result;

  constructor(private getService: GetAllService) { }

  async ngOnInit() {
    this.result = await this.getService.getUrl()
  }

}
