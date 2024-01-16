const game = {
    teams: ['Bayern Munich', 'Real Madrid'],
    score: { team1: 2, team2: 1 },
    odds: { team1: 1.5, draw: 2.5, team2: 3.0 },
    players: {
        team1: ['Neuer', 'Pavard', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'],
        team2: ['Courtois', 'Carvajal', 'Varane', 'Ramos', 'Marcelo', 'Casemiro', 'Kroos', 'Modric', 'Hazard', 'Benzema', 'Asensio']
    },
    scored: [
        { name: 'Lewandowski', minute: 8 },
        { name: 'Muller', minute: 23 },
        { name: 'Davies', minute: 48 }
    ]
};
// Bai 2

//1.Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
// Lặp qua mảng scored và in ra cầu thủ và số bàn thắng
game.scored.forEach((goal, index) => {
    console.log(`Goal ${index + 1}: ${goal.name}`);
});


//2.Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
// Tính tổng số bàn thắng của cả hai đội
let totalGoals = 0;
game.scored.forEach((goal) => {
    totalGoals += 1;
});
// Tính tỉ lệ kết quả trận đấu
const averageGoals = totalGoals / game.scored.length;
// In ra tỉ lệ kết quả trận đấu
console.log(`Tổng số bàn thắng trong trận đấu: ${averageGoals}`);


//3.In ra tỉ lệ cược theo định dạng yêu cầu
console.log(`Tỉ lệ thắng của ${game.teams[0]}: ${game.odds.team1}`);
console.log(`Tỉ lệ hòa of draw: ${game.odds.draw}`);
console.log(`Tỉ lệ thắng của ${game.teams[1]}: ${game.odds.team2}`);

//4.Tạo đối tượng 'scorers'
const scorers = {};
// Lặp qua mảng scored để cập nhật đối tượng scorers
game.scored.forEach((goal) => {
    if (scorers[goal.name]) {
        scorers[goal.name] += 1;
    } else {
        scorers[goal.name] = 1;
    }
});
// In ra đối tượng scorers
console.log('Đối tượng scorers:', scorers);