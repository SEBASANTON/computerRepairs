const { app } = require('./app');

const { Repair } = require('./models/repair.model');
const { User } = require('./models/user.model');

const { db } = require('./utils/database');

db.authenticate()
  .then(() => console.log('Database succeful'))
  .catch(err => console.log(err));

User.hasMany(Repair);
Repair.belongsTo(User);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
