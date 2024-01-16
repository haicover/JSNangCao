//1.Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu
const events = [
    [5, "GOAL"],
    [17, "GOAL"],
    [30, "SUBSTITUTION"],
    [45, "YELLOW CARD"],
    [64, "YELLOW CARD"],
    [75, "RED CARD"],
    [82, "GOAL"],
];
// Tạo mảng chứa các sự kiện khác nhau
const uniqueEvents = Array.from(new Set(events.map((event) => event[1])));
console.log("Các sự kiện khác nhau trong trận đấu:", uniqueEvents);

//2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
// Xóa sự kiện không đúng (thẻ vàng phút 64)
const correctedEvents = events.filter(event => !(event[0] === 64 && event[1] === '🟨 YELLOW CARD'));
console.log('Danh sách sự kiện sau khi xóa sự kiện không đúng:', correctedEvents);

//3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". Lưu ý răng mỗi trận đấu có 90 phút.
// Tính tổng số sự kiện
const totalEvents = events.length;
// Tính trung bình mỗi 9 phút
const averageEventsPer9Minutes = totalEvents / (90 / 9);
console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi 9 phút: ${averageEventsPer9Minutes.toFixed(2)} sự kiện`);

//4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2,
// Lặp qua mảng sự kiện và in ra màn hình với đánh dấu cho hiệp 1 hay hiệp 2
events.forEach(event => {
    const [minute, action] = event;
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    const formattedMinute = minute <= 45 ? minute : minute - 45;
    console.log(`[${half}] ${formattedMinute}: ${action}`);
});