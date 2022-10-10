import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckStockComponent } from './components/check-stock/check-stock.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "checkStock", component: CheckStockComponent },
  { path: "review", component: ReviewComponent },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
