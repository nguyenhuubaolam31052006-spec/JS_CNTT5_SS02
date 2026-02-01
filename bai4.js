let nameBook = prompt(` Nhập vào tên sách:`);

let userName = prompt(` Nhập tên người mượn:`);

let likeBook = prompt(` Mức độ yêu thích (từ 1 -> 5)`);

if (likeBook >= 4 && likeBook <= 5) {
  console.log(`Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!`);
} else if (likeBook == 3) {
  console.log(` Sách này khá ổn, có thể mượn`);
} else if (likeBook >= 1 && likeBook <= 2) {
  console.log(` Sách này bạn có thể cân nhắc mượn lại sau`);
} else {
  console.log(` Vui lòng đánh giá từ 1 - 5`);
}