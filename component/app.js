const express = require('express')
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 80;
const app = express();

// For Serving static Files
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({ extended: true}));


// HBS SPECIFIC STUFF
app.set('view engine', 'hbs');

// Serving Templates
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));



// Index Page

app.get('/', (req, res)=> {
  res.status(200).render('index', {
    style: 'index.css'
  });
})

// Weather Page
app.get('/weather', (req, res)=> {
  res.status(200).render('weather', {
    style: 'weather.css'
  });
})

// About Page
app.get('/about', (req, res)=> {
  res.status(200).render('about', {
    style: 'about.css'
  });
})

// Error Page 404
app.get('*', (req, res)=> {
  res.status(200).render('404', {
    style: '404.css',
    errormsg : 'Opps! Page Not Found'
  });
})

// Listen 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});