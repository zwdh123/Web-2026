function magic8Ball() {
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune() {
    var fortunes = ["yes","no", "ask tiblier the ALMIGHTY"]
    var random = randoms(fortunes.length)
    return fortunes[random]
}

function randoms(max) {
    var floor = Math.random() * max
    return Math.floor(floor)
}

function showfortune(fortune) {
    document.getElementById("answer").innerHTML = fortune;
}