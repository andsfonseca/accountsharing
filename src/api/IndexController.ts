import { Route, StatusCode } from "../server/HttpServer";

import Controller from "./Controller";

export default class IndexController implements Controller {
    constructor() {
    }

    @Route("/")
    Index(): any {
        return new StatusCode(200, "Hello World!")
        // return "Hello World!"
    }
}