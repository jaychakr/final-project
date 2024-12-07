describe("Testing form validation functions", () => {
  it("validateBreed should return false if a breed is not selected from the drop-down list", () => {
    const div = document.createElement("div");
    div.classList.add("form-group");
    const label = document.createElement("label");
    label.setAttribute("for", "breed");
    div.append(label);
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.value = "Breed #1";
    option.textContent = "Breed #1";
    select.append(option);
    div.append(select);
    const error = document.createElement("small");
    error.classList.add("error");
    div.append(error);
    select.value = "";
    const result = validateBreed(select, error);
    expect(result).toBeFalsy();
  });
  it("validateBreed should return true if a breed is selected from the drop-down list", () => {
    const div = document.createElement("div");
    div.classList.add("form-group");
    const label = document.createElement("label");
    label.setAttribute("for", "breed");
    div.append(label);
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.value = "Breed #1";
    option.textContent = "Breed #1";
    select.append(option);
    div.append(select);
    const error = document.createElement("small");
    error.classList.add("error");
    div.append(error);
    const result = validateBreed(select, error);
    expect(result).toBeTruthy();
  });
  it("validateSubBreed should return false if a sub-breed is not selected from the drop-down list", () => {
    const div = document.createElement("div");
    div.classList.add("form-group");
    const label = document.createElement("label");
    label.setAttribute("for", "breed");
    div.append(label);
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.value = "Sub-breed #1";
    option.textContent = "Sub-breed #1";
    select.append(option);
    div.append(select);
    const error = document.createElement("small");
    error.classList.add("error");
    div.append(error);
    select.value = "";
    const result = validateSubBreed(select, error);
    expect(result).toBeFalsy();
  });
  it("validateSubBreed should return true if a sub-breed is selected from the drop-down list", () => {
    const div = document.createElement("div");
    div.classList.add("form-group");
    const label = document.createElement("label");
    label.setAttribute("for", "breed");
    div.append(label);
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.value = "Sub-breed #1";
    option.textContent = "Sub-breed #1";
    select.append(option);
    div.append(select);
    const error = document.createElement("small");
    error.classList.add("error");
    div.append(error);
    const result = validateSubBreed(select, error);
    expect(result).toBeTruthy();
  });
});