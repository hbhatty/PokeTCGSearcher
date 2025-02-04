// func to add the user's serach to the query parameter of the api
export const pokemonCardSearch = async (query: string) => {
  const API_URL = "https://api.pokemontcg.io/v2/cards"

  // Make api req
  const response =  await fetch(`${API_URL}?q=name:${query}`)

  // Err check
  if (!response.ok) {
      if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
  }
  // Parse JSON response
  const res = await response.json();
  // Access data array from response
  const dataArray = res.data;
  

  //Map the array of cards to return as an object
  return dataArray.map((card: any) => ({
    id: card.id,
    name: card.name,
    imageUrl: card.images.small,
  }));
}