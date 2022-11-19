function dangKy(){
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    if(Email == ""){
        alert("Bạn phải nhập Email!");
    }else if(Email.indexOf("@") == -1 || Email.indexOf(".") == -1 || Email.indexOf(" ") != -1){
        alert("Vui lòng nhập đúng Email!");
    }else if(password == ""){
        alert("Bạn phải nhập mật khẩu!");
    }else{
        alert("Đăng nhập thành công!");
    }
}