window.onload = function () {
    let LoggedUser = localStorage.getItem('user');

    if (LoggedUser) {
        const userioVardas = JSON.parse(LoggedUser).userName
        document.getElementById("loginform").innerHTML = "Sėkimgai prisijungete..." + userioVardas;
    } else {
        const loginButton = document.getElementById("login");
        loginButton.addEventListener("click", login);
    }

    const vartotojas = {userName: `admin`, password: "slapta"};

    function login() {
        let userName = document.getElementById("userName").value;
        let password = document.getElementById("password").value;
        if (userName === vartotojas.userName && password === vartotojas.password) {
            localStorage.setItem('user', JSON.stringify(vartotojas));
            window.location.href = "index.html";
        } else {
            alert("Neteisingi prisijungimo duomenys");
        }
    }
};