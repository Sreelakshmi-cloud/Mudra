const functions = require("firebase-functions");

const firebaseConfig = {
  apiKey: functions.config().app.firebase_api_key,
  authDomain: functions.config().app.firebase_auth_domain,
  databaseURL: functions.config().app.firebase_database_url,
  projectId: functions.config().app.firebase_project_id,
  storageBucket: functions.config().app.firebase_storage_bucket,
  messagingSenderId: functions.config().app.firebase_messaging_sender_id,
  appId: functions.config().app.firebase_app_id,
  measurementId: functions.config().app.firebase_measurement_id,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = form.name.value;
  const year = form.year.value;
  const department = form.department.value;
  const contact = form.contact.value;
  const event = form.event.value;

  try {
    // Add a new document to the "registrations" collection
    await database.collection("registrations").add({
      name: name,
      year: year,
      department: department,
      contact: contact,
      event: event
    });

    successMessage.textContent = "🎉 Registration Successful!";
    form.reset();
  } catch (error) {
    successMessage.textContent = "❌ Registration Failed. Please try again.";
    console.error("Error storing data:", error);
  }
});