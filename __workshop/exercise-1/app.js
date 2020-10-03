// Preset values
const FROGS = 3;

// set up the lanes
for (let lane = 1; lane <= FROGS; lane++){
    const ol = document.querySelector('.track');
    const li = document.createElement('li');
    li.className = 'lane-' + lane;
    const span = document.createElement('span');
    span.innerText = lane;
    li.appendChild(span);
    ol.appendChild(li);
}

// get 3 random and unique frogs from the stable
racers = [];
picksArr = [];

while (picksArr.length < 3 ) {
    let num = Math.floor((Math.random() * 5));
    if (!picksArr.includes(num)) {
        picksArr.push(num);
        racers.push(frogstable[num]);
    }
}

// add frogs to the lanes
racers.forEach((frog, index) => {
    const li = document.querySelector(`.lane-${index + 1}`);
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    frog.progress = 0;
    frog.lane = index + 1;
    span1.style.backgroundColor = frog.color;
    span1.className = 'frog';
    span2.className = 'frog-name';
    newFrogNum = document.createTextNode(frog.number);
    newFrogName = document.createTextNode(frog.name);
    li.appendChild(span1);
    li.appendChild(span2);
    span1.appendChild(newFrogNum);
    span2.appendChild(newFrogName);
});

// Rankings
const main = document.querySelector('main');
const h2 = document.createElement('h2');
h2.innerText = 'Rankings';
main.appendChild(h2);
const ol = document.createElement('ol');
main.appendChild(ol);

for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.className = 'Rank-' + i;
    li.innerText = 'In progress...';
    ol.appendChild(li);
}

// move the frogs down the track
let ranking = 1;
function racingFrog(racer, delay) {
    const trackWidth = document.querySelector('.track').offsetWidth;
    const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);

        if (racer.progress + hopLength > 100) {
            racer.progress = 100;
            rank = document.querySelector(`.Rank-${ranking}`);
            rank.innerText = racer.name;
            ranking++;
            clearInterval(hop);
        } else {
            racer.progress += hopLength;
        }

        document.querySelector(`.lane-${racer.lane} .frog`).style.left = racer.progress + '%';
    }, delay);
}

// And they're off!
racers.forEach(racer => {
    let delay = Math.floor((Math.random() * 3000) + 1); // give each frog a random hop delay
    racingFrog(racer, delay);
});