// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
let track = document.querySelector(".track");
for (let count = 1; count <= FROGS; count++) {  
  // create a lane (<li>)
  let lane = document.createElement("li");
  // give lane an id
   lane.id = `lane-${count}`;
  // create a <span>
  let mySpan = document.createElement("span");
  // add the lane number to the span
  mySpan.innerHTML = `${count}`;
  // append the span to the lane
  lane.appendChild(mySpan);
  // append the lane to the track
  track.appendChild(lane);
}


// Exercise 1.2 - Call in the frogs!
// declare a variable called racers and assign a value of: empty array
let racers = [];
// write a for loop
for (let count = 1; count <= FROGS; count++) {     
    const randomIndex = Math.floor(Math.random() * frogstable.length);
    racers.push(frogstable[randomIndex]);
    frogstable.splice(randomIndex,1);
}
console.log(racers);
console.log(frogstable);
// push a frog from frogstable into racers array

// console.log racers

// Exercise 1.3 and 1.4
racers.forEach((item, index) => {
  let lane = document.getElementById(`lane-${index + 1}`);
  let frog = document.createElement("span");
  frog.innerHTML = item.number ;
  lane.appendChild(frog);
  frog.style.background = item.color;
  frog.classList.add("frog");

  let frogName = document.createElement("span");
  frogName.innerHTML =  item.name;
  lane.appendChild(frogName);  
  frogName.classList.add("frog-name");

  const obj = {progress: 0, lane: lane.id};
  racers[index] = {...item, ... obj};
});
console.log(racers);