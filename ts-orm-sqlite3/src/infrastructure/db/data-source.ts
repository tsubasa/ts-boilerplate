import { DataSource } from 'typeorm';
import Sample from './entities/Sample';

export default new DataSource({
  type: 'sqlite',
  database: 'database.db',
  synchronize: true,
  logging: false,
  entities: [Sample],
  migrations: ['src/infrastructure/db/migrations/*.ts'],
});
