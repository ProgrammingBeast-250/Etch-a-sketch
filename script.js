for (let i = 1; i <= 16;i++) {
    let Div = document.createElement('div')
    let thing = document.body.appendChild(Div)
    Div.id = "column"
    for (let j = 1; j <= 16;j++) {
        let Div = document.createElement('div')
        thing.appendChild(Div)
        Div.id = "row"
        Div.textContent = "."
        Div.addEventListener("click", function () {
            if (Div.style.backgroundColor === "red"){
            Div.style.backgroundColor = "lightgrey"
            }
            else {
                Div.style.backgroundColor = "red"
            }
        })
    }
}