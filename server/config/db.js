const {Sequelize} = require('sequelize')

// const dbname = process.env.DATABASE_NAME  ;
// const dbpassword = process.env.DATABAS_PASSWORD;
// const dbhost = process.env.HOST;
// const dbport = process.env.SQL_PORT;
// const  dbuser = process.env.DATABSE_USERNAME;



const dbname = "carsstate_db"
const dbpassword = ""
const dbhost =  "localhost"
const dbport =  3306;
const dbuser = "root";



const db = new Sequelize( dbname, dbuser, dbpassword , {
    host:dbhost,
    dialect: 'mysql',
    port:dbport,
    
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    },
  define: {
      timestamps: false,
      
    },
    logging : false,
  }
);


async function testConnection () {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


testConnection()



module.exports = db