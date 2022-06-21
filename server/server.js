const express = require('express');
const cors = require('cors');
require('./config/mongoose.config');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

require('./routes/todos.routes')(app);
require('./routes/notes.routes')(app);
require('./routes/calendar.routes')(app);
require('./routes/quotes.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})