import { HttpServer } from "./server/HttpServer"
import { IndexController } from "./api/IndexController"

HttpServer.getInstance().addController(IndexController)
HttpServer.getInstance().listen()