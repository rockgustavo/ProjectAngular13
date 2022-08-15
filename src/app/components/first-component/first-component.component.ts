import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Gustavo Ramos"
  professional: boolean = true
  skills = ["Angular", "TS", "MongoDB"]

  constructor() { }

  ngOnInit(): void {
  }

}
