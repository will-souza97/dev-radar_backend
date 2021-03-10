import socketio from 'socket.io';

import parseStringAsArray from '../utils/parseStringAsArray';
import calculateDistance from '../utils/calculateDistance';

class WebSocket {
  constructor() {
    this.connections = [];
  }

  // Conexão com WebSocket
  connection(server) {
    this.io = socketio(server);

    this.io.on('connection', (socket) => {
      const { latitude, longitude, techs } = socket.handshake.query;

      this.connections.push({
        id: socket.id,
        coordinates: {
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
        techs: parseStringAsArray(techs),
      });
    });
  }

  findConnections(coordinates) {
    return this.connections.filter(
      (connection) =>
        calculateDistance(coordinates, connection.coordinates) < 10 &&
        connection.techs.some((item) => item.includes(item))
    );
  }

  sendMessage(to, message, data) {
    to.forEach((connection) => {
      this.io.to(connection.id).emit(message, data);
    });
  }
}

export default new WebSocket();
