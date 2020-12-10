//function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
      document.getElementsByClassName('name')[0].style.color = 'tomato';
      document.getElementsByClassName('text')[0].style.color = 'blue';
      document.getElementsByClassName('text')[1].style.color = 'yellow';
      document.getElementsByClassName('text')[2].style.color = 'red';
}
changeColor();

//function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
      document.body.style.background = color;
   }
   
   changeBgColor("turquoise");

//function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(p1, p2) {
     let content = document.getElementById(p1).innerText;
      document.getElementById(p2).innerText = content;
      //innerText chi chap nhan text
   }
   
   copyContent("text4", "text1");

// dao thu tu doan van

// function reverseContent(p1, p2) {
//       let paragraph1 = document.getElementById(p1);
//       let paragraph2 = document.getElementById(p2);

//       let temp = paragraph1.innerHTML;
//       paragraph1.innerHTML = paragraph2.innerHTML;
//       paragraph2.innerHTML = temp;
// }
// reverseContent("p1", "p2")

//function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x) {
      // fix cung
      document.getElementsByClassName("text")[0].style.fontSize = "50px";
      // nhap vao so + px
      document.body.style.fontSize = x;
      //hoac chi can nhap so
      // document.body.style.fontSize = x + 'px';

      // cach 2 tay to chon tung the p
      document.getElementById("p1").style.fontSize = x + "px";
      document.getElementById("p2").style.fontSize = x + "px";
      document.getElementById("p2").style.fontSize = x + "px";
      /// cach 3 chon theo mang
      let arr = document.getElementsByTagName('p');
      for (let i = 0; i < arr.length; i++) {
            arr[i].style.fontSize = x + 'px';
      }
}
      changeFontSize();

// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
// kiem tra fontsize cua doan van
document.getElementById('p1').style.fontSize

changeFontSize(25);
function increaseFontSize (paragraph) {
      let font = document.getElementById(paragraph);
      let fontSize = parseFloat(font.style.fontSize);
      if font.style.fontSize < 30; {
            font.style.fontSize = fontSize + 1 + "px"
      }
}


// di chuyen trong js

function moveToLeft() {
      document.getElementsByTagName('iframe')[1].style.left = '12px';
      document.getElementsByTagName('iframe')[3].style.left = '12px';
}
moveToLeft();

/// code may tinh

1 ham day phep cong len man hinh 1+2
1 ham day dau bang len

