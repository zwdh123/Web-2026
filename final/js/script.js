function theUltimateQuestion() {
    var ask = prompt('Do you wish to continue?')
    if (ask == 'yes') {
        alert('ok... but it will BLOW YOUR MIND.')
        var ask2 = prompt('Double checking: you\'re SURE?')
        if (ask2 == 'yes') {
            alert('ok... if you wish.')
            document.getElementById('theUltimateAnswer').innerHTML = 'There are 4 ways.'
        }
    }
}