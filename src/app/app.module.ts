import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxDateRangeModule } from 'ngx-daterange';

import { SearchComponent } from './Hotels/search/search.component';
import { HotelsService } from './services/hotels.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDateRangeModule,

  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
