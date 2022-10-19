const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    // aqui inserimos o datatype da coluna criada
    phoneNum: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;