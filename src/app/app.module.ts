import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManagmentPageComponent } from './managment-page/managment-page.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FormPageComponent } from './form-page/form-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {NgxMasonryModule} from "ngx-masonry";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ManagmentPageComponent,
    FormPageComponent,
    PhotosPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxMasonryModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
