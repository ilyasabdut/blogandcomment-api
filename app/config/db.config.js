module.exports = {
  // HOST: "localhost",
  // USER: "postgres",
  // PASSWORD: null,
  // DB: "blogandcomment_database",
  // dialect: "postgres",
  HOST: "ec2-54-145-249-177.compute-1.amazonaws.com",
  USER: "qcqxokofpdqmyo",
  PASSWORD: "579521c5eb9f6511f1c46887de6623cbeac0a7e2e0eb43597f7f25a49f8a8b16",
  DB: "d6svsrev9d0vui",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
