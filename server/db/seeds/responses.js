export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('responses').del()

  // Inserts seed entries
  await knex('responses').insert([
    { id: 1, user_auth0_sub: 'google-oauth2|115733908984871137690', quant: 7167, qual: 'fuzzy', datetime: '2024-06-08T07:20:36.281Z', latitude: -41.2823, longitude: 174.7968, climate: 'clear', temp_C: 12 },
    { id: 2, user_auth0_sub: 'google-oauth2|115733908984871137690', quant: 6276, qual: 'fluffy', datetime: '2024-06-08T07:30:45.221Z', latitude: -41.2923, longitude: 174.7868, climate: 'clear', temp_C: 11 },
    { id: 3, user_auth0_sub: 'google-oauth2|115733908984871137690', quant: 4938, qual: 'chalky', datetime: '2024-06-08T07:20:36.281Z', latitude: -41.2723, longitude: 174.7768, climate: 'clear', temp_C: 9 },
  ])
}
