import sequelize from "../database/sequelizeConfig.js";
import { DataTypes } from 'sequelize';
import user from "./userModel.js";
import product from "./productModel.js";

export default sequelize.define(
    'task',
    {
        taskId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'task_id'
        },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'task_name'
        },
        remarks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        AssignTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'assign_to',
            references: {
                model: user,
                key: 'user_id',
            }
        },
        AssignBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'assign_by',
            references: {
                model: user,
                key: 'user_id',
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id',
            references: {
                model: product,
                key: 'product_id',
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
        tableName: 'task',
        timestamps: true,
        paranoid: true
    }
);