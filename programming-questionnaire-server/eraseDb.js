import { sequelize } from './src/db-models';

const alterDatabaseOnSync = true;
const eraseDatabaseOnSync = true; // if enabled, drops all tables and data on sync
sequelize.sync({
  force: eraseDatabaseOnSync,
  alter: alterDatabaseOnSync,
});
