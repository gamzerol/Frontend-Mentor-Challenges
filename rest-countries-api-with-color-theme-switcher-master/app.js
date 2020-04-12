$(document).ready(function () {
  $(".header-mode").click(function () {
    $("body").toggleClass("dark");
    $(".fa-moon").toggleClass("icon-dark");
    $(".header").toggleClass("element-background");
    $(".filter-name").toggleClass("element-background");
    $(".filter-country").toggleClass("element-background");
    $(".card").each(function () {
      $(this).toggleClass("element-background");
    });
  });
  let selectedRegion = $("select option:selected").html();
  getCountries(selectedRegion)
    .then((data) => render(data))
    .then((error) => console.log(error));
});
async function getCountries(region) {
  let response = await fetch(
    `https://restcountries.eu/rest/v2/region/${region}`
  );
  let data = await response.json();
  return data;
}
async function searchName(name) {
  let response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  let data = await response.json();
  return data;
}
$("select").change(function () {
  let selectedRegion = $("select option:selected").html();
  getCountries(selectedRegion)
    .then((data) => render(data))
    .then((error) => console.log(error));
});
$(".filter-name").keypress(function (event) {
  let keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    let deneme = $(this).val();
    searchName(deneme)
      .then((country) => {
        $(".section").html("");
        let { arr } = { arr: country[0] };
        let result = `<div class="card">
                            <img src="${arr.flag}" class="card-img">
                            <div class="card-info">
                                <h4 id="name">${arr.name}</h4>
                                <p>Population: <span class="popu">${arr.population}</span></p>
                                <p>Region: <span class="region">${arr.region}</span></p>
                                <p>Capital: <span class="capital">${arr.capital}</span></p>
                            </div>
                        </div>`;
        $(".section").append(result);
        $(this).val("");
      })
      .then((error) => console.log(error));
  }
});

function render(data) {
  let list = "";
  $(".section").html("");
  data.forEach((country) => {
    list += `<div class="card">
            <img src="${country.flag}" class="card-img">
            <div class="card-info">
                <h4 id="name">${country.name}</h4>
                <p>Population: <span class="popu">${country.population}</span></p>
                <p>Region: <span class="region">${country.region}</span></p>
                <p>Capital: <span class="capital">${country.capital}</span></p>
            </div>
        </div>`;
  });
  $(".section").append(list);
}
