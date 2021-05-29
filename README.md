# AngularApiBackend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In this repo,am working with angular-in-memory-web-api,a library that intercepts angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store consumed by a frontend.

To start with,we implement the InMemoryDbService interface to expose the createDb method that we use to create our object in memory that represents our database.

## Communication with the api backend

As expected,we inject the HttpClient into our product service so that we can access the GET,POST,PUT, basically every other Http verb required to send an HTTP request to the backend.

The angular-inmemory api requires that the url passed to start with the word api followed with the entity to be accessed.Hence we define a private base_URL to serve as a api endpoint.

In our used cases,the base_URL is passed as a parameter in the Http methods.

The create_product method uses the HttpClient POST method to make a post request to create a new product in the database. It returns an Observable of the newly created product.

The edit_product method uses the HttpClient to make a PUT request to update an existing product in the database.It returns an Observable of the updated product.

The delete_product method uses the HttpClient to make a delete request to remove an existing product from the database. It similarly returns an Observable of the deleted product.
