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

for(let j=0; j<=frogstable.length;j++){
    let newracer=frogstable[Math.floor(Math.random() * frogstable.length)];
    if(racers.indexOf(newracer)===-1){
    racers.push(newracer);
    }   
    if(racers.length===3){
        break;
    }
}
console.log(racers);
console.log(racers.name);

//ex1.3
let id=0;
let progress;
let lane;
racers.forEach(function(word, id){
    let froggyway=document.createElement('img');
    froggyway.setAttribute("src", "./assets/frogx50.png");
    froggyway.setAttribute('height','30px');
    froggyway.setAttribute('width','30px');
    froggyway.setAttribute('class','frog');
    froggyway.style.borderStyle="solid";
    froggyway.style.borderWidth="6px";
    froggyway.style.borderColor=word.color;
    document.getElementById(`lane${id+1}`).appendChild(froggyway);
    
    // let froggynum = document.createElement('span');
    // froggynum.innerText = `${word.number}`;
    // froggynum.style.backgroundColor=word.color;
    // froggynum.setAttribute('class','frog');
    // document.getElementById(`lane${id+1}`).appendChild(froggynum);

    
    let froggyname=document.createElement('span');
    froggyname.innerText=word.name;
    froggyname.setAttribute('class','frog-name');//ex1.4
    document.getElementById(`lane${id+1}`).appendChild(froggyname);

    
    racers[id].progress=0;
    racers[id].lane=`lane${id+1}`;   
});


//ex1.6
let ranking=[];
function racingFrog(racer) {
    const frognode=document.querySelector(`#${racer.lane} .frog`);
    let progress=racer.progress;
    console.log("racingFrog() ", racer);
    const hop= setInterval(function() {
        const trackWidth = document.querySelector(`#${racer.lane}`).offsetWidth;
        //console.log(trackWidth);
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        //console.log(hopLength);
        //progress=progress+hopLength < 100 ? progress + hopLength: 100;
        if(progress+hopLength<100){
            progress=progress+hopLength;
        }
        else{
            progress= 100;
        }
        frognode.style.left= `${progress/100 * trackWidth}px`;
        //console.log(`${progress/100 * trackWidth}`);
        console.log(racer.name+" is at "+progress);
        if(progress>=100){
            console.log(racer.name+" has finished");
            ranking.push(racer);
            clearInterval(hop);
        }
        
    },Math.random() *1300);  
}

racers.forEach(function(racer) {
    racingFrog(racer);
});

let position=["first", "second", "third"];
let grandfinale=setInterval(function() {
    if (ranking.length === 3) {
        console.log(ranking);
        let display=document.createElement('div');
        document.body.appendChild(display);
        for(let k=0;k<ranking.length;k++){
            console.log(ranking[k].name+" holds "+position[k]+" position!");
            let texter=document.createElement('p');
            texter.innerText=`${ranking[k].name} holds ${position[k]} position!`;
            texter.style.textAlign="center";
            texter.style.fontFamily="Playfair Display, serif";
            texter.style.fontSize="1.5em";
            texter.style.fontWeight="900";
            display.appendChild(texter);
        }
        clearInterval(grandfinale);
    }
}, 1000);


