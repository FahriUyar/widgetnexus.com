const amount = document.getElementById('amount');
const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const convertedCurrency = document.getElementById('convertedCurrency');
const firstRate = document.getElementById('firstRate');



function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/f1c527bc47f9d19199b70431/latest/${currencyFirst.value}`).then((res) => res.json()).then((data) => {
        console.log(data);
        const rate = data.conversion_rates[currencySecond.value];
        firstRate.textContent = `1 ${currencyFirst.value} = ${rate.toFixed(2)} ${currencySecond.value}`;
        convertedCurrency.textContent = `${amount.value} ${currencyFirst.value} * ${rate.toFixed(2)} = ${formatNumber((amount.value * rate).toFixed(2))} ${currencySecond.value}`
    });
}

function formatNumber(number) {
    // Sayıyı string'e çevirme
    const numString = number.toString();

    // Ondalık kısmı ayırma
    const parts = numString.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '';

    // Tam kısmı her 3 rakamda bir nokta ile ayırma
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Son formatlı sayıyı oluşturma
    return formattedInteger + (decimalPart ? ',' + decimalPart : '');
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
        document.querySelector("#convertButton").click();
    }
});



document.getElementById('swapCurrencies').addEventListener('click', function () {
    var currencyFirst = document.getElementById('currencyFirst');
    var currencySecond = document.getElementById('currencySecond');

    var tempValue = currencyFirst.value;
    currencyFirst.value = currencySecond.value;
    currencySecond.value = tempValue;
});
