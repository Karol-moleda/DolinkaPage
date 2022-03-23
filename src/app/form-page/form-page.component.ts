import { Component, OnInit } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {NavigationService} from "../service/navigation.service";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  iconsMenu = faBars;
  flagPhone=false;
  flagEmail=false;
  flagFacebook=false

  constructor(private navigationService:NavigationService) { }

  ngOnInit(): void {}

  sendFlag() {
    this.navigationService.flagInformation = true
  }

}
