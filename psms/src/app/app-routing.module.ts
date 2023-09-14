import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GptComponent } from './components/gpt/gpt.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "gpt", component: GptComponent },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
