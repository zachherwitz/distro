const express = require('express');
const router = express.Router();
const Author = require('../models/authors.js');

// CREATE //
router.post('/', (req, res)=>{
	Author.create(req.body, (err, createdAuthor)=>{
		Author.find({}, (err, foundAuthor) => {
				res.json({all:foundAuthor, created:createdAuthor});
		})
	});

});

// EDIT //
router.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedAuthor) => {
					Author.find({}, (err, foundAuthor) => {
							res.json({all:foundAuthor, updated:updatedAuthor});
					})
        }
    )
})

// DELETE //
router.delete('/:id', (req, res) => {
    Author.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
			Author.find({}, (err, foundAuthor) => {
					res.json({all:foundAuthor, deleted:deletedAuthor});
			})
    });
})

// READ //
router.get('/', (req, res) => {
    Author.find({}, (err, foundAuthor) => {
        res.json(foundAuthor);
    })
});

module.exports = router;
