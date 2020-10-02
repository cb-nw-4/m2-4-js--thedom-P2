// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
for (let i = 1; i <= FROGS; i++){
    const li = document.createElement('li');
    li.setAttribute("id", `lane-${i}`);
    const span = document.createElement('span');
    span.innerText = `${i}`;
    li.appendChild(span);
    const track = document.querySelector('ol');
    track.appendChild(li);
}

// Exercise 1.2 - Call in the frogs!
let racers = [];
let racer;
while (racers.length < FROGS) {
    i = Math.floor(Math.random() * frogstable.length);
    racer = frogstable[i];
    if (racers.includes(racer) !== true) {
        racers.push(racer);
    }
}

console.log(racers);

// Exercise 1.3 - Line 'em up! && Exercise 1.4 - Add Styling && Exercise 1.5 - Track progress
racers.forEach((racer, i) => {
    const lane = document.getElementById(`lane-${i + 1}`)
    const racerName = document.createElement('span');
    racerName.innerText = racer.name;
    const racerNumber = document.createElement('span');
    racerNumber.innerText = racer.number;
    lane.appendChild(racerName);
    lane.appendChild(racerNumber);
    racerName.className = "frog-name";
    racerNumber.className = "frog";
    racers[i].progress = 0;
    racers[i].lane = `lane-${i + 1}`;
});

// Exercise 1.6 - Make 'em hop! && Exercise 1.7 - Hopping in the Browser! && Exercise 1.8 - Uncooperative Frogs && Exercise 1.9 - And the Winner is...
let ranking = [];

function racingFrog(racer) {
    console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress = Math.min(racer.progress + hopLength, 100);
        let prog = document.querySelector(`#${racer.lane} .frog`)
        prog.style.left = `${racer.progress}%`;
        console.log(`${racer.name} is at ${racer.progress}%`);
        if (racer.progress >= 100) {
            clearInterval(hop);
            ranking.push(racer.name);
        }
        if (ranking.length === 3) {
            console.log(`${ranking[0]} is the first! followed at the second place by ${ranking[1]} and at last position we have ${ranking[2]}.`);
            const main = document.querySelector('main');
            const h2 = document.createElement('h2');
            main.appendChild(h2);
            h2.innerText = `THE WINNER IS`;
            const name = document.createElement('div');
            main.appendChild(name);
            name.innerText = `${ranking[0]}`;
        }
    }
    , Math.random() * 1000);
}

racers.forEach(racingFrog);



