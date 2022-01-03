const router = require('express').Router();
const { 
    addThought,
    removeThought,
    getAllThought,
    updateThought,
    getThoughtById,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up GET all /api/thoughts
router.route('/').get(getAllThought);

// Set up GET one and UPDATE at /api/thoughts/:id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought);

// Set up POST at /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// Set up PUT(Reaction) and DELETE(Thought) at /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

// Set up DELETE(Reaction) at /api/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;