import { Component } from '@angular/core';
import { Plats } from "./interfaces/plat.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  plats: Plats = {
    name: 'Spaggethis Bolognaises',
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frecette.supertoinette.com%2F154041%2Fb%2Fspaghetti-a-la-bolognaise.jpg&imgrefurl=https%3A%2F%2Fwww.supertoinette.com%2Frecette%2F6231%2Fspaghetti-a-la-bolognaise.html&tbnid=__xIWYz0TSp3eM&vet=12ahUKEwjohbyl1dD5AhWP7BoKHZHJBMYQMygCegUIARCOAg..i&docid=q15Tl8Po7ZTXtM&w=1000&h=679&q=spaghetti%20bolognaise&client=safari&ved=2ahUKEwjohbyl1dD5AhWP7BoKHZHJBMYQMygCegUIARCOAg',
    description: 'Pates de oufs !'
  }
}
