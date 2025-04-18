document.getElementById('toggleWinners').addEventListener('click', function () {
    const winners = document.getElementById('winners');
    winners.classList.toggle('hidden');
    this.textContent = winners.classList.contains('hidden') ? 'Show Winners' : 'Hide Winners';
  });
  
  function goBack() {
    window.history.back();
  }
  