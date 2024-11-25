const API_URL = process.env.NEXTAUTH__URL;

export const getAllStocks = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await fetch(`${API_URL}/api/stocks`); // http://localhost:3000/api/stocks
    if (!response.ok) throw new Error("Не удалось получить акции");
    return response.json();
};

export const getStocksBySearch = async (search) => {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    const response = await fetch(`${API_URL}/api/stocks?q=${search}`);
    if (!response.ok) throw new Error("Не удалось получить акцию");
    return response.json();
};
