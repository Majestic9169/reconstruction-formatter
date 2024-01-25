function timeCalculator(frameOne, frameTwo) {
    var fpselement = document.getElementById('fps').value;
    var mulfact = 1 / fpselement;
    return (frameTwo - frameOne) * mulfact;
}
function checkLegal(move) {
    var allowedMovesSTM = ['R', 'U', 'L', 'D', 'F', 'B', 'r', 'u', 'l', 'f', 'd', 'b', 'M', 'S', 'E'];
    for (var index = 0; index < allowedMovesSTM.length; index++) {
        var element = allowedMovesSTM[index];
        if (element === move) {
            return true;
        }
    }
    return false;
}
function moveCounter(array) {
    var moves = 0;
    for (var index = 0; index < array.length && array[index] !== '/'; index++) {
        var element = array[index];
        if (checkLegal(element)) {
            moves++;
        }
    }
    return moves;
}
function roundOff(time) {
    var temp = 100 * time;
    return Math.round(temp) * 0.01;
}
function tablePrinter() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var start = (_a = document.getElementById('start')) === null || _a === void 0 ? void 0 : _a.value;
    var cross = (_b = document.getElementById('c')) === null || _b === void 0 ? void 0 : _b.value;
    var f2l1 = (_c = document.getElementById('1')) === null || _c === void 0 ? void 0 : _c.value;
    var f2l2 = (_d = document.getElementById('2')) === null || _d === void 0 ? void 0 : _d.value;
    var f2l3 = (_e = document.getElementById('3')) === null || _e === void 0 ? void 0 : _e.value;
    var f2l4 = (_f = document.getElementById('4')) === null || _f === void 0 ? void 0 : _f.value;
    var oll = (_g = document.getElementById('0')) === null || _g === void 0 ? void 0 : _g.value;
    var time = (_h = document.getElementById('time')) === null || _h === void 0 ? void 0 : _h.value;
    var ctime = roundOff(timeCalculator(start, cross));
    var time1 = roundOff(timeCalculator(cross, f2l1));
    var time2 = roundOff(timeCalculator(f2l1, f2l2));
    var time3 = roundOff(timeCalculator(f2l2, f2l3));
    var time4 = roundOff(timeCalculator(f2l3, f2l4));
    var otime = roundOff(timeCalculator(f2l4, oll));
    var ptime = roundOff(time - timeCalculator(start, oll));
    var timeID = ["ctime", "1time", "2time", "3time", "4time", "otime", "ptime"];
    var stattime = [ctime, time1, time2, time3, time4, otime, ptime];
    for (var i = 0; i < 7; i++) {
        var a = document.getElementById("".concat(timeID[i]));
        a.innerHTML = stattime[i];
    }
    // document.getElementById('ctime').innerHTML = ctime;
    // document.getElementById('1time').innerHTML = time1;
    // document.getElementById('2time').innerHTML = time2;
    // document.getElementById('3time').innerHTML = time3;
    // document.getElementById('4time').innerHTML = time4;
    // document.getElementById('otime').innerHTML = otime;
    // document.getElementById('ptime').innerHTML = ptime;
    // document.getElementById('ttime').innerHTML = ttime;
    var cmove = moveCounter((_j = document.getElementById('cross')) === null || _j === void 0 ? void 0 : _j.value);
    var move1 = moveCounter((_k = document.getElementById('f2l1')) === null || _k === void 0 ? void 0 : _k.value);
    var move2 = moveCounter((_l = document.getElementById('f2l2')) === null || _l === void 0 ? void 0 : _l.value);
    var move3 = moveCounter((_m = document.getElementById('f2l3')) === null || _m === void 0 ? void 0 : _m.value);
    var move4 = moveCounter((_o = document.getElementById('f2l4')) === null || _o === void 0 ? void 0 : _o.value);
    var omove = moveCounter((_p = document.getElementById('oll')) === null || _p === void 0 ? void 0 : _p.value);
    var pmove = moveCounter((_q = document.getElementById('pll')) === null || _q === void 0 ? void 0 : _q.value);
    var tmove = cmove + move1 + move2 + move3 + move4 + omove + pmove;
    var moveID = ["cstm", "1stm", "2stm", "3stm", "4stm", "ostm", "pstm"];
    var statmove = [cmove, move1, move2, move3, move4, omove, pmove];
    for (var i = 0; i < 7; i++) {
        var a = document.getElementById("".concat(moveID[i]));
        a.innerHTML = statmove[i];
    }
    // document.getElementById('cstm').innerHTML = cmove;
    // document.getElementById('1stm').innerHTML = move1;
    // document.getElementById('2stm').innerHTML = move2;
    // document.getElementById('3stm').innerHTML = move3;
    // document.getElementById('4stm').innerHTML = move4;
    // document.getElementById('ostm').innerHTML = omove;
    // document.getElementById('pstm').innerHTML = pmove;
    // document.getElementById('tmove').innerHTML = tmove;
    var cstps = roundOff(cmove / ctime);
    var stps1 = roundOff(move1 / time1);
    var stps2 = roundOff(move2 / time2);
    var stps3 = roundOff(move3 / time3);
    var stps4 = roundOff(move4 / time4);
    var ostps = roundOff(omove / otime);
    var pstps = roundOff(pmove / ptime);
    var tstps = roundOff(tmove / time);
    var stpsID = ["cstm", "1stm", "2stm", "3stm", "4stm", "ostm", "pstm"];
    var statstps = [cstps, stps1, stps2, stps3, stps4, ostps, pstps];
    for (var i = 0; i < 7; i++) {
        var a = document.getElementById("".concat(stpsID[i]));
        a.innerHTML = statstps[i];
    }
    // document.getElementById('ctps').innerHTML = ctps;
    // document.getElementById('1tps').innerHTML = tps1;
    // document.getElementById('2tps').innerHTML = tps2;
    // document.getElementById('3tps').innerHTML = tps3;
    // document.getElementById('4tps').innerHTML = tps4;
    // document.getElementById('otps').innerHTML = otps;
    // document.getElementById('ptps').innerHTML = ptps;
    // document.getElementById('ttps').innerHTML = ttps;
    var f2ltime = roundOff(ctime + time1 + time2 + time3 + time4);
    var lltime = roundOff(otime + ptime);
    var cptime = roundOff(ctime + time1);
    var olstime = roundOff(otime + time4);
    var btimeID = ["ttime2", "f2ltime", "lltime", "cptime", "olstime", "ptime2"];
    var btime = [time, f2ltime, lltime, cptime, olstime, ptime];
    for (var i = 0; i < 5; i++) {
        var a = document.getElementById("".concat(btimeID[i]));
        a.innerHTML = btime[i];
    }
    // document.getElementById('ttime2').innerHTML = time;
    // document.getElementById('f2ltime').innerHTML = f2ltime;
    // document.getElementById('lltime').innerHTML = lltime;
    // document.getElementById('cptime').innerHTML = cptime;
    // document.getElementById('olstime').innerHTML = olstime;
    // document.getElementById('ptime2').innerHTML = ptime;
    var f2lsplit = roundOff((f2ltime * 100) / time);
    var llsplit = roundOff((lltime * 100) / time);
    var cpsplit = roundOff((cptime * 100) / time);
    var olssplit = roundOff((olstime * 100) / time);
    var pllsplit = roundOff((ptime * 100) / time);
    var splitsID = ["tsplit", "f2lsplit", "llsplit", "cpsplit", "olssplit", "pllsplit"];
    var splits = [100, f2lsplit, llsplit, cpsplit, olssplit, pllsplit];
    for (var i = 0; i < 5; i++) {
        var a = document.getElementById("".concat(splitsID[i]));
        a.innerHTML = splits[i] + '%';
    }
    // document.getElementById('tsplit').innerHTML = '100';
    // document.getElementById('f2lsplit').innerHTML = roundOff((f2ltime * 100) / time);
    // document.getElementById('llsplit').innerHTML = roundOff((lltime * 100) / time);
    // document.getElementById('cpsplit').innerHTML = roundOff((cptime * 100) / time);
    // document.getElementById('olssplit').innerHTML = roundOff((olstime * 100) / time);
    // document.getElementById('pllsplit').innerHTML = roundOff((ptime * 100) / time);
    var f2lmove = cmove + move1 + move2 + move3 + move4;
    var llmove = omove + pmove;
    var cpmove = cmove + move1;
    var olsmove = move4 + omove;
    var stmIDS = ["tstm", "f2lstm", "llstm", "cpstm", "olsstm", "pllstm"];
    var stm = [tmove, f2lmove, llmove, cpmove, olsmove, pmove];
    for (var i = 0; i < 5; i++) {
        var a = document.getElementById("".concat(stmIDS[i]));
        a.innerHTML = stm[i];
    }
    // document.getElementById('tstm').innerHTML = tmove;
    // document.getElementById('f2lstm').innerHTML = cmove + move1 + move2 + move3 + move4;
    // document.getElementById('llstm').innerHTML = omove + pmove;
    // document.getElementById('cpstm').innerHTML = cmove + move1;
    // document.getElementById('olsstm').innerHTML = omove + move4;
    // document.getElementById('pllstm').innerHTML = pmove;
    var f2lstps = roundOff(f2lmove / f2ltime);
    var llstps = roundOff(llmove / lltime);
    var cpstps = roundOff(cpmove / cptime);
    var olsstps = roundOff(olsmove / olstime);
    var bstpsIDs = ["tstps", "f2lstps", "llstps", "cpstps", "olsstps", "pllstps"];
    var bstps = [tstps, f2lstps, llstps, cpstps, olsstps, pstps];
    for (var i = 0; i < 5; i++) {
        var a = document.getElementById("".concat(bstpsIDs[i]));
        a.innerHTML = bstps[i];
    }
    // document.getElementById('tstps').innerHTML = roundOff(tmove / time);
    // document.getElementById('f2lstps').innerHTML = roundOff((cmove + move1 + move2 + move3 + move4) / f2ltime);
    // document.getElementById('llstps').innerHTML = roundOff((omove + pmove) / lltime);
    // document.getElementById('cpstps').innerHTML = roundOff((cmove + move1) / cptime);
    // document.getElementById('olsstps').innerHTML = roundOff((omove + move4) / olstime);
    // document.getElementById('pllstps').innerHTML = roundOff(pmove / ptime);
}
function reformat() {
    var recon = document.getElementById("unfrecon").value.trim().split("\n");
    var steps = ["inspec", "cross", "f2l1", "f2l2", "f2l3", "f2l4", "oll", "pll"];
    console.log("recon", recon.length);
    for (var i = 0; i < 8; i++) {
        document.getElementById("".concat(steps[i])).value = recon[i];
        console.log(recon[i], steps[i]);
    }
    var splits = document.getElementById("unfsplits").value.trim().split("\n");
    var splitIDs = ["start", "c", "1", "2", "3", "4", "o"];
    console.log(splits, splits.length);
    for (var i = 0; i < 7; i++) {
        document.getElementById("".concat(splitIDs[i])).value = splits[i];
        console.log(splits[i], splitIDs[i]);
    }
}
document.getElementsByName('solve1')[0].addEventListener('submit', function (event) {
    event.preventDefault();
    tablePrinter();
});
