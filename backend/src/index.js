require('dotenv').config({ path: '.env.local' })
const createServer = require('./createServer')
const db = require('./db')
const server = createServer()

// @todo Use express middleware to handle cookies (JWT)
// @todo Use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, callback => {
    console.log(`Server is now running on http://localhost:${callback.port}`)
})
