// Preset values
const FROGS = 3;
let tracks=document.getElementById('track');
//ex1.1
for(let i=1;i<=FROGS;i++){
    let lane=document.createElement('li');
    tracks.appendChild(lane);
    let spans=document.createElement('span');
    spans.innerText=i;
    lane.appendChild(spans);

    //giving an ID to each lane.
    lane.setAttribute('id',`lane${i}`);
}

//ex1.2
let racers=[];
for(let j=1; j<=FROGS;j++){
    racers.push(frogstable[j]);
}
console.log(racers);
console.log(racers.name);

//ex1.3
let id=0;
let progress;
let lane;
racers.forEach(function(word, id){
    let froggyway=document.createElement('span');
    froggyway.innerText=word.number;
    froggyway.setAttribute('class','frog');//ex1.4
    froggyway.style.backgroundColor=word.color;
    document.getElementById(`lane${id+1}`).appendChild(froggyway);
    let froggyname=document.createElement('span');
    froggyname.innerText=word.name;
    froggyname.setAttribute('class','frog-name');//ex1.4
    document.getElementById(`lane${id+1}`).appendChild(froggyname);

    //1.5?
    racers[id].progress=0;
    racers[id].lane=`lane${id+1}`;   
});


//ex1.6
function racingFrog(racer) {
    let progress=racer.progress;
    console.log("racingFrog() ", racer);
    const hop= setInterval(function() {
    const trackWidth = tracks.offsetWidth;
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    setTimeout(function() {
        progress=progress+hopLength;
    }, 1000);
    
    console.log(racer.name+" is at "+progress);
    if(progress>=100){
        console.log(racer.name+" has finished");
        clearInterval(hop);
    }
    },1000);

    
}
racers.forEach(function(racer) {
    racingFrog(racer);
});
