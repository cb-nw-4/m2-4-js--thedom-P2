// Preset values
const FROGS = 3;
const track = document.querySelector('#track')



for (let count = 1; count <= FROGS; count++){
  const lane =  document.createElement('li')
  lane.id = `lane-${count}`
  const span = document.createElement('span')
  span.innerText = count
  lane.appendChild(span)
  track.appendChild(lane)
}

const racers = []

for (let i = 0; i < FROGS; i++){
  racers.push(frogstable[i])
}

console.log(racers)

racers.forEach((frog, i) => {
  const laneNode = document.querySelector(`#lane-${i + 1}`)
  const frogNameNode = document.createElement('span')
  const frogNumberNode = document.createElement('span')
  frogNumberNode.innerText = frog.number
  frogNameNode.innerText = frog.name
  frogNumberNode.style = `background-color: ${frog.color}`
  laneNode.appendChild(frogNameNode)
  laneNode.appendChild(frogNumberNode)
})

