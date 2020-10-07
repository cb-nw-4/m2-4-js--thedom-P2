// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
let track = document.querySelector(".track");
for (let count = 1; count <= FROGS; count++) {  
let lane = document.createElement("li");
lane.id = `lane-${count}`;
let mySpan = document.createElement("span");
mySpan.innerHTML = `${count}`;
lane.appendChild(mySpan);
track.appendChild(lane);
}

// Exercise 1.2 - Call in the frogs!
let racers = [];
for (let count = 1; count <= FROGS; count++) {     
    const randomIndex = Math.floor(Math.random() * frogstable.length);
    racers.push(frogstable[randomIndex]);
    frogstable.splice(randomIndex,1);
}
console.log(racers);

//Exercise 1.3 - Line 'em up!
racers.forEach((item, index) => {
let lane = document.getElementById(`lane-${index + 1}`);
let frog = document.createElement("span");
frog.innerHTML = item.number ;
lane.appendChild(frog);
frog.style.backgroundColor = item.color;
frog.classList.add("frog");

//Exercise 1.4 - Add Styling
let frogName = document.createElement("span");
frogName.innerHTML =  item.name;
lane.appendChild(frogName);  
frogName.classList.add("frog-name");

//Exercise 1.5 - Track progress
const obj = {progress: 0, lane: lane.id};
racers[index] = {...item, ... obj};
});
console.log(racers);

//Exercise 1.6 - Make 'em hop!
let ranking = [];
const results = () => {
    ranking.forEach((item, index) => {
        let i = index + 1;
        console.log("The " + i + " place goes to: " + item.name);
        let frog = document.querySelector(`#${item.lane} .frog`);
        frog.classList.add(`frog-${i}`);        
    });    
}
function racingFrog(racer, func) {
    const randomDelay = Math.floor(Math.random() * 600) + 200;  
    console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth; 
    let frogPosition = document.querySelector(`#${racer.lane} .frog`);   

    const hop = setInterval(function () {        
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);           
        racer.progress = racer.progress + hopLength > 100 ? 100 : racer.progress + hopLength;       
        frogPosition.style.left = `${racer.progress}%`;

    },  randomDelay);      
}

racers.forEach(item => {
    racingFrog(item, results);
});

