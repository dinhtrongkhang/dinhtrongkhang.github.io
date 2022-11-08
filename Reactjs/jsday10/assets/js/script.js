      let a = +prompt("Nhập vào nhiệt độ theo thang C mà bạn muốn chuyển:", "");
      alert(`${a} độ C = ${a * 1.8 + 32} độ F`);


      // Danh sách các phần tử
var  numbers = [4, 5, 6, 7, 8, 9, 10]; 
 
// Lấy giá trị lớn nhất và nhỏ nhất
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
 
// In giá trị ra màn hình
console.log("Giá trị lớn nhất là " +maxInNumbers);
console.log("Giá trị nhỏ nhất là " +minInNumbers);


//Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

function doiDoCSangDoF(doC) {
      let doF = doC * 1.8 + 32;
      return doF;
}
doiDoCSangDoF(-30);

/// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

sort so theo chieu tang dan
[1, 3, 11, 21].sort(function(a, b) {
      return a - b;
})
// sort so theo chieu giam dan
[1, 3, 11, 21].sort(function(a, b) {
      return b - a;
})

function timSoLonThuNhiTrongMang(array) {
      array.sort(function(a, b) {
            return (b - a);
      });
      return array[1];
}

// test tat ca cac truong hop: so 0, so am
timSoLonThuNhiTrongMang([-23, 44, 56, 78, 33, 0.5, 58, 0, 99]);


