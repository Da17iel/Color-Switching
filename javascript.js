var title = prompt("Bitte geben Sie ein Wort ein");
document.getElementById("Title").innerHTML = title;
var i = 0;

function yellow() {
    document.getElementById("Title").style.textShadow = "10px -10px #ffff00";
}

function red() {
    document.getElementById("Title").style.textShadow = "10px -10px #ff0000";
}

function brown() {
    document.getElementById("Title").style.textShadow = "10px -10px #965B00";
}

function blue() {
    document.getElementById("Title").style.textShadow = "10px -10px #0000ff";
}

function button() {
    while (i <= 100) {
        setTimeout(function() {
            yellow()
            setTimeout(function() {
                red()
                setTimeout(function() {
                    brown()
                    setTimeout(function() {blue()}, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
        i += 1;
    }
}
