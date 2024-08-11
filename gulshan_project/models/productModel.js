import sequelize from "../database/sequelizeConfig.js";
import { DataTypes } from 'sequelize';
import user from "./userModel.js";

export default sequelize.define(
    'product',
    {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'product_id'
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'product_name'
        },
        productEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'product_email'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            references: {
                model: user,
                key: 'user_id',
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_at'
        },
    },
    {
        tableName: 'product',
        timestamps: true,
        paranoid: true
    }
);