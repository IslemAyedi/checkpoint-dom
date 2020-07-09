const count1 = document.getElementById('count1');
const price1 = document.getElementById('price1');
const priceT = document.getElementById('priceT');
function increment1() {
    count1.innerHTML = +count1.innerHTML + 1
    price1.innerHTML = +price1.innerHTML + 20
    priceT.innerHTML = +priceT.innerHTML + 20
}
butplus1.addEventListener('click', increment1);

function decrement1() {
    if (count1.innerHTML > 0) {
        count1.innerHTML = +count1.innerHTML - 1
        price1.innerHTML = +price1.innerHTML - 20
        priceT.innerHTML = +priceT.innerHTML - 20
    }
}
butminus1.addEventListener('click', decrement1);