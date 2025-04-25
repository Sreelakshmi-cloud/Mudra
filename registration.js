
require('dotenv').config(); 

// Load environment variables

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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