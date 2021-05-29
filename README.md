# AngularApiBackend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In this repo,am working with angular-in-memory-web-api,a library that intercepts angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store consumed by a frontend.

To start with,we implement the InMemoryDbService interface to expose the createDb method that we use to create our object in memory that represents our database.