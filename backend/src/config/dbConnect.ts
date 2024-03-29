import { Sequelize } from "sequelize";

const database = process.env.DATABASE,
  username = process.env.USER,
  password = process.env.PASSWORD;

const connection = async () => {
  //   console.log(database, username, password);
  const sequelize = new Sequelize(`${database}`, `${username}`, `${password}`, {
    host: "localhost",
    dialect: "postgres",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
