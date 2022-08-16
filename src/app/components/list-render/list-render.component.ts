import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails!: string;

  constructor(private listService: ListService) { 
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe( (animals) => (this.animals = animals) );
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animalSelec: Animal){
    console.log("Removendo animal")
    this.animals = this.listService.remove(this.animals, animalSelec);
  }

}
