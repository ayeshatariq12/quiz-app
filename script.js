let score = 0;
// let quaideazam = july; 
// let fourp =  Four;
// let jinnah = Muhammad Ali Jinnah;
// let karachi = Karachi;
// let mango = Mango;


function julyScore() {
    let correct = document.querySelector(".july").checked;
    if (correct == true) {
        score += 1;
    }
}

function pizzaScore() {
    let correct1 = document.querySelector(".pizza").checked;
    if (correct1 == true) {
        score += 1;
    }
}

function blackScore() {
    let correct2 = document.querySelector(".black").checked;
    if (correct2 == true) {
        score += 1;
    }
}

function familyScore() {
    let correct3 = document.querySelector(".family").checked;
    if (correct3 == true) {
        score += 1;
    }
}

function strawberryScore() {
    let correct4 = document.querySelector(".strawberry").checked;
    if (correct4 == true) {
        score += 1;
    }
}

function check() {
    if (score == 5) {
        alert("congratulations!! You did very well. Your score is" + score + "out of 5");
    } else if (score < 5) {
        alert("your Score is" + score + "out of 5");
    } else {
        alert("some thing went wrong!");
    }
}