import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { SignInComponent } from '../authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';

const routes: Routes = [{path:"", component:HomeIndexComponent},
                        {path:"detail/:id", component:DetailIndexComponent}, 
                        {path:'signin', component:SignInComponent},
                        {path:'signup', component:SignUpComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)]
  
})
export class RoutingModule { }
