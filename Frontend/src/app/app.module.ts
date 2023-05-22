import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompanyService } from './services/company.service';
import { ShowCompaniesComponent } from './components/show-companies/show-companies.component';
import { ShowCompanyComponent } from './components/show-company/show-company.component';
import { BaseComponentComponent } from './components/base-component/base-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCompaniesComponent,
    ShowCompanyComponent,
    BaseComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
