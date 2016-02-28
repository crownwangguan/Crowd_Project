'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  tag: String,
  position: Number,
  money: Number,
  taken: Number,
  active: Boolean,
  email: String
});

export default mongoose.model('Thing', ThingSchema);
