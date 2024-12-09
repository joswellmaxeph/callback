const letterBulbPositions = [
  [
    { x: 18, y: 2 },
    { x: 17, y: 2 },
    { x: 16, y: 2 },
    { x: 15, y: 2 },
    { x: 14, y: 2 },
    { x: 13, y: 2 },
    { x: 19, y: 2 },
    { x: 20, y: 2 },
    { x: 21, y: 2 },
    { x: 22, y: 2 },
    { x: 23, y: 2 },
    { x: 24, y: 2 },
    { x: 25, y: 2 },
    { x: 28, y: 2 },
    { x: 27, y: 2 },
    { x: 26, y: 2 },
    { x: 12, y: 7 },
    { x: 12, y: 6 },
    { x: 12, y: 5 },
    { x: 12, y: 4 },
    { x: 12, y: 3 },
    { x: 12, y: 2 },
    { x: 13, y: 8 },
    { x: 12, y: 8 },
    { x: 14, y: 8 },
    { x: 17, y: 8 },
    { x: 16, y: 8 },
    { x: 15, y: 8 },
    { x: 18, y: 8 },
  ],
  
  [
    { x: 18, y: 8 },
    { x: 14, y: 8 },
    { x: 17, y: 8 },
    { x: 16, y: 8 },
    { x: 15, y: 8 },
    { x: 15, y: 7 },
    { x: 16, y: 6 },
    { x: 17, y: 5 },
    { x: 18, y: 4 },
    { x: 18, y: 5 },
    { x: 18, y: 6 },
    { x: 18, y: 7 },
    { x: 18, y: 9 },
    { x: 18, y: 10 },
    { x: 18, y: 11 },
    { x: 18, y: 12 },
    { x: 18, y: 13 },
    { x: 5, y: 17 },
    { x: 4, y: 18 },
    { x: 3, y: 19 },
    { x: 2, y: 20 },
    { x: 1, y: 21 },
    { x: 10, y: 12 },
    { x: 9, y: 13 },
    { x: 8, y: 14 },
    { x: 7, y: 15 },
    { x: 6, y: 16 },
    { x: 13, y: 9 },
    { x: 12, y: 10 },
    { x: 11, y: 11 },
  ],
  
  [
    { x: 20, y: 4 },
    { x: 20, y: 5 },
    { x: 20, y: 6 },
    { x: 20, y: 7 },
    { x: 20, y: 8 },
    { x: 20, y: 9 },
    { x: 20, y: 10 },
    { x: 20, y: 11 },
    { x: 20, y: 12 },
    { x: 20, y: 13 },
    { x: 21, y: 13 },
    { x: 22, y: 13 },
    { x: 23, y: 13 },
    { x: 24, y: 13 },
    { x: 25, y: 13 },
    { x: 26, y: 13 },
  ],
  
  [
    { x: 22, y: 4 },
    { x: 22, y: 5 },
    { x: 22, y: 6 },
    { x: 22, y: 7 },
    { x: 22, y: 8 },
    { x: 22, y: 9 },
    { x: 22, y: 10 },
    { x: 22, y: 11 },
    { x: 23, y: 11 },
    { x: 24, y: 11 },
    { x: 25, y: 11 },
    { x: 26, y: 11 },
    { x: 27, y: 11 },
    { x: 28, y: 11 },
  ],
    
  [
    { x: 7, y: 25 },
    { x: 6, y: 25 },
    { x: 5, y: 25 },
    { x: 4, y: 25 },
    { x: 3, y: 25 },
    { x: 8, y: 25 },
    { x: 9, y: 25 },
    { x: 10, y: 25 },
    { x: 11, y: 25 },
    { x: 2, y: 25 },
    { x: 12, y: 25 },
    { x: 13, y: 25 },
    { x: 14, y: 24 },
    { x: 14, y: 23 },
    { x: 14, y: 22 },
      { x: 13, y: 21 },
    { x: 14, y: 20 },
    { x: 14, y: 19 },
    { x: 13, y: 18 },
    { x: 12, y: 18 },
    { x: 12, y: 21 },
      { x: 11, y: 18 },
    { x: 9, y: 18 },
    { x: 10, y: 18 },
    
    { x: 7, y: 21 },
    { x: 6, y: 21 },
      { x: 11, y: 21 },
    { x: 10, y: 21 },
    { x: 9, y: 21 },
    { x: 8, y: 21 },
    { x: 8, y: 18 },
      { x: 7, y: 19 },
    { x: 6, y: 20 },
    { x: 5, y: 21 },
    { x: 4, y: 22 },
  
    { x: 3, y: 23 },
    { x: 2, y: 24 },
    { x: 1, y: 25 },
    
  ],
  
  [
      { x: 7, y: 19 },
    { x: 6, y: 20 },
    { x: 5, y: 21 },
    { x: 4, y: 22 },
  
    { x: 3, y: 23 },
    { x: 2, y: 24 },
    { x: 1, y: 25 },
      { x: 16, y: 12 },
    { x: 16, y: 13 },
    { x: 16, y: 14 },
    { x: 16, y: 15 },
    { x: 16, y: 16 },
    { x: 16, y: 17 },
    { x: 16, y: 18 },
    { x: 16, y: 19 },
    { x: 16, y: 20 },
    { x: 16, y: 21 },
    { x: 16, y: 22 },
    { x: 16, y: 23 },
    { x: 16, y: 24 },
    { x: 16, y: 25 },
      { x: 16, y: 11 },
    { x: 16, y: 10 },
    
    { x: 15, y: 11 },
    { x: 14, y: 12 },
    { x: 13, y: 13 },
    { x: 12, y: 14 },
    { x: 14, y: 14 },
    { x: 13, y: 14 },
    { x: 11, y: 15 },
    { x: 10, y: 16 },
    { x: 9, y: 17 },
    { x: 8, y: 18 },
  
    { x: 15, y: 14 },
  ],
  
  [
    { x: 20, y: 15 },
    { x: 19, y: 15 },
    { x: 18, y: 15 },
    { x: 18, y: 16 },
    { x: 18, y: 17 },
    { x: 18, y: 18 },
    { x: 18, y: 19 },
    { x: 18, y: 20 },
    { x: 18, y: 21 },
    { x: 18, y: 22 },
    { x: 18, y: 23 },
    { x: 18, y: 24 },
    { x: 18, y: 25 },
    { x: 19, y: 25 },
    { x: 20, y: 25 },
    { x: 21, y: 15 },
    { x: 22, y: 15 },
    { x: 23, y: 15 },
    { x: 24, y: 15 },
    { x: 21, y: 25 },
    { x: 22, y: 25 },
    { x: 23, y: 25 },
    { x: 24, y: 25 },
  ],
  
  [
    { x: 28, y: 13 },
    { x: 27, y: 14 },
    { x: 26, y: 15 },
    { x: 25, y: 16 },
    { x: 24, y: 17 },
    { x: 23, y: 18 },
    { x: 22, y: 19 },
    { x: 21, y: 20 },
    { x: 29, y: 12 },
    { x: 30, y: 11 },
    { x: 31, y: 10 },
    { x: 22, y: 21 },
    { x: 23, y: 22 },
    { x: 24, y: 23 },
    { x: 25, y: 24 },
    { x: 26, y: 25 },
    { x: 27, y: 26 },
    { x: 28, y: 27 },
    { x: 29, y: 28 },
    { x: 30, y: 29 },
    { x: 31, y: 30 },
      { x: 20, y: 20 },
    { x: 20, y: 19 },
    { x: 20, y: 18 },
    { x: 20, y: 17 },
    { x: 20, y: 21 },
    { x: 20, y: 22 },
    { x: 20, y: 23 },
  ]
];

let litLetter = -1;;

function getBulbIdForPosition(position) {
  return `bulb-${position.x}-${position.y}`;
}

function createBulb(position) {
  const newBulb = document.createElement("a-sphere");
  newBulb.setAttribute("radius", .9);
  newBulb.setAttribute("color", "white");
  newBulb.setAttribute("position", {
    x: 2*(position.x - 16),
    y: 2*(30 - position.y),
    z: -50
  });
  
  newBulb.setAttribute("id", getBulbIdForPosition(position));
  newBulb.classList.add("bulb");
  return newBulb;
}

function lightUp(letter) {
  const letterBulbs = document.querySelectorAll(`.bulb`);
  letterBulbs.forEach(bulb => {
    if (bulb.classList.contains(`letter-${letter}`)) {
      bulb.setAttribute("light", {type: "ambient", color: "white", intensity: .005});
      bulb.setAttribute("material", {emissive: "#ffd0a0", fog: false});
    } else {
      // bulb.removeAttribute("light");
      // bulb.removeAttribute("material");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");
  
  for (let i = 0; i < letterBulbPositions.length; i++) {
    const currentLetterBulbs = letterBulbPositions[i];
    for (let j = 0; j < currentLetterBulbs.length; j++) {
      const currentBulbPosition = currentLetterBulbs[j];
      const newBulbId = getBulbIdForPosition(currentBulbPosition);
      let newBulbElement = document.querySelector(`#${newBulbId}`);
      if (!newBulbElement) {
        newBulbElement = createBulb(currentBulbPosition);
        scene.appendChild(newBulbElement);
      }
      
      newBulbElement.classList.add(`letter-${i}`);
    }
  }

  setInterval(() => {
    const nextLitLetter = (litLetter + 1) % letterBulbPositions.length;
    lightUp(nextLitLetter);
    litLetter = nextLitLetter;
  }, 1000);
});
