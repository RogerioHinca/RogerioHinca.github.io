
const btnenviar  = document.getElementById("btnenviar");


function login() {
    const imputemail  = document.getElementById("imputemail").value;
    const imputsenha  = document.getElementById("imputsenha").value;
    

    if(imputemail == "teste@teste.com" && imputsenha == "12345"){
        alert ("loguin com sucesso");
    }else {
        alert ("dados incorretos");
    }
}
btnenviar.addEventListener('click',login);