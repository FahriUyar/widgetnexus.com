// JSON verisini buraya ekleyin veya bir dosyadan çekin
$(document).ready(function () {
    const cities = {
        "Header": {
            "StatusCode": "APIGW000000",
            "StatusDescription": "Completed",
            "ObjectID": "5769340a-6950-4860-82b1-6c254262705f"
        },
        "Data": {
            "City": [
                { "CityCode": "0", "CityName": "Select a City..." },
                { "CityCode": "1", "CityName": "Adana" },
                { "CityCode": "2", "CityName": "Adıyaman" },
                { "CityCode": "3", "CityName": "Afyonkarahisar" },
                { "CityCode": "4", "CityName": "Ağrı" },
                { "CityCode": "5", "CityName": "Amasya" },
                { "CityCode": "6", "CityName": "Ankara" },
                { "CityCode": "7", "CityName": "Antalya" },
                { "CityCode": "8", "CityName": "Artvin" },
                { "CityCode": "9", "CityName": "Aydın" },
                { "CityCode": "10", "CityName": "Balıkesir" },
                { "CityCode": "11", "CityName": "Bilecik" },
                { "CityCode": "12", "CityName": "Bingöl" },
                { "CityCode": "13", "CityName": "Bitlis" },
                { "CityCode": "14", "CityName": "Bolu" },
                { "CityCode": "15", "CityName": "Burdur" },
                { "CityCode": "16", "CityName": "Bursa" },
                { "CityCode": "17", "CityName": "Çanakkale" },
                { "CityCode": "18", "CityName": "Çankırı" },
                { "CityCode": "19", "CityName": "Çorum" },
                { "CityCode": "20", "CityName": "Denizli" },
                { "CityCode": "21", "CityName": "Diyarbakır" },
                { "CityCode": "22", "CityName": "Edirne" },
                { "CityCode": "23", "CityName": "Elazığ" },
                { "CityCode": "24", "CityName": "Erzincan" },
                { "CityCode": "25", "CityName": "Erzurum" },
                { "CityCode": "26", "CityName": "Eskişehir" },
                { "CityCode": "27", "CityName": "Gaziantep" },
                { "CityCode": "28", "CityName": "Giresun" },
                { "CityCode": "29", "CityName": "Gümüşhane" },
                { "CityCode": "30", "CityName": "Hakkari" },
                { "CityCode": "31", "CityName": "Hatay" },
                { "CityCode": "32", "CityName": "Isparta" },
                { "CityCode": "33", "CityName": "Mersin" },
                { "CityCode": "34", "CityName": "İstanbul" },
                { "CityCode": "35", "CityName": "İzmir" },
                { "CityCode": "36", "CityName": "Kars" },
                { "CityCode": "37", "CityName": "Kastamonu" },
                { "CityCode": "38", "CityName": "Kayseri" },
                { "CityCode": "39", "CityName": "Kırklareli" },
                { "CityCode": "40", "CityName": "Kırşehir" },
                { "CityCode": "41", "CityName": "Kocaeli" },
                { "CityCode": "42", "CityName": "Konya" },
                { "CityCode": "43", "CityName": "Kütahya" },
                { "CityCode": "44", "CityName": "Malatya" },
                { "CityCode": "45", "CityName": "Manisa" },
                { "CityCode": "46", "CityName": "Kahramanmaraş" },
                { "CityCode": "47", "CityName": "Mardin" },
                { "CityCode": "48", "CityName": "Muğla" },
                { "CityCode": "49", "CityName": "Muş" },
                { "CityCode": "50", "CityName": "Nevşehir" },
                { "CityCode": "51", "CityName": "Niğde" },
                { "CityCode": "52", "CityName": "Ordu" },
                { "CityCode": "53", "CityName": "Rize" },
                { "CityCode": "54", "CityName": "Sakarya" },
                { "CityCode": "55", "CityName": "Samsun" },
                { "CityCode": "56", "CityName": "Siirt" },
                { "CityCode": "57", "CityName": "Sinop" },
                { "CityCode": "58", "CityName": "Sivas" },
                { "CityCode": "59", "CityName": "Tekirdağ" },
                { "CityCode": "60", "CityName": "Tokat" },
                { "CityCode": "61", "CityName": "Trabzon" },
                { "CityCode": "62", "CityName": "Tunceli" },
                { "CityCode": "63", "CityName": "Şanlıurfa" },
                { "CityCode": "64", "CityName": "Uşak" },
                { "CityCode": "65", "CityName": "Van" },
                { "CityCode": "66", "CityName": "Yozgat" },
                { "CityCode": "67", "CityName": "Zonguldak" },
                { "CityCode": "68", "CityName": "Aksaray" },
                { "CityCode": "69", "CityName": "Bayburt" },
                { "CityCode": "70", "CityName": "Karaman" },
                { "CityCode": "71", "CityName": "Kırıkkale" },
                { "CityCode": "72", "CityName": "Batman" },
                { "CityCode": "73", "CityName": "Şırnak" },
                { "CityCode": "74", "CityName": "Bartın" },
                { "CityCode": "75", "CityName": "Ardahan" },
                { "CityCode": "76", "CityName": "Iğdır" },
                { "CityCode": "77", "CityName": "Yalova" },
                { "CityCode": "78", "CityName": "Karabük" },
                { "CityCode": "79", "CityName": "Kilis" },
                { "CityCode": "80", "CityName": "Osmaniye" },
                { "CityCode": "81", "CityName": "Düzce" }
            ]
        }
    }

    // select elementine şehirleri eklemek
    let citySelect = $('#citySelect');

    cities.Data.City.forEach(function (city) {
        citySelect.append(new Option(city.CityName, city.CityCode));
    });

    // Select2'yi initialize et
    citySelect.select2({
        placeholder: "Select a city",
        allowClear: true,
    });

    const cityCodeToName = {};
    cities.Data.City.forEach(city => {
        cityCodeToName[city.CityCode] = city.CityName;
    });

    // Seçim değiştiğinde çalışacak fonksiyon
    $('#citySelect').on('change', function () {
        let selectedCityCode = $(this).val(); // Seçilen şehir kodu
        let selectedCityName = cityCodeToName[selectedCityCode]; // Şehir adını bul
        console.log(selectedCityName); // Şehir adını konsola yazdır

        // Fonksiyonları çağırıyoruz
        handleSelectionChange(selectedCityName);

    });
});

// Weather Forecast Begin

const apiKey = "04398e01d379171581fc740051cdcf53";

const form = document.getElementById('form');
const selectMenu = document.getElementById('cityInput');

// Data Box
const temperature = document.getElementById('temp');
const feelsLike = document.getElementById('sensedTemp');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const description = document.getElementById('description');
const iconDiv = document.getElementById('icon');


// Table Element

const hour1 = document.getElementById('hour1');
const temp1 = document.getElementById('temp1');
const sensedTemp1 = document.getElementById('sensedTemp1');
const humidity1 = document.getElementById('humidity1');


function handleSelectionChange(selectedCityName) {

    // Fonksiyonları çağırıyoruz
    getWeatherCurrent(selectedCityName);
    getWeatherDaily(selectedCityName);

    // Görünürlük ayarları
    const displayDiv = document.getElementById('dispNone');
    displayDiv.classList.remove('d-none');
    const dailyWeatherContent = document.getElementById('dailyWeatherContent');
    dailyWeatherContent.classList.remove('d-none');
}

// Event listener ekliyoruz
document.getElementById('citySelect').addEventListener('change', handleSelectionChange);


async function getWeatherCurrent(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},{TR}&appid=${apiKey}`);


    const data = await response.json();

    upperCase = data.weather[0].description;
    newText = upperCase.toUpperCase();
    description.textContent = newText;
    const icon = data.weather[0].icon;
    iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" height= 80px>`;
    temperature.textContent = `${Math.round((data.main.temp) - 273.15)}°C`;
    feelsLike.textContent = `${Math.round((data.main.feels_like) - 273.15)}°C`;
    humidity.textContent = `${Math.round((data.main.humidity))}%`;
    wind.textContent = `${Math.round((data.wind.speed))}m/s`;
}


async function getWeatherDaily(cityName) {
    try {
        const daily = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
        const dailyData = await daily.json();

        console.log(dailyData);

        const weatherBody = document.getElementById('weatherBody');
        weatherBody.innerHTML = ''; // Önceki verileri temizle

        // Tablo başlıklarını oluşturuyoruz
        const headerRow = document.createElement('tr');

        const dateHeader = document.createElement('th');
        dateHeader.textContent = "Date & Time";
        headerRow.appendChild(dateHeader);

        const iconHeader = document.createElement('th');
        iconHeader.textContent = "Expected Weather";
        headerRow.appendChild(iconHeader);

        const tempHeader = document.createElement('th');
        tempHeader.textContent = "Temperature (°C)";
        headerRow.appendChild(tempHeader);

        const sensedTempHeader = document.createElement('th');
        sensedTempHeader.textContent = "Sensed Temperature (°C)";
        headerRow.appendChild(sensedTempHeader);

        const humidityHeader = document.createElement('th');
        humidityHeader.textContent = "Humidity (%)";
        headerRow.appendChild(humidityHeader);

        // Başlıkları tabloya ekliyoruz
        weatherBody.appendChild(headerRow);

        // Her veri için bir satır oluşturuyoruz
        for (let i = 0; i < 28; i++) {
            const weatherItem = dailyData.list[i];

            const row = document.createElement('tr');

            // Tarih & Zaman
            const dateCell = document.createElement('td');
            dateCell.textContent = formatDateTime(weatherItem.dt_txt);
            row.appendChild(dateCell);

            // Hava durumu ikonu
            const iconCell = document.createElement('td');
            const iconImg = document.createElement('img');
            iconImg.src = `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`;
            iconImg.alt = 'Weather icon';
            iconCell.appendChild(iconImg);
            row.appendChild(iconCell);

            // Sıcaklık
            const tempCell = document.createElement('td');
            tempCell.textContent = Math.round(weatherItem.main.temp - 273.15);
            row.appendChild(tempCell);

            // Hissedilen sıcaklık
            const sensedTempCell = document.createElement('td');
            sensedTempCell.textContent = Math.round(weatherItem.main.feels_like - 273.15);
            row.appendChild(sensedTempCell);

            // Nem
            const humidityCell = document.createElement('td');
            humidityCell.textContent = weatherItem.main.humidity;
            row.appendChild(humidityCell);

            // Satırı tabloya ekliyoruz
            weatherBody.appendChild(row);
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


// Date Format 

function formatDateTime(dateTimeString) {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dateTime = new Date(dateTimeString);

    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}.${minutes}`;

    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const year = dateTime.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const dayOfWeek = daysOfWeek[dateTime.getDay()];

    return `${dayOfWeek} ${formattedDate} ${formattedTime}`;
}


// Weather Forecast End