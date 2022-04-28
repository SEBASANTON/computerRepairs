const express = require('express');

const {usersRouter} = require('./routes/users.routes')
const {repairsRouter} = require ('./routes/repairs.routes')

const { db } = require('./utils/database');

const app = express();

app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/repairs', repairsRouter)


db.authenticate()
  .then(() => console.log('Database succeful'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
