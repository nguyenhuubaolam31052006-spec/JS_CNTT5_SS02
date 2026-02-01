let nameBook = prompt(` Mời bạn nhập vào tên sách`);

let category = prompt(` Mời bạn nhập vào thể loại sách`);

let statusBook = prompt(`Mời bạn nhập (Sách có sẵn // Đã mượn) `);

if (category === "Khoa học" || category === "Lịch sử") {
  if (statusBook === "có sẵn") {
    console.log("Sách này có sẵn trong thư viện");
  } else if (statusBook === "đã mượn") {
    console.log("Sách đã được mượn");
  } else {
    console.log("Tình trạng sách không hợp lệ!");
  }
} else if (category === "Văn học" || category === "Truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Thể loại sách không thuộc danh mục quản lý!");
}