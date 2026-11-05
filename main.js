// PASSO 1 capturar o formulario do HTML

const formulario = document.getElementById("formulario")

//PASSO 2 adiciona um evento ao formulario

formulario.addEventListener("submit", function(event) {
//event.preventDefault() - Impede que a pagina seja recarregada
    event.preventDefault()


//PASSO 3 captura valores digitados pelo usuarios
let nome = document.getElementById("nome").value
//captura do email
let email = document.getElementById("email").value
//captura do telefone
let telefone = document.getElementById("telefone").value
//captura de localidade
let localidade = document.getElementById("localidade").value
//mensagem
let mensagem = document.getElementById("mensagem").value

if(telefone.trim() === ""){
    alert("Digite seu telefone")
   
    return
}
//PASSO 4 montar a mensagem que sera enviada para o whatsapp
const textoWhatsapp = 
`Olá gostaria de garantir o ticket para as exposições
nome:${email}
E-mail:${email}
Telefone:${telefone}
Localidade:${localidade}
Observação:${mensagem}
`
let mensagemCodificada = encodeURIComponent(textoWhatsapp)

let numeroWhatsapp = "5511943385510"

const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

window.location.href= link
})