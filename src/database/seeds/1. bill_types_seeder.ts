import { Knex } from 'knex';

const tableName = 'bill_types';
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    { name: 'Listrik', price: 250.0 },
    { name: 'Air', price: 150.0 },
    { name: 'Internet', price: 100.0 },
    { name: 'TV Kabel', price: 200.0 },
  ]);
}
