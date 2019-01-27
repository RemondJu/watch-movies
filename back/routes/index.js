import express from 'express';

const router = express.Router();
const connection = require('./conf');

connection.connect((err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Connected');
  }
});

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.get('/movies', (req, res) => {
  connection.query('SELECT * FROM movies ORDER BY RAND()', (err, result) => {
    if (err) {
      console.log('Error during movies fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/actors', (req, res) => {
  connection.query('SELECT * FROM actors', (err, result) => {
    if (err) {
      console.log('Error during actors fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/movie/:id', (req, res) => {
  connection.query('SELECT * FROM movies WHERE id = ?', req.params.id, (err, result) => {
    if (err) {
      console.log('Error during movies fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result[0]);
    }
  });
});

router.get('/series', (req, res) => {
  connection.query('SELECT * FROM series ORDER BY RAND()', (err, result) => {
    if (err) {
      console.log('Error during series fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/search/:name', (req, res) => {
  connection.query(`SELECT * FROM movies WHERE name LIKE '%${req.params.name}%'`, (err, result) => {
    if (err) {
      console.log('Error during series fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/big-posters', (req, res) => {
  connection.query('SELECT name, big_poster FROM movies ORDER BY rating DESC LIMIT 3', (err, result) => {
    if (err) {
      console.log('Error during series fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.post('/movie', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO movies SET ?', formData, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.delete('/movie/:id', (req, res) => {
  connection.query('DELETE FROM `movies` WHERE `movies`.`id` = ?', req.params.id, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.put('/movie/:id', (req, res) => {
  connection.query('UPDATE movies SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

router.put('/serie/:id', (req, res) => {
  connection.query('UPDATE series SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

export default router;
