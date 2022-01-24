import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManagmentPageComponent } from './managment-page/managment-page.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FormPageComponent } from './form-page/form-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';

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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
