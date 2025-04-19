// script.js

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
  
