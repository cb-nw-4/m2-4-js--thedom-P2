// Preset values
const FROGS = 3;

const mainContainer = document.querySelector("main");

// Exercise 1.1 Set up
let lane, laneNumber;
for(let i = 1; i<=FROGS; i++){

    lane = document.createElement("li");
    lane.id = `lane-${i}`;
    laneNumber = document.createElement("span");
    laneNumber.innerText = `${i}`;
    
    lane.appendChild(laneNumber);
    document.getElementById("track").appendChild(lane);
}
