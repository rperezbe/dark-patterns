console.log("hola");
function showRegister() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('registro').style.display = 'block';
}

function showLogin() {
  document.getElementById('registro').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}

const miDiv = document.getElementById('cookie-banner');
const confirmShaming = document.getElementById('confirmshaming-banner');
const enlaceActivar = document.getElementById('enlaceActivar');
const enlaceConfirmShaming = document.getElementById('enlaceConfirmshaming');

enlaceActivar.addEventListener('click', function (event) {
  event.preventDefault(); // Evita que el enlace redireccione a una nueva página
  miDiv.style.display = 'none';
  confirmShaming.style.display='flex';
});

enlaceConfirmShaming.addEventListener('click', function (event) {
  event.preventDefault(); // Evita que el enlace redireccione a una nueva página
  confirmShaming.style.display='none';
});