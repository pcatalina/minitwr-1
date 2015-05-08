/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tweet = require('./tweet.model');

exports.register = function(socket) {
  Tweet.schema.post('save', function(tweet) {
    Tweet.findOne(tweet)
      .exec(function(err, tweet) {
        if(err) return console.log(err);
        console.log('onSave' + tweet);
        onSave(socket, tweet);
      });
  });
  Tweet.schema.post('remove', function(tweet) {
    Tweet.findOne(tweet)
      .exec(function(err, tweet) {
        if(err) return console.log(err);
        console.log('onSave' + tweet);
        onRemove(socket, tweet);
      });
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tweet:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tweet:remove', doc);
}
