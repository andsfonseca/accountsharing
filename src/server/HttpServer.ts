import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import Controller from "../api/Controller";

export const Route = (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    HttpServer.getInstance().addRoute(route, target[propertyKey]());
}

export class StatusCode {
    public code :number;
    public body: any;

    constructor(code: number, body: any) {
        this.code = code;
        this.body = body;
    }
}

export class HttpServer {
    private static instance: HttpServer;

    public static getInstance(): HttpServer {
        if (!HttpServer.instance) {
            HttpServer.instance = new HttpServer();
        }
        return HttpServer.instance;
    }

    private app = express();
    private controllers: Controller[] = []

    private constructor() {
        this.app.use(helmet())
        this.app.use(cors())
        this.app.use(morgan('combined'));
    }

    public addController(controller: typeof Controller) {
        this.controllers.push(new controller())
    }

    public addRoute(route: string, callback: any, method: string = "get") {

        let body = callback;
        let code = 200;

        if(callback instanceof StatusCode){
            let res = (callback as StatusCode)
            body = res.body;
            code = res.code;
        }

        this.app.get(route, (req, res) => {
            res.status(code);
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(body));
        });
    }

    public listen(): void {
        this.app.listen(3001, () => {
            console.log('Listening on port 3001');
        });
    }
}