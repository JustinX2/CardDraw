import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import DrawButton from './components/DrawButton';
import { createDeck, drawCard } from './services/deckService';
import { useAxios } from './hooks';

function App() {
  const [deckId, setDeckId] = useState(null);
  const [cardData, drawCard] = useAxios('https://deckofcardsapi.com/api/deck/');
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    async function initializeDeck() {
      const newDeck = await createDeck();
      setDeckId(newDeck.deck_id);
    }
    initializeDeck();
  }, []);

  useEffect(() => {
    let timerId = null;
    if (isDrawing && cardData.length > 0 && cardData[cardData.length - 1].remaining > 0) {
      timerId = setInterval(handleDrawCard, 1000);
    }
    return () => clearInterval(timerId);
  }, [isDrawing, cardData]);

  const handleDrawCard = async () => {
    if (cardData.length === 0 || cardData[cardData.length - 1].remaining === 0) {
      drawCard('/new/draw/');
    } else {
      drawCard(`/${cardData[0].deckId}/draw/`);
    }
  };

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing);
  };

  const card = cardData.length > 0 ? cardData[cardData.length - 1].cards[0] : null;
  const remaining = cardData.length > 0 ? cardData[cardData.length - 1].remaining : 52;

  return (
    <div className="card-container">
      <DrawButton isDrawing={isDrawing} onClick={toggleDrawing} />
      <Card card={card} />
    </div>
  );
}

export default App;