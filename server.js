const express = require('express');
const mongooose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');

// import routes
// const authRoutes = require('./routes/auth');
// const personRoutes = require('./routes/person');
// app
const app = express();

// connect DB
mongooose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log('DB CONNECT ERR', err))


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes
// app.use('/api', authRoutes);
// app.use('/api', personRoutes);
readdirSync('./routes')
.map((r) => app.use("/api", require('./routes/' + r)));


const port = process.env.PORT || 5000;
app.listen(port,
    () => console.log('Server is running on port ', port));
