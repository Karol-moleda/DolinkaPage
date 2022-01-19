import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagmentPageComponent} from "./managment-page/managment-page.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
  {
    path:'main',
    component:NavigationComponent
  },
  {
    path:'managment',
    component:ManagmentPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
