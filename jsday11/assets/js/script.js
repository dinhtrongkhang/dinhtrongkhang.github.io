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

// bai tap js phan 2

//Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.

function doiTienDolarSangVnd(dolar) {
      let Vnd = dolar * 23000;
      return Vnd;
}
doiTienDolarSangVnd(1);

// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).

function theTichHinhCau(r) {
            let V = (4/3) * Math.PI * r * r * r;
      }
      return V;
}
theTichHinhCau(3);

// Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sum(a, b) {
      let sum = arr[1] + arr[];
      return sum;
}


