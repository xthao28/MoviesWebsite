function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    // var regRex = /^[A-Za-z][\w$.] + @[\w] + \.\w+$/;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let checkbox = document.getElementById("checkbox").value;

    if(username == null || username == "") {
        alert("Mời bạn điền tên đăng nhập");
        return false;
    } else if(email == null || email == ""){
        alert("Mời bạn điền địa chỉ email");
        return false;
    } else if(email != "/^[A-Za-z][\w$.] + @[\w] + \.\w+$/") {
        alert("Email phải theo cấu trúc xyz@abcd.com");
        return false;
    } else if(number == null || number == "") {
        alert("Mời bạn điền số điện thoại");
        return false;
    }else if(isNaN(number) == -1) {
        alert("Mời nhập đúng ký tự dạng số")
        return false;
    } else if(number.length != 10) {
        alert("Mời bạn nhập đầy đủ 10 ký tự");
        return false;
    } else if(password == null || password =="") {
        alet("Mời bạn điền mật khẩu");
        return false;
    } else if(checkbox == null )
    alert("Đã điền đầy đủ thông tin, chuyển hướng tới trang chủ");
    window.location.href = "";
}