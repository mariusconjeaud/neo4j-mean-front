const express = require('express');

const dist = process.env.DISTLOCATION || '../../dist/testapp';
const app = express();

app.use(express.static(dist));
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: dist });
});

const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`App running on port ${port}`));
