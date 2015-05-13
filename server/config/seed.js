/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var mongoose = require('mongoose');

User.find({}).remove(function() {
  User.create({
      _id: mongoose.Types.ObjectId('000000000000000000000001'),
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      _id: mongoose.Types.ObjectId('000000000000000000000000'),
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function(err) {
      if(err) return console.log('ERROR: ' + err);
    }
  );
});
