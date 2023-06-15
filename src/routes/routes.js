import { Router } from "express";
import { getUser, postUser } from "../controllers/routerUs.js";

// create app routes
const routerUs = Router()

// routes
// get
routerUs.get('/', getUser)

// post 
routerUs.post('/', postUser)

// export 
export default routerUs