// Preset values
const FROGS = 3;

const main = document.querySelector("main");

const track = document.getElementById("track");

for (let count = 1; count <= FROGS; count++) {
  const lane = document.createElement("li");
  // create a lane (<li>)
  lane.setAttribute("id", "lane-" + count);
  // give lane an id
  const span = document.createElement("span");
  // create a <span>
  span.innerHTML = count;
  // add the lane number to the span
  lane.appendChild(span);
  // append the span to the lane
  track.appendChild(lane);
  // append the lane to the track
  }

// Exercise 1.2 - Call in the frogs!
// declare a variable called racers and assign a value of: empty array
let racers = [];
// write a for loop
// push a frog from frogstable into racers array
for (let f = 0; f < FROGS; f++) {
  racers.push(frogstable[f]);
}
// console.log racers
console.log(racers);

//exercise 1.3 & exercise 4 & 
racers.forEach(function (racer, i) {
  let laneNum = i+1;
  const frogRacers = document.createElement("span");
  frogRacers.innerHTML = racer.number;
  frogRacers.style.background = racer.color;
  document.getElementById("lane-" + laneNum).appendChild(frogRacers);
  frogRacers.setAttribute("class","frog");
  const frogName = document.createElement("span");
  frogName.innerHTML = racer.name;
  frogName.setAttribute("class","frog-name");
  document.getElementById("lane-" + laneNum).appendChild(frogName);
  //exercise 1.5

  racer.progress = 0;
  racer.lane = "lane-" + laneNum;
});
//verify
console.log(racers);

//exercise 1.6

function racingFrog(racer) {
  console.log("racingFrog()", racer);
  const trackWidth = track.offsetWidth;
  const hop = setInterval(function() {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    // add hopLength to progress
    racer.progress += hopLength;
    // add a console log to verify
    console.log(racer.name + " is at " + racer.progress);
    //8,9,10
    if (racer.progress >= 100) {
      clearInterval(hop);
      console.log(racer.name + " has finished!");
    }
  }, 1000);
  }

racers.forEach((racer) => {
  racingFrog(racer);
});

