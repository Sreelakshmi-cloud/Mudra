// Sample data for leaderboard
const leaderboardData = [
    { department: 'CSE', score: 85 },
    { department: 'ECE', score: 78 },
    { department: 'ME', score: 70 },
    { department: 'CE', score: 65 },
    { department: 'EEE', score: 60 },
    { department: 'AIDS', score: 55 },
    { department: 'AIML', score: 50 },
    { department: 'MCA', score: 45 },
    { department: 'IT', score: 40 },
    { department: 'BME', score: 35 }
  ];
  
  // Populate scoreboard table
  const tableBody = document.querySelector('#scoreTable tbody');
  leaderboardData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.department}</td><td>${item.score}</td>`;
    tableBody.appendChild(row);
  });
  
  // Render chart
  const ctx = document.getElementById('scoreChart').getContext('2d');
  
  const barColors = [
    'rgba(255, 193, 7, 0.9)',   // CSE - Amber
    'rgba(255, 87, 34, 0.9)',   // ECE - Deep Orange
    'rgba(0, 188, 212, 0.9)',   // ME - Cyan
    'rgba(156, 39, 176, 0.9)',  // CE - Purple
    'rgba(76, 175, 80, 0.9)',   // EEE - Green
    'rgba(244, 67, 54, 0.9)',   // AIDS - Red
    'rgba(33, 150, 243, 0.9)',  // AIML - Blue
    'rgba(103, 58, 183, 0.9)',  // MCA - Deep Purple
    'rgba(255, 152, 0, 0.9)',   // IT - Orange
    'rgba(0, 255, 135, 0.9)'    // BME - Neon Green
  ];
  
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: leaderboardData.map(item => item.department),
      datasets: [{
        label: 'Scores by Department',
        data: leaderboardData.map(item => item.score),
        backgroundColor: barColors,
        borderColor: barColors.map(color => color.replace('0.9', '1')),
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#fff'
          },
          grid: {
            color: '#555'
          }
        },
        x: {
          ticks: {
            color: '#fff'
          },
          grid: {
            color: '#444'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#fff'
          }
        }
      }
    }
  });
  