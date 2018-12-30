import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'webapp-table',
  templateUrl: './webapp-table.component.html',
  styleUrls: ['./webapp-table.component.scss']
})
export class WebappTableComponent implements OnInit {

  constructor() { }

  @Input() tableData;
  @Input() headerData;

  records: Array<any>;
  isDesc: boolean = false;
  column: string = '';
  direction: number;

  ngOnInit() { }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

}
