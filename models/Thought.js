const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required'
  },
  thoughtText: {
    type: String,
    required: 'ThoughtText is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;