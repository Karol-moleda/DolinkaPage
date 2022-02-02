import {Component, OnInit, ViewChild} from '@angular/core';

import {NgxMasonryComponent, NgxMasonryOptions} from "ngx-masonry";

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20
  }




  @ViewChild(NgxMasonryComponent) masonry:any= NgxMasonryComponent;

  masonryImages:(boolean | string)[][] = [];
  limit = 15;


  photos2019 = [
    [false,"../assets/2019/IMG_2861.jpg"],
    [false,"../assets/2019/IMG_2870.jpg"],
    [false,"../assets/2019/IMG_2879.jpg"],
    [false,"../assets/2019/IMG_2884.jpg"],
    [false,"../assets/2019/IMG_2917.jpg"],
    [false,"../assets/2019/IMG_2953.jpg"],
    [false,"../assets/2019/IMG_2972.jpg"],
    [false,"../assets/2019/IMG_2988.jpg"],
    [false,"../assets/2019/IMG_3014.jpg"],
    [false,"../assets/2019/IMG_3030.jpg"],
    [false,"../assets/2019/IMG_3038.jpg"],
    [false,"../assets/2019/IMG_3072.jpg"],
    [false,"../assets/2019/IMG_3089.jpg"],
    [false,"../assets/2019/IMG_3102.jpg"],
    [false,"../assets/2019/IMG_3180.jpg"],
    [false,"../assets/2019/IMG_3205.jpg"],
    [false,"../assets/2019/IMG_4126.jpg"],
    [false,"../assets/2019/IMG_4138.jpg"],
    [false,"../assets/2019/IMG_4151.jpg"],
    [false,"../assets/2019/IMG_4153.jpg"],
    [false,"../assets/2019/IMG_4168.jpg"],
    [false,"../assets/2019/IMG_4171.jpg"],
    [false,"../assets/2019/IMG_4175.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4196.jpg"],
    [false,"../assets/2019/IMG_4214.jpg"],
    [false,"../assets/2019/IMG_4230.jpg"],
    [false,"../assets/2019/IMG_4245.jpg"],
    [false,"../assets/2019/IMG_4274.jpg"],
    [false,"../assets/2019/IMG_4992.jpg"],
    [false,"../assets/2019/IMG_5013.jpg"],
    [false,"../assets/2019/IMG_5016.jpg"],
    [false,"../assets/2019/IMG_5027.jpg"],
    [false,"../assets/2019/IMG_5061.jpg"],
    [false,"../assets/2019/IMG_5065.jpg"],
    [false,"../assets/2019/wiosenny_festyn_w_dolince_-_17042019__4_20190418_2042672594.jpg"],
    [false,"../assets/2019/wiosenny_festyn_w_dolince_-_17042019__32_20190418_1436294038.jpg"],
    [false,"../assets/2019/wiosenny_festyn_w_dolince_-_17042019__46_20190418_1602704874.jpg"],
  ];
  photos2021 = [
    [false,"../assets/2021/_MG_0344.jpg"],
    [false,"../assets/2021/_MG_0345.jpg"],
    [false,"../assets/2021/_MG_0352.jpg"],
    [false,"../assets/2021/_MG_0365.jpg"],
    [false,"../assets/2021/_MG_0369.jpg"],
    [false,"../assets/2021/_MG_0375.jpg"],
    [false,"../assets/2021/_MG_0377.jpg"],
    [false,"../assets/2021/_MG_0383.jpg"],
    [false,"../assets/2021/_MG_0387.jpg"],
    [false,"../assets/2021/_MG_0399.jpg"],
    [false,"../assets/2021/_MG_0401.jpg"],
    [false,"../assets/2021/_MG_0468.jpg"],
    [false,"../assets/2021/_MG_0521.jpg"],
    [false,"../assets/2021/_MG_0526.jpg"],
    [false,"../assets/2021/_MG_0531.jpg"],
    [false,"../assets/2021/_MG_0538.jpg"],
    [false,"../assets/2021/_MG_0540.jpg"],
    [false,"../assets/2021/_MG_0552.jpg"],
    [false,"../assets/2021/_MG_0554.jpg"],
    [false,"../assets/2021/_MG_0556.jpg"],
    [false,"../assets/2021/_MG_0592.jpg"],
  ];
  constructor(
  ) { }

  ngOnInit() {
    this.masonryImages = this.photos2019.slice(0, this.limit);
    // this.masonryImages = this.photos2021.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.photos2019.slice(0, this.limit);
    // this.masonryImages = this.photos2021.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.photos2019[0]);
    // this.masonryImages.splice(0, 0, this.photos2021[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }
  // prependImage() {
  //   const image = this.photos2019[50];
  //   const image = this.photos2019[50];
  //   image[0] = true;
  //   this.masonryImages.push(image);
  // }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }

}

