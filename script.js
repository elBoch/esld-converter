const factors = {
    "euro" : 1.,
    "milk" : 1.35,
    "kebab" : 4.,
    "schilling" : 1/13.7603
}

const values = {
    "euro" : 0,
    "milk" : 0,
    "kebab" : 0,
    "schilling" : 0
}


const convert = () => {
    let factor = document.getElementById('currency').value
    let amount = document.getElementById('amount').value || 0
    let euro = amount * factors[factor]
    for (let f in factors) {
        values[f] = Math.round((euro / factors[f])*100) / 100
    }

    assignValues()
}

const assignValues = () => {
    let euro = document.getElementById('euro')
    let schilling = document.getElementById('schilling')
    let milk = document.getElementById('milk')
    let kebab = document.getElementById('kebab')

    euro.value = values.euro
    schilling.value = values.schilling
    milk.value = values.milk
    kebab.value = values.kebab
}