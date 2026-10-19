const path = require('path');
const express = require('express');
const pageRoutes = require('./routes/page.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.locals.namaSitus = 'PRAYATA MOVIE'; 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
});