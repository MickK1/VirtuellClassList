import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentporfileComponent } from './studentporfile/studentporfile.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "profile", component: StudentporfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
