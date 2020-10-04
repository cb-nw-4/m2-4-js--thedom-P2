// Preset values
const FROGS = 3;
let lanes = []; 
let track = document.querySelector("#track")
let trackNumber = "";

for (let count = 1; count <= FROGS; count++) {
    let lane = document.createElement('li');
    lane.setAttribute("id", "lane-" + count);
    trackNumber = document.createElement("span");
    trackNumber.innerText = count;
    lane.appendChild(trackNumber);
    track.appendChild(lane);
    lanes.push(lane);
    console.log(lanes)
}

let racers = [];
let frogsLeft = [...frogstable]
for (let frog = 0; frog < FROGS; frog++) {
    let random = Math.floor(Math.random() * frogsLeft.length);
    let randomFrog = frogsLeft[random];
    console.log(random);
    console.log(randomFrog);
    frogsLeft.splice(random, 1)
    racers.push(randomFrog);
}   
console.log(racers)
console.log(frogsLeft)


racers.forEach(function(racer, i) {
    let racerName = document.createElement("span");
    lanes[i].appendChild(racerName);
    console.log(racerName);
    racerName.setAttribute("class", "frog-name")
    racerName.innerText = racer.name;

    let frogBod = document.createElement("div");
    lanes[i].appendChild(frogBod);
    console.log(frogBod);
    frogBod.setAttribute("class", "frog")
    frogBod.innerText = racer.number;

    frogBod.style.backgroundColor = racer.color;

    racer.progress = 0;
    racer.lane = lanes[i]
})

console.log(racers)

function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    console.log(trackWidth)
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 150) / trackWidth) * 150);
        racer.progress += hopLength;
        console.log(racer.name + " is at " + racer.progress);

        const frogHop = document.querySelectorAll(".frog");        

        for(let i = 0 ; i < frogHop.length; i++) {
            if (frogHop[i].innerText == racer.number) {
                frogHop[i].style.left = racer.progress+"px";
            }
        }

        if (racer.progress >= 625) {
            clearInterval(hop);
            console.log(racer.name + " has finished!")
        }
    }, 1000)
    console.log("racingFrog()", racer);
}

racers.forEach((racer) => {
    racingFrog(racer);
})