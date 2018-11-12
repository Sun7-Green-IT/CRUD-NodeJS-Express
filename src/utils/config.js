import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  express: {
    port: 3001
  },
  postgres: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'boston',
    port: 5432
  }
})