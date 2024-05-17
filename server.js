const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the parent directory
const distPath = path.resolve(__dirname, 'dist/angular-socket-app');
app.use(express.static(distPath));

// For all other routes, return the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});