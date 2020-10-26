var fizzBuzzListEl = document.getElementById('fizzBuzzList');

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      fizzBuzzListEl.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
    } else if (i % 3 == 0) {
        fizzBuzzListEl.innerHTML += '<li>' + 'Fizz' + '</li>';
    } else if (i % 5 == 0) {
        fizzBuzzListEl.innerHTML += '<li>' + 'Buzz' + '</li>'
    } else
        fizzBuzzListEl.innerHTML += '<li>' + i + '</li>'
}
