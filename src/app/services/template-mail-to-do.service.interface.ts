import {Observable} from 'rxjs';
import {FormValue} from '../templateMailModelDTO';

export interface ITemplateMailToDoService {
  getTemplateMail(): Observable<FormValue[]>;
}
