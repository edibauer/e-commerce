// seaprates express from the server
import express from 'express'
import routerUs from '../routes/routes.js'
// app
const app = express()

// middlewares
app.use(express.json())
app.use('/user', routerUs)

// export
export default app