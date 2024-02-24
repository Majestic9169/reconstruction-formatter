// COOKIE FUNCTIONS START


function setCookie(name, value, days){
    const date = new Date();
    date.setTime(date.getTime() + days*24*60*60*1000);
    let expires = `expires=${date.toUTCString}`;
    document.cookie = `${name}=${value}; ${expires};`;
}


function deleteCookie(name){
    setCookie(name, null, -100);
}


function getCookie(name){
    const cookieArray = decodeURIComponent(document.cookie).split('; ');   
    for(let i = 0; i < cookieArray.length; i++){
        let cookie = cookieArray[i].split(`=`);
        if (cookie[0] == name) {
            return cookie[1];
        }
    }
}


// ----------------------
// SOLVE DATA GENERATING FUNCTIONS
function dumpSplitter() {
    let csTimersolves = document.getElementById('cstimer-dump').value.split('\n');
    let solves = [];
    for (let i = 0; i < csTimersolves.length - 1; i++) {
        csTimersolves[i] = csTimersolves[i].split('@');
        solves[i] = solveSplitter(csTimersolves[i]);
        console.log(solves[i]);
    }
    // creating cookies
    setCookie("fps", parseFloat(document.getElementById("fps").value));
    for (let i = 0; i < solves.length; i++){
        storeSolve(i, solves[i]);
        console.log(getCookie(`solve${i}Time`), getCookie(`solve${i}Scram`));
    }
    // create pages

}


function solveSplitter(entireSolve) {
    let solve = entireSolve.toString().split('   ', 2);
    let temp = solve[0].split(' ');
    solve[0] = temp[1].trim();
    solve[1] = solve[1].trim();

    return solve;
}

// ---------------------------------
// SOLVE COOKIES GENERATOR
function storeSolve(index, solve){
    setCookie(`index${index}`, parseInt(index) + 1, 1);
    setCookie(`solve${index}Time`, solve[0], 1);
    setCookie(`solve${index}Scram`, solve[1], 1);
}
// -----------------------

// EVENT LISTENERS
document.getElementById("submit-cstimer-dump").addEventListener('click', dumpSplitter);
// ---------------

console.log(document.cookie);
