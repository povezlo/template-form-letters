import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {FormValue} from '../templateMailModelDTO';
import {ITemplateMailToDoService} from './template-mail-to-do.service.interface';

@Injectable({
  providedIn: 'root'
})
export class TemplateMailToDoService implements ITemplateMailToDoService{
  templates: FormValue[] = [
    {
      nameTemplate: 'Costume',
      text: '',
      socialLink: '',
      variables: [],
      logoImg: null
    },
    {
      nameTemplate: 'Basic',
      text: 'Здесь может быть ваше сообщение',
      socialLink: 'https://www.facebook.com/',
      variables: [],
      logoImg: null
    },
    {
      nameTemplate: 'Origin',
      text: 'Здесь может быть ваше сообщение',
      socialLink: 'https://www.twitter.com/',
      variables: [],
      logoImg: null
    }
  ];

  constructor(private  http: HttpClient) { }
// Делаем заглушку
  // tslint:disable-next-line:typedef
  getTemplateMail(): Observable<FormValue[]> {
    return of(this.templates);
  }

  addTemplateMail(template): void {
    this.templates.push(template);
  }

  changeTemplateMail(template): void {
    this.templates = this.templates.map(tml => {
      if (tml.nameTemplate === template.nameTemplate) {
        return template;
      } else {
        return tml;
      }
    });
  }
}
