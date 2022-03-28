import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { PlayComponent } from './play/play.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "create", component: CreateComponent},
  {path: "delete", component: DeleteComponent},
  {path: "update", component: UpdateComponent},
  {path: "getAll", component: GetAllComponent},
  {path: "getDetails", component: GetDetailsComponent},
  {path: "play", component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
