import express from 'express';
import { verbose as sqlVerbose } from 'sqlite3';
// import sabd from './models/sabd';
const sabd = {};
const sqlite3 = sqlVerbose();
const PORT = 9103;

// http://timjrobinson.com/how-to-structure-your-nodejs-models-2/

// Sabd model
const db = new sqlite3.Database('./data/iGurbani.sqlite');
sabd.db = db;

// Init app
const app = express();

/**
 * Middleware
 */
app.set('view engine', 'jade');
// Server static files which shares the same dir as the electron front end
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Api for Sabd Desktop');
});

/**
 * search for a sabd
 */
app.get('/search/:type/:query', (req, res) => {
  console.log('Searching for', [req.params.type, req.params.query]);

  if (!req.params.query) {
    res.status(400).json({ error: 'You must supply a query' });
  }

  // Validate search types
  const validSearchTypes = ['fls', 'flsa', 'gurmukhi', 'english'];
  if (validSearchTypes.indexOf(req.params.type) === -1) {
    const error = { error: `not a valid search type: ${req.params.type}` };
    res.status(400).json(error);
  }

  // Execute the search
  sabd.search(req.params.type, req.params.query)
    .then((output) => {
      console.log('Found Sabd for', req.params, output.length);
      res.json(output);
    })
    .catch((err) => {
      console.error('Error finding Sabd', err);
      res.status(400).json({ 'search error': err.message });
    });
});

app.get('/sabd/:sabdNumber', (req, res) => {
  console.log('Getting Sabd number', req.params.sabdNumber);

  sabd.getSabd(req.params.sabdNumber)
        .then((data) => {
          if (!data) {
            throw new Error('Sabd response was empty');
          }
          console.log('Rendering Sabd', req.params.sabdNumber);
          res.render('sabd', data);
        })
        .catch((err) => {
          console.error('Error getting Sabd', err);
          res.status(400).json({ 'search error': err.message });
        });
});

// Listen
app.listen(PORT, () => {
  console.log(`Sabd REST Api listening on TCP: ${PORT}`);
});

process.on('exit', () => {
  // Add shutdown logic here.
  db.close();
  console.log('Shutdown');
});
