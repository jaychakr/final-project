const formEl = document.getElementById("dogs-form");
const breedEl = document.getElementById("breed");
const typeEl = document.getElementById("type");
const allBreeds = Object.keys(listAllBreeds.message);
const errors = document.getElementsByClassName("error");

allBreeds.forEach((breed) => {
  const option = document.createElement("option");
  option.value = breed;
  option.textContent = breed[0].toUpperCase() + breed.slice(1);
  breedEl.append(option);
});

breedEl.addEventListener("change", function (e) {
  const breed = breedEl.value;
  const types = listAllBreeds.message[breed];
  typeEl.innerHTML =
    '<option value="" disabled selected>Please select a type</option>';
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type[0].toUpperCase() + type.slice(1);
    typeEl.append(option);
  });
});

const fetchDogs = (breed, type) => {
  console.log(breed);
  const BASE_URL = "https://dog.ceo/api/breed/hound/afghan/images/random";
  let url = "https://dog.ceo/api/breed/";
  if (breed.length) {
    url += breed + "/";
    localStorage.setItem("breed", breedEl.value);
    localStorage.setItem("sub-breed", "");
  }
  if (type.length) {
    url += type + "/";
    localStorage.setItem("sub-breed", typeEl.value);
  }
  url += "images/random";
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      let dogsContainer = document.getElementById("dogs-container");
      dogsContainer.innerHTML = "";
      const img = document.createElement("img");
      img.setAttribute("src", responseJson.message);
      img.setAttribute("height", "417px");
      dogsContainer.appendChild(img);
    });
};

localBreed = localStorage.getItem('breed');
localType = localStorage.getItem('sub-breed');
if (!localType) {
  localType = "";
}
if (localBreed) {
  fetchDogs(localBreed, localType);
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validateBreed(breedEl, errors[0]) &&
    (listAllBreeds.message[breedEl.value].length === 0 ||
      validateSubBreed(typeEl, errors[1]))
  ) {
    fetchDogs(breedEl.value, typeEl.value);
  }
});

breedEl.addEventListener("change", function(e) {
  validateBreed(breedEl, errors[0]);
})

typeEl.addEventListener("change", function(e) {
  validateBreed(typeEl, errors[1]);
})

