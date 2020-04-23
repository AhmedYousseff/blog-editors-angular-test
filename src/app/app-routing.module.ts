import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ENTITY_ROUTE, NAV_ROUTE} from './layout/navbar/navbar-route';


const routes: Routes = [...NAV_ROUTE, ...ENTITY_ROUTE];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
