// Tab switching (Chrome style)
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

function loadLeaderboard() {
    // YOUR REAL JSON DATA
    const players = [
        {"name": "Megh", "score": 104, "wins": 11},
        {"name": "Izhan", "score": 100, "wins": 12},
        {"name": "Agatsya", "score": 98, "wins": 10},
        {"name": "Dharm-ICC", "score": 91, "wins": 2},
        {"name": "Shayaan", "score": 83, "wins": 2},
        {"name": "Prathit-ICC", "score": 79, "wins": 3},
        {"name": "Zaqi-ICC", "score": 76, "wins": 1},
        {"name": "Farhan", "score": 67, "wins": 3}
    ];
    
    // Sort by score (highest first)
    players.sort((a, b) => b.score - a.score);
    
    const tbody = document.querySelector('#leaderboard-table tbody');
    tbody.innerHTML = '';
    
    players.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${player.wins}</td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('timestamp').textContent = new Date().toLocaleString();
}

loadLeaderboard();
setInterval(loadLeaderboard, 30000);
