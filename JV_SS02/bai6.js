let nameBook = prompt(` Mời bạn nhập vào tên sách:`);
let userName = prompt(` Tên người mượn:`);
let statusBook = prompt(` Tình trạng sách (Đã mượn // Có sẵn // Không có sẵn)`);
let dayBook = prompt(` Số ngày mượn`);
let statusCard = prompt(`Thẻ thư viện(Có // Không) `);

if (statusBook === "Có sẵn") {
  if (statusCard === "Có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
  } else {
    console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
  }
} else if (statusBook === "Đã mượn") {
  if (dayBook < 30) {
    if (statusCard === "Có") {
      console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
      console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
  } else {
    console.log("Sách đã mượn quá hạn. Vui lòng liên hệ thư viện");
  }
} else if (statusBook === "Không có sẵn") {
  console.log(
    "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau",
  );
}