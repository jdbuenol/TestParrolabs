import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'show-companies'},
  { path: 'show-companies', component: ShowCompaniesComponent },
  { path: 'show-company/:id', component: ShowCompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'show-employees', component: ShowEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
