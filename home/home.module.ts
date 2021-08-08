import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieComponent } from './movie/movie.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeIndexComponent,
    MovieComponent
  ],
  imports: [
    CommonModule, MatButtonModule, BrowserAnimationsModule, FlexLayoutModule, MatCardModule
  ],
  exports: [HomeIndexComponent]
})


export class HomeModule { }
