import { Knex } from 'knex';
import { fa, faker } from '@faker-js/faker';
import { randomInt } from 'crypto';

const tableName = 'bills';
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  const customerIds = await knex('users').pluck('id');
  const billType = await knex('bill_types').select('id', 'price');
  const status = ['paid', 'unpaid'];

  // Inserts seed entries
  const bills = Array(100)
    .fill(null)
    .map(() => {
      const billTypeItem = billType[randomInt(0, billType.length - 1)];
      const quantity = randomInt(1, 10);

      return {
        user_id: customerIds[randomInt(0, customerIds.length - 1)],
        bill_type_id: billTypeItem.id,
        quantity: quantity,
        total_amount: billTypeItem.price * quantity,
        status: 'unpaid',
        created_at: faker.date.recent(),
        updated_at: faker.date.recent(),
      };
    });

  await knex(tableName).insert(bills);
}
