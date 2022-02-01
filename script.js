let email = document.getElementById('email')
let senha = document.getElementById('password')

let lock = document.getElementById('lock')
let mail = document.getElementById('mail')

email.addEventListener('focusin', whenFocused)
senha.addEventListener('focusin', whenFocused)

email.addEventListener('focusout', focusedOut)
senha.addEventListener('focusout', focusedOut)

function whenFocused(e) {
  if (e.target.type === 'email') {
    mail.style.color = '#ffc632'
  } else {
    lock.style.color = '#ffc632'
  }
}

function focusedOut(e) {
  if (e.target.type === 'email') {
    mail.style.color = 'inherit'
  } else {
    lock.style.color = 'inherit'
  }
}
