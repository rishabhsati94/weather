const api = `2ff627eb62a19b431b5692d8a90b39f1`;

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', async(e)=>{
    e.preventDefault();
    let cityName = document.getElementById('cityName');         //search bar pick value
    let city_Name = document.getElementById('city_Name');       // Msg Bar

    let cityVal = cityName.value;

    let data_hide = document.querySelector('.middleLayer');

    if (cityVal === "") {
        city_Name.innerHTML = `Please Write the Name Before Search`;
        data_hide.classList.add('data_hide');
    }

    else {

        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${api}`;
            const response = await fetch(url);
            let data = await response.json();
            let arrData = [data];

            let temperature = arrData[0].main.temp;
            let cel = temperature - 273.15;
            let convCel = cel.toFixed(2);
            let temp_real = document.getElementById('temp_real');
            temp_real.innerText = convCel;

            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;


            let temp_status = document.getElementById('temp_status');
            let weatherStatus = arrData[0].weather[0].main;
            console.log(weatherStatus)


            //condition to check sunny or cloudy

            if (weatherStatus === "Clear") {
                temp_status.innerHTML =
                    "<i class ='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (weatherStatus === "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (weatherStatus === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#eccc68;'></i>";
            }

            //Removing data_hide Class
            data_hide.classList.remove('data_hide');

        } catch {
            city_Name.innerHTML = `Please Enter The Correct City`;
            data_hide.classList.add('data_hide');
        }

    }

});




let today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = document.getElementById('day');
day.innerHTML = days[today.getDay()];

let todaydate = document.getElementById('todaydate');
todaydate.innerHTML = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;








