const express = require('express');
const router = express.Router();
const Article = require('../models/articles.js');
const Author = require('../models/authors.js');

// CREATE //
router.post('/', (req, res) => {
	Author.findById(req.body.authorId, (err, foundAuthor) => {
		Article.create(req.body, (err, createdArticle) => {
			foundAuthor.articles.push(createdArticle);
			foundAuthor.save((err, data) => {
				res.json(createdArticle)
			})
		})
	})
})

// EDIT //
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedArticle) => {
					Article.find({}, (err, foundArticle) => {
							res.json({all:foundArticle, updated:updatedArticle});
					})
        }
    )
})

// DELETE //
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
			Article.find({}, (err, foundArticle) => {
					res.json({all:foundArticle, deleted:deletedArticle});
			})
    });
})

// READ //
router.get('/', (req, res) => {
    Article.find({}, (err, foundArticle) => {
        res.json(foundArticle);
    })
});

module.exports = router;
