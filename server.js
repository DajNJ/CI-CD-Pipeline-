const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/version', (req, res) => {
  res.json({ version: '1.0.0', environment: 'development' });
});

app.get('/', (req, res) => {
  res.json({ message: 'CI/CD Demo App', status: 'running' });
});

app.listen(PORT, () => {
  console.log(`CI/CD Demo App running on port ${PORT}`);
  console.log(`Environment: development`);
  console.log(`Version: 1.0.0`);
  console.log(`Health Check: http://localhost:${PORT}/health`);
  console.log(`Metrics: http://localhost:${PORT}/metrics`);
});

module.exports = app;