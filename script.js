let userguess = 0

document.getElementById('button').addEventListener('click', comparison)

function comparison () {
  userguess = document.getElementById('lost').value
  userguess = parseInt(userguess)

  if (userguess < 0) {
    document.getElementById('steve').innerHTML = 'The Number is Negative!!!' }
  else {
    document.getElementById('steve').innerHTML = 'The Number is Positive!!!'
  }
}
