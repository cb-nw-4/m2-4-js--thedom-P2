// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
for (let count = 1; count <= FROGS; count++) {
    // create a lane (<li>)
    const lane = document.createElement('LI');
    // give lane an id
    lane.id = 'lane-' + count;
    // create a <span>
    const spanContain = document.createElement('SPAN');
    // add the lane number to the span
    spanContain.innerHTML = count;
    // append the span to the lane
    lane.appendChild(spanContain);
    // append the lane to the track
    document.getElementById("track").appendChild(lane);
}

// Exercise 1.2 - Call in the frogs!
// declare a variable called racers and assign a value of: empty array
let racers = [];

// write a for loop

// push a frog from frogstable into racers array


for (let count = 0; count < FROGS; count++) {
    racers.push(frogstable[count]);
}

// console.log racers
console.log(racers);

// Exercise 1.3 - Line 'em up!

//Assign each frog to a lane 

let trackNode = [];
let spanContainers = document.querySelectorAll('SPAN');

racers.forEach((frog, i) => {

    spanContainers[i].innerHTML = frog.number;

    //Create a new span Frog-name
    const spanFrogName = document.createElement('SPAN');
    spanFrogName.innerHTML = frog.name;
    spanFrogName.classList.add('frog-name');

    document.getElementById(`lane-${i+ 1}`).appendChild(spanContainers[i]);
    document.getElementById(`lane-${i+ 1}`).appendChild(spanFrogName);

    spanContainers[i].style.backgroundColor = frog.color;

    spanContainers[i].classList.add('frog');
    spanContainers[i].id = `frog-${i}`;

});


//Exercise 1.5 - Track progress
//Set each frog's progress to 0 inside its object, inside of the racers array.
//Set the frog's lane inside its object as well.
racers.forEach((element, i) => {
    element.progress = 0;
    element.lane = `lane-${i+ 1}`;
    //Verify the console.log of racers to validate.
    console.log(element)
})


//Get frag class to move SPAN number
let moveFrog = document.getElementsByClassName('frog');



//Exercise 1.9: Create an array named ranking;
let ranking = [];

//Exercise 1.6 - Make 'em hop!

//Creater acingFrog function 
function racingFrog(racer, i) {
    console.log("racingFrog() ", racer);


    //Create random delay to set interval
    const delay = Math.floor(Math.random() * 1000);

    let mainContainer = document.querySelector('main');

    //Create a div container to print forg's progress
    let divProgress = document.createElement('DIV');

    // Calculate the hop distance (as a percentage of the `trackWidth`) with the following formula.
    const trackWidth = track.offsetWidth;
    const hop = setInterval(function() {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        // add hopLength to progress
        racer.progress += hopLength;
        // add a console log to verify
        console.log(`${racer.name} is ${racer.progress}`);

        //Add the progress to divProgress 
        divProgress.innerHTML = (`${racer.name} is ${racer.progress}`);
        mainContainer.appendChild(divProgress);

        divProgress.style.fontSize = '18px';
        divProgress.style.padding = "25px"

        //Set left style for frog to make pregress in the browser
        moveFrog[i].style.left = `${racer.progress}%`;

        //remplacing the circles with image frog
        moveFrog[i].style.background = "url('./assets/frogx50.png') no-repeat center";


        if (racer.progress >= 100) {
            console.log(`${racer.name} has finished`);
            //As soon as a frog reaches the end, push it into the array ranking.
            ranking.push(racer.name);
            clearInterval(hop)
        };

        //Create a paragraph to add result
        let divContainer = document.createElement('DIV');


        //Once the race finished -- messages to the console
        if (racers.every(racer => racer.progress >= 100)) {
            console.log(`The winner is ${ranking[0]}`);
            console.log(`The second place goes to ${ranking[1]}`);
            console.log(`The thrid place goes to ${ranking[2]}`);

            //Announcing the winner in the page 

            divContainer.innerHTML = (`The winner is ${ranking[0]}`);
            mainContainer.appendChild(divContainer);
            divContainer.style.fontSize = '24px';
            divContainer.style.padding = "50px";


        }

    }, delay);
}

//call racingFrog function for each racer

racers.forEach((racer, i) => {
    racingFrog(racer, i);

})