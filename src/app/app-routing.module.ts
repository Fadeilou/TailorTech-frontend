import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelesComponent } from './modeles/modeles.component';
import { DetailModeleComponent } from './detail-modele/detail-modele.component';

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'modeles', component: ModelesComponent},
  {path: 'detail-model', component: DetailModeleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

