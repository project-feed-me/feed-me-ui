# FeedMeApp

This repository is meant to demonstrate the basic boilerplate required to create an Angular CLI based Docker container.  This is by no means meant to represent enterprise grade development flow, but can however be used as a starting point.  Somethings that could be added:

1. Linting steps
2. Multi-stage docker build
3. CI/CD boilerplate
4. etc

## Docker Build

Run `npm run docker-build` to build the project. This will trigger a docker build which will create a Docker image with a tag angular-docker-boilerplate:dev .  This can be viewed via the `docker image -l` command 

## Docker Run 

Run `npm run docker-run` to run the previously created Docker image as a Docker container.  This will run the container on port 80.  Navigate to localhost in your browser and you will see your app!

# Standard Angular CLI commands
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
