import React, { useEffect, useState } from "react";

const Memory = () => {
  const images = [
    [
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/tree_4.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/rock.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/sand.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_1.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/tree_4.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/rock.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/sand.png",
      "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_1.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/LdTCEUo.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/IHXoEES.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/HfReHl5.jpg",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/FDqGDmc.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/LdTCEUo.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/IHXoEES.png",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/HfReHl5.jpg",
      "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/FDqGDmc.png",
      "/now.png",
      "/now (1).png",
      "/now (2).png",
      "/now (3).png",
      "/now.png",
      "/now (1).png",
      "/now (2).png",
      "/now (3).png",
    ],
  ];

  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [currentImagesIndex, setCurrentImagesIndex] = useState(
    Math.floor(Math.random() * images.length)
  );
  const [Count, setCount] = useState(0);
  const currentImage = images[currentImagesIndex];

  useEffect(() => {
    const shuffledImages = [...currentImage];
    shuffleImg(shuffledImages);
    setCards(shuffledImages);
  }, []);

  const shuffleImg = (images) => {
    images.sort(() => Math.random() - 0.5);
  };

  const flipCard = (index) => {
    if (flippedIndices.length === 2) {
      return;
    }
    if (!flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      const newFlippedIndices = [...flippedIndices, index];
      setFlippedIndices(newFlippedIndices);
      setCount(Count + 1);

      if (newFlippedIndices.length === 2) {
        // setCount(Count + 1);
        const [firstIndex, secondIndex] = newFlippedIndices;
        if (cards[firstIndex] === cards[secondIndex]) {
          setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
          setFlippedIndices([]);
        } else {
          setTimeout(() => {
            setFlippedIndices([]);
            if (navigator.vibrate) {
              // Vibrate the device for 200 milliseconds
              navigator.vibrate(200);
            }
          }, 400);
        }
      }
    }
    console.log("total moves : ", Count);
  };

  const resetGame = () => {
    const shuffledImages = [...currentImage];
    shuffleImg(shuffledImages);
    setCards(shuffledImages);
    setFlippedIndices([]);
    setMatchedIndices([]);
    setCount(0);
  };
  return (
    <div
      className="flex justify-start items-center flex-col gap-8 h-[90vh] 

    bg-slate-900"
    >
      <h1 className="text-white font-bold text-3xl pt-8 sm:pt-5">
        Memo Game
      </h1>
      <div
        className={`  grid-cols-4 sm:grid-cols-6 ${
          matchedIndices.length === cards.length ? "hidden" : "grid"
        }`}
      >
        {cards.map((img, index) => (
          <div
            className=" sm:w-20 sm:h-20 md:w-28 2xl:w-32 md:h-28 2xl:h-32 w-16 h-16 overflow-hidden bg-[#e2e2e236]  m-2 rounded-lg flex justify-center items-center"
            key={index}
            onClick={() => {
              flipCard(index);
            }}
          >
            <img
              src={img}
              className={`sm:size-20 md:size-28 size-16 object-cover ${
                flippedIndices.includes(index) || matchedIndices.includes(index)
                  ? "block"
                  : "hidden"
              }`}
              alt=""
            />
            <img
              src={"/question-mark.png"}
              className={`sm:size-20 md:size-28 size-16 object-cover ${
                flippedIndices.includes(index) || matchedIndices.includes(index)
                  ? "hidden"
                  : "block"
              }`}
              alt=""
            />
          </div>
        ))}
      </div>
      {matchedIndices.length === cards.length && (
        <div className="text-center mt-4">
          <p className="text-white text-xl">Total Moves: {Count}</p>
          <button
            className="mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded shadow"
            onClick={() => {
              resetGame();
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Memory;
