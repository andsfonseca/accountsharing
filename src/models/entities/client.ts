import { DataTypes, Model } from "sequelize";

export class Client extends Model {}

export const ClientBuilder = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
}