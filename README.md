## avoscloud-push ![NPM version](https://img.shields.io/npm/v/avoscloud-push.svg?style=flat) 

a server side solution to build a push server based on AVOSCloud with built-in MQ, Redis backed.

### Installation
```bash
$ npm install avoscloud-push
```

### Example
```js
var avoscloudPush = require('avoscloud-push');
var pushServer = new avoscloudPush();

pushServer
  .set('appId', 'xxxxxxxxx') // alias for `X-AVOSCloud-Application-Id`
  .set('appKey', 'xxxxxxxxx'); // alias for `X-AVOSCloud-Application-Key`
```

Using push server in exist App server:

```js
app.post('/addSomethingToPushMq', function(req, res, next){
  var TobePushedObject = req.body;
  // lowlevel function,
  // `deviceToken` needed.
  pushServer.push(TobePushedObject);
});
```
Using push server as a single Server.

```js
pushServer.run(3001); // Running push server on port 3001
```

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://raw.githubusercontent.com/turingou/docor/master/docor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.2.0