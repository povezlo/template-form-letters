import {TemplateMailToDoService as MockTemplateMailToDoService} from '../app/services/template-mail-to-do.mock.service';
import {TemplateMailToDoService} from '../app/services/template-mail-to-do.service';

export const environment = {
  production: true,
  providers: [
    {
      provide: MockTemplateMailToDoService,
      useClass: TemplateMailToDoService
    }
  ]
};
