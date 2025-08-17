const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const express = require('express');

module.exports = function(app) {
  // Tell dev server to serve PDFs directly instead of routing to React
  app.use('/catalog.pdf', express.static(path.join(__dirname, '../public/catalog1.pdf')));
};
