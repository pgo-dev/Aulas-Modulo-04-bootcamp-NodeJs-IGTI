import Sequelize from 'sequelize'
import "dotenv/config"

const url = process.env.CONNECTION_URL

const sequelize = new Sequelize(
  url,
  {
    dialect:'postgres',
    define:{
      timestamps: false
    }
  }
)

export default sequelize