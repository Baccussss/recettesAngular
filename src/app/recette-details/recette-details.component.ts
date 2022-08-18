import { Component, OnInit } from '@angular/core';
import {Plats} from "../interfaces/plat.interface";

@Component({
  selector: 'app-recette-details',
  templateUrl: './recette-details.component.html',
  styleUrls: ['./recette-details.component.css']
})
export class RecetteDetailsComponent implements OnInit {
  plat: Plats = {
    name: 'Spaggethis Bolognaises',
    img: 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2018/08/30171718/spaghettis-alla-bolognese.jpeg',
    description: 'Pates de ouf !'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
