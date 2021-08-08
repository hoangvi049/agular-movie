import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';



@NgModule({
  declarations: [
    HomeIndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeIndexComponent]
})
export class HomeModule { }
