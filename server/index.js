import morgan from 'morgan'
import app from './app'

// Enable logging.
app.use(morgan('tiny'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})
