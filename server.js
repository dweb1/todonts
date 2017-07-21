const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(methodOverride('_method'));

app.set('view engine', 'hbs');

const todontsController = require('./controller/todonts');
app.use('/todonts', todontsController);

app.get('/', (req, res) => {
	res.send("Homepage");
})

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
	console.log('Server up and running on port ' + port);
});