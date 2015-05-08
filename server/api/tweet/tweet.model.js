'use strict';

var mongoose = require('mongoose'),
  autopopulate = require('mongoose-autopopulate'),
  Schema = mongoose.Schema;

var TweetSchema = new Schema({
  text: String,
  timestamp: Date,
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    autopopulate: { select: 'name' }
  }
});

TweetSchema.plugin(autopopulate);

module.exports = mongoose.model('Tweet', TweetSchema);
