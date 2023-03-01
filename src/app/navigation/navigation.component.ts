import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../service/navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  flagMenuActive = false

  constructor(private navigationService:NavigationService) { }

  ngOnInit(): void {
    // this.flagMenuActive = this.navigationService.flagInformation
  }

  activeMenu() {
    this.flagMenuActive = !this.flagMenuActive
  }

}
