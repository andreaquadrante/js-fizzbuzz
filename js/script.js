var fizzBuzzListEl = document.getElementById('fizzBuzzList');

// PIPPO stands for FIZZ, PLUTO stands for BUZZ

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      fizzBuzzListEl.innerHTML += '<li>' + 'PippoPluto' + '</li>';
    } else if (i % 3 == 0) {
        fizzBuzzListEl.innerHTML += '<li>' + 'Pippo' + '</li>';
    } else if (i % 5 == 0) {
        fizzBuzzListEl.innerHTML += '<li>' + 'Pluto' + '</li>'
    } else
        fizzBuzzListEl.innerHTML += '<li>' + i + '</li>'
}
