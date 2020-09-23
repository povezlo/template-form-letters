import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateMailFormComponent } from './template-mail-form/template-mail-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import { FilterNameTemplatePipe } from './filter-name-template.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateMailFormComponent,
    FilterNameTemplatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [...environment.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
