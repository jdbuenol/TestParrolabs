import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyService } from './services/company.service';
import { EmployeeService } from './services/employee.service';
import { EducationLevelService } from './services/education-level.service';
import { PositionService } from './services/position.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ShowPositionsComponent } from './components/show-positions/show-positions.component';
import { ShowPositionComponent } from './components/show-position/show-position.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { EditPositionComponent } from './components/edit-position/edit-position.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCompaniesComponent,
    ShowCompanyComponent,
    ToolbarComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    ShowEmployeesComponent,
    ShowEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ShowPositionsComponent,
    ShowPositionComponent,
    AddPositionComponent,
    EditPositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [CompanyService, EmployeeService, EducationLevelService, PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
