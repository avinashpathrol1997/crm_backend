module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      address1: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      prov_state: {
        type: Sequelize.STRING
      },
      country_code: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email_1: {
        type: Sequelize.STRING
      },
      email_2: {
        type: Sequelize.STRING
      },
      customer_credit_limit: {
        type: Sequelize.STRING
      },
      customer_accounting_code: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
    });
  
    return Tutorial;
  };