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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyService } from './services/company.service';
import { EmployeeService } from './services/employee.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowCompaniesComponent,
    ShowCompanyComponent,
    ToolbarComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    ShowEmployeesComponent
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
    BrowserAnimationsModule
  ],
  providers: [CompanyService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
