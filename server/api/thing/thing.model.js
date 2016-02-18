'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  tag: String,
  active: Boolean
});

export default mongoose.model('Thing', ThingSchema);
