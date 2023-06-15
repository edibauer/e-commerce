import server from "./config/http.js"; // server
import './config/env.js'

// init server
const bootstrap = () => {
    // listen
    server.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
}

// running server
bootstrap()