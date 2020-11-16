const baseUrl = "https://swapi.dev/api/";

export async function getItems(category) {
    const response = await fetch(baseUrl + category);
    if (response.ok) return response.json();
    throw response;
}

export async function getItem(id) {
    const response = await fetch(baseUrl + 'category/' + id);
    if (response.ok) return response.json();
    throw response;
}