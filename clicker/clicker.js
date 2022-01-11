function update(){
    document.getElementById("points").innerHTML = points
    document.getElementById('costClickBoost').innerHTML = costClickBoost
    document.getElementById('amountClickBoost').innerHTML = amountClickBoost
}

/* GOBLAL */
let points = 0

/* Upgrades */
let autoClick = 0
let amountAutoClick = 0 
let costAutoClick = 12

let clickBoost = 0
let amountClickBoost = 0
let costClickBoost = 20


function timer(){
    points = points + amountAutoClick;
    update()
}
setInterval(timer, 1000)


document.getElementById("points").innerHTML = points
document.getElementById('btn').addEventListener("click", iterate);
function iterate(){
    points ++
    document.getElementById("points").innerHTML = points
}

document.getElementById('amountAutoClick').innerHTML = amountAutoClick
document.getElementById('costAutoClick').innerHTML = costAutoClick
document.getElementById('buyAutoClick').addEventListener("click", buyAutoClick);
function buyAutoClick() {
    if (points >= ((autoClick+1) * 12)) {
        points = points - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
        amountAutoClick = amountAutoClick + 1;
        costAutoClick = ((autoClick+1) * 12);
        update()
    }
    document.getElementById('costAutoClick').innerHTML = costAutoClick
    document.getElementById('amountAutoClick').innerHTML = amountAutoClick
    update()
}

document.getElementById('amountClickBoost').innerHTML = amountClickBoost
document.getElementById('costClickBoost').innerHTML = costClickBoost 
document.getElementById('buyClickBoost').addEventListener("click", buyClickBoost);
function buyClickBoost() {
    if (points >= ((clickBoost+1) * 20)) {
        points = points - ((clickBoost+1) * 20);
        clickBoost = clickBoost + 1;
        amountClickBoost = amountClickBoost + 1;
        costClickBoost = ((clickBoost+1) * 20);
        uptade()
    }
    document.getElementById('costClickBoost').innerHTML = costClickBoost
    document.getElementById('amountClickBoost').innerHTML = amountClickBoost
    update()
}

document.getElementById('btn').addEventListener("click", clickBooster)
function clickBooster() {
    points = points + clickBoost;
    document.getElementById("points").innerHTML = points;
    uptade();
}