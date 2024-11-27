const API_URL = process.env.NEXTAUTH__URL;
// const { origin } = absoluteUrl(req);
const domen = `http://localhost:3000`;
const stocksApi = `http://localhost:3000/api/stocks`;
const catalogApi = `http://localhost:3000/api/catalog`;
const catalogAllApi = `http://localhost:3000/api/catalog/[product]`;
// 127.0.0.1
// http://localhost:3000
export { stocksApi, catalogApi, catalogAllApi, domen };
