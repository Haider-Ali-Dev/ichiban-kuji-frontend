import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AdminGuard]
   },
   {
    path: 'admin/logs',
    component: LoggingComponent,
    canActivate: [AdminGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
