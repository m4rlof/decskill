import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { StarSvgComponent } from './icons/star-svg/star-svg.component';
import { GlobeSvgComponent } from './icons/globe-svg/globe-svg.component';
import { PopoverComponent } from './components/popover/popover.component';
import { DateFnsModule } from 'ngx-date-fns';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TimelineComponent,
    MainHeaderComponent,
    StarSvgComponent,
    GlobeSvgComponent,
    PopoverComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DateFnsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
