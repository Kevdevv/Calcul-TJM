let selector = document.getElementById('money-selector')
let originContent = document.getElementById('default')
let secondContent = document.getElementById('warning')
const tjm = 331
const salary = 40000
const rest = 258

function slideCalcul() {
    document.getElementById('CDI').innerHTML = Math.floor(selector.value) + ' €'
    let result = Math.floor(selector.value * tjm / salary)
    let charge = result * 22 / 100
    let calculCharge = Math.floor(result - charge)

    if (selector.value > 50000) {
        originContent.classList.add('none')
        secondContent.classList.add('active')
    } else {
        secondContent.classList.remove('active')
        originContent.classList.remove('none')
    }
    document.getElementById('TJM').innerHTML = result + ' €'
    document.getElementById('charge').innerHTML = calculCharge + ' €'
}

selector.addEventListener('touchmove', slideCalcul)
selector.addEventListener('mousemove', slideCalcul)
document.getElementById('CDI').innerHTML = selector.value + ' €'
document.getElementById('TJM').innerHTML = tjm + ' €'
document.getElementById('charge').innerHTML = rest + ' €'

