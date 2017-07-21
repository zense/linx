'use strict';

module.exports = {
  up: function (queryInterface, Sequelize)
   {
      return [
      //   queryInterface.createTable('follow',{
      //   freezeTableName: true,
      //   classMethods: {
      //     associate(models) {
      //       follow.hasMany(models.user);
      //       }
      //     }
      //   }),
      //   queryInterface.createTable('Trending', {
      //   freezeTableName: true,
      //   classMethods: {
      //     associate(models) {
      //       Trending.belongsTo(models.User, { foreignKey: 'postedBy' });
      //       Trending.belongsTo(models.Post, {foreignKey: 'url'});
      //       Trending.belongsTo(models.Post, {foreignKey: 'title'});
      //     }
      //   }
      // }),
      queryInterface.addColumn('Post','category',{
          type: Sequelize.STRING,
          allowNull: false
      }),
      queryInterface.addColumn('User','googleId',{
          type: Sequelize.STRING,
          allowNull: true
        }
      )
  ];
},

  down: function(queryInterface){
    return [
      // queryInterface.dropTable('follow'),
      // queryInterface.dropTable('Trending'),
      queryInterface.removeColumn('Post', 'category'),
      queryInterface.removeColumn('User','googleId')
    ]
  }
};
