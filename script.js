let allowedMovesSTM = ['R', 'U', 'L', 'D', 'F', 'B', 'r', 'u', 'l', 'f', 'd', 'b', 'M', 'S', 'E'];

document.getElementsByName('solve1')[0].addEventListener('submit', function (event) {
    event.preventDefault();

    tablePrinter(event.currentTarget.fps.value);
});

function timeCalculator(frameOne, frameTwo) {
    return (parseFloat(frameTwo) - parseFloat(frameOne));
}

function tablePrinter(fps) {
    let fpsNew = parseFloat(fps);
    let start = parseFloat(event.currentTarget.start.value);
    let cross = parseFloat(event.currentTarget.c.value);
    let f2l1 = parseFloat(event.currentTarget.f1.value);
    let f2l2 = parseFloat(event.currentTarget.f2.value);
    let f2l3 = parseFloat(event.currentTarget.f3.value);
    let f2l4 = parseFloat(event.currentTarget.f4.value);
    let oll = parseFloat(event.currentTarget.o.value);

    let ctime = roundOff(timeCalculator(start, cross) / (fpsNew));
    let time1 = roundOff(timeCalculator(cross, f2l1) / (fpsNew));
    let time2 = roundOff(timeCalculator(f2l1, f2l2) / (fpsNew));
    let time3 = roundOff(timeCalculator(f2l2, f2l3) / (fpsNew));
    let time4 = roundOff(timeCalculator(f2l3, f2l4) / (fpsNew));
    let otime = roundOff(timeCalculator(f2l4, oll) / (fpsNew));
    let ptime = roundOff(parseFloat(event.currentTarget.time.value) - (timeCalculator(start, oll) / (fpsNew)));
    let ttime = roundOff(ctime + time1 + time2 + time3 + time4 + otime + ptime);

    // let timeID = ["ctime", "1time", "2time", "3time", "4time", "otime", "ptime"];
    // let stattime = [ctime, time1, time2, time3, time4, otime, ptime];

    // for (let i = 0; i < 7; i++) {
    //     document.getElementById(`${timeID[i]}`).value = stattime[i];
    // }

    document.getElementById('ctime').innerHTML = ctime;
    document.getElementById('1time').innerHTML = time1;
    document.getElementById('2time').innerHTML = time2;
    document.getElementById('3time').innerHTML = time3;
    document.getElementById('4time').innerHTML = time4;
    document.getElementById('otime').innerHTML = otime;
    document.getElementById('ptime').innerHTML = ptime;
    document.getElementById('ttime').innerHTML = ttime;

    let cmove = moveCounter(event.currentTarget.cross.value);
    let move1 = moveCounter(event.currentTarget.f2l1.value);
    let move2 = moveCounter(event.currentTarget.f2l2.value);
    let move3 = moveCounter(event.currentTarget.f2l3.value);
    let move4 = moveCounter(event.currentTarget.f2l4.value);
    let omove = moveCounter(event.currentTarget.oll.value);
    let pmove = moveCounter(event.currentTarget.pll.value);
    let tmove = cmove + move1 + move2 + move3 + move4 + omove + pmove;

    document.getElementById('cstm').innerHTML = cmove;
    document.getElementById('1stm').innerHTML = move1;
    document.getElementById('2stm').innerHTML = move2;
    document.getElementById('3stm').innerHTML = move3;
    document.getElementById('4stm').innerHTML = move4;
    document.getElementById('ostm').innerHTML = omove;
    document.getElementById('pstm').innerHTML = pmove;
    document.getElementById('tmove').innerHTML = tmove;

    let ctps = roundOff(cmove / ctime);
    let tps1 = roundOff(move1 / time1);
    let tps2 = roundOff(move2 / time2);
    let tps3 = roundOff(move3 / time3);
    let tps4 = roundOff(move4 / time4);
    let otps = roundOff(omove / otime);
    let ptps = roundOff(pmove / ptime);
    let ttps = roundOff(tmove / ttime);

    document.getElementById('ctps').innerHTML = ctps;
    document.getElementById('1tps').innerHTML = tps1;
    document.getElementById('2tps').innerHTML = tps2;
    document.getElementById('3tps').innerHTML = tps3;
    document.getElementById('4tps').innerHTML = tps4;
    document.getElementById('otps').innerHTML = otps;
    document.getElementById('ptps').innerHTML = ptps;
    document.getElementById('ttps').innerHTML = ttps;

    let f2ltime = roundOff(ctime + time1 + time2 + time3 + time4);
    let lltime = roundOff(otime + ptime);
    let cptime = roundOff(ctime + time1);
    let olstime = roundOff(otime + time4);

    document.getElementById('ttime2').innerHTML = ttime;
    document.getElementById('f2ltime').innerHTML = f2ltime;
    document.getElementById('lltime').innerHTML = lltime;
    document.getElementById('cptime').innerHTML = cptime;
    document.getElementById('olstime').innerHTML = olstime;
    document.getElementById('ptime2').innerHTML = ptime;

    document.getElementById('tsplit').innerHTML = '100';
    document.getElementById('f2lsplit').innerHTML = roundOff((f2ltime * 100) / ttime);
    document.getElementById('llsplit').innerHTML = roundOff((lltime * 100) / ttime);
    document.getElementById('cpsplit').innerHTML = roundOff((cptime * 100) / ttime);
    document.getElementById('olssplit').innerHTML = roundOff((olstime * 100) / ttime);
    document.getElementById('pllsplit').innerHTML = roundOff((ptime * 100) / ttime);

    document.getElementById('tstm').innerHTML = tmove;
    document.getElementById('f2lstm').innerHTML = cmove + move1 + move2 + move3 + move4;
    document.getElementById('llstm').innerHTML = omove + pmove;
    document.getElementById('cpstm').innerHTML = cmove + move1;
    document.getElementById('olsstm').innerHTML = omove + move4;
    document.getElementById('pllstm').innerHTML = pmove;

    document.getElementById('tstps').innerHTML = roundOff(tmove / ttime);
    document.getElementById('f2lstps').innerHTML = roundOff((cmove + move1 + move2 + move3 + move4) / f2ltime);
    document.getElementById('llstps').innerHTML = roundOff((omove + pmove) / lltime);
    document.getElementById('cpstps').innerHTML = roundOff((cmove + move1) / cptime);
    document.getElementById('olsstps').innerHTML = roundOff((omove + move4) / olstime);
    document.getElementById('pllstps').innerHTML = roundOff(pmove / ptime);
}

function reformat() {
    let recon = document.getElementById("unfrecon").value.trim().split("\n");
    let steps = ["inspec", "cross", "f2l1", "f2l2", "f2l3", "f2l4", "oll", "pll"]
    console.log("recon", recon.length)
    for (let i = 0; i < 8; i++) {
        document.getElementById(`${steps[i]}`).value = recon[i];
        console.log(recon[i], steps[i]);
    }
    let splits = document.getElementById("unfsplits").value.trim().split("\n");
    let splitIDs = ["start", "c", "1", "2", "3", "4", "o"];
    console.log(splits, splits.length);
    for (let i = 0; i < 7; i++) {
        document.getElementById(`${splitIDs[i]}`).value = splits[i];
        console.log(splits[i], splitIDs[i]);
    }
}

function moveCounter(array) {
    let moves = 0;
    for (let index = 0; index < array.length && array[index] !== '/'; index++) {
        const element = array[index];
        if (checkLegal(element)) {
            moves++;
        }
    }
    return moves;
}

function checkLegal(move) {
    for (let index = 0; index < allowedMovesSTM.length; index++) {
        const element = allowedMovesSTM[index];
        if (element === move) {
            return 1;
        }
    }
    return 0;
}

function roundOff(time) {
    let temp = 100 * time;
    return Math.round(temp) / 100;
}