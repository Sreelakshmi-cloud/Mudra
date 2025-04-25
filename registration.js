const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const payload = {
    name: form.name.value,
    year: form.year.value,
    department: form.department.value,
    contact: form.contact.value,
    event: form.event.value
  };

  try {
    const res = await fetch("https://mudra-back.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      successMessage.textContent = "🎉 Registration Successful!";
      form.reset();
    } else {
      successMessage.textContent = "❌ Registration Failed.";
    }
  } catch (err) {
    successMessage.textContent = "❌ Something went wrong.";
  }
});
