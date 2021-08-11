import { Route } from "../server/HttpServer";

import Controller from "./Controller";

export class IndexController implements Controller {
    constructor() {
    }

    @Route("/")
    Index(): string {
        return "Hello World!"
    }
}