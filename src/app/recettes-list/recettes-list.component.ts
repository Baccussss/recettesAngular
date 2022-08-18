import { Component, OnInit } from '@angular/core';
import { Plats} from "../interfaces/plat.interface";


@Component({
  selector: 'app-recettes-list',
  templateUrl: './recettes-list.component.html',
  styleUrls: ['./recettes-list.component.css']
})
export class RecettesListComponent implements OnInit {
  plats : Plats[] = [
    {
      name: 'Spaggethis Bolognaises',
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frecette.supertoinette.com%2F154041%2Fb%2Fspaghetti-a-la-bolognaise.jpg&imgrefurl=https%3A%2F%2Fwww.supertoinette.com%2Frecette%2F6231%2Fspaghetti-a-la-bolognaise.html&tbnid=__xIWYz0TSp3eM&vet=12ahUKEwjohbyl1dD5AhWP7BoKHZHJBMYQMygCegUIARCOAg..i&docid=q15Tl8Po7ZTXtM&w=1000&h=679&q=spaghetti%20bolognaise&client=safari&ved=2ahUKEwjohbyl1dD5AhWP7BoKHZHJBMYQMygCegUIARCOAg',
      description: 'Pates de ouf !'
    },
    {
      name: "Boeuf bourguignon",
      img: "https://www.epicurien.be/blog/recettes/plats-mijotes/boeuf-bourguignon-traditionnel.asp",
      description: "Un Boeuf bourguignon de ouf"
    },
    {
      name: "sushi",
      img: "https://www.tripadvisor.fr/Restaurant_Review-g1130703-d18337939-Reviews-Sushi_Place-Rolle_Nyon_District_Canton_of_Vaud.html",
      description: "Un sushi de ouf"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
