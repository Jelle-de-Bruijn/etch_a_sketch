const container = document.querySelector('#container')
let square_width = 16
let square_height = 16
function field(width, height) {
    let div_width = 500 / width
    let div_height = 500 / height
    let width_lst = ""
    let height_lst = []
    for (i=1; i <= width; i++) {
        width_lst = width_lst + " 1fr"
        for (n=1; n <= height; n++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'square')
            div.classList.add('square')
            div.style.width = div_width + "px"
            div.style.height = div_height + "px"
            container.appendChild(div)
        }
    } 
    container.style.gridTemplateColumns = width_lst
    for (i=0; i<height; i++) {
        height_lst = height_lst + " 1fr"
    } 
    container.style.gridTemplateRows = height_lst
    const squares = document.querySelectorAll('#square')
        squares.forEach((square) => {
            square.addEventListener('mouseenter', () => {
                square.setAttribute('id', 'colored')
            })
        })
}
field(square_width, square_height)

const new_square = document.querySelector('#new')
new_square.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.setAttribute('id', 'square')
        let rem_square = document.getElementById("square")
        rem_square.remove()
    })
    square_width = prompt('width')
    square_height = prompt('height')
    field(square_width, square_height)
})








