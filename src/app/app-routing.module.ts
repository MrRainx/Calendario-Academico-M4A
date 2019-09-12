import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as LoginComponent } from './modules/login/components/layout/layout.component';
import { LayoutComponent as DashBoardComponent } from './modules/dashboard/components/layout/layout.component';
import { LayoutComponent as CalendarioComponent } from './modules/calendario/components/layout/layout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'calendario', component: CalendarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
