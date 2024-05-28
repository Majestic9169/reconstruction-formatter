// COOKIE FUNCTIONS
// a function to set cookies
// won't be useful for the solve.js pages
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString}`;
  document.cookie = `${name}=${value}; ${expires};`;
}
// a function to delete cookies by setting it's expiry to the past
// also not useful for the solve.js pages
function deleteCookie(name) {
  setCookie(name, null, -100);
}
// a function to get cookies from the browser, namely for the index, solveTime, solveScram, and fps
//very useful
function getCookie(name) {
  const cookieArray = decodeURIComponent(document.cookie).split("; ");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].split(`=`);
    if (cookie[0] == name) {
      return cookie[1];
    }
  }
}

// Setting Our Basic Cookies
// we need cookies for the index, fps, solveTime, and solveScram, then we need to insert them into the html page
// GETTING THE COOKIES
let reconstruction = getCookie("reconstruction");
reconstruction = JSON.parse(reconstruction);
console.log(reconstruction);
document.getElementById("fps").value = parseFloat(getCookie("fps"));
let timeElement = document.getElementById("time");
timeElement.value = parseFloat(reconstruction.solves[0][0]);
let scram = reconstruction.solves[0][1];
let numberOfSolves = parseInt(reconstruction.solves.length);
let currentSolveNumber = 1;


// MAKING BUTTONS and variables to store solves
let buttons = "";
for (let i = 0; i < numberOfSolves; i++) {
  buttons += `<button class="btn" id="solve${i + 1}btn">solve ${i + 1
    }</button>`;
}
document.getElementById("buttons").innerHTML = buttons;

// I NEED A DATA CHANGER (what?)
//looping event listener for all buttons
for (let i = 0; i < numberOfSolves; i++) {
  document.getElementById(`solve${i + 1}btn`).addEventListener("click", function () {
    timeElement.value = parseFloat(reconstruction.solves[i][0]);
    scram = reconstruction.solves[i][1];
    currentSolveNumber = i + 1;
    document.getElementById("reconstruction").value = "";
    document.getElementById("splits").value = "";
    document.getElementById("title").innerHTML = `SOLVE ${currentSolveNumber}`;
    document.getElementById("heading").innerHTML = `SOLVE ${currentSolveNumber}`;
    document.getElementById("scramble").innerHTML = scram;
    let scramSerialized = encodeURIComponent(scram);
    document.getElementById("alg.cubing.net").src = `https://alg.cubing.net/?alg=&setup=${scramSerialized}`;
    document.getElementById("link").href = `https://alg.cubing.net/?alg=&setup=${scramSerialized}`;
    document.getElementById("link").target = `_blank`;
    let time = document.getElementById("time").value;
  })
}

// INSERTING THEM INTO THE HTML PAGE
document.getElementById("title").innerHTML = `SOLVE ${currentSolveNumber}`;
document.getElementById("heading").innerHTML = `SOLVE ${currentSolveNumber}`;
document.getElementById("scramble").innerHTML = scram;
let scramSerialized = encodeURIComponent(scram);
document.getElementById("alg.cubing.net").src = `https://alg.cubing.net/?alg=&setup=${scramSerialized}`;
let fps = document.getElementById("fps").value;
let time = document.getElementById("time").value;
document.getElementById("link").href = `https://alg.cubing.net/?alg=&setup=${scramSerialized}`;
document.getElementById("link").target = `_blank`;


// READING RECON AND SPLITS
// reconmaker is the func that is called at the click of the submit button
// it includes the reconsplitter, splitsplitter functions whose purpose is to break down the inputted reconstructions and splits into arrays
// the stepmaker function creates an array of objects that include each step of the solve, however it only adds the STM and ETM of each solve
// the timeadder function is what gives the steps their remaining properties
// then we use the table funtions to quickly create the table that shows the statistics
// the url maker function is used to give the correct source to the iframe to visualise the solve on alg.cubing.net
function clickSubmit() {
  //setting fps and time at time of clicking lets user change the values if rquired
  fps = document.getElementById("fps").value;
  time = timeElement;
  // here we create the solve object that stores each steps and their required parameters
  let recon = reconSplitter();
  let splits = splitSplitter();
  let solve = stepMaker(recon);
  solve = timeAdder(splits, solve);
  let inspec = {
    name: recon[0][1],
    moves: recon[0][0],
    STM: "",
    ETM: "",
    time: "",
    STPS: "",
    ETPS: "",
  };
  solve.unshift(inspec);
  //here we are generating a table with stats using the solve object
  let table = document.getElementById("table");
  table.innerHTML = "";
  let data = Object.keys(solve[0]);
  generateTable(table, solve);
  generateTableHead(table, data);
  //we add the solve reconstruction to the alg.cubing.net iframe to be able to visualise it while submitting
  let url = urlMaker(recon);
  document.getElementById("alg.cubing.net").src = url;
  document.getElementById("link").href = url;
  //we log the solve object as this is the main purpose of the enire process
  console.log(solve);
  //we display the save button so that the solve can be submitted and create an event listener for it
  document.getElementById("save").style.display = "";
  document.getElementById("save").addEventListener("click", saveSolve(solve));
}

const len = (str) => {
  // Creating new Blob object and passing string into it
  // inside square brackets and then
  // by using size property storin the size
  // inside the size variable
  let size = new Blob([str]).size;
  return size;
};

// MOVE COUNTER FUNCTIONS
// these functions will count the Slice Turn Metric and Execution Turn Metric movecount of the string given to them by looking for the required characters
// STM includes rotations while ETM does not
function STMmoveCounter(string) {
  const STMmoves = [
    "R",
    "U",
    "L",
    "F",
    "B",
    "D",
    "S",
    "M",
    "E",
    "r",
    "u",
    "l",
    "d",
    "f",
    "b",
    "x",
    "y",
    "z",
  ];
  let moves = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < STMmoves.length; j++) {
      if (string.charAt(i) === STMmoves[j]) {
        moves++;
        break;
      }
    }
  }
  return moves;
}
function ETMmoveCounter(string) {
  const ETMmoves = [
    "R",
    "U",
    "L",
    "F",
    "B",
    "D",
    "S",
    "M",
    "E",
    "r",
    "u",
    "l",
    "d",
    "f",
    "b",
  ];
  let moves = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < ETMmoves.length; j++) {
      if (string.charAt(i) === ETMmoves[j]) {
        moves++;
        break;
      }
    }
  }
  return moves;
}

// CREATING LIST FOR DATA
// this is the stepmaker function that creates the intial array of objects
function stepMaker(recon) {
  let solve = [];
  for (let i = 1; i < recon.length; i++) {
    let step = {};
    step.name = recon[i][1];
    step.moves = recon[i][0];
    step.STM = STMmoveCounter(recon[i][0]);
    step.ETM = ETMmoveCounter(recon[i][0]);
    solve.push(step);
  }
  let step = {};
  step.name = `Total`;
  step.moves = "";
  step.STM = 0;
  step.ETM = 0;
  for (let i = 0; i < solve.length; i++) {
    step.STM += solve[i].STM;
    step.ETM += solve[i].ETM;
  }
  solve.push(step);
  return solve;
}

// adding time and tps of each step
function timeAdder(splits, solve) {
  for (let i = 0; i < solve.length - 1; i++) {
    solve[i].time = (splits[i + 1] - splits[i]) / fps;
    solve[i].STPS = solve[i].STM * (1 / solve[i].time);
    solve[i].STPS = Math.round(solve[i].STPS * 100) / 100;
    solve[i].ETPS = solve[i].ETM * (1 / solve[i].time);
    solve[i].ETPS = Math.round(solve[i].ETPS * 1000) / 1000;
    solve[i].time = Math.round(solve[i].time * 1000) / 1000;
  }
  let time = document.getElementById("time").value;
  let x = solve.length - 1;
  solve[x].time = time;
  solve[x].STPS = solve[x].STM / solve[x].time;
  solve[x].ETPS = solve[x].ETM / solve[x].time;
  solve[x].ETPS = Math.round(solve[x].ETPS * 1000) / 1000;
  solve[x].STPS = Math.round(solve[x].STPS * 1000) / 1000;
  return solve;
}

// these are the functions that clean up the given input data
function reconSplitter() {
  let recon = document.getElementById("reconstruction").value.trim();
  recon = recon.split("\n");
  for (let i = 0; i < recon.length; i++) {
    recon[i] = recon[i].split("//");
    recon[i][0] = recon[i][0].trim();
    recon[i][1] = recon[i][1].trim();
    console.log(`step${i + 1}=${recon[i][0]}`);
  }
  return recon;
}

function splitSplitter() {
  let splits = document.getElementById("splits").value.trim();
  splits = splits.split("\n");
  for (let i = 0; i < splits.length; i++) {
    splits[i] = splits[i].trim();
    splits[i] = parseFloat(splits[i]);
    console.log(`split${i + 1}=${splits[i]}`);
  }
  let time = document.getElementById("time").value;
  splits.push(fps * time + splits[0]);
  console.log(`splits${splits.length}=${splits[splits.length - 1]}`);
  return splits;
}

//table generator functions
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

// https://alg.cubing.net/?alg=&setup= is the base format

function urlMaker(recon) {
  let solve = "";
  for (let i = 0; i < recon.length; i++) {
    solve += recon[i][0] + ` // ` + recon[i][1] + `\n`;
  }
  solve = encodeURIComponent(solve);
  let url = `https://alg.cubing.net/?alg=${solve}&setup=${scramSerialized}`;
  console.log(url);
  return url;
}

// MAKING SOLVE SUBMIT FUNCTION
function saveSolve(solve) {
  reconstruction.solves[currentSolveNumber - 1].push();
  reconstruction.solves[currentSolveNumber - 1][2] = solve;
  console.log(reconstruction);
  setCookie("reconstruction", JSON.stringify(reconstruction), 3);
}

// EVENT LISTENER
document.getElementById("submit-button").addEventListener("click", clickSubmit);

