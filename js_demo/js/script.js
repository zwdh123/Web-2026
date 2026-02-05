function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Name Here');
    if (name == '') {
        alert('You failed. Not entering a name is punishable by banishment from the Oranges Clan.')
    }
    else {
        nameReturn.innerHTML = 'Hello ' + name + '! You are now part of the Oranges Clan.'
    }
}

function askQuestion() {
    var p = prompt('Are you loyal to the Orange Clan?');
    if (p != 'yes') {
        document.getElementById('question').innerHTML = 'Why\'d you say ' + p + '? You failed the test.';
    }
    else {
        document.getElementById('question').innerHTML = "nice! you passed";
    }
}