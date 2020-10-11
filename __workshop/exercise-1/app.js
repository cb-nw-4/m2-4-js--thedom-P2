// Preset values
const FROGS = 3;
let track = document.getElementById("track")


//write a loop
for (let count = 1; count <= FROGS; count++){
//create lane `li` give them ID and inside sould be `span`
let lane = document.createElement("li");
//setAttribute(name,value)
lane.setAttribute("id","lane-"+count);
  // create a <span>
let span = document.createElement("span");
 // add the lane number to the span
span.innerText = (count);
 // append the span to the lane
  // append the lane to the track
lane.appendChild(span);
track.appendChild(lane);
};
// empty array name racers
let racers = []

for( let i=0; i<=(FROGS-1); i++) { 
    racers.push(frogstable[i]);
};

console.log(racers);

racers.forEach((element,i) => {
    let laneNum = i+1;
    let frog = document.createElement("span");
    //class frog and span
    frog.setAttribute("id","frog-"+laneNum);
    frog.setAttribute("class","frog");
    document.getElementById("lane-"+laneNum).appendChild(frog);
    frog.innerText = ("("+ element.number + ")");
    frog.style.backgroundColor = element.color;

    let frogName = document.createElement("span");
    frogName.setAttribute("class", "frog-name")
    document.getElementById("lane-"+laneNum).appendChild(frogName);
    frogName.innerText = (element.name);
    // frog progress 0 + frog lane 
    element.progress = 0;
    element.lane = "lane-"+laneNum;
});

function racingFrog(racer) {
    console.log("racingFrog() ", racer);
    // Calculate the hop distance
    const trackWidth = track.offsetWidth;
const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    // add hopLength to progress
    racer.progress += hopLength;
    // add a console log to verify
    console.log(racer.name +" is at " + racer.progress);
    let i = indexOf(racer)+1;
    let frogPosition = racer.progress + "%";
    document.getElementById("frog-"+i).style.left = frogPosition;
    if (racer.progress >= 100){
        clearInterval(hop);
        console.log(racer.name + " Win!")
    }
}, 1000);

};
racers.forEach ((element)=> { 
    racingFrog(element);
}); 

