// script.js

// Array of event objects
const events = [
  {
    title: "Event 1",
    image: "event1.jpg",
    link: "event1.html",
  },
  {
    title: "Event 2",
    image: "event2.jpg",
    link: "event2.html",
  },
  {
    title: "Event 3",
    image: "event3.jpg",
    link: "event3.html",
  },
  {
    title: "Event 4",
    image: "event4.jpg",
    link: "event4.html",
  },
  {
    title: "Event 5",
    image: "event5.jpg",
    link: "event5.html",
  },
  {
    title: "Event 6",
    image: "event6.jpg",
    link: "event6.html",
  },
  {
    title: "Event 7",
    image: "event7.jpg",
    link: "event7.html",
  },
  {
    title: "Event 8",
    image: "event8.jpg",
    link: "event8.html",
  },
  {
    title: "Event 9",
    image: "event9.jpg",
    link: "event9.html",
  },
  {
    title: "Event 10",
    image: "event10.jpg",
    link: "event10.html",
  },
  {
    title: "Event 11",
    image: "event11.jpg",
    link: "event11.html",
  },
  {
    title: "Event 12",
    image: "event12.jpg",
    link: "event12.html",
  }
];

// Render events
const container = document.getElementById('eventsGrid');

events.forEach(event => {
  const card = document.createElement('div');
  card.classList.add('event-card');

  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}" class="event-thumb" />
    <h3>${event.title}</h3>
    <a href="${event.link}" class="know-more-btn">Know More</a>
  `;

  container.appendChild(card);
});

function goBack() {
    window.history.back();
  }
  
