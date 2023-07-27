import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientListComponent } from './client.list/client.list.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'client-list', component:ClientListComponent},
  //if user enters an invalid URL.
  {path: "**", redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
