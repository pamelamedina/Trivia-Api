import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList({flashcards}) { 
   
    return (
        <div className="card-grid">           
            {flashcards.map(flashcard => {                
                return <Flashcard key={flashcard.id}  flashcard={flashcard} />
            })}
            
        </div>
    )
}
export default FlashcardList;
