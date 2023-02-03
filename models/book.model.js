module.exports = (sequelize,Sequelize)=> {
    const book = sequelize.define('book', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: Sequelize.STRING,
            allowNull: false
        },
        penulis: {
            type: Sequelize.STRING,
            allowNull: false
        },
        penerbit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tahun: {
            type: Sequelize.STRING,
            allowNull: false
        },
        halaman: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isbn: {
            type: Sequelize.STRING,
            allowNull: false
        },
        created_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at : {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {timestamps : false})

    return book
}