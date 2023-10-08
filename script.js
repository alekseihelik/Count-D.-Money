let pamount = 0;
let namount = 0;
let damount = 0;
let qamount = 0;
let hdamount = 0;
let dolamount = 0;

function updatePenny(){
    document.getElementById("pamount").textContent = "Amount of pennies: " + pamount;
    document.getElementById("pvalue").textContent = "Total value of pennies: $" + Math.round((0.01*pamount) * 100) / 100;
}

function updateNickel(){
    document.getElementById("namount").textContent = "Amount of nickels: " + namount;
    document.getElementById("nvalue").textContent = "Total value of nickels: $" + Math.round((0.05*namount) * 100) / 100;
}

function updateDime(){
    document.getElementById("damount").textContent = "Amount of dimes: " + damount;
    document.getElementById("dvalue").textContent = "Total value of dimes: $" + Math.round((0.10*damount) * 100) / 100;
}

function updateQuarter(){
    document.getElementById("qamount").textContent = "Amount of quarters: " + qamount;
    document.getElementById("qvalue").textContent = "Total value of quarters: $" + Math.round((0.25*qamount) * 100) / 100;
}

function updateHalfDollar(){
    document.getElementById("hdamount").textContent = "Amount of half-dollars: " + hdamount;
    document.getElementById("hdvalue").textContent = "Total value of half-dollars: $" + Math.round((0.50*hdamount) * 100) / 100;
}

function updateDollar(){
    document.getElementById("dolamount").textContent = "Amount of dollar coins: " + dolamount;
    document.getElementById("dolvalue").textContent = "Total value of dollar coins: $" + Math.round((1.00*dolamount) * 100) / 100;
}

function addPenny(){
    pamount++;
    updatePenny();
}

function subtractPenny(){
    if(pamount > 0){
        pamount--;
        updatePenny();
    }
}

function addPenny5(){
    pamount+=5;
    updatePenny();
}

function subtractPenny5(){
    if(pamount > 5){
        pamount-=5;
    }
    else{
        pamount=0;
    }
    updatePenny();
}

function addNickel(){
    namount++;
    updateNickel();
}

function subtractNickel(){
    if(namount > 0){
        namount--;
        updateNickel();
    }
}

function addNickel5(){
    namount+=5;
    updateNickel();
}

function subtractNickel5(){
    if(namount > 5){
        namount-=5;
    }
    else{
        namount=0;
    }
    updateNickel();
}

// Copying the pattern for dimes
function addDime(){
    damount++;
    updateDime();
}

function subtractDime(){
    if(damount > 0){
        damount--;
        updateDime();
    }
}

function addDime5(){
    damount+=5;
    updateDime();
}

function subtractDime5(){
    if(damount > 5){
        damount-=5;
    }
    else{
        damount=0;
    }
    updateDime();
}

function addQuarter(){
    qamount++;
    updateQuarter();
}

function subtractQuarter(){
    if(qamount > 0){
        qamount--;
        updateQuarter();
    }
}

function addQuarter5(){
    qamount+=5;
    updateQuarter();
}

function subtractQuarter5(){
    if(qamount > 5){
        qamount-=5;
    }
    else{
        qamount=0;
    }
    updateQuarter();
}

function addHalfDollar(){
    hdamount++;
    updateHalfDollar();
}

function subtractHalfDollar(){
    if(hdamount > 0){
        hdamount--;
        updateHalfDollar();
    }
}

function addHalfDollar5(){
    hdamount+=5;
    updateHalfDollar();
}

function subtractHalfDollar5(){
    if(hdamount > 5){
        hdamount-=5;
    }
    else{
        hdamount=0;
    }
    updateHalfDollar();
}

function addDollar(){
    dolamount++;
    updateDollar();
}

function subtractDollar(){
    if(dolamount > 0){
        dolamount--;
        updateDollar();
    }
}

function addDollar5(){
    dolamount+=5;
    updateDollar();
}

function subtractDollar5(){
    if(dolamount > 5){
        dolamount-=5;
    }
    else{
        dolamount=0;
    }
    updateDollar();
}
