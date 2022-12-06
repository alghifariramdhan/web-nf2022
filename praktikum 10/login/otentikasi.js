function login() {
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "rama22137ti" && pass == "integrity") {
        location.replace("succes.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}
