




function timeCalculator(frameOne: any, frameTwo: any): any {
    const fpselement: any = (document.getElementById('fps') as HTMLInputElement).value;
    const mulfact: number = 1 / (fpselement as number);
    return ((frameTwo as number) - (frameOne as number)) * mulfact;
}

function checkLegal(move: string): boolean {
    const allowedMovesSTM: string[] = ['R', 'U', 'L', 'D', 'F', 'B', 'r', 'u', 'l', 'f', 'd', 'b', 'M', 'S', 'E'];
    for (let index = 0; index < allowedMovesSTM.length; index++) {
        const element = allowedMovesSTM[index];
        if (element === move) {
            return true;
        }
    }
    return false;
}

function moveCounter(array: string): any {
    let moves = 0;
    for (let index = 0; index < array.length && array[index] !== '/'; index++) {
        const element = array[index];
        if (checkLegal(element)) {
            moves++;
        }
    }
    return moves;
}

function roundOff(time: number): any {
    let temp = 100 * time;
    return Math.round(temp) * 0.01;
}

function tablePrinter(): void {
    const start = (document.getElementById('start') as HTMLInputElement | null)?.value;
    const cross = (document.getElementById('c') as HTMLInputElement | null)?.value;
    const f2l1 = (document.getElementById('1') as HTMLInputElement | null)?.value;
    const f2l2 = (document.getElementById('2') as HTMLInputElement | null)?.value;
    const f2l3 = (document.getElementById('3') as HTMLInputElement | null)?.value;
    const f2l4 = (document.getElementById('4') as HTMLInputElement | null)?.value;
    const oll = (document.getElementById('0') as HTMLInputElement | null)?.value;

    const time: any = (document.getElementById('time') as HTMLInputElement | null)?.value;

    let ctime = roundOff(timeCalculator(start, cross));
    let time1 = roundOff(timeCalculator(cross, f2l1));
    let time2 = roundOff(timeCalculator(f2l1, f2l2));
    let time3 = roundOff(timeCalculator(f2l2, f2l3));
    let time4 = roundOff(timeCalculator(f2l3, f2l4));
    let otime = roundOff(timeCalculator(f2l4, oll));
    let ptime = roundOff((time as number) - timeCalculator(start, oll));

    let timeID: string[] = ["ctime", "1time", "2time", "3time", "4time", "otime", "ptime"];
    let stattime: string[] = [ctime, time1, time2, time3, time4, otime, ptime];

    for (let i: number = 0; i < 7; i++) {
        let a = document.getElementById(`${timeID[i]}`) as HTMLOutputElement;
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

    const cmove: any = moveCounter((document.getElementById('cross') as HTMLInputElement | null)?.value);
    const move1: any = moveCounter((document.getElementById('f2l1') as HTMLInputElement | null)?.value);
    const move2: any = moveCounter((document.getElementById('f2l2') as HTMLInputElement | null)?.value);
    const move3: any = moveCounter((document.getElementById('f2l3') as HTMLInputElement | null)?.value);
    const move4: any = moveCounter((document.getElementById('f2l4') as HTMLInputElement | null)?.value);
    const omove: any = moveCounter((document.getElementById('oll') as HTMLInputElement | null)?.value);
    const pmove: any = moveCounter((document.getElementById('pll') as HTMLInputElement | null)?.value);
    const tmove: any = cmove + move1 + move2 + move3 + move4 + omove + pmove;

    const moveID: string[] = ["cstm", "1stm", "2stm", "3stm", "4stm", "ostm", "pstm"];
    const statmove: any[] = [cmove, move1, move2, move3, move4, omove, pmove];

    for (let i: number = 0; i < 7; i++) {
        let a = document.getElementById(`${moveID[i]}`) as HTMLOutputElement;
        a.innerHTML = statmove[i] as string;
    }

    // document.getElementById('cstm').innerHTML = cmove;
    // document.getElementById('1stm').innerHTML = move1;
    // document.getElementById('2stm').innerHTML = move2;
    // document.getElementById('3stm').innerHTML = move3;
    // document.getElementById('4stm').innerHTML = move4;
    // document.getElementById('ostm').innerHTML = omove;
    // document.getElementById('pstm').innerHTML = pmove;
    // document.getElementById('tmove').innerHTML = tmove;

    const cstps: any = roundOff(cmove / ctime);
    const stps1: any = roundOff(move1 / time1);
    const stps2: any = roundOff(move2 / time2);
    const stps3: any = roundOff(move3 / time3);
    const stps4: any = roundOff(move4 / time4);
    const ostps: any = roundOff(omove / otime);
    const pstps: any = roundOff(pmove / ptime);
    const tstps: any = roundOff(tmove / time);

    const stpsID: string[] = ["cstm", "1stm", "2stm", "3stm", "4stm", "ostm", "pstm"];
    const statstps: any[] = [cstps, stps1, stps2, stps3, stps4, ostps, pstps];

    for (let i: number = 0; i < 7; i++) {
        let a = document.getElementById(`${stpsID[i]}`) as HTMLOutputElement;
        a.innerHTML = statstps[i] as string;
    }

    // document.getElementById('ctps').innerHTML = ctps;
    // document.getElementById('1tps').innerHTML = tps1;
    // document.getElementById('2tps').innerHTML = tps2;
    // document.getElementById('3tps').innerHTML = tps3;
    // document.getElementById('4tps').innerHTML = tps4;
    // document.getElementById('otps').innerHTML = otps;
    // document.getElementById('ptps').innerHTML = ptps;
    // document.getElementById('ttps').innerHTML = ttps;

    const f2ltime: any = roundOff(ctime + time1 + time2 + time3 + time4);
    const lltime: any = roundOff(otime + ptime);
    const cptime: any = roundOff(ctime + time1);
    const olstime: any = roundOff(otime + time4);

    const btimeID: string[] = ["ttime2", "f2ltime", "lltime", "cptime", "olstime", "ptime2"];
    const btime: any[] = [time, f2ltime, lltime, cptime, olstime, ptime];

    for (let i: number = 0; i < 5; i++) {
        let a = document.getElementById(`${btimeID[i]}`) as HTMLOutputElement;
        a.innerHTML = btime[i] as string;
    }

    // document.getElementById('ttime2').innerHTML = time;
    // document.getElementById('f2ltime').innerHTML = f2ltime;
    // document.getElementById('lltime').innerHTML = lltime;
    // document.getElementById('cptime').innerHTML = cptime;
    // document.getElementById('olstime').innerHTML = olstime;
    // document.getElementById('ptime2').innerHTML = ptime;

    const f2lsplit = roundOff((f2ltime * 100) / time);
    const llsplit = roundOff((lltime * 100) / time);
    const cpsplit = roundOff((cptime * 100) / time);
    const olssplit = roundOff((olstime * 100) / time);
    const pllsplit = roundOff((ptime * 100) / time);

    const splitsID: string[] = ["tsplit", "f2lsplit", "llsplit", "cpsplit", "olssplit", "pllsplit"];
    const splits: any[] = [100, f2lsplit, llsplit, cpsplit, olssplit, pllsplit];

    for (let i: number = 0; i < 5; i++) {
        let a = document.getElementById(`${splitsID[i]}`) as HTMLOutputElement;
        a.innerHTML = (splits[i] as string) + '%';
    }

    // document.getElementById('tsplit').innerHTML = '100';
    // document.getElementById('f2lsplit').innerHTML = roundOff((f2ltime * 100) / time);
    // document.getElementById('llsplit').innerHTML = roundOff((lltime * 100) / time);
    // document.getElementById('cpsplit').innerHTML = roundOff((cptime * 100) / time);
    // document.getElementById('olssplit').innerHTML = roundOff((olstime * 100) / time);
    // document.getElementById('pllsplit').innerHTML = roundOff((ptime * 100) / time);

    const f2lmove = cmove + move1 + move2 + move3 + move4;
    const llmove = omove + pmove;
    const cpmove = cmove + move1;
    const olsmove = move4 + omove;

    const stmIDS: string[] = ["tstm", "f2lstm", "llstm", "cpstm", "olsstm", "pllstm"];
    const stm: any[] = [tmove, f2lmove, llmove, cpmove, olsmove, pmove];

    for (let i: number = 0; i < 5; i++) {
        let a = document.getElementById(`${stmIDS[i]}`) as HTMLOutputElement;
        a.innerHTML = stm[i] as string;
    }

    // document.getElementById('tstm').innerHTML = tmove;
    // document.getElementById('f2lstm').innerHTML = cmove + move1 + move2 + move3 + move4;
    // document.getElementById('llstm').innerHTML = omove + pmove;
    // document.getElementById('cpstm').innerHTML = cmove + move1;
    // document.getElementById('olsstm').innerHTML = omove + move4;
    // document.getElementById('pllstm').innerHTML = pmove;

    const f2lstps = roundOff(f2lmove / f2ltime);
    const llstps = roundOff(llmove / lltime);
    const cpstps = roundOff(cpmove / cptime);
    const olsstps = roundOff(olsmove / olstime);

    const bstpsIDs: string[] = ["tstps", "f2lstps", "llstps", "cpstps", "olsstps", "pllstps"];
    const bstps: any[] = [tstps, f2lstps, llstps, cpstps, olsstps, pstps];

    for (let i: number = 0; i < 5; i++) {
        let a = document.getElementById(`${bstpsIDs[i]}`) as HTMLOutputElement;
        a.innerHTML = bstps[i] as string;
    }

    // document.getElementById('tstps').innerHTML = roundOff(tmove / time);
    // document.getElementById('f2lstps').innerHTML = roundOff((cmove + move1 + move2 + move3 + move4) / f2ltime);
    // document.getElementById('llstps').innerHTML = roundOff((omove + pmove) / lltime);
    // document.getElementById('cpstps').innerHTML = roundOff((cmove + move1) / cptime);
    // document.getElementById('olsstps').innerHTML = roundOff((omove + move4) / olstime);
    // document.getElementById('pllstps').innerHTML = roundOff(pmove / ptime);
}

function reformat(): void {
    const recon = (document.getElementById("unfrecon") as HTMLTextAreaElement).value.trim().split("\n");
    const steps = ["inspec", "cross", "f2l1", "f2l2", "f2l3", "f2l4", "oll", "pll"]
    console.log("recon", recon.length)
    for (let i = 0; i < 8; i++) {
        (document.getElementById(`${steps[i]}`) as HTMLInputElement).value = recon[i];
        console.log(recon[i], steps[i]);
    }
    let splits = (document.getElementById("unfsplits") as HTMLTextAreaElement).value.trim().split("\n");
    let splitIDs = ["start", "c", "1", "2", "3", "4", "o"];
    console.log(splits, splits.length);
    for (let i = 0; i < 7; i++) {
        (document.getElementById(`${splitIDs[i]}`) as HTMLInputElement).value = splits[i];
        console.log(splits[i], splitIDs[i]);
    }
}

document.getElementsByName('solve1')[0].addEventListener('submit', function (event) {
    event.preventDefault();

    tablePrinter();
});