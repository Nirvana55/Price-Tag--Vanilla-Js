const page__Views = document.getElementById('page__views');
const slider__roll = document.getElementById('my__Range');
const money__desc = document.getElementById("money__description");
const checkbox = document.getElementById('checkbox');


const price__Data = [
    {viewcount: "10K", price: 8},
    {viewcount: "50K", price: 12},
    {viewcount: "100K", price: 16},
    {viewcount: "500K", price: 24},
    {viewcount: "1M", price: 36},
]

slider__roll.addEventListener("change", money => {
    let val = money.target.value;
    console.log(val)
    page__Views.textContent = price__Data[val].viewcount;
    console.log(price__Data[val].viewcount)
    changePrice(val);
})

checkbox.addEventListener("change", () => {
    changePrice();
})

function changePrice(val = slider__roll.value) {
    let price = (checkbox.checked) ? price__Data[val].price*.75 : price__Data[val].price
    price = Math.round(price*100).toString();
    price = "$" + price.slice(0, -2) + "." + price.slice(-2);
    money__desc.textContent = price;
}