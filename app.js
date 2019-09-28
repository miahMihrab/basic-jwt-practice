const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path')



app.use(express.json());
app.use(express.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');


app.use('/', require('./routes/login'));
app.use('/', require('./routes/post'));

app.get('/logout', (req, res) => {
    localStorage.removeItem('token');
    res.send('Logged out')
})

app.listen(3000, () => console.log('Server up and running'));