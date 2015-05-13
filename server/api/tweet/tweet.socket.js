/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tweet = require('./tweet.model');

exports.register = function(socket) {

  /**
   * Populate user references
   */
  Tweet.schema.post('save', function populate(tweet, next) {
    Tweet.populate(tweet, { path: 'user' }, function(err, tweet) {
      if(err) return console.log(err);
      next(err);
    });
  });

  Tweet.schema.post('save', function(tweet, next) {
    onSave(socket, tweet);
    next();
  });

  Tweet.schema.post('remove', function(tweet, next) {
    onRemove(socket, tweet);
    next();
  });
};

function onSave(socket, doc, cb) {
  socket.emit('tweet:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tweet:remove', doc);
}
