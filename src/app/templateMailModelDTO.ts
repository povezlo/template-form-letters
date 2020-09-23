export class TemplateMailModelDTO {
  nameTemplate: string;
  text: string;
  socialLink: string;
  variables: any[];
  logoImg: string | ArrayBuffer | null;

  constructor(formValue: FormValue) {
    this.nameTemplate = formValue.nameTemplate;
    this.text = formValue.text;
    this.socialLink = formValue.socialLink;
    this.variables = [formValue.variables];
    this.logoImg = formValue.logoImg;

  }
}

export interface FormValue {
  nameTemplate: string;
  text: string;
  socialLink: string;
  variables?: any[];
  logoImg: string | ArrayBuffer | null;
}
