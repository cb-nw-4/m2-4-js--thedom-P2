// Preset values
const FROGS = 3;
let progress = 0;



for (i = 1; i<=FROGS; i++){
    let laneLi = document.createElement('li');
    laneLi.setAttribute('id', `lane-${i}`);
    let spanLaneNumbers = document.createElement('span');
    spanLaneNumbers.innerText = i;
    laneLi.appendChild(spanLaneNumbers);
    document.querySelector('.track').appendChild(laneLi);
}

let racers = [];
for (i=0; i<FROGS; i++){
    racers.push(frogstable[i]) 
    // racers.push()'';
    
}
// console.log(racers)
// Completed Exercise 1.2 above this line


/// BACKUP 
racers.forEach(function(racer, i) {
const frog = document.createElement('span');
frog.style.backgroundColor = racer.color
frog.innerHTML= racer.number
document.getElementById(`lane-${i+1}`).appendChild(frog)
frog.classList.add('frog')
const frogName = document.createElement('span');
frogName.classList.add('frog-name')
frogName.innerHTML = racer.name
document.getElementById(`lane-${i+1}`).appendChild(frogName)
// racer[i].push(progress)
racers[i].progress = 0
racers[i].lane = `lane-${i+1}`
racingFrog(racer);




})

function racingFrog(racer) {
    console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        if (racer.progress <= 20){
            racer.progress = racer.progress += hopLength// add hopLength to progress
            console.log(racer.name +" is at " +racer.progress)// add a console log to verify
        }else{
            clearInterval
        }
        

         
      }, 1000);
    
  }
console.log(racers)
