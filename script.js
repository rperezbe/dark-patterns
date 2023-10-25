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
const enlaceActivar = document.getElementById('enlaceActivar');

enlaceActivar.addEventListener('click', function (event) {
  event.preventDefault(); // Evita que el enlace redireccione a una nueva página
  miDiv.style.display = 'none';
});