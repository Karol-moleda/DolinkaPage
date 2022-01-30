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


  dummyPictures = [
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
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
    [false,"../assets/2019/IMG_4189.jpg"],
  ];
  constructor(
  ) { }

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true;
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }

}

