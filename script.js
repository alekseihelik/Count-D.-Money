let pamount = 0;
let namount = 0;
let damount = 0;
let qamount = 0;
let hdamount = 0;
let dolamount = 0;

function updateTotalValue(){
    let totalValue = (0.01 * pamount) + (0.05 * namount) + (0.10 * damount) + (0.25 * qamount) + (0.50 * hdamount) + (1.00 * dolamount);
    document.getElementById("totalvalue").textContent = "Total value of all coins: $" + totalValue.toFixed(2);
}

function updatePenny(){
    document.getElementById("pamount").textContent = "Amount: " + pamount;
    document.getElementById("pvalue").textContent = "Total value: $" + Math.round((0.01*pamount) * 100) / 100;
}

function updateNickel(){
    document.getElementById("namount").textContent = "Amount: " + namount;
    document.getElementById("nvalue").textContent = "Total value: $" + Math.round((0.05*namount) * 100) / 100;
}

function updateDime(){
    document.getElementById("damount").textContent = "Amount: " + damount;
    document.getElementById("dvalue").textContent = "Total value: $" + Math.round((0.10*damount) * 100) / 100;
}

function updateQuarter(){
    document.getElementById("qamount").textContent = "Amount: " + qamount;
    document.getElementById("qvalue").textContent = "Total value: $" + Math.round((0.25*qamount) * 100) / 100;
}

function updateHalfDollar(){
    document.getElementById("hdamount").textContent = "Amount: " + hdamount;
    document.getElementById("hdvalue").textContent = "Total value: $" + Math.round((0.50*hdamount) * 100) / 100;
}

function updateDollar(){
    document.getElementById("dolamount").textContent = "Amount: " + dolamount;
    document.getElementById("dolvalue").textContent = "Total value: $" + Math.round((1.00*dolamount) * 100) / 100;
}

function addPenny(){
    pamount++;
    updatePenny();
    updateTotalValue();
}

function subtractPenny(){
    if(pamount > 0){
        pamount--;
        updatePenny();
        updateTotalValue();
    }
}

function addPenny5(){
    pamount+=5;
    updatePenny();
    updateTotalValue();
}

function subtractPenny5(){
    if(pamount > 5){
        pamount-=5;
    }
    else{
        pamount=0;
    }
    updatePenny();
    updateTotalValue();
}

function addNickel(){
    namount++;
    updateNickel();
    updateTotalValue();
}

function subtractNickel(){
    if(namount > 0){
        namount--;
        updateNickel();
        updateTotalValue();
    }
}

function addNickel5(){
    namount+=5;
    updateNickel();
    updateTotalValue();
}

function subtractNickel5(){
    if(namount > 5){
        namount-=5;
    }
    else{
        namount=0;
    }
    updateNickel();
    updateTotalValue();
}

function addDime(){
    damount++;
    updateDime();
    updateTotalValue();
}

function subtractDime(){
    if(damount > 0){
        damount--;
        updateDime();
        updateTotalValue();
    }
}

function addDime5(){
    damount+=5;
    updateDime();
    updateTotalValue();
}

function subtractDime5(){
    if(damount > 5){
        damount-=5;
    }
    else{
        damount=0;
    }
    updateDime();
    updateTotalValue();
}

function addQuarter(){
    qamount++;
    updateQuarter();
    updateTotalValue();
}

function subtractQuarter(){
    if(qamount > 0){
        qamount--;
        updateQuarter();
        updateTotalValue();
    }
}

function addQuarter5(){
    qamount+=5;
    updateQuarter();
    updateTotalValue();
}

function subtractQuarter5(){
    if(qamount > 5){
        qamount-=5;
    }
    else{
        qamount=0;
    }
    updateQuarter();
    updateTotalValue();
}

function addHalfDollar(){
    hdamount++;
    updateHalfDollar();
    updateTotalValue();
}

function subtractHalfDollar(){
    if(hdamount > 0){
        hdamount--;
        updateHalfDollar();
        updateTotalValue();
    }
}

function addHalfDollar5(){
    hdamount+=5;
    updateHalfDollar();
    updateTotalValue();
}

function subtractHalfDollar5(){
    if(hdamount > 5){
        hdamount-=5;
    }
    else{
        hdamount=0;
    }
    updateHalfDollar();
    updateTotalValue();
}

function addDollar(){
    dolamount++;
    updateDollar();
    updateTotalValue();
}

function subtractDollar(){
    if(dolamount > 0){
        dolamount--;
        updateDollar();
        updateTotalValue();
    }
}

function addDollar5(){
    dolamount+=5;
    updateDollar();
    updateTotalValue();
}

function subtractDollar5(){
    if(dolamount > 5){
        dolamount-=5;
    }
    else{
        dolamount=0;
    }
    updateDollar();
    updateTotalValue();
}
