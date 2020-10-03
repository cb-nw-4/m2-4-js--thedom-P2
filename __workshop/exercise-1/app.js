// Preset values
const FROGS = 3;

//Exercise 1.1 - Set up the track

for (let count = 1; count <= FROGS; count++) {
    const laneContainer = document.querySelector('.track');
    const lane = document.createElement('li');
    lane.setAttribute('id', `lane-${count}`); 
    const span = document.createElement('span');
    span.innerText = count;
    lane.appendChild(span);
    laneContainer.appendChild(lane);
}

//Exercise 1.2 - Call in the frogs!
const racers = [];
    for (let i = 0; i < FROGS; i++) {
    const random = Math.floor(Math.random() * frogstable.length);
    racers.push(frogstable[random]); 
    frogstable.splice(random, 1);  //Challenge 1: not picking the same frogs
    }


//Exercise 1.3 - Line 'em up! 
racers.forEach(function(racer, i) {
    const lineFrogs = document.createElement('span');
    lineFrogs.innerHTML = racer.number;
    document.getElementById(`lane-${i+1}`).appendChild(lineFrogs);
    lineFrogs.style.background = racer.color;

//Exercise 1.4 - Add Styling
    lineFrogs.setAttribute('class', 'frog'); 
    const frogName = document.createElement('span');
    frogName.innerHTML = racer.name;
    document.getElementById(`lane-${i+1}`).appendChild(frogName);
    frogName.setAttribute('class', 'frog-name');

//Exercise 1.5 - Track progress
    let trackProgress = {progress: 0};
    let whichLane = {lane: `lane-${i+1}`};
    Object.assign(racer, trackProgress, whichLane);
});
// console.log(racers);

//Exercise 1.6 - Make 'em hop! & Exercise 1.7 - Hopping in the Browser! & Exercise 1.8 - Uncooperative Frogs
const ranking = [];
function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function () {
        setTimeout(function() {
            const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
            racer.progress = racer.progress + hopLength;
            // console.log(racer.name + " is at " + racer.progress);

            const moveFrog = document.querySelector(`#${racer.lane} .frog`);
            moveFrog.style.left = `${racer.progress}%`
        }, Math.floor(Math.random() * 5000));
        
        if (racer.progress > 100) {
            clearInterval(hop);
            // console.log(racer.name + ' has finished!');
            ranking.push(racer.name);
            if (ranking.length === 3) {
                console.log(`Winner is ${ranking[0]}. Second place is ${ranking[1]}. Third place is ${ranking[2]}.`);
            }
        }
    }, 1000)
};

racers.forEach((racer) => {
    racingFrog(racer);
});