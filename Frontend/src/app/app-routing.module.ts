import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ShowPositionsComponent } from './components/show-positions/show-positions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'show-companies'},
  { path: 'show-companies', component: ShowCompaniesComponent },
  { path: 'show-company/:id', component: ShowCompanyComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'show-employees', component: ShowEmployeesComponent },
  { path: 'show-employee/:id', component: ShowEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'show-positions', component: ShowPositionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
