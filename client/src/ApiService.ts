const BASE_URL = `http://localhost:3000`;

export function fetchArtworks() {
  return fetch(`${BASE_URL}/artworks`).then((response) => response.json())
}

export function fetchExhibitions() {
  return fetch(`${BASE_URL}/exhibitions`).then((response) => response.json())
}