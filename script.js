for (let i = 1; i <= 16;i++) {
    let Div = document.createElement('div')
    let thing = document.body.appendChild(Div)
    Div.id = "[" + i + ", 0]"
    for (let j = 1; j <= 16;j++) {
        let Div = document.createElement('div')
        thing.appendChild(Div)
        Div.id = "[" + i + ", " + j + "]"
    }
}