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

// SOLVE DATA GENERATING FUNCTIONS
// clean up entire text area and do everything else too
function dumpSplitter() {
    let csTimersolves = document.getElementById('cstimer-dump').value.trim();
    csTimersolves = csTimersolves.split("\n");
    csTimersolves.push("");
    let solves = [];
    for (let i = 0; i < csTimersolves.length - 1; i++) {
        csTimersolves[i] = csTimersolves[i].split('@');
        solves[i] = solveSplitter(csTimersolves[i]);
        console.log(solves[i]);
    }
    // creating cookies for solves (their times, scrams, and index) I AM NO LONGER CREATING INDIVIDUAL COOKIES, INSTEAD DIRECTLY USING THE RECONSTRUCTION OBJECT
    setCookie("fps", parseFloat(document.getElementById("fps").value));
    console.log(solves);
    // CREATING THE RECOSNTRUCTION OBJECT
    let recon = {};
    recon.solver = document.getElementById("solver").value;
    recon.reconstructor = document.getElementById("reconstructor").value;
    recon.event = document.getElementById("event").value;
    recon.competition = document.getElementById("competition").value;
    recon.solves = solves;
    console.log(recon);
    // we need to create a cookie for number of solves, and link to the next page
    let links = "";
    links = `<a href="solve.html" target="_blank">GO</a>` + '\n' + '<br>' + '\n';
    setCookie("reconstruction", JSON.stringify(recon), 1);
    document.getElementById("link-gen").innerHTML = links;
}

// clean up each lines' input
function solveSplitter(entireSolve) {
    // entireSolve looks like 1. 7.45   D' U2 R2 B D2 B L2 B2 U2 L2 F L2 D2 R D L' D2 L' R' U'   @2024-02-28 23:24:21
    let solve = entireSolve.toString().split('   ', 2);
    // solve looks like (only two strings are stored)
    // solve[0] = "1. 7.45"
    // solve[1] = "D' U2 R2 B D2 B L2 B2 U2 L2 F L2 D2 R D L' D2 L' R' U'"
    let temp = solve[0].split(' ');
    solve[0] = temp[1].trim();
    solve[1] = solve[1].trim();

    return solve;
}

// RESET INPUT BUTTON
function reset() {
    let fp = document.getElementById("fps");
    let ta = document.getElementById("cstimer-dump");
    document.getElementById("reconstructor").value = "";
    document.getElementById("solver").value = "";
    document.getElementById("event").value = "";
    document.getElementById("competition").value = "";
    console.log(ta.value);
    ta.value = '';
    console.log(fp.value);
    fp.value = '';
}

// EVENT LISTENERS
document.getElementById("submit-cstimer-dump").addEventListener('click', dumpSplitter);
document.getElementById("reset").addEventListener('click', reset)
document.getElementById("make-dump").addEventListener('click', function () {
    document.getElementById("show-dump").style.display = "";
})

console.log(document.cookie);
