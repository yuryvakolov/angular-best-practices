# AngularBestPractices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## SCSS Features in App
- To automatically convert `px` to `em`, you need to create a function `px2em(14)`. Documentation: [SCSS Functions](https://css-tricks.com/snippets/sass/px-to-em-functions/).
- To inherit styles, you must use the `@extentd` directive. Documentation: [SCSS Directive @extend](https://sass-scss.ru/documentation/pravila_i_direktivi/kak_eto_rabotaet/).
- To create a template selector, you must use the syntax `%selector`. Documentation: [SCSS Template selectors %](https://sass-scss.ru/documentation/rasshirenie_css/shablonnie_selektori/).
