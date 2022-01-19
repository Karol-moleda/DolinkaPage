import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  flagMenuActive = false

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu() {
    this.flagMenuActive = !this.flagMenuActive
  }

}
