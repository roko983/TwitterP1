user_name = localStorage.getItem("user_name");
document.getElementById("name").innerHTML = "¡Hola " + user_name + "!";
sala_agregada = []
console.log(user_name)
comprobar = ""

function addroom() { 
    comprobar = document.getElementById("room_name").value
    if (comprobar == "") { 
        console.log("No hay palabra")
    } 
    else {
        room_name = document.getElementById("room_name").value
    console.log(room_name)
    sala_agregada.push(room_name + "<br>") 
    console.log(sala_agregada)
    document.getElementById("sala").innerHTML = sala_agregada
    }
} 
function borrar() {
    vacio = ""
    document.getElementById("room_name").innerHTML = vacio

}
