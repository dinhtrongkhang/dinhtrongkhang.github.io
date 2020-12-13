//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
//Phương thức eval() có chức năng tính toán biểu thức toán học hoặc thức thi mã lệnh tùy thuộc vào tham số mà người dùng truyền vào khi khởi tạo phương thức.

//Nếu tham số truyền vào là một biểu thức toán học, phương thức sẽ tính toàn và trả về kết quả của biểu thức đó.

//Nếu tham số truyền vào là một hoặc nhiều đoạn mã javascript, phương thức sẽ thực thi các đoạn mã lệnh đó.
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}

/// slice

let str = "xin chao ban"
// cat tu vi tri dau tien den thu 4
str.slice(0, 4) 
// cat cuoi chuoi n ky tu
str.slice(0, -1)
// cat ky tu cuoi
str.slice(-2)

// doi xin chao ban thanh xin chao chi

let str = "xin chao ban"
str.slice(0, -5) + "chi"

// hoac
str.replace("ban", "chi")

/// thay doi

let str = "xin chao ban khang"
str.replace("chao", "hoi")
//
let str = "xin chao ban chao"
// thay 2 chu chao bang chu hoi
str.replaceAll("chao", "hoi")

///
str;
"8 + 8 * 8 - 8 / 8 * 8"
// newStr = rong
newStr = '';
// i = 0, i < str.length: tong so ky tu trong chuoi
for (let i = 0; i < str.length; i++) {
    if (str[i] == '×') {
        newStr[i] += '*';
    }
    else if (str[i] == '÷') {
        newStr[i] += '/';
    } else { 
        newStr += str[i];
        // += cong them  
        //4 + "8" = "48" chuoi 48
        //"4" + "8" = "48" chuoi 48
        // i = 0; i < 21; ==> newStr = "8"
        // i = 1; i < 21; ==> newStr = "8+"
        // i = 2; i < 21; ==> newStr = "8+8"
        // i = 3; i < 21; ==> newStr = "8+8*"
    }
}

// ham replace

str.replaceAll("×", "*").replaceAll("÷", "/")
