import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorLink} from '../validatorLink';
import {TemplateMailToDoService} from '../services/template-mail-to-do.mock.service';
import {FormValue, TemplateMailModelDTO} from '../templateMailModelDTO';

@Component({
  selector: 'app-template-mail-form',
  templateUrl: './template-mail-form.component.html',
  styleUrls: ['./template-mail-form.component.scss']
})
export class TemplateMailFormComponent implements OnInit {
  templateMails: FormValue[];
  form: FormGroup;
  img: string | ArrayBuffer | null;
  currentNameTmpl: string;
  variables: string[];
  sizeValid = false;

  constructor(private formBuilder: FormBuilder, private templateMailService: TemplateMailToDoService) { }

  ngOnInit(): void {
    // Иницилизируем форму
    this.form = this.formBuilder.group({
      nameTemplate: ['', [Validators.required]],
      text: ['', [Validators.required]],
      socialLink: ['', [Validators.required, ValidatorLink.checkLinkValid]],
      variables: [''],
      logoImg: ['']
    });
    // Загружаем шаблоны письма из сервера
    this.templateMailService.getTemplateMail().subscribe(res => {
      this.templateMails = res.map(tmpl => new TemplateMailModelDTO(tmpl as FormValue));
    });
  }

  submit(): void {
    if (this.form.valid) {
      // Преобразуем формат логотипа
      this.getVariablesWithText();
      this.form.value.logoImg = this.img;
      // Преобразуем объект в DTO прежде чем отправить на сервер
      const newTemplateMail = new TemplateMailModelDTO(this.form.value as FormValue);
      // Проверяем шаблон: новый или был переделан
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.templateMails.length; i++) {
        if (this.templateMails[i].nameTemplate === newTemplateMail.nameTemplate) {
          this.templateMailService.changeTemplateMail(newTemplateMail);
          this.templateMails[i] = newTemplateMail;
          console.log(this.variables);
          this.variables = null;
          this.img = null;
          return this.form.reset();
        }
      }
      this.templateMailService.addTemplateMail(newTemplateMail);
      this.templateMails.push(newTemplateMail);
      this.form.reset();
      this.variables = null;
      this.img = null;
    }
  }

  // Проверяем наличее переменных и записываем их в поле variables
  getVariablesWithText(): void {
     this.variables = this.form.get('text').value.split('{{{').filter(v => v.includes('}}}')).map(v => v.split('}}}')[0]);
     this.form.patchValue({variables: this.variables});
}
  // Загружаем логотип и приводим к формату
  uploadLogo(event: Event): void {
    this.sizeValid = false;
    const reader = new FileReader();
    const files = (event.target as HTMLInputElement);
    if (files.files[0].size / 1024 < 5120) {
      if (files.files && files.value.length) {
        reader.readAsDataURL(files.files[0]);
        reader.onload = () => {
          this.img = reader.result;
        };
      }
    } else {
      this.sizeValid = true;
    }

  }

  // Выбираем шаблон письма
  changeTemplate(e): void {
    const currentTmpl = this.templateMails.filter(value => value.nameTemplate === e.target.value)[0];
    this.currentNameTmpl = currentTmpl.nameTemplate;
    if (currentTmpl.nameTemplate !== 'Costume') {
      this.form.patchValue({
        nameTemplate: currentTmpl.nameTemplate,
        text: currentTmpl.text,
        socialLink: currentTmpl.socialLink,
        variables: [currentTmpl.variables]
      });
      this.img = currentTmpl.logoImg;
      this.variables = currentTmpl.variables;
    } else {
      this.form.reset();
      this.img = null;
    }

  }
}
