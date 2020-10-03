// Preset values
console.log(document.body);

const FROGS = 3;

for (let count = 1; count <= FROGS; count++) {
    let lane = document.createElement('li');
    lane.setAttribute('id', `lane-${count}`);

    let spanTrack = document.createElement('span');
    // spanTrack.innerText = `lane-${count}`;

    lane.appendChild(spanTrack);
    document.querySelector('#track').appendChild(lane);
    }

// CHOOSING THE FROGS
const racers = [];

for (let count = 1; count <= FROGS; count++) {
    let frogIndex = Math.floor((Math.random() * 4));
    racers.push(frogstable[frogIndex]);
    // console.log(racers);
    }
    //console.log(racers); // JUST TO SEE

//ASSIGN A LANE
//1.3 LOOP
for (let count = 1; count <= FROGS; count++) { 
    let frogElement = document.createElement('span');
    // frogElement.innerText = racers[count-1].name + " " + racers[count-1].number;
    frogElement.innerText = racers[count-1].number;
    frogElement.style.backgroundColor = racers[count-1].color;
    frogElement.setAttribute('class', 'frog');

    //Frog Name
    let frogName = document.createElement('span');
    frogName.innerText = racers[count-1].name;
    frogName.setAttribute('class', 'frog-name');

    //APPEND and ASSIGN
    assignLane = document.getElementById(`lane-${count}`);
    //console.log(assignLane);
    assignLane.appendChild(frogElement);
    assignLane.appendChild(frogName);

    racers[count-1]["progress"] = 0;
    racers[count-1]["lane"] = count;
}
//console.log(racers); // JUST TO SEE

// Exercise 1.6 - Make 'em hop!
function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        racer.progress = racer.progress + hopLength;
        console.log(`${racer.name} is at` + " " + racer.progress)
        if (racer.progress > 100) {
        clearInterval(hop);
        console.log(`${racer.name} has finished!`);
        }
    }, 100); 

    let moveFrog = document.getElementsByClassName('frog');
    moveFrog[i].style.left = `${racer.progress}%`;

    console.log("racingFrog() ", racer);
}

racers.forEach((frog) => {
    racingFrog(frog);
})












//TEST, TO ERASE LATER

// let test = document.createElement('p');
// test.innerText = "TESTING"
// document.querySelector('#lane-1').appendChild(test);
