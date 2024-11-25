const API_URL = process.env.NEXTAUTH__URL;
// const { origin } = absoluteUrl(req);
const stocksApi = `http://localhost:3000/api/stocks`;
const catalogApi = `http://localhost:3000/api/catalog`;
const catalogAllApi = `http://localhost:3000/api/catalog/[product]`;

export { stocksApi, catalogApi, catalogAllApi };
