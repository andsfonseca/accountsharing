import { Sequelize } from "sequelize";

export class Database {

    public context: Sequelize;

    constructor(schemma: string, user: string, password: string, host: string, port: number) {
        this.context = new Sequelize(schemma,
            user,
            password,
            {
                host: host,
                port: port,
                dialect: 'postgres',
                dialectOptions: {
                    ssl: false
                },
                logging: false,
            });

    }

    public async migrate(): Promise<void> {
        try {
            const status = await this.context.sync()
        } catch (error) {
            console.log(error);
        }
    }

    public define(tableName: string, entity: any, entitySettings: any) {

        entity.init(entitySettings, {            
            sequelize : this.context, // We need to pass the connection instance
            modelName: tableName // We need to choose the model name
          });
    }
}