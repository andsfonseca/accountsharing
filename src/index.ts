import { HttpServer } from "./server/HttpServer"
import { DbContext } from "./models/Context"

import IndexController from "./api/IndexController"
import UserController from "./api/UserController"

const db = new DbContext()
db.migrate()

HttpServer.getInstance().addController(IndexController)
HttpServer.getInstance().addController(UserController)
HttpServer.getInstance().listen()
