import React, { useState, useEffect } from "react";

const images = [
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_brown.png",
  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/Nl5u05O.png",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blend.png",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png",
  "https://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_brown.png",
  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/Nl5u05O.png",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const MemoryGame2 = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  useEffect(() => {
    shuffle(images);
    setCards(images);
  }, []);

  const flipCard = (index) => {
    // Prevent flipping more than two cards at the same time
    if (flippedIndices.length === 2) {
      return; // Do nothing if two cards are already flipped
    }

    if (!flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
      if (flippedIndices.length === 1) {
        const firstIndex = flippedIndices[0];
        const secondIndex = index;
        if (cards[firstIndex] === cards[secondIndex]) {
          setMatchedIndices([...matchedIndices, firstIndex, secondIndex]); // Add matched indices to the matchedIndices array
          setFlippedIndices([]);
        } else {
          setTimeout(() => {
            setFlippedIndices([]);
          }, 500);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((img, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-gray-200 relative cursor-pointer"
            onClick={() => flipCard(index)}
          >
            <img
              src={img}
              alt="Memory Card"
              className={`absolute inset-0 w-full h-full object-cover ${
                flippedIndices.includes(index) || matchedIndices.includes(index)
                  ? "block"
                  : "hidden"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame2;
