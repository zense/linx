'use strict';
const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Trending = sequelize.define('Trending', {},{

      freezeTableName: true,
      classMethods: {
        associate(models) {
          Trending.belongsTo(models.User, { foreignKey: 'postedBy' });
          
          Trending.belongsTo(models.Post,{foreignKey: 'url'});
          Trending.belongsTo(models.Post,{foreignKey: 'title'});
        },
  },
});
  return Trending;
};
