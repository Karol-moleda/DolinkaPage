import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagmentPageComponent} from "./managment-page/managment-page.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {PhotosPageComponent} from "./photos-page/photos-page.component";

const routes: Routes = [
  {
    path:'main',
    component:NavigationComponent
  },
  {
    path:'managment',
    component:ManagmentPageComponent
  },
  {
    path:'formPage',
    component:FormPageComponent
  },
  {
    path:'photosGallery',
    component:PhotosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
