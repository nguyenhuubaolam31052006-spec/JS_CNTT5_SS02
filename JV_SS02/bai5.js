let nameBook = prompt(`Nhập tên sách:`);
let statusBook = prompt(`Nhập trạng thái sách (có sẵn / đã mượn):`);
let yearBook = prompt(`Năm xuất bản:`);

let ageBook = 2026 - Number(yearBook);

if (statusBook === "có sẵn" && ageBook <= 5) {
  console.log(`Sách này mới và có sẵn để mượn`);
} else if (statusBook === "có sẵn" && ageBook > 5) {
  console.log(`Sách này có sẵn nhưng đã lâu năm`);
} else if (statusBook === "đã mượn" && ageBook <= 10) {
  console.log(`Sách này đã mượn nhưng khá mới, có thể mượn lại sau`);
} else if (statusBook === "đã mượn" && ageBook > 10) {
  console.log(`Sách này đã mượn và khá cũ`);
} else {
  console.log(`Vui lòng nhập đúng thông tin`);
}