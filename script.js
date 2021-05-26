var scroll = document.querySelector('#scroll')
var itemCount = 0
var items = document.querySelector('#items')

items.innerHTML = itemCount

function pow(){
    alert('What are you doing?')
}

function next() {
    scroll.src = 'images/pixel-ninjas-2.png'
}

function prev() {
    scroll.src = 'images/stonepunk.png'
}

function increment() {
    itemCount++
    items.innerHTML = itemCount
}