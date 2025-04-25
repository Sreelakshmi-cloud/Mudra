fetch('https://mudra-back.onrender.com/registrations')
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById('registrations-body');
    data.forEach(reg => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${reg.name}</td>
        <td>${reg.year}</td>
        <td>${reg.department}</td>
        <td>${reg.contact}</td>
        <td>${reg.event}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching registrations:', error);
  });
