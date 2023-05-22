import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { CompanyService } from './services/company.service';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCompaniesComponent,
    ShowCompanyComponent,
    ToolbarComponent,
    AddCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
