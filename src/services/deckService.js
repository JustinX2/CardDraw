import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const createDeck = async () => {
  const response = await axios.get(`${BASE_URL}/new/shuffle/`);
  return response.data;
};

export const drawCard = async (deckId) => {
  const response = await axios.get(`${BASE_URL}/${deckId}/draw/`);
  return response.data;
};
