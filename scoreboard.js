// Sample data for leaderboard
const leaderboardData = [
    { department: 'CSE', score: 205 },
    { department: 'ECE', score: 55 },
    { department: 'EEE/EL', score: 55 },
    { department: 'IT', score: 43 },
    { department: 'RA', score: 24 },
    { department: 'SF', score: 24 },
    { department: 'CE', score: 18 },
    { department: 'ME', score: 11 },
    { department: 'MBA', score: 9 }
  ];
  
  // Populate scoreboard table
  const tableBody = document.querySelector('#leaderboard-body'); // Corrected ID
  leaderboardData.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${index + 1}</td><td>${item.department}</td><td>${item.score}</td>`;
    tableBody.appendChild(row);
  });
  
  // Render chart
  const ctx = document.getElementById('leaderboardChart').getContext('2d'); // Corrected ID
  
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
  ];
  
  const glowPlugin = {
    id: 'glow',
    beforeDatasetDraw(chart, args, options) {
      const {ctx} = chart;
      const dataset = chart.data.datasets[args.index];
      const meta = chart.getDatasetMeta(args.index);
  
      meta.data.forEach((bar, i) => {
        const model = bar;
  
        ctx.save();
        ctx.shadowColor = dataset.backgroundColor[i];
        ctx.shadowBlur = 20;
        ctx.fillStyle = dataset.backgroundColor[i];
        ctx.fillRect(
          model.x - model.width / 2,
          model.y,
          model.width,
          model.base - model.y
        );
        ctx.restore();
      });
  
      return false; // skip default draw
    }
  };
  
  
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: leaderboardData.map(item => item.department),
      datasets: [{
        label: 'Scores by Department',
        data: leaderboardData.map(item => item.score),
        backgroundColor: barColors,
        borderColor: barColors.map(c => c.replace('0.9', '1')),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#fff' },
          grid: { color: '#555' }
        },
        x: {
          ticks: { color: '#fff' },
          grid: { color: '#444' }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#fff' }
        }
      }
    },
    plugins: [glowPlugin]
  });
  
function goBack() {
    window.history.back();
  }

let lastScrollPosition = 0;
const backButton = document.querySelector('.back-button');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    backButton.style.opacity = '0';
    backButton.style.pointerEvents = 'none'; // Prevent interaction when hidden
  } else {
    // Scrolling up
    backButton.style.opacity = '1';
    backButton.style.pointerEvents = 'auto';
  }

  lastScrollPosition = currentScrollPosition;
});
