const formulario = document.querySelector("form")
const respMedia = document.querySelector("h3")
const respSituacao = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
// entrada
    const nome = formulario.nomedoAluno.value
    const nota1 = Number(formulario.nota1.value)
    const nota2 = Number(formulario.nota2.value)
    const nota3 = Number(formulario.nota3.value)
// processamento
    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 6){
        respSituacao.innerText = `Legal, stude mais pra continuar assim (talvez melhorar né). `
    respSituacao.style.color = "green"
}else {
    respSituacao.innerText = `Bixxo burro do cão, vai estudar seu merda. `
respSituacao.style.color = "red"
}





respMedia.innerText = Media das Notas + (media)

})
