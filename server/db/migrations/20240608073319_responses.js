/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('responses', (table) => {
    table.increments('id')
    table.string('user_auth0_sub')
    table.integer('quant')
    table.string('qual')
    table.datetime('datetime')
    table.float('latitude')
    table.float('longitude')
    table.string('climate')
    table.integer('temp_C')
  })
};

export async function down(knex) {
  return knex.schema.dropTable('responses')
};
