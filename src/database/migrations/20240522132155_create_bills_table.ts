import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('bills', (table) => {
    table.increments('id').primary();
    table.integer('bill_type_id').unsigned().notNullable();
    table
      .foreign('bill_type_id')
      .references('bill_types.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('user_id').unsigned().notNullable();
    table
      .foreign('user_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.enum('status', ['paid', 'unpaid']).defaultTo('unpaid');
    table.integer('quantity').notNullable();
    table.integer('total_amount').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('bills');
}
