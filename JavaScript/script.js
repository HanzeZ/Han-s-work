var correctCode = {
    username: "sesame",
    password: "open"
}

function getInfo(){
    var user = document.getElementById("username").value
    var pw = document.getElementById("password").value
    if (user == correctCode.username && pw == correctCode.password){
        document.body.innerHTML = "Login Successful"
    }
    else{
        document.body.innerHTML = "Login Failed"
    }
}
