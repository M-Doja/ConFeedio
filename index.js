const express = require('express'),
      port    = process.env.PORT || 3000,
      app     = express();


app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
