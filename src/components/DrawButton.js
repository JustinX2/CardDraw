import React from 'react';

function DrawButton({ isDrawing, onClick}){
    return (
        <button onClick={onClick} disabled={isDrawing}>
            {isDrawing ? 'Drawing...' : 'Draw Card'}
        </button>
    )
}

export default DrawButton;