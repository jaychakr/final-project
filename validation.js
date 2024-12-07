const validateBreed = (breedEl, error) => {
  if (breedEl.value !== "") {
    breedEl.parentElement.classList.remove("invalid");
    error.textContent = "";
    return true;
  } else {
    breedEl.parentElement.classList.add("invalid");
    error.textContent = "Please select a breed!";
    return false;
  }
};

const validateSubBreed = (typeEl, error) => {
  if (typeEl.value !== "") {
    typeEl.parentElement.classList.remove("invalid");
    error.textContent = "";
    return true;
  } else {
    typeEl.parentElement.classList.add("invalid");
    error.textContent = "Please select a subtype!";
    return false;
  }
};
