import React from 'react';
import { useFlip } from '../hooks';

function Card({ card }) {
    const [isFlipped, flip] = useFlip();

    if (!card) return null;

    return (
        <div className="card" onClick={flip}>
            {isFlipped ? (
                <div>Card Back</div>
            ) : (
                <>
                    <h2>{card.value} of {card.suit}</h2>
                    <img src={card.image} alt={`${card.value} of ${card.suit}`} />
                </>
            )}
        </div>
    );
}

export default Card;
