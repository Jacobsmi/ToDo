# To Do App

## Basics

- This is a To Do web app created with the PERN stack (Postgres, Express, React, and Node.js). Both the frontend and backend use TypeScript. Follow the instruction bellow to run the app.

## Running the App

- Clone the repo locally

-Prerequisites - Node.js - yarn - PostgreSQL - tsc

### Running the Frontend

- `cd client` to change into the client directory and then `yarn add` to install all the dependencies need for the frontend to run
- `yarn start` to run the web-server and run the client

### Running the Server

- First step is to create an instance of a postgreSQL database that the server can connect to
  - All that we need from the database is a username, password, host, database name, and port
- Once the database has been created `cd server` and then create a `.env` file as follows

```
    PGUSER=postgres
    PGHOST=localhost
    PGPASSWORD=database_password
    PGDATABASE=to_do_db
```
and change the information to match your environment

- After this you can `yarn run migrate` to create the tables for the database.
    - *NOTE*: it is very important you do this from the `./server` directory because the env files are read from the current working directory so if you are not in the correct directory the env variables won't be read correctly and the database connection will fail

- Finally you can run `yarn start` to run the server
    - Once again it is important to run from the `./server` directory for the reasons outlined above