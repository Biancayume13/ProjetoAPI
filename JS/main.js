const btnmudar = document.getElementById("mudar")
const imag = document.createElement("imag")
btnmudar.addEventListener("click", (event) => {
  gerarGato();
})

const content = document.getElementById("content");
gerarGato();

function gerarGato(){
    fetch("https://cataas.com/cat")
    .then(res => res.blob())
    .then(res =>{
    const url = URL.createObjectURL(res)
    const img = document.createElement("img");
    img.src = url
    content.appendChild(img)
})
    .catch(err => {
    console.log(err)
})
}