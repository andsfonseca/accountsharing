import { Database } from "../database/Database";

import * as fs from "fs";

import { Client, ClientBuilder } from "./entities/client";

const USER_DB = fs.readFileSync("./docker/postgres/DB_USERNAME").toString()
const PASSWORD_DB = fs.readFileSync("./docker/postgres/DB_PASSWORD").toString()

export class DbContext extends Database{

    constructor(){
        super("accountsharing",USER_DB, PASSWORD_DB, "localhost", 5432)
        this.define("Client", Client, ClientBuilder)
    }
}