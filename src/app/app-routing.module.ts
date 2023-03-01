import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagmentPageComponent} from "./managment-page/managment-page.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {PhotosPageComponent} from "./photos-page/photos-page.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";

const routes: Routes = [
  {
    path:'',
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
  },
  {
    path:'newsPage',
    component:NewsPageComponent
  },
  {
    path:'historyPage',
    component:HistoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
