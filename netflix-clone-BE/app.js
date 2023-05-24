import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

const app = express()

app.set('port', 4000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


export default app