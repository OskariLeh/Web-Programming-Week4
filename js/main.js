let textField = document.getElementById("input-show")
let submitButton = document.getElementById("submit-data")
let showContainer = document.getElementById("show-container")


submitButton.addEventListener("click", async () => {
    showContainer.replaceChildren()
    const url = "https://api.tvmaze.com/search/shows?q=" + textField.value
    const dataPromise = await fetch(url)
    const json = await dataPromise.json()

    json.forEach(object => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("show-data")
        let img = document.createElement("img")
        img.src = object?.show?.image?.medium

        let innerDiv = document.createElement("div")
        innerDiv.classList.add("show-info")    
        let h1 = document.createElement("h1")
        h1.innerText = object.show.name
        let paragraph = document.createElement("p")
        paragraph.innerHTML = object.show.summary

        innerDiv.appendChild(h1)
        innerDiv.appendChild(paragraph)
        newDiv.appendChild(img)
        newDiv.appendChild(innerDiv)
        
        showContainer.appendChild(newDiv)
    });
})