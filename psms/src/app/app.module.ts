import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CheckStockComponent } from './components/check-stock/check-stock.component';
import { ReviewComponent } from './components/review/review.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckStockComponent,
    ReviewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
