// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Leaderboard functionality
async function loadLeaderboard() {
    try {
        const response = await fetch('data.json');
        const players = await response.json();
        players.sort((a, b) => b.score - a.score);
        
        const tbody = document.querySelector('#leaderboard-table tbody');
        tbody.innerHTML = '';
        
        players.forEach((player, i) => {
            const row = `<tr>
                <td>${i+1}🏆</td>
                <td><strong>${player.name}</strong></td>
                <td>${player.score}</td>
                <td>${player.wins || 0}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
        
        document.getElementById('timestamp').textContent = new Date().toLocaleString();
    } catch (e) {
        console.error('Error:', e);
    }
}

loadLeaderboard();
setInterval(loadLeaderboard, 30000); // Auto refresh every 30s
