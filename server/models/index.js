import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import options from '../options';

const { database, user, password, host, dialect, timezone } = options.db;

// Create sequelize instance
const sequelize = new Sequelize(database, user, password, {
    host,
    dialect,
    define: {
        timestamps: false
    }
});

// Get all the models from models folder
const getModels = sequelize => {
    let models = {};
    const files = fs.readdirSync(path.join(__dirname));
    files.forEach(file => {
        if (file !== 'index.js' && file.indexOf('js.map') === -1) {
            const dep = require(path.join(__dirname, file)).default;
            const entity = dep(sequelize, Sequelize.DataTypes);
            if (entity.$name) {
                models[entity.$name] = entity;
            }
            models[file.replace('.js', '')] = entity;
        }
    });
    // Associate the relationships
    Object.keys(models).forEach(modelName => {
        if ('associate' in models[modelName]) {
            models[modelName].associate(models);
        }
    });

    return models;
};

export default { sequelize: sequelize, ...getModels(sequelize) };
