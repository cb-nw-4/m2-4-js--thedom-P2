// Preset values



function racingFrog(racer,i) {
    console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth;
    const hop = setInterval(() => { 
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        
        if ((racer.progress + hopLength) >= 100) {
            console.log(racer.name+" has finished!");
            racer.progress = 100;
            clearInterval(hop);
        }
        else{
            racer.progress = racer.progress + hopLength;
            console.log(racer.name+" is at "+racer.progress);
        }
        document.getElementById("frog-"+(i+1)).style.left = racer.progress+'%';
    }, Math.random() * 5000);
}

const FROGS = 3;

for (i=0; i<FROGS; i++){
    let li = document.createElement("li");
    li.setAttribute("id", "li lane-"+(i+1));;
    let sp = document.createElement("span");
    let spText = document.createTextNode(i+1);
    sp.appendChild(spText);
    li.appendChild(sp);
    sp.setAttribute("id", "sp lane-"+(i+1));
    let main = document.querySelector("ol");  
    main.appendChild(li);
}

let racers = [];

// V.0 Not So Random Number Generator
// for (i=0; i<3; i++){
//     if ((rand+i) < 5) {racers.push(frogstable[rand+i]);}
//     else racers.push(frogstable[i]);
//     Object.assign(racers[i], {progress: 0});
//     Object.assign(racers[i], {lane: "lane-"+(i+1)});
// }

let sel = [];
do {
    let rnd = Math.floor(Math.random() * 5);
    if (sel.includes(rnd)); 
    else sel.push(rnd);
}
while (sel.length < 3); 
console.log(sel);

for (i=0;i<3;i++){
    if (sel[i]===0) racers.push(frogstable[0]);
    else if (sel[i]===1) racers.push(frogstable[1]);
    else if (sel[i]===2) racers.push(frogstable[2]);
    else if (sel[i]===3) racers.push(frogstable[3]);
    else if (sel[i]===4) racers.push(frogstable[4]);
    Object.assign(racers[i], {lane: "lane-"+(i+1)});
    Object.assign(racers[i], {progress: 0});
}


racers.forEach((element,i) => {
    let div = document.createElement("div");//5
    let divText = document.createTextNode(racers[i].number);//4
    div.appendChild(divText);//3
    div.setAttribute("class", "frog");//2
    div.setAttribute("id", "frog-"+(i+1));//2
    let sp = document.createElement("span");
    let spText = document.createTextNode(racers[i].name);
    sp.appendChild(spText);
    sp.setAttribute("id", racers[i].name);
    sp.setAttribute("class", "frog-name");
    let main = document.getElementById("li lane-"+(i+1));  
    main.appendChild(sp);
    main.appendChild(div);
    div.style.backgroundColor = racers[i].color;
})


racers.forEach((fObj,i) => {
    racingFrog(fObj,i);
})