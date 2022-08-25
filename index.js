let homeScore = parseInt(document.getElementById("home-panel").innerHTML)
let guestScore = parseInt(document.getElementById("guest-panel").innerHTML)

function homeAdd(n){
    let num = n
    homeScore += num;
    document.getElementById("home-panel").innerHTML = homeScore
}

function guestAdd(n){
    let num = n
    guestScore += num;
    document.getElementById("guest-panel").innerHTML = guestScore
}