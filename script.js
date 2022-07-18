var searchInput = document.getElementById('site-search')
var searchInputButton = document.getElementById('searchButton')
var thatOneLineUnderSerach = document.getElementById('oneLine')
var cityHeader = document.getElementById('cityHeader')
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')
var hum = document.getElementById('hum')
var uv  = document.getElementById('uv')

let city = searchInput;







function getApi(event) {

  event.preventDefault();
 
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=29ee67b28b1de671b680c9a9979fe487`;

 

  fetch(queryURL)
  
    .then(function (response) {
      return response.json();
    })
    .then(function (options) {
      // I am getting the lat and lon here as well as setting the city name, date and icon here.
      console.log(options)
      let lat = options.coord.lat;
      let lon = options.coord.lon;
      let icon = options.weather[0].icon;
      let date = new Date;
      cityHeader.innerHTML = `${city.value} (${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}) <img class="ms-2 custom-img-size custom-bg-info rounded-4" src="https://openweathermap.org/img/wn/${icon}@2x.png"></img> `
      // console.log(lat)
      // console.log(lon)
      var moreQueryURLinfo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=29ee67b28b1de671b680c9a9979fe487`;




    //  here i am featching all the other information
      fetch(moreQueryURLinfo)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      // console.log(data);
      let uVcolor = data.current.uvi;
      
      // logic for uv color.
      temp.innerHTML = `Temp: ${data.current.temp}℉`
      wind.innerHTML = `Wind: ${data.current.wind_speed} MPH`
      hum.innerHTML = `Humidity: ${data.current.humidity} %`
      uv.innerHTML =  `UV index: ${uVcolor}`
      if (uVcolor < 3.0) {
        uv.classList.add("bg-success", "text-white", "px-2", "text-start", "mb-0", "rounded" ,"col-2");
    } else if (uVcolor >= 3 && uVcolor < 6) {
        uv.classList.add("bg-warning", "text-black", "px-2", "text-start", "mb-0", "rounded","col-2");
    } else if (uVcolor >= 6 && uVcolor < 8) {
        uv.classList.add("custom-bg-high", "text-black", "px-2", "text-start", "mb-0", "rounded","col-2");
    } else if (uVcolor >= 8 && uVcolor< 11) {
        uv.classList.add("bg-danger", "text-white", "px-2", "text-start", "mb-0", "rounded","col-2");
    } else {
        uv.classList.add("custom-bg-extreme", "text-white", "border", "border-danger", "border-2", "px-2", "text-start", "mb-0", "rounded","col-2");
    }

    // 1st button forcast
    let dailyInfo1 = data.daily[1];
    let dateUnix = dailyInfo1.dt;
    let timestamp = dateUnix * 1000;
    let dateTimestamp = new Date(timestamp)
    let dateBtn1= document.getElementById('dateBtn1');
    dateBtn1.innerHTML = `(${dateTimestamp.getMonth() + 1}/${dateTimestamp.getDate()}/${dateTimestamp.getFullYear()})`

    let imgBtn1 = document.getElementById('imgBtn1');
    // console.log(dailyInfo1.weather[0].icon)
    imgBtn1.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo1.weather[0].icon}@2x.png"></img>  `
     
    let tempBtn1 = document.getElementById('tempBtn1');
    tempBtn1.innerHTML = `Temp: ${dailyInfo1.temp.day}℉`

    let windBtn1 = document.getElementById('windBtn1');
    windBtn1.innerText = `Wind: ${dailyInfo1.wind_speed} MPH`

    let humBtn1 = document.getElementById('humBtn1');
    humBtn1.innerHTML = `Humidity: ${dailyInfo1.humidity} %`





    // 2nd button
    let dailyInfo2 = data.daily[2];
    console.log(data)
    let dateUnix2 = dailyInfo2.dt;
    let timestamp2 = dateUnix2 * 1000;
    let dateTimestamp2 = new Date(timestamp2)
    let dateBtn2 = document.getElementById('dateBtn2');
    dateBtn2.innerHTML = `(${dateTimestamp2.getMonth() + 1}/${dateTimestamp2.getDate()}/${dateTimestamp2.getFullYear()})`

    let imgBtn2 = document.getElementById('imgBtn2');
    imgBtn2.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo2.weather[0].icon}@2x.png"></img>  `

    let tempBtn2 = document.getElementById('tempBtn2');
    tempBtn2.innerHTML = `Temp: ${dailyInfo2.temp.day}℉`

    let windBtn2 = document.getElementById('windBtn2');
    windBtn2.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`

    let humBtn2 = document.getElementById('humBtn2');
    humBtn2.innerHTML = `Humidity: ${dailyInfo2.humidity} %`
     



   // 3rd button
    let dailyInfo3 = data.daily[3];
    let dateUnix3 = dailyInfo3.dt;
    let timestamp3 = dateUnix3 * 1000;
    let dateTimestamp3 = new Date(timestamp3)
    let dateBtn3 = document.getElementById('dateBtn3');
    dateBtn3.innerHTML = `(${dateTimestamp3.getMonth() + 1}/${dateTimestamp3.getDate()}/${dateTimestamp3.getFullYear()})`

    let imgBtn3 = document.getElementById('imgBtn3');
    imgBtn3.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo3.weather[0].icon}@2x.png"></img>  `

    let tempBtn3 = document.getElementById('tempBtn3');
    tempBtn3.innerHTML = `Temp: ${dailyInfo3.temp.day}℉`

    let windBtn3 = document.getElementById('windBtn3');
    windBtn3.innerText = `Wind: ${dailyInfo3.wind_speed} MPH`

    let humBtn3 = document.getElementById('humBtn3');
    humBtn3.innerHTML = `Humidity: ${dailyInfo3.humidity} %`


    
  // 4th
    let dailyInfo4 = data.daily[4];
    let dateUnix4 = dailyInfo4.dt;
    let timestamp4 = dateUnix4 * 1000;
    let dateTimestamp4 = new Date(timestamp4)
    let dateBtn4 = document.getElementById('dateBtn4');
    dateBtn4.innerHTML = `(${dateTimestamp4.getMonth() + 1}/${dateTimestamp4.getDate()}/${dateTimestamp4.getFullYear()})`

    let imgBtn4 = document.getElementById('imgBtn4');
    imgBtn4.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo4.weather[0].icon}@2x.png"></img>  `

    let tempBtn4 = document.getElementById('tempBtn4');
    tempBtn4.innerHTML = `Temp: ${dailyInfo4.temp.day}℉`

    let windBtn4 = document.getElementById('windBtn4');
    windBtn4.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`

    let humBtn4 = document.getElementById('humBtn4');
    humBtn4.innerHTML = `Humidity: ${dailyInfo2.humidity} %`
     
  //  5th
    let dailyInfo5 = data.daily[5];
    let dateUnix5 = dailyInfo5.dt;
    let timestamp5 = dateUnix5 * 1000;
    let dateTimestamp5 = new Date(timestamp5)
    let dateBtn5 = document.getElementById('dateBtn5');
    dateBtn5.innerHTML = `(${dateTimestamp5.getMonth() + 1}/${dateTimestamp5.getDate()}/${dateTimestamp5.getFullYear()})`

    let imgBtn5 = document.getElementById('imgBtn5');
    imgBtn5.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo5.weather[0].icon}@2x.png"></img>  `

    let tempBtn5 = document.getElementById('tempBtn5');
    tempBtn5.innerHTML = `Temp: ${dailyInfo5.temp.day}℉`

    let windBtn5 = document.getElementById('windBtn5');
    windBtn5.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`

    let humBtn5 = document.getElementById('humBtn5');
    humBtn5.innerHTML = `Humidity: ${dailyInfo5.humidity} %`

    })
      })
      showResponse();
     
}


function selectedHistoryBtn(e){

  let selectedHistoryBtn = e.target;
   
  let cityNameBtn = selectedHistoryBtn.innerHTML

  getApi2();

  function getApi2() {

    
   
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameBtn}&appid=29ee67b28b1de671b680c9a9979fe487`;
  
   
  
    fetch(queryURL)
    
      .then(function (response) {
        return response.json();
      })
      .then(function (options) {
        // I am getting the lat and lon here as well as setting the city name, date and icon here.
        // console.log(options)
        let lat = options.coord.lat;
        let lon = options.coord.lon;
        let icon = options.weather[0].icon;
        let date = new Date;
        cityHeader.innerHTML = `${cityNameBtn} (${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}) <img class="ms-2 custom-img-size custom-bg-info rounded-4" src="https://openweathermap.org/img/wn/${icon}@2x.png"></img> `
        console.log(lat)
        console.log(lon)
        var moreQueryURLinfo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=29ee67b28b1de671b680c9a9979fe487`;
  
  
  
  
      //  here i am featching all the other information
        fetch(moreQueryURLinfo)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
        // console.log(data);
        let uVcolor = data.current.uvi;
        
        // logic for uv color.
        temp.innerHTML = `Temp: ${data.current.temp}℉`
        wind.innerHTML = `Wind: ${data.current.wind_speed} MPH`
        hum.innerHTML = `Humidity: ${data.current.humidity} %`
        uv.innerHTML =  `UV index: ${uVcolor}`
        if (uVcolor < 3.0) {
          uv.classList.add("bg-success", "text-white", "px-2", "text-start", "mb-0", "rounded" ,"col-2");
      } else if (uVcolor >= 3 && uVcolor < 6) {
          uv.classList.add("bg-warning", "text-black", "px-2", "text-start", "mb-0", "rounded","col-2");
      } else if (uVcolor >= 6 && uVcolor < 8) {
          uv.classList.add("custom-bg-high", "text-black", "px-2", "text-start", "mb-0", "rounded","col-2");
      } else if (uVcolor >= 8 && uVcolor< 11) {
          uv.classList.add("bg-danger", "text-white", "px-2", "text-start", "mb-0", "rounded","col-2");
      } else {
          uv.classList.add("custom-bg-extreme", "text-white", "border", "border-danger", "border-2", "px-2", "text-start", "mb-0", "rounded","col-2");
      }
  
      // 1st button forcast
      let dailyInfo1 = data.daily[1];
      let dateUnix = dailyInfo1.dt;
      let timestamp = dateUnix * 1000;
      let dateTimestamp = new Date(timestamp)
      let dateBtn1= document.getElementById('dateBtn1');
      dateBtn1.innerHTML = `(${dateTimestamp.getMonth() + 1}/${dateTimestamp.getDate()}/${dateTimestamp.getFullYear()})`
  
      let imgBtn1 = document.getElementById('imgBtn1');
      console.log(dailyInfo1.weather[0].icon)
      imgBtn1.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo1.weather[0].icon}@2x.png"></img>  `
       
      let tempBtn1 = document.getElementById('tempBtn1');
      tempBtn1.innerHTML = `Temp: ${dailyInfo1.temp.day}℉`
  
      let windBtn1 = document.getElementById('windBtn1');
      windBtn1.innerText = `Wind: ${dailyInfo1.wind_speed} MPH`
  
      let humBtn1 = document.getElementById('humBtn1');
      humBtn1.innerHTML = `Humidity: ${dailyInfo1.humidity} %`
  
  
  
  
  
      // 2nd button
      let dailyInfo2 = data.daily[2];
      let dateUnix2 = dailyInfo2.dt;
      let timestamp2 = dateUnix2 * 1000;
      let dateTimestamp2 = new Date(timestamp2)
      let dateBtn2 = document.getElementById('dateBtn2');
      dateBtn2.innerHTML = `(${dateTimestamp2.getMonth() + 1}/${dateTimestamp2.getDate()}/${dateTimestamp2.getFullYear()})`
  
      let imgBtn2 = document.getElementById('imgBtn2');
      imgBtn2.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo2.weather[0].icon}@2x.png"></img>  `
  
      let tempBtn2 = document.getElementById('tempBtn2');
      tempBtn2.innerHTML = `Temp: ${dailyInfo2.temp.day}℉`
  
      let windBtn2 = document.getElementById('windBtn2');
      windBtn2.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`
  
      let humBtn2 = document.getElementById('humBtn2');
      humBtn2.innerHTML = `Humidity: ${dailyInfo2.humidity} %`
       
  
  
  
     // 3rd button
      let dailyInfo3 = data.daily[3];
      let dateUnix3 = dailyInfo3.dt;
      let timestamp3 = dateUnix3 * 1000;
      let dateTimestamp3 = new Date(timestamp3)
      let dateBtn3 = document.getElementById('dateBtn3');
      dateBtn3.innerHTML = `(${dateTimestamp3.getMonth() + 1}/${dateTimestamp3.getDate()}/${dateTimestamp3.getFullYear()})`
  
      let imgBtn3 = document.getElementById('imgBtn3');
      imgBtn3.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo3.weather[0].icon}@2x.png"></img>  `
  
      let tempBtn3 = document.getElementById('tempBtn3');
      tempBtn3.innerHTML = `Temp: ${dailyInfo3.temp.day}℉`
  
      let windBtn3 = document.getElementById('windBtn3');
      windBtn3.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`
  
      let humBtn3 = document.getElementById('humBtn3');
      humBtn3.innerHTML = `Humidity: ${dailyInfo3.humidity} %`
  
  
      
    // 4th
      let dailyInfo4 = data.daily[4];
      let dateUnix4 = dailyInfo4.dt;
      let timestamp4 = dateUnix4 * 1000;
      let dateTimestamp4 = new Date(timestamp4)
      let dateBtn4 = document.getElementById('dateBtn4');
      dateBtn4.innerHTML = `(${dateTimestamp4.getMonth() + 1}/${dateTimestamp4.getDate()}/${dateTimestamp4.getFullYear()})`
  
      let imgBtn4 = document.getElementById('imgBtn4');
      imgBtn4.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo4.weather[0].icon}@2x.png"></img>  `
  
      let tempBtn4 = document.getElementById('tempBtn4');
      tempBtn4.innerHTML = `Temp: ${dailyInfo4.temp.day}℉`
  
      let windBtn4 = document.getElementById('windBtn4');
      windBtn4.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`
  
      let humBtn4 = document.getElementById('humBtn4');
      humBtn4.innerHTML = `Humidity: ${dailyInfo2.humidity} %`
       
    //  5th
      let dailyInfo5 = data.daily[5];
      let dateUnix5 = dailyInfo5.dt;
      let timestamp5 = dateUnix5 * 1000;
      let dateTimestamp5 = new Date(timestamp5)
      let dateBtn5 = document.getElementById('dateBtn5');
      dateBtn5.innerHTML = `(${dateTimestamp5.getMonth() + 1}/${dateTimestamp5.getDate()}/${dateTimestamp5.getFullYear()})`
  
      let imgBtn5 = document.getElementById('imgBtn5');
      imgBtn5.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dailyInfo5.weather[0].icon}@2x.png"></img>  `
  
      let tempBtn5 = document.getElementById('tempBtn5');
      tempBtn5.innerHTML = `Temp: ${dailyInfo5.temp.day}℉`
  
      let windBtn5 = document.getElementById('windBtn5');
      windBtn5.innerText = `Wind: ${dailyInfo2.wind_speed} MPH`
  
      let humBtn5 = document.getElementById('humBtn5');
      humBtn5.innerHTML = `Humidity: ${dailyInfo5.humidity} %`
  
      })
        })
        showResponse();
  }
  
  

  console.log("ive been tickeled");
  
  console.log(cityNameBtn);
  


}






// pulling city from input
function showResponse() {
  localStorage.setItem(`${city.value}`,'city');
  console.log(city.value)
  }


  //  Setting history
function renderLastRegistered() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage[key]
  let button = document.createElement('button');
  button.textContent = key;
  button.classList.add('buttonStyle');
  button.classList.add('history');
  thatOneLineUnderSerach.appendChild(button);

}
}
  

renderLastRegistered();

searchInputButton.addEventListener("click", getApi);

thatOneLineUnderSerach.addEventListener("click", selectedHistoryBtn);