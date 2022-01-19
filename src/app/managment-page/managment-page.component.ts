import { Component, OnInit } from '@angular/core';
import { faHandPointRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-managment-page',
  templateUrl: './managment-page.component.html',
  styleUrls: ['./managment-page.component.scss']
})
export class ManagmentPageComponent implements OnInit {
  handPoint = faHandPointRight

  personArray:string[]  = [
     "Karol Molęda",
     "Wojciech Ozdoba",
     "Grzegorz Pałka",
     "Grzegorz Gruca",
     "Michał Mrówka"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
