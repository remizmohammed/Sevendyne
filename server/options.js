import path from 'path'

export default {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'sa',
        password: process.env.DB_PASS || 'P@$$word',
        dialect: process.env.DB_TYPE || 'mssql',
        database: process.env.DB_NAME || 'mobile',
        timezone: "+04:00"
    }
}