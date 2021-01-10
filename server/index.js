/**
 * Dependencias del módulo.
 */
const app = require('./config')
const http = require('http')

/**
 * Obtenga el puerto del entorno y guárdelo en Express.
 */

const port = normalizePort('4000')
app.set('port', port)

/**
 * Crear un servidor HTTP.
 */

const server = http.createServer(app)

/**
 * Escuche en el puerto provisto, en todas las interfaces de red.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalizar el puerto en number, string, or false.
 */

function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

/**
 * Detector de eventos para el evento "error" del servidor HTTP.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Puerto ' + port

  // Manejar errores de escucha específicos con mensajes amigables
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requiere privilegios elevados')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' ya en uso')
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Servidor corriendo en puerto ' + bind)
}
