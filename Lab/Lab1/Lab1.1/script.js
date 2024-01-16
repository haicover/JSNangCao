const game = {
    teams: ['Bayern Munich', 'Real Madrid'],
    score: { team1: 2, team2: 1 },
    odds: { team1: 1.5, draw: 2.5, team2: 3.0 },
    players: {
        team1: ['Neuer', 'Pavard', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'],
        team2: ['Courtois', 'Carvajal', 'Varane', 'Ramos', 'Marcelo', 'Casemiro', 'Kroos', 'Modric', 'Hazard', 'Benzema', 'Asensio']
    }
};

// 1. Tạo mảng cầu thủ cho mỗi đội
const players1 = game.players.team1;
const players2 = game.players.team2;
console.log('Cầu thủ team 1:', players1);
console.log('Cầu thủ team 2:', players2);

///////////////
// 2. Chia mảng thành thủ môn và cầu thủ khác
const gkTeam1 = players1[0];
const fieldPlayersTeam1 = players1.slice(1);
// Tạo biến và mảng cầu thủ cho đội 2
const gkTeam2 = players2[0];
const fieldPlayersTeam2 = players2.slice(1);
// In ra tên thủ môn và mảng cầu thủ cho từng đội
console.log('Thủ môn Team 1:', gkTeam1);
console.log('Các cầu thủ khác của Team 1:', fieldPlayersTeam1);
console.log('Thủ môn Team 2:', gkTeam2);
console.log('Các cầu thủ khác của Team 2:', fieldPlayersTeam2);

////////////////
// 3. Tạo mảng 'allPlayers'
// Tạo mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ
const allPlayers = [...players1, ...players2];
// In ra mảng 'allPlayers'
console.log('Toàn bộ cầu thủ của 2 Team:', allPlayers);

/////////////////
// 4. Thêm cầu thủ thay người vào đội Bayern Munich
// Số lượng quyền thay người cho Bayern Munich
const substitutionsCount = 3;
// Tạo mảng 'players1Final' cho đội Bayern Munich sau khi sử dụng quyền thay người
const players1Final = game.players.team1.slice(0, game.players.team1.length - substitutionsCount)
    .concat(['Thiago', 'Coutinho', 'Perisic']);
// In ra mảng 'players1Final'
console.log('Players for Team 1 after substitutions:', players1Final);

/////////////////
// 5. Tạo biến thể hiện tỷ lệ kết quả trận đấu
const odds = {
    team1: game.odds.team1,
    draw: game.odds.draw,
    team2: game.odds.team2
};
// In ra biến tỉ lệ
console.log('Odds for Team 1:', odds.team1);
console.log('Odds for Draw:', odds.draw);
console.log('Odds for Team 2:', odds.team2);

/////////////////
// 6. Hàm in ra console tên cầu thủ ghi bàn
// Hàm in ra console tên cầu thủ và số bàn thắng
function printGoals(...goalScorers) {
    goalScorers.forEach((player) => {
        console.log(`${player} đã ghi bàn!`);
    });
}
// Sử dụng hàm printGoals với một số cầu thủ đã ghi bàn (sử dụng toán tử spread)
const goalScorers = ['Lewandowski', 'Muller', 'Kimmich'];
printGoals(...goalScorers);

/////////////
// 7. In ra đội chiến thắng mà không sử dụng if/else hoặc toán tử 3 ngôi
// Tính tỷ lệ chấp cho từng đội
const oddsTeam1 = game.odds.team1;
const oddsTeam2 = game.odds.team2;
// Xác định đội chiến thắng dựa trên tỷ lệ chấp
const winningTeam = oddsTeam1 < oddsTeam2 ? game.teams[0] : game.teams[1];
// In ra đội chiến thắng
console.log(`Đội chiến thắng: ${winningTeam}`);