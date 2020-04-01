function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

//Para não deixar salvar sem ter todos os dados preenchidos no formulário
function checkFields(event) {
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link"
    ]
    const isEmpty = valuesToCheck.find(function (value) {
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert("Por favor preeencha todos os campos")
    }
}

async function deleteIdea(id) {
    // chamar uma função específica para mandar um delete
    await axios.delete(`/ideias/${id}`);
    location.reload();
}