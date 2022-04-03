require('dotenv/config');

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: 'Z',
  synchronize: false,
  logging: ['error', 'warn'],
  logger: 'file',
  entities: ['src/models/*.ts'],
  migrations: ['src/database/migrations/create/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migrations/create',
  },
};
