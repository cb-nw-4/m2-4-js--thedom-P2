// Preset values
const FROGS = 3;

const track = document.querySelector('.track')

for (let count = 1; count <= FROGS; count++) {
    // create a lane (<li>)
    const lane = document.createElement('li');
    // give lane an id
    lane.setAttribute("id","lane-"+count); 
    // create a <span>
    const span = document.createElement('span');
    // add the lane number to the span
    span.innerText = (count);
    // append the span to the lane
    lane.appendChild(span);
    // append the lane to the track
    track.appendChild(lane);
}

// declare a variable called racers and assign a value of: empty array
let racers = []; 

// write a for loop
// push a frog from frogstable into racers array
for( let i=0; i<=(FROGS-1); i++) { 
    racers.push(frogstable[i]);
}; 

// console.log racers
console.log(racers);

racers.forEach ((element,i)=> { 
    let laneno = i+1;
    const frog = document.createElement('span'); 
    frog.setAttribute("id","frog-"+laneno);
    frog.setAttribute("class","frog");
    document.getElementById("lane-"+laneno).appendChild(frog); 
    frog.innerText=(" (" + element.number + ")");
    frog.style.backgroundColor=element.color;
    const frogName = document.createElement('span');
    frogName.setAttribute("class","frog-name");
    document.getElementById("lane-"+laneno).appendChild(frogName);
    frogName.innerText=(element.name);
    element.progress=0;
    element.lane="lane-"+laneno;
}); 

function racingFrog(racer) {
    const trackWidth = track.offsetWidth;
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        // add hopLength to progress
        racer.progress += hopLength;
        // add a console log to verify
        console.log(racer.name +" is at " + racer.progress);
        let i = racers.indexOf(racer)+1;
        let x = racer.progress+ "%";
        document.getElementById("frog-"+i).style.left = x;
        if(racer.progress>=100) { 
            clearInterval(hop); 
            console.log(racer.name + " has finished!")
        }
    }, Math.floor(Math.random()*1500));
}; 

racers.forEach ((element)=> { 
    racingFrog(element);
}); 

const head = document.querySelector('head');
const cssLink = document.createElement('link'); 
cssLink.setAttribute('rel','stylesheet');
cssLink.setAttribute('href','./assets/styles.css'); 
head.appendChild(cssLink);