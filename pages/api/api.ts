
const COLLECTION_SLUG = "by-art";

export async function fetchCollections() {
  return fetch(`https://api.opensea.io/api/v1/collection/${COLLECTION_SLUG}`).then((response) => response.json());
}

