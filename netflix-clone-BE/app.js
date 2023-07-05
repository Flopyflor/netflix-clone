import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import routes from './routes/index.js';
const app = express()

app.set('port', 4000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes);

export default app