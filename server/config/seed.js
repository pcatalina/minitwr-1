/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var mongoose = require('mongoose');

// add '_id' field explicitly,
// so seed users would have same ids after server restart
UserSchema.add({ _id: mongoose.Types.ObjectId });

User.find({}).remove(function() {
  User.create({
      _id: mongoose.Types.ObjectId('00000000test'),
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      _id: mongoose.Types.ObjectId('0000000admin'),
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function(err) {
      if(err) return console.log('ERROR: ' + err);
      console.log('finished populating users');
    }
  );
});
