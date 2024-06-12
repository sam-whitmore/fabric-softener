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
    table.boolean('is_day')
    table.float('latitude')
    table.float('longitude')
    table.string('climate')
    table.float('temp_C')
    table.float('uv_index')
    table.integer('humidity_percent')
    table.integer('cloud_cover_percent')
    table.float('wind_kph')
    table.string('wind_dir')
    table.float('precip_mm')
  })
};

export async function down(knex) {
  return knex.schema.dropTable('responses')
};
