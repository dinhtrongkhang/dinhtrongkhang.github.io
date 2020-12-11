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