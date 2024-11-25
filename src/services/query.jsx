const API_URL = process.env.NEXTAUTH__URL;

export async function getData() {
    let response = await fetch(`http://localhost:3000/api/catalog`, {
        next: {
            revalidate: 60,
        },
    });
    if (response.ok) {
        return response.json();
    }
}
