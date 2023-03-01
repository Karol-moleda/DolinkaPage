import {Component, OnInit, ViewChild} from '@angular/core';

import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {


  public masonryOptions: NgxMasonryOptions = {
    gutter: 32,
    resize: true,
  }


  photos2021 = [
    ["../assets/2021/_MG_0344.jpg"],
    ["../assets/2021/_MG_0345.jpg"],
    ["../assets/2021/_MG_0352.jpg"],
    ["../assets/2021/_MG_0365.jpg"],
    ["../assets/2021/_MG_0369.jpg"],
    ["../assets/2021/_MG_0375.jpg"],
    ["../assets/2021/_MG_0377.jpg"],
    ["../assets/2021/_MG_0383.jpg"],
    ["../assets/2021/_MG_0387.jpg"],
    ["../assets/2021/_MG_0399.jpg"],
    ["../assets/2021/_MG_0401.jpg"],
    ["../assets/2021/_MG_0468.jpg"],
    ["../assets/2021/_MG_0521.jpg"],
    ["../assets/2021/_MG_0526.jpg"],
    ["../assets/2021/_MG_0531.jpg"],
    ["../assets/2021/_MG_0538.jpg"],
    ["../assets/2021/_MG_0540.jpg"],
    ["../assets/2021/_MG_0552.jpg"],
    ["../assets/2021/_MG_0554.jpg"],
    ["../assets/2021/_MG_0556.jpg"],
    ["../assets/2021/_MG_0592.jpg"],
  ];
  constructor(
  ) { }

  ngOnInit() {

  }


  itemsLoaded() {
    console.log('itemsloaded');
  }

}

