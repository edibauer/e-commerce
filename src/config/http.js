import { createServer } from 'http'
import app from './express.js'

// create server
const server = createServer(app)

// export
export default server