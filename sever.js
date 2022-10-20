
const mongoose = require('mongoose');
require('dotenv').config();
require('colors');
const { errorHandler } = require('./middleware/errorHandler');

const app = require('./app');

// port 
const port = process.env.PORT || 8000;




// database 
mongoose.connect(process.env.DATABASE_URL_LOCAL).then((x) => {
    console.log("database connected..");
}).catch(err=>console.log(err));

// error handler 
app.use(errorHandler);

// server listener
app.listen(port, () => {
    console.log(`surver is running ON....${port}`.blue.bold);
})