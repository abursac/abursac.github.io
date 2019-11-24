function login()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var button = document.getElementById("button");
    var login = document.getElementById("login");

    if(localStorage.getItem(username.value) == password.value)
    {
        button.style.display = "none";
        username.style.display = "none";
        password.style.display = "none";
        login.innerHTML = "<h3>Здраво "+username.value+"</h3>";

        localStorage.setItem("logged", username.value);
        login.innerHTML += "<button onclcik='logout()'>Одјави се</button>";
    }
    else
    {
        alert("Неисправно корисничко име и/или лозинка");
    }
    
}

function register()
{
    var username = document.getElementById("reg_username");
    var password = document.getElementById("reg_password");
    if(localStorage.getItem(username.value) == null)
    {
        localStorage.setItem(username.value, password.value);
    }
    else
    {
        alert("Корисничко име већ постоји");
    }
}

function checkLogin()
{
    if(localStorage.getItem("logged") != "" && localStorage.getItem("logged") != null)
    {
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        var button = document.getElementById("button");
        var login = document.getElementById("login");

        button.style.display = "none";
        username.style.display = "none";
        password.style.display = "none";
        login.innerHTML = "<h3>Здраво "+localStorage.getItem("logged") +"</h3>";

        login.innerHTML += "<button onclick=\"logout()\">Одјави се</button>";
    }
}

function logout()
{
    localStorage.setItem("logged", "");
    location = location;
}

