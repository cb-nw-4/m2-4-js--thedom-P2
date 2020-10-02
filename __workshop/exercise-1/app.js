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

//Exercise 1.2
let racers = [];
for(let i =0; i < FROGS ; i++){
    racers.push(frogstable[i]);
}

//Exercise 1.3
let frog;
const laneString = "lane-";
let newID="";

    racers.forEach(function(element,i) {
        frog = document.createElement("span");
        frog.className = "frog";
        frog.innerText = `${element.name} (${element.number})`;
        frog.style.backgroundColor = element.color;
        element.progress = 0;
        element.lane = i+1;
        document.getElementById(laneString.concat(i+1)).appendChild(frog);
    });

//Exercise 1.4

//let theFrog = document.getElementById("lane-1").getElementsByClassName("frog");
let frogName;

racers.forEach(function(element,i){
    frogName = document.createElement("span");
    frogName.innerText = `${element.name}`;
    frogName.className = "frog-name";
    document.getElementById(laneString.concat(i+1)).lastChild.innerText = `${element.number}`;
    document.getElementById(laneString.concat(i+1)).appendChild(frogName);
});


    
    


