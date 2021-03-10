import express from 'express';
import cors from 'cors';
import http from 'http';

import 'dotenv/config';
import './database';

import WebSocket from './lib/WebSocket';
import routes from './routes';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);

    // Conectando WebSocket
    WebSocket.connection(this.server);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
