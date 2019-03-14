export default (sequelize, DataType) => {
    const User = sequelize.define('user', {
        userId: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fullName: {
            type: DataType.STRING(255),
            allowNull: false
        },
        userName: {
            type: DataType.STRING(255),
            allowNull: true
        },
        email: {
            type: DataType.STRING(255),
            allowNull: true
        },
        phone: {
            type: DataType.STRING(25),
            allowNull: true
        },
        passwordHash: {
            type: DataType.STRING(100),
            allowNull: true
        },
    })

    return User;
}