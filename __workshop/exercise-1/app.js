// Preset values
const FROGS = 3;

for (let count = 1; count <= FROGS; count++) {
    const track = document.querySelector('.track');
    const lane = document.createElement('li');
    lane.setAttribute('id', `lane-${count}`);
    const span = document.createElement('span');
    span.innerText = count;
    lane.appendChild(span);
    track.appendChild(lane);  
}

let racers = [];

for (let i = 0; i <= (FROGS - 1); i++) {
    racers.push(frogstable[i]);
};

racers.forEach (function (racer, i) {
    let laneNumber = i + 1;
    const frog = document.createElement('span');
    racer.frog = frog;
    frog.setAttribute('id', 'frog-' + laneNumber);
    frog.setAttribute('class', 'frog');
    document.getElementById('lane-' + laneNumber).appendChild(frog);
    frog.innerText = racer.number;
    frog.style.backgroundColor = racer.color;
    const frogName = document.createElement('span');
    frogName.setAttribute('class', 'frog-name');
    document.getElementById('lane-'+laneNumber).appendChild(frogName);
    frogName.innerText = racer.name;
    racer.progress = 0;
    racer.lane = 'lane-' + laneNumber;
    // 
});

function racingFrog(racer) {
    console.log("racingFrog() ", racer);
 
    let hop = setInterval(function () {
        const trackWidth = track.offsetWidth;
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress += hopLength;
        console.log(racer.name + ' is at ' + racer.progress);
        Math.floor(Math.random() * 1000)
        racer.frog.style.left = `${racer.progress}%`;
        
        if (racer.progress >= 100) {
            clearInterval(hop);
            console.log(racer.name + ' has reached 100!');
        }
    }, 1000)
}

racers.forEach(function (racer) {
    racingFrog(racer);
});
