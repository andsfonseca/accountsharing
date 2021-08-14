import { HttpServer } from "./server/HttpServer"
import { IndexController } from "./api/IndexController"
import { DbContext } from "./models/Context"

const db = new DbContext()
db.migrate()

HttpServer.getInstance().addController(IndexController)
HttpServer.getInstance().listen()