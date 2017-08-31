const express = require('express'),
      port    = process.env.PORT || 3000,
      app     = express();

require('./services/passport');
require('./routes/authRoutes')(app);


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
