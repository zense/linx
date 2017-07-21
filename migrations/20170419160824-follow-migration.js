'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('follow', {
        text:STRING
      },
      classMethods: {
        associate(models) {
          follow.hasMany(models.user);
        }
      }
    )};

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.dropTable('follow');

  }
};
