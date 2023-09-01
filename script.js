// Função incluída no botão toggle para inserir/remover a classe "light"

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

// O código acima é uma forma simplificada de fazer o código abaixo

    // if (html.classList.contains("light")){
    //     html.classList.remove("light")
    // }
    // else{
    //     html.classList.add("light")
    // }

// O código abaixo é para alteraar o avatar para outra imagem toda vez que o botão toggle for clicado, 
// porém utilizarei apenas 1 imagem nesse código

   //const img = document.querySelector("#profile img")
    
    //if (html.classList.contains("light"))
    //{
        //img.setAttribute("src", "./assets/avatar-light.png")
    //}
    //else{
        //img.setAttribute("src", "./assets/avatar.png")
    //}
}