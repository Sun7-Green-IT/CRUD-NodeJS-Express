import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  express: {
    port: 3001
  },
  postgres: {
    user: 'green_it',
    host: 'localhost',
    database: 'postgres',
    password: 'p@ssword',
    port: 5432
  }
})