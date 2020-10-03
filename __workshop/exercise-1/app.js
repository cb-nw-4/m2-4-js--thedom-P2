// Preset values
const FROGS = 3;

const main = document.querySelector('main');

for(let count=1; count<= FROGS; count++){
    const lane = document.createElement('li');
    lane.id = `lane-${count}`;
    const span = document.createElement('span');
        span.innerHTML = `${count}`;
    lane.appendChild(span);
    document.getElementById("track").appendChild(lane);
} 

const racers = [];
    racers.id = "racers";
    for (let frogRacers = 1; frogRacers <= FROGS; frogRacers++){
        let chosenFrog = frogstable[Math.floor(Math.random() * frogstable.length)]
            // for(var y = 1; y <= racers.length; y++) {
            //     if(chosenFrog.name === racers[y].name) {
            //         continue
            //     }
            // }
        // if (racers.number.includes(chosenFrog.number)) {
        //     continue
        // } else {
    //  } 
    racers.push(chosenFrog);
    }

racers.forEach(function(frogElement, index) {
    document.querySelector("#track");
    let frogNumber = document.createElement('span');
        frogNumber.innerHTML = (` ${frogElement.number}`);
        document.querySelector(`#lane-${index + 1}`).appendChild(frogNumber);
        frogNumber.style.backgroundColor = frogElement.color;
        frogNumber.classList.add("frog");
    let frogName = document.createElement('span');
        frogName.innerHTML = (`${frogElement.name}`);
        document.querySelector(`#lane-${index + 1}`).appendChild(frogName);
        frogName.classList.add("frog-name");
    frogElement.progress = 0;
    frogElement.lane = `lane-${index + 1}`;
});
console.log("racers after forEach", racers);

function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    let hop = setInterval(function() {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
    });
    function stopRacing(){
        clearInterval(hop);
        hop = 100;
    }
    console.log("racingFrog() ", racer);
}
racers.forEach(racingFrog());

