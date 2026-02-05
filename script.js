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

// Load leaderboard
async function loadLeaderboard() {
    try {
        const response = await fetch('data.json');
        const players = await response.json();
        players.sort((a, b) => b.score - a.score);
        
        const tbody = document.querySelector('#leaderboard-table tbody');
        tbody.innerHTML = '';
        
        players.forEach((player, i) => {
            tbody.innerHTML += `
                <tr>
                    <td>${i+1}🏆</td>
                    <td>${player.name}</td>
                    <td><strong>${player.score}</strong></td>
                    <td>${player.wins}</td>
                </tr>
            `;
        });
        document.getElementById('timestamp').textContent = new Date().toLocaleString();
    } catch(e) {
        console.error(e);
    }
}

loadLeaderboard();
setInterval(loadLeaderboard, 30000);
