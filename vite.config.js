// vite.config.js

const path = require('path');
const { createServer } = require('vite');
const { spawn } = require('child_process');

// specify your EC2 instance's IP address or domain name
const HOST = '13.126.108.184';

module.exports = {
  // set the base path to your project's root folder
  base: '/',

  // specify the build output folder
  build: {
    outDir: 'dist',
  },

  // configure the server options for production
  server: {
    host: HOST,
    port: 80,
    https: true, // set to true if you want to use HTTPS
    open: false,
    cors: true,
    middlewareMode: 'html',
   
  },

  // configure the plugins for production
  plugins: [],

  // configure the hooks for production
  
};


