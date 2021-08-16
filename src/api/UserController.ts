import { Route, StatusCode } from "../server/HttpServer";

import Controller from "./Controller";

export default class UserController implements Controller {
    constructor() {
    }

    @Route("/User/Register", ["post"])
    Index(): any {
        return new StatusCode(200, "XD World!")
    }
}