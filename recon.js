// COOKIE FUNCTIONS
// a function to set cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = `expires=${date.toUTCString}`;
  document.cookie = `${name}=${value}; ${expires};`;
}
// a function to delete cookies by setting it's expiry to the past
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

// getting my recnostruction cookie
let reconstruction = getCookie("reconstruction");
reconstruction = JSON.parse(reconstruction);
console.log(reconstruction);

// printing reconstruction metadata
let metadataDiv = document.getElementById("metadata");
function printMetadata(){
  let metadata = "";
  metadata = `solver: ${reconstruction.solver} <br>event: ${reconstruction.event} <br>competition: ${reconstruction.competition} <br>reconstructed by: ${reconstruction.reconstructor} <br>`;
  metadataDiv.innerHTML = metadata;
  console.log(metadata);
}

// adding div elements for the individual solves
let solvesDiv = document.getElementById("solves");
function solveDivMaker(){
  numberOfsolves = reconstruction.solves.length;
  let solveDivs = [];
  let solves = reconstruction.solves;
 for (let i = 0; i < numberOfsolves; i++){
   solveDivs.push(document.createElement("div"));
   solveDivs[i].id = `solve${i + 1}div`;
   // const content = document.createTextNode("yo");
   // solveDivs[i].appendChild(content);
   solvePrinter(solveDivs[i], i, solves);
   solvesDiv.appendChild(solveDivs[i]);
   } 
}

// printing solve data in each div
function solvePrinter(solveDiv, solveIndex, solves){
  // the solve text itself
  let solve = "";
  for (i = 0; i < solves[solveIndex][2].length - 1; i++){
    solve += `${solves[solveIndex][2][i].moves} // ${solves[solveIndex][2][i].name}<br>`;
  }
  // creating the same table as in the solve.html page, eventually will add the proper stats
  let table = document.createElement("table");
  table.classList.add("myTable");   
  table.border = 2;
  table.innerHTML = "";
  let data = Object.keys(solves[solveIndex][2][0]);
  generateTable(table, solves[solveIndex][2]);
  generateTableHead(table, data);
  // adding the time and scramble
  let solveText = `<br><strong>Solve ${solveIndex + 1}: ${solves[solveIndex][2][8].time}</strong><br><br><strong>${solves[solveIndex][1]}</strong><br><br><div>${solve}</div><br>`
  solveDiv.innerHTML = solveText;
  solveDiv.appendChild(table);
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

window.onload = function() {
  printMetadata();
  solveDivMaker();
};
