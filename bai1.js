let nameBook = prompt(`Nhập vào tên sách: `);

let author = prompt(`Nhập vào tên tác giả: `);

let yearBook = prompt(`Nhập vào năm của cuốn sách `);

let ageBook = 2026 - Number(yearBook);

if (ageBook == 0) {
  console.log(`Đây là sách mới `);
} else if (ageBook <= 5) {
  console.log(`Sách khá mới `);
} else {
  console.log(`Sách đã cũ `);
}