import { Router } from "express"
import chat_route from "./chat.js"
import user_route from "./user.js"

const route=Router()

route.use('/user',user_route) // domain/api/v1/user
route.use('chat/',chat_route)  // domain/api/v1/chat

export default route