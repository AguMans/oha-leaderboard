async function loadLeaderboard() {
    try {
        const response = await fetch('data.json');
        const players = await response.json();
        players.sort((a, b) => b.score - a.score);
        const tbody = document.querySelector('#leaderboard tbody');
        tbody.innerHTML = '';
        players.forEach((player, i) => {
            const row = `<tr>
                <td>${i+1}</td>
                <td>${player.name}</td>
                <td>${player.score}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
        document.getElementById('timestamp').textContent = new Date().toLocaleString();
    } catch (e) {
        console.error('Error:', e);
    }
}
loadLeaderboard();
