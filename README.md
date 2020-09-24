# Создана простая форма на Angular 9.

1. Сверху select. Выбираем ранее сохраненные шаблоны письма или выбираем Costum, если хотим создать свою.
2. Далее идет "Загрузить логотип". При загрузке логотипа, он сразу отображается сверху.
3. Далее заполняем "название шаблона". Если название шаблона уже имеется, то сработает валидатор
4. Заполняем текстовое поле
5. Оставляем ссылку на соцсеть. Тут стоит проверка на валидность ссылки.
6. Здесь отображаются переменные, считанные с текстового поля в формате {{{переменная}}} и записанные в поле variables. 

## Особенности. 
- Для отправки данных на сервер используется заглушка.
- Преобразуем объект в DTO прежде чем отправить на сервер.
- Создан пайп для проверки имени шаблона, существует ли с таким именем?
- Используются валидаторы для проверки валидности ссылки на соцсеть
  и проверки валидности размера загружаемого логотипа. не более 5 мб.
- Применил регулярные выражения для поиска переменных в текстовом поле 


# TestMailTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

