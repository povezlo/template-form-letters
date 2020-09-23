import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormValue} from '../templateMailModelDTO';
import {ITemplateMailToDoService} from './template-mail-to-do.service.interface';

@Injectable({
  providedIn: 'root'
})
export class TemplateMailToDoService implements ITemplateMailToDoService{

  constructor(private  http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getTemplateMail() {
    return this.http.get('/api/tmpl') as Observable<FormValue[]>;
  }
}
