module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "blogandcomment_database",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "qcqxokofpdqmyo",
    password: "579521c5eb9f6511f1c46887de6623cbeac0a7e2e0eb43597f7f25a49f8a8b16",
    database: "d6svsrev9d0vui",
    host: "ec2-54-145-249-177.compute-1.amazonaws.com",
    dialect: "postgres",
  },
};
