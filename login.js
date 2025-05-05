document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "main" && password === "main123") {
    window.location.href = "game.html";
  } else {
    errorMessage.textContent = "Username atau password salah!";
  }
});
