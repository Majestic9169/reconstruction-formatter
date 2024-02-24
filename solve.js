// COOKIE FUNCTIONS
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = `expires=${date.toUTCString}`;
    document.cookie = `${name}=${value}; ${expires};`;
}


function deleteCookie(name) {
    setCookie(name, null, -100);
}


function getCookie(name) {
    const cookieArray = decodeURIComponent(document.cookie).split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].split(`=`);
        if (cookie[0] == name) {
            return cookie[1];
        }
    }
}
// ----------------------
// Setting Basic Cookies
document.getElementById("heading").innerHTML = `Solve ${getCookie("index0")}`;
document.getElementById("scramble").innerHTML = `${getCookie(`solve0Scram`)}`;
document.getElementById("fps").innerHTML = `${getCookie("fps")}`;
document.getElementById("time").innerHTML = `${getCookie("solve0Time")}`;
const fps = parseFloat(getCookie("fps"));
const time = parseFloat(getCookie("solve0Time"));
// ---------------------
// READING RECON AND SPLITS
function reconMaker() {
    let recon = reconSplitter();
    let splits = splitSplitter();
    let solve = stepMaker(recon);
    solve = timeAdder(splits, solve);
    console.log(solve);
}
// EVENT LISTENER
document.getElementById('submit-button').addEventListener("click", reconMaker);
// MOVE COUNTER FUNCTIONS
function STMmoveCounter(string) {
    const STMmoves = ['R', 'U', 'L', 'F', 'B', 'D', 'S', 'M', 'E', 'r', 'u', 'l', 'd', 'f', 'b', 'x', 'y', 'z'];
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
    const ETMmoves = ['R', 'U', 'L', 'F', 'B', 'D', 'S', 'M', 'E', 'r', 'u', 'l', 'd', 'f', 'b'];
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
function stepMaker(recon) {
    let solve = [];
    for (let i = 1; i < recon.length; i++){
        let step = {};
        step.name = recon[i][1];
        step.STM = STMmoveCounter(recon[i][0]);
        step.ETM = ETMmoveCounter(recon[i][0]);
        solve.push(step);
    }
    return solve;
}

// adding time of each step
function timeAdder(splits, solve){
    for (let i = 0; i < solve.length; i++){
        solve[i].time = (splits[i+1] - splits[i])/fps;
        solve[i].STPS = solve.STM/solve.time;
        // solve[i].STPS = Math.round(solve[i].STPS * 100) / 100;
        // solve[i].ETPS = solve.ETM/solve.time;
        console.log(`tpyeof solve[${i}].STM =` + typeof(solve[i].STM));
        console.log(`type of solve[${i}].time = ` + typeof(solve[i].time));
        console.log(`tpye of solve[${i}].STPS = ${typeof(solve[i].STPS)}`)
        solve[i].time = Math.round(solve[i].time * 100) / 100;
        // solve[i].ETPS = Math.round(solve[i].time * 100) / 100;
    }
    return solve;
}


function reconSplitter(){
    let recon = document.getElementById("reconstruction").value.split('\n');
    for (let i = 0; i < recon.length; i++) {
        recon[i] = recon[i].split('//');
        recon[i][0] = recon[i][0].trim();
        recon[i][1] = recon[i][1].trim();
        console.log(`step${i + 1}=${recon[i][0]}`);
    }
    return recon;
}

function splitSplitter(){
    let splits = document.getElementById("splits").value.split('\n');
    for (let i = 0; i < splits.length; i++) {
        splits[i] = splits[i].trim();
        splits[i] = parseFloat(splits[i]);
        console.log(`split${i + 1}=${splits[i]}`);
    }
    splits.push(fps*time);
    console.log(`splits${splits.length}=${splits[splits.length - 1]}`);
    return splits;
}