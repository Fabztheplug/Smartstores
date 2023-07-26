//document.getElementsById("count-el").innertext = 5

let saveEl = document.getElementsById("save-el")

let countEl = document.getElementsById("count-el")

let count = 0
console.log(saveEl)



function increment () {
    count = count + 1
  countEl.innerText = count
}

function save() {
    let countStr = count + " - "

    saveEl.innerText += countStr
    console.log(count)
}