const express = require('express');
const router = express.Router();
const data = require('../models/data');

router.get('/', (req, res) => {
	res.render('todonts/index.hbs', {
		todonts: data.seededToDonts
	});
});

router.get('/new', (req, res) => {
	res.render('todonts/new.hbs');
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	res.render('todonts/show.hbs', {
		todonts: todonts,
		id: id
	})
});

router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	res.render("todonts/edit", {
		todonts: todonts,
		id: id
	});
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	todonts.description = req.body.description;
	todonts.urgent = req.body.urgent;
	res.method = "GET";
	res.redirect(`/todonts/${id}`);
});

router.post('/', (req, res) => {
	var newPost = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	data.seededToDonts.push(newPost);
	res.redirect('/todonts');
});

router.delete('/:id', (req, res) => {
	data.seededToDonts.splice(req.params.id, 1);
	res.method = "GET";
	res.redirect("/todonts");
});

module.exports = router;