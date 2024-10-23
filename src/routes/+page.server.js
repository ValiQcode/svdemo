import { query } from '$lib/db';

export async function load() {
  const res = await query('SELECT * FROM products');
  return {
    products: res.rows
  };
}
