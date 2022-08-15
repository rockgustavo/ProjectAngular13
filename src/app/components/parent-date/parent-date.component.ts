import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  templateUrl: './parent-date.component.html',
  styleUrls: ['./parent-date.component.css']
})
export class ParentDateComponent implements OnInit {

  @Input() name: string = ""
  @Input() objData!: { email: string, permissao: string }


  constructor() { }

  ngOnInit(): void {
  }

}
