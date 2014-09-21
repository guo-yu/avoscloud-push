var kue = require('kue');
var AV = require('avoscloud-sdk');
var pkg = require('../package.json');
var debug = require('debug')(pkg.name);

module.exports = Pusher;

function Pusher(configs) {
  var self = this;
  var customConfigRedis = configs && configs.redis;

  this.jobs = kue.createQueue(customConfigRedis ? configs.redis : {});
  this.joblimit = 10;
  this.configs = {};

  if (configs) {
    Object.keys(configs).forEach(function(key) {
      self.configs[key] = configs[key];
    });
  }
}

Pusher.prototype.set = function(key, value) {
  if (key && value)
    this.configs[key] = value;

  return this;
};

Pusher.prototype.process = function() {
  if (!this.jobs) return;

  this.jobs
    .process(pkg.name, this.joblimit, pushMessage);
}

Pusher.prototype.push = function(message, callback) {
  if (!message || typeof(message) !== 'object')
    return;

  var job = this.jobs.create(pkg.name, message).save();

  if (callback && typeof(callback) === 'function') {
    job.on('complete', function(result) {
      job.log('%s successful pushed.', job.id);
      callback(null, result);
    }).on('failed', function() {
      callback(new Error('Job failed'));
    });
  }
};

Pusher.prototype.run = function(port) {
  if (!this.jobs)
    return;
  kue.app.set('title', pkg.name + ' v' + pkg.version);
  return kue.app.listen(port || 3001);
}

function pushMessage(job, done, ctx) {
  debug(job.id);
  debug(job.data);
  
  // AV.Push.send(job.data);
  done(null, {
    status: 'ok'
  });
}
