const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/users.js');
const port = process.env.PORT || 4000

app.use(require('./routes/users.js'));
app.use(userRoutes);
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('default route'));

app.listen(port, () => {
  console.log('app is listening on:', port)
})