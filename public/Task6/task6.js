const modal = document.querySelector('.modal')
const cover = document.querySelector('.cover')

const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')

const body = document.querySelector('body')
openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    cover.style.display = 'block'
    body.style.height = '100vh'
    body.style.overflow = 'hidden'
})
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    cover.style.display = 'none'
    body.style.height = 'auto'
    body.style.overflow = 'auto'
})
cover.addEventListener('click', () => {
    modal.style.display = 'none'
    cover.style.display = 'none'
    body.style.height = 'auto'
    body.style.overflow = 'auto'
})
