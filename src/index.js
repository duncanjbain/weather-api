const { PORT } = require('./config/vars');
const app = require('./config/express');

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

module.exports = app;
