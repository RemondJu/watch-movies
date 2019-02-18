# watch-movies

Movies informations web app based on Imdb, browse informations on movies and series, castings and make your personnal watchlist.

Front-end in React.js, Redux, Bootstrap
Backend in Node.js, express. REST API

## Clone the repository

```
git clone https://github.com/RemondJu/watch-movies.git
```

## Prerequisites

### On windows

Having [wamp](http://www.wampserver.com/en/download-wampserver-64bits/) or [xampp](https://www.apachefriends.org/index.html) running

[Node.js](https://nodejs.org/en/download/) installed


## Installation

Run
```
npm install
```
in both /front and /back directories in your terminal

Create a conf.js file in the /back/routes directory like this :

```
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3100,
  user: 'your_user_name',
  password: 'your_strongest_password',
  database: 'watch_movies'
});

module.exports = connection;

```
replace user and password parts with your own

### Database example

You can import in your own database /back/helpers/watch_movies.sql

## Launch the project

Run in terminal
```
npm start
```
In both /front and /back directories

Website available at [http://localhost:3000/](http://localhost:3000/)
