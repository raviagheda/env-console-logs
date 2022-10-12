# env-console-log

Apply logs to your node app based on environment flags


### Get Started

Install package from npm: `npm i env-console-logs`

It uses dotenv package as dependency, so create/update .env file and update it as shown below

```env
    enable_console_logs=true
```

And get the function from here
``` typescript
const { consoleLog } = require('env-console-logs');

consoleLog("Hello World!");
```

To disable it on production, just `enable_console_logs=false` or anything but not `true`