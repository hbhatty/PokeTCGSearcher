// func to add the user's serach to the query parameter of the api
export const pokemonCardSearch = async (query: string) => {
    const API_URL = "https://api.pokemontcg.io/v2/cards"
    const response =  await fetch(`${API_URL}?q=name:${query}`)
    if (!response.ok) {
        if (!response.ok) {
            throw new Error("Failed to fetch cards");
          }
    }
  const data = await response.json();
  // console.log(data.images)
  return data.cards.map((card: any) => ({
    id: card.id,
    name: card.name,
    imageUrl: card.images.small,
  }));
}