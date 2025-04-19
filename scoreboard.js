// Sample data for leaderboard
const leaderboardData = [
    { rank: 1, department: 'Computer Science', score: 95 },
    { rank: 2, department: 'Mechanical Engg', score: 90 },
    { rank: 3, department: 'Electrical Engg', score: 85 },
    { rank: 4, department: 'Civil Engg', score: 80 },
    { rank: 5, department: 'Electronics Engg', score: 75 }
  ];
  
  // Populate table
  function populateLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    leaderboardData.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.rank}</td>
        <td>${entry.department}</td>
        <td>${entry.score}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Create chart
  function createLeaderboardChart() {
    const ctx = document.getElementById('leaderboardChart').getContext('2d');
    const departments = leaderboardData.map(d => d.department);
    const scores = leaderboardData.map(d => d.score);
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: departments,
        datasets: [{
          label: 'Scores',
          data: scores,
          backgroundColor: '#ff9800',
          borderColor: '#ffcc80',
          borderWidth: 1,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Department Scores',
            color: '#fff',
            font: {
              size: 18
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#fff' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: '#fff' }
          }
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    populateLeaderboard();
    createLeaderboardChart();
  });
  