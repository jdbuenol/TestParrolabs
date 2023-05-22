import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'show-companies'},
  { path: 'show-companies', component: ShowCompaniesComponent },
  { path: 'show-company/:id', component: ShowCompanyComponent },
  { path: 'add-company', component: AddCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
