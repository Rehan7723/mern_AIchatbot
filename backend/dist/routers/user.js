import { Router } from "express";
import { getAllusers } from "../controllers/user-controllers.js";
const user_route = Router();
user_route.get("/", getAllusers);
export default user_route;
//# sourceMappingURL=user.js.map