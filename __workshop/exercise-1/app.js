// Preset values
const FROGS = 3;
const track = document.querySelector("#track");

for (let count = 1; count <= FROGS; count++) {
  const lane = document.createElement("li");
  lane.id = `lane-${count}`;
  const span = document.createElement("span");
  span.innerText = count;
  lane.appendChild(span);
  track.appendChild(lane);
}

const racers = [];

for (let i = 0; i < FROGS; i++) {
  frogstable[i].progress = 0;
  frogstable[i].lane = `lane-${i + 1}`;
  racers.push(frogstable[i]);
  // console.log(frogstable[i])
}

console.log(racers);

racers.forEach((frog, i) => {
  const laneNode = document.querySelector(`#lane-${i + 1}`);
  const frogNameNode = document.createElement("span");
  const frogNumberNode = document.createElement("span");
  frogNumberNode.innerText = frog.number;
  frogNameNode.innerText = frog.name;
  frogNumberNode.style = `background-color: ${frog.color}`;
  laneNode.appendChild(frogNameNode);
  laneNode.appendChild(frogNumberNode);
  frogNumberNode.className = `frog`;
  frogNameNode.className = `frog-name`;
});

function racingFrog(racer) {
  const trackWidth = track.offsetWidth;
  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress = racer.progress + hopLength
    if (racer.progress >= 100) {
      clearInterval(hop)
      console.log(`${racer.name} has Finished!`)
    }
    // console.log(racer.progress)
  
  }, 1000);
    
}

racers.forEach((frog) => {
  racingFrog(frog);
});

