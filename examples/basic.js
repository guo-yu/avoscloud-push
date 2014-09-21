var avoscloudPush = require('../');
var pushServer = new avoscloudPush();

var configs = require('./configs');

pushServer
  .set('appId', configs.appId)
  .set('appKey', configs.appKey)
  .process();

// Start push messages
pushServer.push({
  title: 'push message demo',
  deviceId: 'xxxxxx' // just for example
}, function(err, result) {
  if (err) 
    return console.error(err);
  
  console.log(result);
});

// Run Ui
pushServer.run();
