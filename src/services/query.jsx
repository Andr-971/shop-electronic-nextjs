import {catalogAllApi} from "../../public/path"

export async function getData() {
    let response = await fetch(`${catalogAllApi}`, {
        next: {
            revalidate: 60
        }
    });
    if (response.ok) {
        return response.json();
    }
}