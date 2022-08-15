import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  text: string = 'TESTANDO O PIPE OPERATOR'
  dateToday: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
