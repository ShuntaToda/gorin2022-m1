const pals = ['000', '088', '00d', '438', '800', '888', '8cf', 'aa2', 'b82', 'c18', 'fbb', 'e00', 'fd0', 'feb', 'ddd', 'fff'];

let colorNum = 0

const canvas = document.querySelector('.canvas')
const picker = document.querySelector('.picker')

for(let i = 0; i < 16 * 16; i ++){
    const el = document.createElement('div')
    canvas.appendChild(el)
}

pals.forEach((color, index)=>{
    let el = document.createElement('div')
    el.style.backgroundColor = "#" +color
    if(index == 0){

        el.style.borderColor = 'yellow'
    }
    el.addEventListener('click', ()=>{
        const div = document.querySelectorAll('.picker > div')
        div.forEach((pickerEl)=>{
            pickerEl.style.borderColor = 'gray'
        })
        el.style.borderColor = 'yellow'
        colorNum = index
    })
    
    picker.appendChild(el)
})

const blocks = document.querySelectorAll('.canvas > div')

blocks.forEach((el)=>{
    el.addEventListener('click', ()=>{
        el.style.backgroundColor = '#' + pals[colorNum]
    })
})