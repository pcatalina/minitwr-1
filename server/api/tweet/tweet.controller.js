'use strict';

var moment = require('moment');
var _ = require('lodash');
var Tweet = require('./tweet.model');

// Get list of tweets
exports.index = function(req, res) {
  Tweet.find(function(err, tweets) {
    if(err) {
      return handleError(res, err);
    }
    return res.status(200).json(tweets)
  });
};

// Get a single tweet
exports.show = function(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    if(err) {
      return handleError(res, err);
    }
    if(!tweet) {
      return res.send(404);
    }
    return res.json(tweet);
  });
};

// Creates a new tweet in the DB.
exports.create = function(req, res) {

  var userId = req.user._id;
  var text = req.body.tweetText;
  var maxLength = 140;

  if(!text) handleError(res, { message: "Tweet's text is null" });
  if(!text.length) handleError(res, { message: "Tweet is empty" });
  if(!text.length > maxLength) handleError(res, {
    message: "Tweet is too long."
    + " Maximum " + maxLength + " characters allowed"
  });

  var tweet = {
    text: text,
    user: userId,  // TODO: check userId exists
    timestamp: moment()
  };


  Tweet.create(tweet, function(err, tweet) {
    if(err) {
      return handleError(res, err);
    }
    return res.status(201).json(tweet);
  });
};

// Updates an existing tweet in the DB.
exports.update = function(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  Tweet.findById(req.params.id, function(err, tweet) {
    if(err) {
      return handleError(res, err);
    }
    if(!tweet) {
      return res.send(404);
    }
    var updated = _.merge(tweet, req.body);
    updated.save(function(err) {
      if(err) {
        return handleError(res, err);
      }
      return res.status(200).json(tweet);
    });
  });
};

// Deletes a tweet from the DB.
exports.destroy = function(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    if(err) {
      return handleError(res, err);
    }
    if(!tweet) {
      return res.send(404);
    }
    tweet.remove(function(err) {
      if(err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
