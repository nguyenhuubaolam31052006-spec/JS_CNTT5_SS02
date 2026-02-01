let quantity = prompt(`Mời bạn nhập vào số lượng sách trong thư viện `);

if (quantity <= 10) {
  console.log(`Thư viện có ít sách `);
} else if (quantity <= 20) {
  console.log(`Thư viện có số lượng sách vừa đủ `);
} else {
  console.log(` Thư viện có nhiều sách`);
}