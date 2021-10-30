import express from 'express'
import morgan from 'morgan'
import middleware from './middleware'

const server = express()

// Enable logging.
server.use(morgan('tiny'))

// Expose the public directory as /dist and point to the browser version.
server.use(express.static('dist/app'))

server.get('/*', middleware)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})
