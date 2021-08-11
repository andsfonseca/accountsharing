import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import Controller from "../api/Controller";

export const Route = (route: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    HttpServer.getInstance().addRoute(route, target[propertyKey]());
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

    public addController(controller : typeof Controller){
        this.controllers.push(new controller())
    }

    public addRoute(route:string, callback: any, method :string = "get"){
        this.app.get(route, (req, res) => {
            res.send(callback);
        });
    }

    public listen() :void{
        this.app.listen(3001, () => {
            console.log('Listening on port 3001');
        });
    }
}