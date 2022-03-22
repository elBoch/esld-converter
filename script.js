const factors = {
    "euro" : 1.,
    "milk" : 1.35,
    "kebab" : 4.,
    "schilling" : 1/13.7603
}

const convert = () => {
    let factor = document.getElementById('currency').value
    let amount = document.getElementById('amount').value || 0
    let euro = amount * factors[factor]
    for (let f in factors) {
        document.getElementById(f).value = Math.round((euro / factors[f])*100) / 100
    }
}