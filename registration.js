const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMessage.textContent = "🎉 Registration Successful!";
  form.reset();
});
function goBack() {
  window.history.back();
}