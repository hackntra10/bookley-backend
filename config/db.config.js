module.exports = {
    HOST : 'localhost',
    USER: 'postgres',
    PASSWORD: 'nanda',
    DB: 'bookley',
    dialect: 'postgres',
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}