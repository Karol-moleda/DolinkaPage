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


  photos2019 = [
    ["../assets/2019/IMG_2861.jpg"],
    ["../assets/2019/IMG_2870.jpg"],
    ["../assets/2019/IMG_2879.jpg"],
    ["../assets/2019/IMG_2884.jpg"],
    ["../assets/2019/IMG_2917.jpg"],
    ["../assets/2019/IMG_2953.jpg"],
    ["../assets/2019/IMG_2972.jpg"],
    ["../assets/2019/IMG_2988.jpg"],
    ["../assets/2019/IMG_3014.jpg"],
    ["../assets/2019/IMG_3030.jpg"],
    ["../assets/2019/IMG_3038.jpg"],
    ["../assets/2019/IMG_3072.jpg"],
    ["../assets/2019/IMG_3089.jpg"],
    ["../assets/2019/IMG_3102.jpg"],
    ["../assets/2019/IMG_3180.jpg"],
    ["../assets/2019/IMG_3205.jpg"],
    ["../assets/2019/IMG_4126.jpg"],
    ["../assets/2019/IMG_4138.jpg"],
    ["../assets/2019/IMG_4151.jpg"],
    ["../assets/2019/IMG_4153.jpg"],
    ["../assets/2019/IMG_4168.jpg"],
    ["../assets/2019/IMG_4171.jpg"],
    ["../assets/2019/IMG_4175.jpg"],
    ["../assets/2019/IMG_4189.jpg"],
    ["../assets/2019/IMG_4196.jpg"],
    ["../assets/2019/IMG_4214.jpg"],
    ["../assets/2019/IMG_4230.jpg"],
    ["../assets/2019/IMG_4245.jpg"],
    ["../assets/2019/IMG_4274.jpg"],
    ["../assets/2019/IMG_4992.jpg"],
    ["../assets/2019/IMG_5013.jpg"],
    ["../assets/2019/IMG_5016.jpg"],
    ["../assets/2019/IMG_5027.jpg"],
    ["../assets/2019/IMG_5061.jpg"],
    ["../assets/2019/IMG_5065.jpg"],
    ["../assets/2019/wiosenny_festyn_w_dolince_-_17042019__4_20190418_2042672594.jpg"],
    ["../assets/2019/wiosenny_festyn_w_dolince_-_17042019__32_20190418_1436294038.jpg"],
    ["../assets/2019/wiosenny_festyn_w_dolince_-_17042019__46_20190418_1602704874.jpg"],
  ];
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

