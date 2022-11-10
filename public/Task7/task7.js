const body = document.querySelector('body')

for(let i = 1; i <= 100; i ++){
    console.log(15 % i)
    if(i % 15  === 0){
        const el = document.createElement('p')
        el.style.color = 'green'
        el.textContent = 'FizzBuzz'
        body.appendChild(el)
    }else if(i % 5  == 0){
        const el = document.createElement('p')
        el.style.color = 'blue'
        el.textContent = 'Buzz'
        body.appendChild(el)
    }else if(i % 3  == 0){
        const el = document.createElement('p')
        el.style.color = 'red'
        el.textContent = 'Fizz'
        body.appendChild(el)
    }else{
        const el = document.createElement('p')
        el.classList.add('red')
        el.textContent = i
        body.appendChild(el)
    }
}