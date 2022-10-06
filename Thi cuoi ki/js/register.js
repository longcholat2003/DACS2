var ok = document.getElementById("ok")
var dk = document.getElementsByClassName("btn-register")[0]
var ok2 = document.getElementById("btn")
var checkForm = document.getElementsByClassName("login-account")[0]
var checkForm2 = document.getElementsByClassName("login-account")[1]
var checkForm3 = document.getElementsByClassName("login-password")[0]
var checkForm4 = document.getElementsByClassName("register-password")[0]
var errorName = document.getElementsByTagName("p")[0]
var errorEmail = document.getElementsByTagName("p")[1]
var errorPass = document.getElementsByTagName("p")[2]
var errorRepass = document.getElementsByTagName("p")[3]
dk.onclick = function() {
    if (checkForm.value == null||checkForm.value == "" ) {
        checkForm.style.border = "2px solid red"
        errorName.innerHTML = "Tên đăng nhập không được để trống"
        checkForm.onclick = function(){
            checkForm.style.border = "none"
            errorName.innerHTML = ""
        }
    }
    else if(checkForm.value.length < 7) {
        checkForm.style.border = "2px solid red"
        errorName.innerHTML = "Tên đăng nhập quá ngắn"
        checkForm.onclick = function(){
            checkForm.style.border = "none"
            errorName.innerHTML = ""
        }
    }
    else if(checkForm.value.length > 18) {
        checkForm.style.border = "2px solid red"
        errorName.innerHTML = "Tên đăng nhập quá dài"
        checkForm.onclick = function(){
            checkForm.style.border = "none"
            errorName.innerHTML = ""
        }
    }

    if (checkForm2.value == null||checkForm2.value == "") {
        checkForm2.style.border = "2px solid red"
        errorEmail.innerHTML = "Email không được để trống"
        checkForm2.onclick = function(){
            checkForm2.style.border = "none"
            errorEmail.innerHTML = ""
        } 
    }
    
    if (checkForm3.value == null||checkForm3.value == "" ) {
        checkForm3.style.border = "2px solid red"
        errorPass.innerHTML = "Mật khẩu không được để trống"
        checkForm3.onclick = function(){
            checkForm3.style.border = "none"
            errorPass.innerHTML = ""
        }   
    }
    else if(checkForm3.value.length < 10) {
        checkForm3.style.border = "2px solid red"
        errorPass.innerHTML = "Mật khẩu quá ngắn"
        checkForm3.onclick = function(){
            checkForm3.style.border = "none"
            errorPass.innerHTML = ""
        }
    }
    if (checkForm4.value == null||checkForm4.value == "" ) {
        checkForm4.style.border = "2px solid red"
        errorRepass.innerHTML = "Vui lòng nhập lại mật khẩu"
        checkForm4.onclick = function(){
            checkForm4.style.border = "none"
            errorRepass.innerHTML = ""
        } 
    }
    else if (checkForm4.value != checkForm3.value ) {
        checkForm4.style.border = "2px solid red"
        errorRepass.innerHTML = "Mật khẩu không khớp"
        checkForm4.onclick = function(){
            checkForm4.style.border = "none"
            errorRepass.innerHTML = ""
        } 
    }
    else {
         ok.style.display = "block"
    }
    
}
ok2.onclick = function() {
    ok.style.display = "none"
}
